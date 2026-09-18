#!/usr/bin/env python3
"""Small dependency-free SEO regression checker for static sites and source-configured frameworks."""
from __future__ import annotations

import argparse
import json
import re
import sys
from pathlib import Path
from urllib.parse import urljoin, urlparse
import xml.etree.ElementTree as ET


def fail(message: str, errors: list[str]) -> None:
    errors.append(message)
    print(f"ERROR: {message}")


def warn(message: str, warnings: list[str]) -> None:
    warnings.append(message)
    print(f"WARNING: {message}")


def normalized_url(site_url: str, route: str) -> str:
    base = site_url.rstrip("/") + "/"
    path = route if route.startswith("/") else "/" + route
    if path == "/index.html":
        path = "/"
    elif path.endswith("/index.html"):
        path = path[:-10] or "/"
    return urljoin(base, path.lstrip("/"))


def extract_tag(text: str, pattern: str) -> str | None:
    match = re.search(pattern, text, re.I | re.S)
    return match.group(1).strip() if match else None


def route_parts(item: str | dict) -> tuple[str, str]:
    if isinstance(item, str):
        return item, item
    return item["url"], item["file"]


def audit_static(config: dict, root: Path, errors: list[str], warnings: list[str]) -> None:
    html_root = root / config.get("htmlRoot", ".")
    routes = config.get("routes", [])
    excluded = set(config.get("excludedRoutes", []))
    site_url = config["siteUrl"].rstrip("/")
    for item in routes:
        route, file_route = route_parts(item)
        if route in excluded:
            continue
        relative = file_route.lstrip("/") or "index.html"
        if relative.endswith("/"):
            relative += "index.html"
        path = html_root / relative
        if not path.exists():
            fail(f"configured route is missing: {route} ({path})", errors)
            continue
        text = path.read_text(encoding="utf-8", errors="replace")
        if not re.search(r"<title>\s*[^<]+\s*</title>", text, re.I):
            fail(f"missing <title> in {route}", errors)
        description = extract_tag(text, r'<meta[^>]+name=["\']description["\'][^>]+content=["\']([^"\']+)')
        if not description:
            fail(f"missing meta description in {route}", errors)
        canonical = extract_tag(text, r'<link[^>]+rel=["\']canonical["\'][^>]+href=["\']([^"\']+)')
        if not canonical:
            fail(f"missing canonical URL in {route}", errors)
        elif canonical.rstrip("/") != normalized_url(site_url, route).rstrip("/"):
            fail(f"canonical mismatch in {route}: {canonical} != {normalized_url(site_url, route)}", errors)
        if config.get("requireOpenGraph", False):
            for prop in ("og:title", "og:description", "og:image"):
                if not re.search(rf'(?:property|name)=["\']{re.escape(prop)}["\']', text, re.I):
                    fail(f"missing {prop} in {route}", errors)
        if config.get("requireJsonLd", False) and "application/ld+json" not in text:
            warn(f"no JSON-LD found in {route}", warnings)

    robots = root / config.get("robotsPath", "robots.txt")
    sitemap = root / config.get("sitemapPath", "sitemap.xml")
    if not robots.exists():
        fail(f"robots file missing: {robots}", errors)
    else:
        robots_text = robots.read_text(encoding="utf-8", errors="replace")
        expected_sitemap = f"Sitemap: {site_url}/sitemap.xml"
        if expected_sitemap not in robots_text:
            fail(f"robots.txt does not declare {expected_sitemap}", errors)
    if not sitemap.exists():
        fail(f"sitemap file missing: {sitemap}", errors)
    else:
        try:
            root_xml = ET.parse(sitemap).getroot()
            locs = {el.text.strip() for el in root_xml.iter() if el.tag.rsplit("}", 1)[-1] == "loc" and el.text}
        except ET.ParseError as exc:
            fail(f"invalid sitemap XML: {exc}", errors)
            locs = set()
        for item in routes:
            route, _file_route = route_parts(item)
            if route in excluded:
                continue
            expected = normalized_url(site_url, route).rstrip("/")
            if not any(x.rstrip("/") == expected for x in locs):
                fail(f"indexable route missing from sitemap: {route}", errors)
        for loc in sorted(locs):
            if not loc.startswith(site_url + "/") and loc != site_url:
                fail(f"sitemap contains off-domain URL: {loc}", errors)
        for route in excluded:
            expected = normalized_url(site_url, route).rstrip("/")
            if any(x.rstrip("/") == expected for x in locs):
                fail(f"excluded route is present in sitemap: {route}", errors)


def audit_source(config: dict, root: Path, errors: list[str], warnings: list[str]) -> None:
    site_url = config["siteUrl"].rstrip("/")
    for item in config.get("sourceChecks", []):
        path = root / item["file"]
        if not path.exists():
            fail(f"source SEO file missing: {item['file']}", errors)
            continue
        text = path.read_text(encoding="utf-8", errors="replace")
        for marker in item.get("contains", []):
            if marker not in text:
                fail(f"{item['file']} does not contain required marker: {marker}", errors)
        if item.get("siteUrlMarker") and site_url not in text:
            fail(f"{item['file']} does not contain configured siteUrl {site_url}", errors)
    for path_text in config.get("forbiddenSourceFiles", []):
        if (root / path_text).exists():
            warn(f"forbidden source file exists; verify it is intentional: {path_text}", warnings)


def main() -> int:
    parser = argparse.ArgumentParser()
    parser.add_argument("--config", required=True)
    args = parser.parse_args()
    config_path = Path(args.config)
    root = config_path.parent.resolve()
    config = json.loads(config_path.read_text(encoding="utf-8"))
    errors: list[str] = []
    warnings: list[str] = []
    if not config.get("siteUrl", "").startswith("https://"):
        fail("siteUrl must be an HTTPS URL", errors)
    framework = config.get("framework", "static")
    if framework == "static":
        audit_static(config, root, errors, warnings)
    elif framework in {"next", "source"}:
        audit_source(config, root, errors, warnings)
    else:
        fail(f"unknown framework mode: {framework}", errors)
    print(f"Summary: {len(errors)} error(s), {len(warnings)} warning(s)")
    return 1 if errors else 0


if __name__ == "__main__":
    raise SystemExit(main())

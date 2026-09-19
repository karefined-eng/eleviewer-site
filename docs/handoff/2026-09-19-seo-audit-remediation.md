# 2026-09-19 — SEO & Lighthouse Audit Remediation

## Executive Summary
Remediated all 16 audit categories flagged in the SEOmator and Lighthouse audit report for `eleviewer.vercel.app`, resolving warnings and errors across Core SEO, Structured Data, External Links Security, Header Hardening, AI/GEO Discoverability, Accessibility, and E-E-A-T trust signals.

## Changes Implemented

### 1. Core SEO (Single H1 Tag)
- **Problem**: SEOmator flagged 2 H1 tags (`Open your course files...` and `Mitochondrion`).
- **Fix**: The embedded mockup browser in `src/features/demo-browser/components/split-screen-demo.tsx` had an `<h1>Mitochondrion</h1>`. Replaced it with `<div role="heading" aria-level={3} className="...">` to leave exactly one semantic `<h1>` tag on the homepage.

### 2. Structured Data Schema (`@type` Missing)
- **Problem**: `components/structured-data.tsx` bundled schemas into an ambient `@graph` array without a top-level `@type`.
- **Fix**: Split the schema into two explicit `<script type="application/ld+json">` elements:
  1. `SoftwareApplication` with explicit `@context` and `@type`.
  2. `WebSite` with explicit `@context` and `@type`.

### 3. Links & Anchor Text
- **Problem**:
  - Header GitHub button had no DOM text node, triggering an empty anchor text warning.
  - 12+ external links used `rel="noreferrer"` without `rel="noopener"`.
- **Fix**:
  - Added `<span className="sr-only">EleViewer on GitHub</span>` inside the nav icon anchor in `components/site-header.tsx`.
  - Standardized all external links across `components/site-header.tsx`, `components/site-footer.tsx`, `components/hero.tsx`, `components/trust-bar.tsx`, `components/open-source.tsx`, `components/download-cta.tsx`, `app/privacy/page.tsx`, `app/download/page.tsx`, `app/docs/page.tsx`, `app/review/page.tsx`, and `app/updates/[version]/page.tsx` to use `rel="noopener noreferrer"`.

### 4. Security & Network Headers
- **Problem**: No Content Security Policy; HSTS missing `includeSubDomains` and `preload`.
- **Fix**: Updated `next.config.mjs`:
  - Upgraded HSTS: `Strict-Transport-Security: max-age=63072000; includeSubDomains; preload`.
  - Added `Content-Security-Policy`: scoped for self, Vercel insights/analytics, and inline styling.
  - Added `Cross-Origin-Opener-Policy: same-origin`.

### 5. AI / GEO Discoverability
- **Problem**: `public/llms.txt` existed but had no `<link>` reference in the HTML head or footer.
- **Fix**:
  - Added `types: { "text/markdown": [{ url: "/llms.txt", title: "LLM Content" }] }` to `app/layout.tsx` alternates metadata.
  - Added direct link to `llms.txt` in `components/site-footer.tsx`.

### 6. Accessibility (Focus Indicators)
- **Problem**: Elements removing focus outline without a fallback.
- **Fix**: Added global `:focus-visible` outline in `app/globals.css` (`outline: 2px solid var(--accent); outline-offset: 2px;`).

### 7. E-E-A-T Pages & Trust Signals
- **Problem**: Missing About page, Terms of Service, author background, and transparent licensing/contact paths.
- **Fix**:
  - Created `app/about/page.tsx` detailing creator background (`karefined-eng`), the student-first origin story, offline architecture values, editorial standards, and contact channels.
  - Created `app/terms/page.tsx` documenting GPLv3 licensing, warranty disclaimers, and permitted educational use.
  - Added both routes to `app/sitemap.ts` and `components/site-footer.tsx`.

## Verification
- `npm run build` completed with 0 errors.
- 58 static pages generated cleanly.

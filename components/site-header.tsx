"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Download, X, ExternalLink } from "lucide-react"
import { Logo } from "./logo"
import { GitHubIcon } from "./github-icon"
import { MenuIcon } from "./menu-icon"
import { ThemeToggle } from "./theme-toggle"
import { GITHUB_URL, DOWNLOAD_URL } from "@/lib/links"

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("no-scroll")
    } else {
      document.body.classList.remove("no-scroll")
    }
  }, [isMenuOpen])

  const getLinkClass = (path: string) => {
    const isActive = pathname === path || (path === "/docs" && pathname?.startsWith("/docs"))
    return `transition-colors ${
      isActive
        ? "text-accent font-semibold"
        : "text-muted-foreground hover:text-foreground"
    }`
  }

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-5">
        <Link href="/" aria-label="EleViewer home">
          <Logo />
        </Link>
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-6 text-sm font-medium md:flex"
        >
          <Link href="/docs" className={getLinkClass("/docs")}>
            Docs
          </Link>
          <Link href="/demo" className={getLinkClass("/demo")}>
            Live Demo
          </Link>
          <Link href="/review" className={getLinkClass("/review")}>
            Feedback Hub
          </Link>
          <a
            href="/#features"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Features
          </a>
          <a
            href="/#shortcuts"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Shortcuts
          </a>
          <a
            href="/#open-source"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            Open Source
          </a>
          <a
            href="/#faq"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            FAQ
          </a>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="flex h-8 items-center gap-1.5 rounded-md text-muted-foreground transition-colors hover:bg-panel hover:text-foreground"
            aria-label="EleViewer on GitHub"
          >
            <GitHubIcon className="h-4 w-4" />
            <ExternalLink className="ml-1 h-3 w-3" />
          </a>
          <Link
            href="/download"
            className={`flex h-8 items-center gap-1.5 rounded-md px-3 text-[13px] font-medium transition-opacity hover:opacity-90 ${
              pathname === "/download"
                ? "bg-accent text-accent-foreground font-semibold"
                : "bg-primary text-primary-foreground"
            }`}
          >
            <Download className="h-3.5 w-3.5" />
            Download
          </Link>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground transition-colors hover:bg-panel hover:text-foreground md:hidden"
            onClick={() => setIsMenuOpen(true)}
            aria-label="Open menu"
          >
            <MenuIcon className="h-5 w-5" />
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] h-screen w-screen bg-background overflow-y-auto">
          <div className="mx-auto max-w-5xl px-5">
            <div className="flex h-14 items-center justify-between">
              <Link
                href="/"
                aria-label="EleViewer home"
                onClick={() => setIsMenuOpen(false)}
              >
                <Logo />
              </Link>
              <button
                type="button"
                className="flex h-8 w-8 items-center justify-center rounded-md text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav
              aria-label="Mobile navigation"
              className="mt-8 flex flex-col items-center gap-6 text-center text-lg font-medium"
            >
              <Link
                href="/demo"
                className={`w-full rounded-md p-3 transition-colors hover:bg-panel ${
                  pathname === "/demo" ? "text-accent font-semibold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Live Demo
              </Link>
              <Link
                href="/docs"
                className={`w-full rounded-md p-3 transition-colors hover:bg-panel ${
                  pathname?.startsWith("/docs") ? "text-accent font-semibold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Docs
              </Link>
              <Link
                href="/review"
                className={`w-full rounded-md p-3 transition-colors hover:bg-panel ${
                  pathname === "/review" ? "text-accent font-semibold" : ""
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Feedback Hub
              </Link>
              <a
                href="/#features"
                className="w-full rounded-md p-3 transition-colors hover:bg-panel"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="/#shortcuts"
                className="w-full rounded-md p-3 transition-colors hover:bg-panel"
                onClick={() => setIsMenuOpen(false)}
              >
                Shortcuts
              </a>
              <a
                href="/#open-source"
                className="w-full rounded-md p-3 transition-colors hover:bg-panel"
                onClick={() => setIsMenuOpen(false)}
              >
                Open Source
              </a>
              <a
                href="/#faq"
                className="w-full rounded-md p-3 transition-colors hover:bg-panel"
                onClick={() => setIsMenuOpen(false)}
              >
                FAQ
              </a>
            </nav>
          </div>
        </div>
      )}
    </header>
  )
}

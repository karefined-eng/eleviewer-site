import Link from "next/link"
import { Logo } from "./logo"
import { GITHUB_URL, RELEASES_URL, LICENSE_URL, ISSUES_URL } from "@/lib/links"

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-start justify-between gap-6 px-5 py-10 sm:flex-row sm:items-center">
        <div className="flex flex-col gap-2">
          <Logo />
          <p className="text-xs text-muted-foreground">
            Built by{" "}
            <a
              href="https://github.com/karefined-eng"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-foreground transition-colors"
            >
              karefined-eng
            </a>
            . Free forever.
          </p>
        </div>
        <nav
          aria-label="Footer navigation"
          className="flex flex-wrap gap-x-6 gap-y-2 text-[13px] text-muted-foreground"
        >
          <Link href="/about" className="transition-colors hover:text-foreground">
            About
          </Link>
          <Link href="/download" className="transition-colors hover:text-foreground">
            Download
          </Link>
          <Link href="/docs" className="transition-colors hover:text-foreground">
            Documentation
          </Link>
          <Link href="/demo" className="transition-colors hover:text-foreground">
            Live Demo
          </Link>
          <Link href="/community" className="transition-colors hover:text-foreground">
            Community
          </Link>
          <Link href="/review" className="transition-colors hover:text-foreground">
            Feedback Hub
          </Link>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href={RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Releases
          </a>
          <a
            href={ISSUES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            Report a bug
          </a>
          <a
            href={LICENSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            GPLv3 License
          </a>
          <Link href="/privacy" className="transition-colors hover:text-foreground">
            Privacy
          </Link>
          <Link href="/terms" className="transition-colors hover:text-foreground">
            Terms
          </Link>
          <a
            href="/llms.txt"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground font-mono text-xs"
          >
            llms.txt
          </a>
        </nav>
      </div>
    </footer>
  )
}

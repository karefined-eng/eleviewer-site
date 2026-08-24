"use client"

import { track } from "@vercel/analytics/react"
import { Download } from "lucide-react"
import { GitHubIcon } from "./github-icon"
import { InteractiveDemo } from "~features/demo-browser/components/interactive-demo"
import { MobileReminder } from "./mobile-reminder"
import { GITHUB_URL, DOWNLOAD_URL } from "@/lib/links"

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-5 pt-16 sm:pt-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Free &amp; open source · Windows 10/11
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          Open your course files. Listen to your readings. Keep studying locally.
        </h1>
        <h2 className="mx-auto mt-5 max-w-xl text-pretty text-lg font-medium text-foreground">
          A lightweight Windows study workspace for the files your professors assign.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
          Open PDFs, Word files, slides, spreadsheets, Markdown, and notes without Microsoft Office. Listen to PDFs aloud, keep a course folder in one local vault, and return to the same session tomorrow. No account. No cloud upload. Completely free.
        </p>

        <MobileReminder />

        <div className="mt-8 hidden sm:flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/download"
            onClick={() => track("download_clicked", { location: "hero" })}
            className="flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Download className="h-4 w-4" />
            Download for Windows
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => track("github_clicked", { location: "hero" })}
            className="flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:bg-panel"
          >
            <GitHubIcon className="h-4 w-4" />
            View on GitHub
          </a>
        </div>

        <div className="mt-6 mx-auto max-w-md rounded-lg border border-border bg-panel/50 p-4 text-left font-mono text-xs text-muted-foreground leading-relaxed">
          <p className="leading-relaxed">
            <span className="font-semibold text-foreground">Before you open it:</span> Windows may show an "Unknown Publisher" warning because this free open-source build is not digitally signed. Download only from the official release page, compare the checksum, then click <strong>"More info"</strong> and <strong>"Run anyway"</strong>.{" "}
            <a
              href="https://github.com/karefined-eng/eleviewer"
              className="underline hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Verify source code on GitHub.
            </a>
          </p>
        </div>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span><strong className="text-foreground">1.</strong> Download</span>
          <span aria-hidden="true">→</span>
          <span><strong className="text-foreground">2.</strong> Open a file</span>
          <span aria-hidden="true">→</span>
          <span><strong className="text-foreground">3.</strong> Press F9 to listen</span>
        </div>

        <p className="mt-3 font-mono text-xs text-muted-foreground">
          GPLv3 licensed · portable .exe · no account · no telemetry
        </p>
      </div>

      <div className="mt-14 sm:mt-20">
        <InteractiveDemo />
      </div>
    </section>
  )
}

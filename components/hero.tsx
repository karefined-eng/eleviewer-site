"use client"

import { track } from "@vercel/analytics/react"
import { WindowsIcon } from "./windows-icon"
import { InteractiveDemo } from "~features/demo-browser/components/interactive-demo"
import { MobileReminder } from "./mobile-reminder"
import { GITHUB_URL, LATEST_RELEASE_VERSION, LATEST_RELEASE_SHA256 } from "@/lib/links"
import { MorphingLogo } from "./morphing-logo"

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
          Open PDFs, Word files, slides, spreadsheets, Markdown, and notes without Microsoft Office. Listen to supported readings aloud, keep a course folder in one local vault, and return to the same session tomorrow. No account. No cloud upload. Completely free.
        </p>

        <div className="mt-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 font-mono text-xs text-muted-foreground">
          <code className="bg-muted px-1.5 py-0.5 rounded border border-border">v{LATEST_RELEASE_VERSION}</code>
          <code className="bg-muted px-1.5 py-0.5 rounded border border-border">~135 MB</code>
          <code className="bg-muted px-1.5 py-0.5 rounded border border-border">SHA256: {LATEST_RELEASE_SHA256.slice(0, 16)}…</code>
        </div>

        <MobileReminder />

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/download"
            onClick={() => track("download_clicked", { location: "hero" })}
            className="flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <WindowsIcon className="h-4 w-4" />
            Download free for Windows
          </a>
          <a
            href="/demo"
            onClick={() => track("demo_clicked", { location: "hero" })}
            className="flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:bg-panel"
          >
            Preview the app
          </a>
        </div>

        <p className="mt-4 text-xs text-muted-foreground">
          No account or subscription. Your files stay on your PC.{" "}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("github_clicked", { location: "hero" })}
            className="text-foreground underline underline-offset-4 hover:text-accent"
          >
            View the source
          </a>
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
          <span><strong className="text-foreground">1.</strong> Download</span>
          <span aria-hidden="true">→</span>
          <span><strong className="text-foreground">2.</strong> Open a file</span>
          <span aria-hidden="true">→</span>
          <span><strong className="text-foreground">3.</strong> Press F9 to listen</span>
        </div>

        <p className="mt-3 font-mono text-xs text-muted-foreground">
          GPLv3 licensed · per-user installer · no account · no telemetry
        </p>
      </div>

      <div className="mt-12 flex justify-center">
        <MorphingLogo size={160} />
      </div>

      <div className="mt-14 sm:mt-20">
        <InteractiveDemo />
      </div>

    </section>
  )
}

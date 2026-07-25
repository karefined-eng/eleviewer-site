import { Download } from "lucide-react"
import { GitHubIcon } from "./github-icon"
import { InteractiveDemo } from "./interactive-demo"
import { MobileReminder } from "./mobile-reminder"
import { GITHUB_URL, DOWNLOAD_URL } from "@/lib/links"

export function Hero() {
  return (
    <section className="mx-auto max-w-5xl px-5 pt-16 sm:pt-24">
      <div className="mx-auto max-w-2xl text-center">
        <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 font-mono text-[11px] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          Free &amp; open source · Windows 10/11
        </p>
        <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
          EleViewer — Free Windows Document Viewer &amp; Study Workspace
        </h1>
        <h2 className="mx-auto mt-5 max-w-xl text-pretty text-lg font-medium text-foreground">
          The open source study workspace for every file your professor throws at you.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-pretty text-[15px] leading-relaxed text-muted-foreground">
          Open and edit DOCX, XLSX, PPTX, PDF, Markdown, CSV, HTML, and TXT
          without Microsoft Office — in one portable .exe with text-to-speech,
          a file vault, find &amp; replace, autosave, built-in web browser,
          and session restore. No install. No account. No cost.
        </p>

        <MobileReminder />

        <div className="mt-8 hidden sm:flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="/download"
            className="flex h-11 items-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Download className="h-4 w-4" />
            Download for Windows
          </a>
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noreferrer"
            className="flex h-11 items-center gap-2 rounded-lg border border-border text-foreground transition-colors hover:border-muted-foreground hover:bg-panel"
          >
            <GitHubIcon className="h-4 w-4" />
            View on GitHub
          </a>
        </div>
        <p className="mt-3 text-xs text-muted-foreground">
          Windows may show a SmartScreen warning — click <strong>"More info"</strong> then{" "}
          <strong>"Run anyway"</strong>. EleViewer is open source and MIT licensed.{" "}
          <a
            href="https://github.com/karefined-eng/eleviewer"
            className="underline hover:text-foreground transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            Verify the source code.
          </a>
        </p>
        <p className="mt-4 font-mono text-[11px] text-muted-foreground">
          MIT licensed · portable .exe · no telemetry
        </p>
      </div>

      <div className="mt-14 sm:mt-20">
        <InteractiveDemo />
      </div>
    </section>
  )
}

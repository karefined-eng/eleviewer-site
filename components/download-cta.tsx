import { Download } from "lucide-react"
import { DOWNLOAD_URL, ISSUES_URL } from "@/lib/links"

export function DownloadCta() {
  return (
    <section className="border-t border-border bg-panel/40">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:py-28">
        <h2 className="mx-auto max-w-lg text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Download it. Open everything. Pay nothing.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground">
          One portable .exe for Windows 10/11. Download, double-click, and
          every course file just opens.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center">
          <a
            href="/download"
            className="flex h-12 items-center gap-2 rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Download className="h-4 w-4" />
            Download EleViewer for Windows
          </a>
          <p className="mt-3 max-w-md text-center text-xs text-muted-foreground">
            Windows may show a SmartScreen warning — click <strong>"More info"</strong> then{" "}
            <strong>"Run anyway"</strong>. EleViewer is open source and GPLv3 licensed.{" "}
            <a
              href="https://github.com/karefined-eng/eleviewer"
              className="underline hover:text-foreground transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Verify the source code.
            </a>
          </p>
        </div>
        <p className="mt-4 font-mono text-[11px] text-muted-foreground">
          Something broken?{" "}
          <a
            href={ISSUES_URL}
            target="_blank"
            rel="noreferrer"
            className="text-accent underline-offset-4 hover:underline"
          >
            Open an issue
          </a>
        </p>
      </div>
    </section>
  )
}

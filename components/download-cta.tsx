"use client"

import { track } from "@vercel/analytics/react"
import { Download } from "lucide-react"
import { DOWNLOAD_URL, ISSUES_URL } from "@/lib/links"

export function DownloadCta() {
  return (
    <section className="border-t border-border bg-panel/40">
      <div className="mx-auto max-w-5xl px-5 py-20 text-center sm:py-28">
        <h2 className="mx-auto max-w-lg text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Download it. Open your course documents. Pay nothing.
        </h2>
        <p className="mx-auto mt-4 max-w-md text-pretty text-[15px] leading-relaxed text-muted-foreground">
          One portable .exe for Windows 10/11. Download, double-click, and common course files (DOCX, XLSX, PPTX, PDF, Markdown, CSV, HTML, and TXT) just open.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center">
          <a
            href="/download"
            onClick={() => track("download_clicked", { location: "footer" })}
            className="flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 shadow-sm"
          >
            <Download className="h-4 w-4" />
            Download EleViewer for Windows
          </a>
          <div className="mt-6 mx-auto max-w-md rounded-lg border border-border bg-panel/50 p-4 text-left font-mono text-xs text-muted-foreground leading-relaxed">
            <p className="leading-relaxed">
              <span className="font-semibold text-foreground">ℹ️ SmartScreen Notice:</span> Windows may show an "Unknown Publisher" warning because this portable binary is open source and not digitally signed with a code-signing certificate. Click <strong>"More info"</strong> and then <strong>"Run anyway"</strong>.{" "}
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
        </div>
        <p className="mt-4 font-mono text-xs text-muted-foreground">
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

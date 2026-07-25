import type { Metadata } from "next"
import { Download, Terminal, ShieldCheck, HardDrive, CheckCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DOWNLOAD_URL, GITHUB_URL } from "@/lib/links"

export const metadata: Metadata = {
  title: "Download EleViewer — Free Windows Document Viewer & Study Workspace",
  description:
    "Download EleViewer for Windows 10 and 11. A free, portable .exe that opens DOCX without Word, XLSX without Excel, PPTX without PowerPoint, PDF with text-to-speech, Markdown, CSV, and HTML. No installation, no account, zero telemetry.",
  alternates: {
    canonical: "https://eleviewer.vercel.app/download",
  },
}

export default function DownloadPage() {
  const sha256Hash = process.env.NEXT_PUBLIC_SHA256 ?? "See GitHub Releases"

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <section className="mx-auto max-w-4xl px-5 py-16 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 font-mono text-[11px] text-accent">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              Windows 10/11 · v1.3.0 Release
            </p>
            <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Download EleViewer for Windows
            </h1>
            <p className="mt-3 text-pretty text-[15px] text-muted-foreground">
              One portable .exe file. Download, double-click, and open your course files instantly.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4">
              <a
                href={DOWNLOAD_URL}
                className="flex h-12 items-center gap-2 rounded-lg bg-primary px-8 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 shadow-lg shadow-primary/20"
              >
                <Download className="h-4 w-4" />
                Download EleViewer.exe (v1.3.0)
              </a>

              <div className="rounded-lg border border-border/80 bg-panel/60 p-4 max-w-md w-full text-left">
                <p className="text-xs text-muted-foreground font-mono mb-1">
                  SHA-256 Checksum:
                </p>
                <code className="block text-[11px] font-mono text-foreground break-all select-all bg-muted/40 p-2 rounded border border-border/40">
                  {sha256Hash}
                </code>
              </div>
            </div>

            <div className="mt-6 mx-auto max-w-md rounded-lg border border-amber-500/20 bg-amber-500/5 p-4 text-left">
              <p className="text-xs text-[#856404] dark:text-amber-200/90 leading-relaxed">
                ⚠️ <strong>Windows SmartScreen Notice:</strong> Windows may display an "Unknown Publisher" warning because this portable binary is open source and un-signed. Click <strong>"More info"</strong> and then <strong>"Run anyway"</strong>.{" "}
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-white"
                >
                  Verify source code on GitHub.
                </a>
              </p>
            </div>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-panel p-6">
              <h2 className="flex items-center gap-2 text-base font-semibold text-foreground">
                <HardDrive className="h-5 w-5 text-accent" />
                System Requirements
              </h2>
              <ul className="mt-4 space-y-2 text-xs text-[#595959] dark:text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                  <span>Windows 10 or 11 (64-bit)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                  <span>~220 MB free disk space</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-emerald-400" />
                  <span>No administrator privileges or installation required</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-panel p-6">
              <h2 className="flex items-center gap-2 text-base font-semibold text-foreground">
                <Terminal className="h-5 w-5 text-accent" />
                Install via Windows Package Manager
              </h2>
              <p className="mt-2 text-xs text-muted-foreground">
                Prefer using the CLI? Install directly via Winget:
              </p>
              <div className="mt-3 flex items-center justify-between gap-2 rounded border border-border/80 bg-muted/40 p-2.5 font-mono text-xs text-foreground">
                <code className="select-all">winget install karefined-eng.EleViewer</code>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

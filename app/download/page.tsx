import type { Metadata } from "next"
import { Download, ShieldCheck, HardDrive, CheckCircle } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DOWNLOAD_URL, GITHUB_URL, LATEST_RELEASE_VERSION } from "@/lib/links"

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
            <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
              <span className="h-1.5 w-1.5 rounded-full bg-accent" />
              EleViewer v{LATEST_RELEASE_VERSION} for Windows 10 and Windows 11
            </p>
            <h1 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Download EleViewer for Windows
            </h1>
            <p className="mt-3 text-pretty text-[15px] text-muted-foreground">
              Download the current portable build, double-click it, and start with a course file without an account or installation process.
            </p>

            <div className="mt-8 flex flex-col items-center justify-center gap-4">
              <a
                href={DOWNLOAD_URL}
                className="flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 shadow-sm"
              >
                <Download className="h-4 w-4" />
                Download EleViewer.exe (v{LATEST_RELEASE_VERSION})
              </a>

              <div className="rounded-lg border border-border bg-panel p-4 max-w-md w-full text-left">
                <p className="text-xs text-muted-foreground font-mono mb-1">
                  SHA-256 Checksum:
                </p>
                <code className="block text-[11px] font-mono text-foreground break-all select-all bg-muted p-2 rounded border border-border">
                  {sha256Hash}
                </code>
              </div>
            </div>

            <div className="mt-6 mx-auto max-w-md rounded-lg border border-border bg-panel/50 p-4 text-left font-mono text-xs text-muted-foreground leading-relaxed">
              <p className="leading-relaxed">
                <span className="font-semibold text-foreground">ℹ️ SmartScreen Notice:</span> Windows may show an "Unknown Publisher" warning because this portable binary is open source and not digitally signed with a code-signing certificate. Click <strong>"More info"</strong> and then <strong>"Run anyway"</strong>.{" "}
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground transition-colors"
                >
                  Verify source code on GitHub.
                </a>
              </p>
            </div>
          </div>

          <div className="mx-auto mt-10 max-w-3xl rounded-xl border border-border bg-panel/40 p-6 text-left">
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              After you open EleViewer
            </p>
            <ol className="mt-4 grid gap-4 sm:grid-cols-3">
              <li>
                <p className="text-sm font-semibold text-foreground">1. Open a file</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Press <kbd className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[11px]">Ctrl+O</kbd> and choose a reading or note.</p>
              </li>
              <li>
                <p className="text-sm font-semibold text-foreground">2. Try Read Aloud</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Select a passage and press <kbd className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[11px]">F9</kbd> to listen.</p>
              </li>
              <li>
                <p className="text-sm font-semibold text-foreground">3. Add your folder</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">Press <kbd className="rounded border border-border bg-background px-1.5 py-0.5 font-mono text-[11px]">Alt+V</kbd> when you want course files one click away.</p>
              </li>
            </ol>
          </div>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-panel p-6">
              <h2 className="flex items-center gap-2 text-base font-semibold text-foreground">
                <HardDrive className="h-5 w-5 text-accent" />
                System Requirements
              </h2>
              <ul className="mt-4 space-y-2 text-xs text-muted-foreground font-mono">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-accent" />
                  <span>Windows 10 or 11 (64-bit)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-accent" />
                  <span>At least 220 MB of free disk space (for the application and basic usage)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-3.5 w-3.5 text-accent" />
                  <span>No administrator privileges required and no traditional installation process (no installer, no system-wide changes)</span>
                </li>
              </ul>
            </div>

            <div className="rounded-xl border border-border bg-panel p-6">
              <h2 className="flex items-center gap-2 text-base font-semibold text-foreground">
                <ShieldCheck className="h-5 w-5 text-accent" />
                Verify before you run it
              </h2>
              <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                This is an unsigned open-source Windows build, so SmartScreen may show an “Unknown Publisher” warning. Compare the SHA-256 checksum above and use the official GitHub release page if you need to verify the source.
              </p>
              <a
                href={`${GITHUB_URL}/releases`}
                target="_blank"
                rel="noreferrer"
                className="mt-3 inline-flex text-xs font-medium text-foreground underline underline-offset-4 hover:text-accent"
              >
                Open the official release page
              </a>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

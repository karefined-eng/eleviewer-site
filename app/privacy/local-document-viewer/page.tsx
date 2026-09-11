import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DOWNLOAD_URL } from "@/lib/links"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Local Document Viewer — Privacy & Telemetry — EleViewer",
  description: "EleViewer is a true local document viewer for Windows. No cloud uploads, no account, and zero usage telemetry in the desktop app.",
  alternates: { canonical: "/privacy/local-document-viewer" },
}

export default function LocalDocumentViewerPrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-4xl px-5 py-16 sm:py-24">
          <p className="inline-flex items-center rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Privacy focus
          </p>
          <h1 className="mt-5 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            A True Local Document Viewer
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground">
            Unlike many modern PDF readers and Office alternatives, the EleViewer desktop app does not upload your documents to the cloud, does not require an account, and does not collect usage telemetry.
          </p>

          <section className="mt-12 grid gap-8 sm:grid-cols-2">
            <div className="rounded-xl border border-border bg-panel/50 p-6">
              <h2 className="text-xl font-semibold">100% Local Processing</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                When you open a PDF, DOCX, XLSX, or PPTX file, EleViewer renders it entirely on your own Windows computer. Your files never leave your hard drive. There are no "cloud conversions" or server-side text extraction mechanisms.
              </p>
            </div>
            <div className="rounded-xl border border-border bg-panel/50 p-6">
              <h2 className="text-xl font-semibold">Zero Usage Telemetry</h2>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">
                We believe what you read and study is your business. The EleViewer desktop app collects absolutely zero usage telemetry. We do not track which features you use, how long you use the app, or what files you open.
              </p>
            </div>
          </section>

          <section className="mt-12 rounded-xl border border-border p-8">
            <h2 className="text-2xl font-semibold mb-6">Understanding Our Network Usage</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-medium text-foreground">The Desktop App</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  The EleViewer executable only uses the network in two specific, user-initiated scenarios:
                </p>
                <ul className="mt-2 list-disc list-inside text-sm text-muted-foreground space-y-1">
                  <li><strong>Updates:</strong> Checking for new releases via the public GitHub API.</li>
                  <li><strong>Feedback:</strong> If you explicitly choose to submit feedback or a crash report using the in-app dialog.</li>
                </ul>
              </div>
              <div className="pt-4 border-t border-border">
                <h3 className="font-medium text-foreground">This Website</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  To understand how people find our project, this marketing website (eleviewer.vercel.app) uses basic Vercel Analytics. This helps us see which pages are helpful. <strong>This web analytics data is completely separate from the desktop app</strong>, which remains 100% telemetry-free.
                </p>
              </div>
            </div>
          </section>

          <div className="mt-12 flex flex-col sm:flex-row gap-4 items-center">
            <a href={DOWNLOAD_URL} className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
              Download EleViewer
            </a>
            <Link href="/privacy" className="text-sm font-medium text-muted-foreground hover:text-foreground underline underline-offset-4">
              Read the full privacy policy
            </Link>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}

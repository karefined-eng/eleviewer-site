import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GITHUB_URL, ISSUES_URL, LICENSE_URL } from "@/lib/links"

export const metadata: Metadata = {
  title: "Privacy Policy — EleViewer",
  description: "EleViewer privacy policy: 100% local processing, zero telemetry, zero analytics.",
}

export default function PrivacyPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-5 py-16 sm:py-24 prose prose-invert">
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            EleViewer Privacy Policy
          </h1>
          <p className="mt-2 text-xs font-mono text-muted-foreground">
            Last updated: July 25, 2026
          </p>

          <section className="mt-8 space-y-6 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                1. What Data EleViewer Collects
              </h2>
              <p className="mt-2">
                EleViewer collects <strong>no personal data</strong>. The desktop application operates entirely locally on your Windows computer. Your documents, note contents, PDF files, vault paths, and settings remain stored on your local drive and are never transmitted to any external server or third-party analytics service.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                2. The Optional Feedback &amp; Crash Reporter
              </h2>
              <p className="mt-2">
                If you choose to submit feedback or crash reports using the in-app feedback dialog, the text and traceback you submit are transmitted to our Vercel serverless API endpoint (<code>eleviewer.vercel.app/api/feedback</code>). No account registration, email address, or user identifier is collected or required. This feature is 100% opt-in.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                3. Website Infrastructure
              </h2>
              <p className="mt-2">
                This marketing website (<code>eleviewer.vercel.app</code>) is hosted on Vercel, which may collect standard HTTP web server logs (IP address, user agent, referring URL) as part of standard network infrastructure operations. EleViewer does not sell or track these logs.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                4. Open Source Transparency
              </h2>
              <p className="mt-2">
                EleViewer is open source under the{" "}
                <a
                  href={LICENSE_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent underline"
                >
                  MIT License
                </a>
                . You can audit every line of source code directly on{" "}
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent underline"
                >
                  GitHub
                </a>.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                5. Contact &amp; Questions
              </h2>
              <p className="mt-2">
                Have questions about privacy or technical implementation? Open an issue on{" "}
                <a
                  href={ISSUES_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent underline"
                >
                  GitHub Issues
                </a>
                .
              </p>
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}

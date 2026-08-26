import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { GITHUB_URL, ISSUES_URL, LICENSE_URL } from "@/lib/links"

export const metadata: Metadata = {
  title: "Privacy Policy — EleViewer",
  description: "EleViewer privacy policy: 100% local processing, zero telemetry, zero analytics.",
  alternates: { canonical: "/privacy" },
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
                EleViewer collects <strong>no personal data</strong>. The desktop application operates entirely locally on your Windows computer. Your documents, note contents, PDF files, vault paths, and settings remain stored on your local drive and are not transmitted to EleViewer-operated servers or to any third-party analytics or tracking service, except when you explicitly choose to share information via the optional feedback or crash report feature described below.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                2. The Optional Feedback &amp; Crash Reporter
              </h2>
              <p className="mt-2">
                If you choose to submit feedback or crash reports using the in-app feedback dialog, the text and traceback you submit are transmitted to our Vercel serverless API endpoint (<code>eleviewer.vercel.app/api/feedback</code>). No account registration, email address, or user identifier is collected or required. This feature is strictly optional and is only used when you actively choose to submit feedback or a crash report from within the app.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                3. Website Infrastructure
              </h2>
              <p className="mt-2">
                This marketing website (<code>eleviewer.vercel.app</code>) is hosted on Vercel, which collects HTTP web server logs (including IP address, user agent, and referring URL) as part of its hosting operations—for example, for security, performance monitoring, and abuse prevention. EleViewer does not sell these logs or use them to create profiles of individual users; we only access aggregate or anonymized log data when needed for debugging, security, or performance analysis.
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
                  GNU GPLv3 License
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
                Have questions about how EleViewer handles data, privacy, or how specific technical components are implemented? Open an issue on{" "}
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

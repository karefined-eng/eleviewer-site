import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { GITHUB_URL, GITHUB_PROFILE_URL, ISSUES_URL, LICENSE_URL } from "@/lib/links"
import { ArrowRight, ShieldCheck, Cpu, Code2, HeartHandshake, Mail, MessageSquare } from "lucide-react"

export const metadata: Metadata = {
  title: "About EleViewer — Mission, Creator, and Open-Source Story",
  description:
    "Learn about EleViewer's origins, open-source principles, creator background, and commitment to free, offline study tools for students worldwide.",
  alternates: { canonical: "/about" },
}

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <BreadcrumbJsonLd
        items={[
          { name: "EleViewer", url: "https://eleviewer.vercel.app/" },
          { name: "About", url: "https://eleviewer.vercel.app/about" },
        ]}
      />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Origin &amp; Mission
          </div>

          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
            Built to make document reading free, local, and accessible for students
          </h1>

          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            EleViewer is an independent open-source document workspace for Windows. It was engineered to solve a common reality: students and researchers need to read course slides, spreadsheets, and PDF documents without paying for Microsoft 365, without cloud tracking, and without needing administrator rights on school computers.
          </p>

          <div className="mt-12 space-y-12 text-sm leading-relaxed text-muted-foreground">
            {/* The Origin Story */}
            <section className="rounded-2xl border border-border bg-panel/40 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-foreground">
                The Origin Story
              </h2>
              <p className="mt-3">
                EleViewer was founded and developed by{" "}
                <a
                  href={GITHUB_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-foreground underline underline-offset-4 hover:text-accent"
                >
                  karefined-eng
                </a>
                . During university studies, proprietary software barriers frequently interrupted the learning flow: heavy document suites required paid subscriptions, expired licenses prevented viewing course slides, and university lab PCs blocked software installations.
              </p>
              <p className="mt-3">
                Earlier free and open-source software made the creator&apos;s education possible. EleViewer was built as a contribution back to that ecosystem—a zero-friction, single-binary application that gives any student instant access to their course materials.
              </p>
            </section>

            {/* Core Values */}
            <section>
              <h2 className="text-xl font-semibold text-foreground">
                Core Architectural Principles
              </h2>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-border bg-panel p-5">
                  <Cpu className="h-5 w-5 text-accent" />
                  <h3 className="mt-3 font-semibold text-foreground">100% Local Execution</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    Documents, notes, and PDF text are parsed and rendered directly on your CPU. No cloud uploads, no external APIs, and no telemetry tracking your reading habits.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-panel p-5">
                  <ShieldCheck className="h-5 w-5 text-accent" />
                  <h3 className="mt-3 font-semibold text-foreground">Zero Admin Requirements</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    EleViewer ships as a standalone, portable Windows executable. It runs from USB flash drives or temporary folders without requiring registry keys or admin credentials.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-panel p-5">
                  <Code2 className="h-5 w-5 text-accent" />
                  <h3 className="mt-3 font-semibold text-foreground">GPLv3 Open Source</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    Every line of source code is public and auditable on GitHub. You are free to inspect, fork, modify, and build upon it under copyleft protections.
                  </p>
                </div>

                <div className="rounded-xl border border-border bg-panel p-5">
                  <HeartHandshake className="h-5 w-5 text-accent" />
                  <h3 className="mt-3 font-semibold text-foreground">Free Forever</h3>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                    No subscriptions, no freemium limits, no paywalled formats, and no sponsored adware. A permanent free utility for study and research.
                  </p>
                </div>
              </div>
            </section>

            {/* Editorial & Verification Policy */}
            <section className="space-y-4">
              <h2 className="text-xl font-semibold text-foreground">
                Accuracy &amp; Editorial Standards
              </h2>
              <p>
                All technical guides, benchmark comparisons, and format support matrices published on this site are verified against real test files across Windows 10 and Windows 11 builds. We transparently document known limitations (such as macro fidelity or complex embedded chart rendering) to ensure users know exactly what to expect before downloading.
              </p>
            </section>

            {/* Contact and Community */}
            <section className="rounded-2xl border border-border bg-panel/40 p-6 sm:p-8">
              <h2 className="text-xl font-semibold text-foreground">
                Get in Touch &amp; Connect
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                EleViewer is actively maintained and open to feedback, bug reports, and community contributions.
              </p>

              <div className="mt-6 flex flex-wrap gap-4">
                <a
                  href={ISSUES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-xs font-medium text-foreground hover:bg-panel transition-colors"
                >
                  <Mail className="h-4 w-4 text-accent" />
                  Report Issue / Bug
                </a>
                <a
                  href="https://github.com/karefined-eng/eleviewer/discussions"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border border-border bg-background px-4 py-2.5 text-xs font-medium text-foreground hover:bg-panel transition-colors"
                >
                  <MessageSquare className="h-4 w-4 text-accent" />
                  GitHub Community Discussions
                </a>
                <Link
                  href="/review"
                  className="inline-flex items-center gap-2 rounded-lg bg-primary px-4 py-2.5 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  In-App Feedback Hub
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </div>
            </section>
          </div>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}

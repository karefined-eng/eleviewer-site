import type { Metadata } from "next"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { GITHUB_URL, LICENSE_URL, ISSUES_URL } from "@/lib/links"

export const metadata: Metadata = {
  title: "Terms of Use & License — EleViewer",
  description:
    "EleViewer terms of use, GNU General Public License v3 terms, disclaimer of warranties, and permitted use guidelines.",
  alternates: { canonical: "/terms" },
}

export default function TermsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <BreadcrumbJsonLd
        items={[
          { name: "EleViewer", url: "https://eleviewer.vercel.app/" },
          { name: "Terms of Use", url: "https://eleviewer.vercel.app/terms" },
        ]}
      />
      <main className="flex-1">
        <article className="mx-auto max-w-3xl px-5 py-16 sm:py-24">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs text-muted-foreground">
            <span className="h-1.5 w-1.5 rounded-full bg-accent" />
            Legal &amp; Licensing
          </div>

          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Terms of Use &amp; Licensing
          </h1>
          <p className="mt-2 text-xs font-mono text-muted-foreground">
            Last updated: September 19, 2026
          </p>

          <section className="mt-8 space-y-8 text-sm leading-relaxed text-muted-foreground">
            <div>
              <h2 className="text-lg font-semibold text-foreground">
                1. Open Source License (GNU GPLv3)
              </h2>
              <p className="mt-2">
                EleViewer is free, open-source software licensed under the{" "}
                <a
                  href={LICENSE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-4 hover:text-foreground"
                >
                  GNU General Public License version 3 (GPLv3)
                </a>
                . You are free to run, study, modify, and redistribute EleViewer, provided that any derivative works or distributed binaries remain licensed under the GPLv3 with corresponding source code made publicly available.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                2. Disclaimer of Warranty
              </h2>
              <p className="mt-2">
                THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY APPLICABLE LAW. EXCEPT WHEN OTHERWISE STATED IN WRITING THE COPYRIGHT HOLDERS AND/OR OTHER PARTIES PROVIDE THE PROGRAM &quot;AS IS&quot; WITHOUT WARRANTY OF ANY KIND, EITHER EXPRESSED OR IMPLIED, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE. THE ENTIRE RISK AS TO THE QUALITY AND PERFORMANCE OF THE PROGRAM IS WITH YOU.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                3. Permitted Uses
              </h2>
              <p className="mt-2">
                EleViewer may be used for educational, personal, academic, and non-commercial purposes without payment, registration, or activation keys. You may copy the portable binary to USB storage drives, lab computers, or shared workstations where permissible under local institution policies.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                4. Website &amp; Services
              </h2>
              <p className="mt-2">
                This marketing website (<code>eleviewer.vercel.app</code>) is provided for informational and download purposes. While we strive to maintain accurate information and continuous uptime, website availability is subject to standard hosting network conditions. See our{" "}
                <a
                  href="/privacy"
                  className="text-accent underline underline-offset-4 hover:text-foreground"
                >
                  Privacy Policy
                </a>{" "}
                for details on hosting logs and optional crash reporting.
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold text-foreground">
                5. Source Code &amp; Inquiries
              </h2>
              <p className="mt-2">
                Complete source code for EleViewer is maintained on{" "}
                <a
                  href={GITHUB_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-4 hover:text-foreground"
                >
                  GitHub
                </a>
                . For licensing inquiries, bug reports, or legal questions, please open a ticket on{" "}
                <a
                  href={ISSUES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent underline underline-offset-4 hover:text-foreground"
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

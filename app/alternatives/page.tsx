import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { alternativesData } from "@/lib/alternatives-data"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "EleViewer Alternatives — Compare Document Viewers",
  description: "Compare EleViewer against other document viewers like Adobe Reader, Sumatra PDF, and FreeFileViewer.",
  alternates: {
    canonical: "https://eleviewer.vercel.app/alternatives",
  },
}

export default function AlternativesIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "EleViewer Alternatives",
    description: metadata.description,
    url: "https://eleviewer.vercel.app/alternatives",
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          <BreadcrumbJsonLd
            items={[
              { name: "EleViewer", url: "https://eleviewer.vercel.app/" },
              { name: "Alternatives", url: "https://eleviewer.vercel.app/alternatives" },
            ]}
          />
          
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Alternatives & Comparisons
          </h1>
          <p className="mt-5 text-xl leading-8 text-muted-foreground max-w-2xl">
            See how EleViewer stacks up against the competition and find the right document reader for your workflow.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2">
            {alternativesData.map((alt) => (
              <Link
                key={alt.slug}
                href={`/alternatives/${alt.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-panel p-6 transition-all hover:bg-panel/80 hover:border-accent/50"
              >
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {alt.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {alt.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent opacity-80 transition-opacity group-hover:opacity-100">
                  Read comparison
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

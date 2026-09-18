import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { useCases } from "@/lib/use-cases-data"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { ArrowRight } from "lucide-react"

export const metadata: Metadata = {
  title: "EleViewer Use Cases — How to Use the Offline Study App",
  description: "Discover how students and professionals use EleViewer for distraction-free, offline document reading on Windows.",
  alternates: {
    canonical: "https://eleviewer.vercel.app/use-cases",
  },
}

export default function UseCasesIndexPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "EleViewer Use Cases",
    description: metadata.description,
    url: "https://eleviewer.vercel.app/use-cases",
  }

  const entries = Object.entries(useCases)

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <div className="mx-auto max-w-5xl px-5 py-16 sm:py-24">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          <BreadcrumbJsonLd
            items={[
              { name: "EleViewer", url: "https://eleviewer.vercel.app/" },
              { name: "Use cases", url: "https://eleviewer.vercel.app/use-cases" },
            ]}
          />
          
          <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl">
            Use Cases
          </h1>
          <p className="mt-5 text-xl leading-8 text-muted-foreground max-w-2xl">
            See how EleViewer transforms the way you study, read, and manage documents offline on Windows.
          </p>

          <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {entries.map(([slug, item]) => (
              <Link
                key={slug}
                href={`/use-cases/${slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-panel p-6 transition-all hover:bg-panel/80 hover:border-accent/50"
              >
                <div>
                  <h2 className="text-xl font-semibold text-foreground">
                    {item.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center gap-2 text-sm font-medium text-accent opacity-80 transition-opacity group-hover:opacity-100">
                  Read use case
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

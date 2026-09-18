import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { DOWNLOAD_URL } from "@/lib/links"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"

import { useCases, UseCaseSlug } from "@/lib/use-cases-data"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export function generateStaticParams() { 
  return Object.keys(useCases).map((slug) => ({ slug })) 
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { 
  const { slug } = await params; 
  const item = useCases[slug as UseCaseSlug]; 
  if (!item) return {}; 
  return { 
    title: item.title, 
    description: item.description, 
    alternates: { canonical: `/use-cases/${slug}` } 
  } 
}

export default async function UseCasePage({ params }: { params: Promise<{ slug: string }> }) { 
  const { slug } = await params; 
  const item = useCases[slug as UseCaseSlug]; 
  if (!item) notFound(); 
  
  const jsonLd = { 
    "@context": "https://schema.org", 
    "@type": "Article", 
    headline: item.title, 
    description: item.description, 
    url: `https://eleviewer.vercel.app/use-cases/${slug}`, 
    author: { "@type": "Organization", name: "EleViewer" } 
  }; 
  
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main id="main-content" className="flex-1">
        <article className="mx-auto max-w-4xl px-5 py-16 sm:py-24">
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
          <BreadcrumbJsonLd items={[{ name: "EleViewer", url: "https://eleviewer.vercel.app/" }, { name: "Use cases", url: "https://eleviewer.vercel.app/use-cases" }, { name: item.title, url: `https://eleviewer.vercel.app/use-cases/${slug}` }]} />
          <p className="inline-flex items-center rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
            Use case
          </p>
          <h1 className="mt-5 max-w-3xl text-balance text-3xl font-bold tracking-tight sm:text-5xl">
            {item.title}
          </h1>
          <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-muted-foreground">
            {item.description}
          </p>
          <section className="mt-10 rounded-xl border border-border bg-panel/50 p-6">
            <h2 className="text-xl font-semibold">Who is EleViewer for?</h2>
            <p className="mt-3 leading-7 text-muted-foreground">{item.answer}</p>
          </section>
          <section className="mt-12">
            <h2 className="text-2xl font-semibold">What you can do</h2>
            <ul className="mt-5 grid gap-3 sm:grid-cols-2">
              {item.points.map((point) => (
                <li key={point} className="rounded-lg border border-border p-5 text-sm leading-6">
                  <span className="mr-2 text-accent">+</span>{point}
                </li>
              ))}
            </ul>
          </section>
          <a href={DOWNLOAD_URL} className="mt-10 inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90">
            Download the portable app
          </a>

          <hr className="my-16 border-border" />

          <section>
            <h2 className="text-2xl font-semibold mb-6">Explore more use cases</h2>
            <div className="grid gap-4 sm:grid-cols-2">
              {Object.entries(useCases)
                .filter(([key]) => key !== slug)
                .slice(0, 4)
                .map(([key, relatedItem]) => (
                  <Link
                    key={key}
                    href={`/use-cases/${key}`}
                    className="group flex flex-col justify-between rounded-xl border border-border bg-panel p-5 transition-all hover:bg-panel/80 hover:border-accent/50"
                  >
                    <div>
                      <h3 className="font-medium text-foreground">{relatedItem.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground line-clamp-2">
                        {relatedItem.description}
                      </p>
                    </div>
                    <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                      Read use case
                      <ArrowRight className="h-3 w-3" />
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        </article>
      </main>
      <SiteFooter />
    </div>
  )
}

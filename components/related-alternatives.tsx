import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { alternativesData } from "@/lib/alternatives-data"

interface RelatedAlternativesProps {
  currentSlug: string
}

export function RelatedAlternatives({ currentSlug }: RelatedAlternativesProps) {
  const related = alternativesData.filter((a) => a.slug !== currentSlug)

  return (
    <section>
      <h2 className="mb-6 text-2xl font-semibold">More comparisons</h2>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {related.map((alt) => (
          <Link
            key={alt.slug}
            href={`/alternatives/${alt.slug}`}
            className="group flex flex-col justify-between rounded-xl border border-border bg-panel p-5 transition-all hover:bg-panel/80 hover:border-accent/50"
          >
            <div>
              <h3 className="font-medium text-foreground">{alt.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
                {alt.description}
              </p>
            </div>
            <div className="mt-4 flex items-center gap-1.5 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
              Read comparison
              <ArrowRight className="h-3 w-3" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}

import { GITHUB_PROFILE_URL } from "@/lib/links"

export const EDITORIAL_UPDATED_AT = "2026-10-08"

export const EDITORIAL_UPDATED_LABEL = new Date(
  `${EDITORIAL_UPDATED_AT}T00:00:00Z`,
).toLocaleDateString("en-US", {
  year: "numeric",
  month: "long",
  day: "numeric",
  timeZone: "UTC",
})

const publisherId = "https://eleviewer.vercel.app/#organization"

export function createArticleJsonLd({
  headline,
  description,
  url,
}: {
  headline: string
  description: string
  url: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline,
    description,
    url,
    dateModified: EDITORIAL_UPDATED_AT,
    author: {
      "@type": "Person",
      name: "karefined-eng",
      url: GITHUB_PROFILE_URL,
      worksFor: { "@id": publisherId },
    },
    publisher: { "@id": publisherId },
  }
}

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
  datePublished = EDITORIAL_UPDATED_AT,
  dateModified = EDITORIAL_UPDATED_AT,
  image = "https://eleviewer.vercel.app/opengraph-image",
}: {
  headline: string
  description: string
  url: string
  datePublished?: string
  dateModified?: string
  image?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `${url}#article`,
    headline,
    description,
    url,
    image,
    datePublished,
    dateModified,
    author: {
      "@type": "Person",
      "@id": `${GITHUB_PROFILE_URL}#person`,
      name: "karefined-eng",
      url: GITHUB_PROFILE_URL,
      worksFor: { "@id": publisherId },
    },
    publisher: { "@id": publisherId },
    mainEntityOfPage: { "@id": url },
  }
}

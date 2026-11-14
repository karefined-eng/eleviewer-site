import { DOCS_TOPICS } from "@/lib/docs-data"
import { RELEASES } from "@/lib/releases-data"
import { useCases } from "@/lib/use-cases-data"
import { guides } from "@/lib/guides-data"
import { alternativesData } from "@/lib/alternatives-data"

export const revalidate = 3600

function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&")
    .replace(/</g, "<")
    .replace(/>/g, ">")
    .replace(/"/g, String.fromCharCode(34))
    .replace(/'/g, "&apos;")
}

function formatRfc822(dateStr: string): string {
  return new Date(dateStr).toUTCString()
}

export async function GET() {
  const baseUrl = "https://eleviewer.vercel.app"
  const siteTitle = "EleViewer"
  const siteDescription =
    "Free, portable Windows document viewer and study workspace for students and researchers. Open DOCX, XLSX, PPTX, PDF, Markdown, CSV, HTML, and TXT without Microsoft Office."

  const items: {
    title: string
    link: string
    description: string
    pubDate: string
    guid: string
  }[] = []

  RELEASES.slice(0, 10).forEach((r) => {
    items.push({
      title: `EleViewer v${r.version}: ${r.tagline}`,
      link: `${baseUrl}/updates/${r.version}`,
      description: r.highlights
        .map((h) => `${h.title}: ${h.body}`)
        .join(" | "),
      pubDate: formatRfc822(r.date),
      guid: `${baseUrl}/updates/${r.version}`,
    })
  })

  Object.entries(guides).forEach(([slug, guide]) => {
    items.push({
      title: guide.title,
      link: `${baseUrl}/guides/${slug}`,
      description: guide.description,
      pubDate: formatRfc822("2026-10-08"),
      guid: `${baseUrl}/guides/${slug}`,
    })
  })

  Object.entries(useCases).forEach(([slug, uc]) => {
    items.push({
      title: uc.title,
      link: `${baseUrl}/use-cases/${slug}`,
      description: uc.description,
      pubDate: formatRfc822("2026-10-08"),
      guid: `${baseUrl}/use-cases/${slug}`,
    })
  })

  alternativesData.forEach((alt) => {
    items.push({
      title: `Comparison: ${alt.title}`,
      link: `${baseUrl}/alternatives/${alt.slug}`,
      description: alt.description,
      pubDate: formatRfc822("2026-10-08"),
      guid: `${baseUrl}/alternatives/${alt.slug}`,
    })
  })

  DOCS_TOPICS.forEach((topic) => {
    items.push({
      title: topic.title,
      link: `${baseUrl}/docs/${topic.slug}`,
      description: topic.description,
      pubDate: formatRfc822("2026-10-08"),
      guid: `${baseUrl}/docs/${topic.slug}`,
    })
  })

  items.sort((a, b) => new Date(b.pubDate).getTime() - new Date(a.pubDate).getTime())

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(siteTitle)}</title>
    <link>${baseUrl}</link>
    <description>${escapeXml(siteDescription)}</description>
    <language>en-US</language>
    <lastBuildDate>${formatRfc822(new Date().toISOString())}</lastBuildDate>
    <atom:link href="${baseUrl}/feed" rel="self" type="application/rss+xml" />
    ${items
      .map(
        (item) => `
    <item>
      <title>${escapeXml(item.title)}</title>
      <link>${item.link}</link>
      <description>${escapeXml(item.description)}</description>
      <pubDate>${item.pubDate}</pubDate>
      <guid isPermaLink="true">${item.guid}</guid>
    </item>`
      )
      .join("")}
  </channel>
</rss>`

  return new Response(rss, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=600",
    },
  })
}
import { MetadataRoute } from "next"
import { DOCS_TOPICS } from "@/lib/docs-data"
import { RELEASES } from "@/lib/releases-data"
import { EDITORIAL_UPDATED_AT } from "@/lib/editorial"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eleviewer.vercel.app"

  const docUrls: MetadataRoute.Sitemap = DOCS_TOPICS.map((topic) => ({
    url: `${baseUrl}/docs/${topic.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
    lastModified: EDITORIAL_UPDATED_AT,
  }))

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
      lastModified: EDITORIAL_UPDATED_AT,
    },
    {
      url: `${baseUrl}/download`,
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: EDITORIAL_UPDATED_AT,
    },
    {
      url: `${baseUrl}/docs`,
      changeFrequency: "weekly",
      priority: 0.9,
      lastModified: EDITORIAL_UPDATED_AT,
    },
    ...docUrls,
    {
      url: `${baseUrl}/updates`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
      lastModified: RELEASES[0]?.date,
    },
    ...RELEASES.map((r) => ({
      url: `${baseUrl}/updates/${r.version}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      lastModified: r.date,
    })),
    {
      url: `${baseUrl}/demo`,
      changeFrequency: "monthly",
      priority: 0.8,
      lastModified: EDITORIAL_UPDATED_AT,
    },
    {
      url: `${baseUrl}/review`,
      changeFrequency: "monthly",
      priority: 0.7,
      lastModified: EDITORIAL_UPDATED_AT,
    },
    {
      url: `${baseUrl}/alternatives/microsoft-office-viewer`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/alternatives/adobe-reader`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/alternatives/freefileviewer`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/alternatives/sumatra-pdf`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...[
      "open-docx-without-word",
      "open-xlsx-without-excel",
      "open-pptx-without-powerpoint",
      "pdf-text-to-speech-windows",
      "portable-document-viewer",
      "open-pdf-docx-xlsx-without-office",
    ].map((slug) => ({
      url: `${baseUrl}/guides/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...["students", "offline-study", "school-computers", "distraction-free-study", "universal-document-viewer"].map((slug) => ({
      url: `${baseUrl}/use-cases/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/privacy/local-document-viewer`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
    {
      url: `${baseUrl}/about`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/terms`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ]
}

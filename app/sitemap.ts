import { MetadataRoute } from "next"
import { DOCS_TOPICS } from "@/lib/docs-data"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://eleviewer.vercel.app"

  const docUrls: MetadataRoute.Sitemap = DOCS_TOPICS.map((topic) => ({
    url: `${baseUrl}/docs/${topic.slug}`,
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/download`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/docs`,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    ...docUrls,
    {
      url: `${baseUrl}/demo`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/review`,
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/alternatives/microsoft-office-viewer`,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    ...[
      "open-docx-without-word",
      "open-xlsx-without-excel",
      "pdf-text-to-speech-windows",
      "portable-document-viewer",
    ].map((slug) => ({
      url: `${baseUrl}/guides/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    ...["students", "offline-study", "school-computers"].map((slug) => ({
      url: `${baseUrl}/use-cases/${slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.8,
    })),
    {
      url: `${baseUrl}/privacy`,
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ]
}

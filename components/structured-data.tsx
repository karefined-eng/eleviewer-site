import React from "react"
import {
  DOWNLOAD_URL,
  GITHUB_PROFILE_URL,
  GITHUB_URL,
  LATEST_RELEASE_VERSION,
} from "@/lib/links"

export function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://eleviewer.vercel.app/#organization",
    name: "Karefined",
    url: GITHUB_PROFILE_URL,
    sameAs: [GITHUB_PROFILE_URL, GITHUB_URL],
    founder: {
      "@type": "Person",
      name: "karefined-eng",
      url: GITHUB_PROFILE_URL,
    },
  }

  const softwareSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "EleViewer",
    "operatingSystem": "Windows 10, Windows 11",
    "applicationCategory": "UtilitiesApplication",
    "applicationSubCategory": "DocumentViewer",
    "softwareVersion": LATEST_RELEASE_VERSION,
    "url": "https://eleviewer.vercel.app",
    "downloadUrl": "https://eleviewer.vercel.app" + DOWNLOAD_URL,
    "image": "https://eleviewer.vercel.app/opengraph-image",
    "sameAs": [GITHUB_URL, GITHUB_PROFILE_URL],
    "author": {
      "@type": "Organization",
      "name": "Karefined",
      "url": "https://github.com/karefined-eng",
      "@id": "https://eleviewer.vercel.app/#organization",
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
    },
    "description":
      "EleViewer is a free, portable Windows study workspace. Open DOCX, XLSX, PPTX, PDF, Markdown, CSV, HTML, and TXT without Microsoft Office in one portable app with PDF text-to-speech, built-in web browser, find & replace, autosave, file vault, and session restore.",
  }

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "url": "https://eleviewer.vercel.app",
    "name": "EleViewer",
    "description": "Free, portable Windows document viewer and study workspace for students and researchers.",
    "publisher": { "@id": "https://eleviewer.vercel.app/#organization" },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  )
}

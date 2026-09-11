import React from "react"
import { DOWNLOAD_URL, GITHUB_URL, LATEST_RELEASE_VERSION } from "@/lib/links"

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "EleViewer",
        "operatingSystem": "Windows 10, Windows 11",
        "applicationCategory": "UtilitiesApplication",
        "applicationSubCategory": "DocumentViewer",
        "softwareVersion": LATEST_RELEASE_VERSION,
        "url": "https://eleviewer.vercel.app",
        "downloadUrl": DOWNLOAD_URL,
        "image": "https://eleviewer.vercel.app/opengraph-image",
        "sameAs": [GITHUB_URL],
        "author": {
          "@type": "Organization",
          "name": "Karefined",
          "url": "https://github.com/karefined-eng",
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD"
        },
        "description": "EleViewer is a free, portable Windows study workspace. Open DOCX, XLSX, PPTX, PDF, Markdown, CSV, HTML, and TXT without Microsoft Office in one portable app with PDF text-to-speech, built-in web browser, find & replace, autosave, file vault, and session restore."
      },
      {
        "@type": "WebSite",
        "url": "https://eleviewer.vercel.app",
        "name": "EleViewer",
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}

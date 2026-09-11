import React from "react"

export function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "EleViewer",
        "operatingSystem": "Windows 10, Windows 11",
        "applicationCategory": "UtilitiesApplication",
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
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://eleviewer.vercel.app/docs?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is EleViewer free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, EleViewer is completely free."
            }
          },
          {
            "@type": "Question",
            "name": "Does EleViewer require installation?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "No, EleViewer is a portable executable and does not require installation."
            }
          }
        ]
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

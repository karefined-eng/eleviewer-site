export function StructuredData() {
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "SoftwareApplication",
        "name": "EleViewer",
        "url": "https://eleviewer.vercel.app/",
        "image": "https://eleviewer.vercel.app/opengraph-image",
        "operatingSystem": "Windows 10, Windows 11",
        "applicationCategory": "OfficeApplication",
        "description": "EleViewer is a free open-source portable Windows document viewer that opens DOCX, XLSX, PDF, Markdown, CSV, HTML, and TXT with PDF text-to-speech, find and replace, autosave, file vault, and session restore.",
        "softwareVersion": "1.1.0",
        "author": {
          "@type": "Organization",
          "name": "Karefined",
          "url": "https://github.com/karefined-eng"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Karefined",
          "url": "https://github.com/karefined-eng"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "url": "https://github.com/karefined-eng/eleviewer/releases"
        },
        "downloadUrl": "https://github.com/karefined-eng/eleviewer/releases",
        "keywords": "free windows document viewer, portable pdf reader windows, open source document viewer, DOCX viewer for Windows, XLSX viewer windows, CSV viewer windows, HTML viewer windows, markdown editor windows, pdf text to speech, find and replace"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Is EleViewer truly free and open source?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. EleViewer is free to download and use, MIT licensed, portable, and does not require an account or installation."
            }
          },
          {
            "@type": "Question",
            "name": "What file types can EleViewer open?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EleViewer opens DOCX, XLSX, PDF, Markdown, CSV, HTML, and TXT files in one lightweight Windows app."
            }
          },
          {
            "@type": "Question",
            "name": "Does EleViewer support PDF text-to-speech?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. The built-in PDF reader can read documents aloud so you can study hands-free."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use EleViewer offline on Windows?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely. EleViewer runs locally on Windows 10 and 11 and works without an internet connection."
            }
          }
        ]
      }
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}

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
        "applicationCategory": "UtilitiesApplication",
        "description": "Free portable Windows document viewer and study workspace. Opens DOCX, XLSX, PDF, Markdown, CSV, HTML, and TXT with text-to-speech for Windows, file vault, and session restore.",
        "softwareVersion": "1.3.0",
        "license": "https://github.com/karefined-eng/eleviewer/blob/main/LICENSE",
        "author": {
          "@type": "Person",
          "name": "karefined-eng",
          "url": "https://github.com/karefined-eng"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Karefined"
        },
        "offers": {
          "@type": "Offer",
          "price": "0",
          "priceCurrency": "USD",
          "url": "https://github.com/karefined-eng/eleviewer/releases"
        },
        "downloadUrl": "https://github.com/karefined-eng/eleviewer/releases/latest/download/EleViewer.exe"
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Can I browse the web inside EleViewer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Press Ctrl+T to open the built-in web browser panel and browse side-by-side with your documents."
            }
          },
          {
            "@type": "Question",
            "name": "Is EleViewer truly free and open source?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. EleViewer is free, MIT licensed, portable, and requires no account or installation."
            }
          },
          {
            "@type": "Question",
            "name": "What file types can EleViewer open?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EleViewer opens DOCX, XLSX, PDF, Markdown, CSV, HTML, and TXT files."
            }
          },
          {
            "@type": "Question",
            "name": "Does EleViewer support PDF text-to-speech?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, on Windows 10 and 11. The built-in PDF reader uses the Windows speech engine to read documents aloud. macOS and Linux support is planned."
            }
          },
          {
            "@type": "Question",
            "name": "Can I use EleViewer offline?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. EleViewer runs fully locally on Windows 10 and 11 without an internet connection."
            }
          },
          {
            "@type": "Question",
            "name": "How do I open a DOCX file without Microsoft Word?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Download EleViewer — it opens Word documents (.docx) for free with no Microsoft Office required."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a free portable PDF reader for Windows with no install?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — EleViewer is a portable .exe that opens PDFs, DOCX, XLSX, Markdown, and more with no installation."
            }
          },
          {
            "@type": "Question",
            "name": "Can EleViewer run on a school or university computer without admin rights?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. EleViewer is a single portable .exe that requires no installation and no admin privileges."
            }
          },
          {
            "@type": "Question",
            "name": "Does EleViewer work without an internet connection?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Fully. EleViewer runs 100% locally on Windows 10 and 11."
            }
          },
          {
            "@type": "Question",
            "name": "What is the keyboard shortcut to search inside a file in EleViewer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Press Ctrl+F to open Find in any open document. Press Ctrl+H to open Find & Replace."
            }
          },
          {
            "@type": "Question",
            "name": "How do I open my course folder in EleViewer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Press Alt+V to toggle the Vault sidebar, then point it at your course folder in settings."
            }
          },
          {
            "@type": "Question",
            "name": "Does EleViewer save my files automatically?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. EleViewer has a built-in autosave that runs in the background at a configurable interval."
            }
          },
          {
            "@type": "Question",
            "name": "Is EleViewer safe to download? Will it trigger antivirus warnings?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EleViewer is fully open source (MIT licensed) — you can read every line of code on GitHub. Click 'More info' then 'Run anyway' if Windows SmartScreen appears."
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

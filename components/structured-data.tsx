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
        "applicationSubCategory": "Document Viewer",
        "description": "Free portable Windows document viewer and study workspace. Opens DOCX, XLSX, PPTX, PDF, Markdown, CSV, HTML, and TXT with text-to-speech, file vault, and session restore. No install, no account, no cost.",
        "softwareVersion": "1.3.0",
        "license": "https://github.com/karefined-eng/eleviewer/blob/main/LICENSE",
        "fileSize": "220MB",
        "releaseNotes": "https://github.com/karefined-eng/eleviewer/releases",
        "featureList": [
          "Open DOCX files without Microsoft Word",
          "Open XLSX spreadsheets without Microsoft Excel",
          "Open PPTX presentations without Microsoft PowerPoint",
          "PDF viewer with text-to-speech read aloud",
          "Markdown editor with live preview",
          "CSV and HTML viewer",
          "Built-in web browser panel (Ctrl+T)",
          "File vault sidebar for course folders",
          "Find and replace across documents",
          "Session restore with scroll position",
          "Autosave with configurable interval",
          "Bookmarks and pinned files",
          "Portable single .exe — no installation required",
          "Runs without admin privileges on school computers",
          "Zero telemetry, fully offline capable",
          "Winget install support"
        ],
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
        "downloadUrl": "https://github.com/karefined-eng/eleviewer/releases/latest/download/EleViewer.exe",
        "aggregateRating": {
          "@type": "AggregateRating",
          "ratingValue": "4.8",
          "ratingCount": "12",
          "bestRating": "5"
        }
      },
      {
        "@type": "WebSite",
        "name": "EleViewer",
        "url": "https://eleviewer.vercel.app/",
        "potentialAction": {
          "@type": "SearchAction",
          "target": "https://eleviewer.vercel.app/?q={search_term_string}",
          "query-input": "required name=search_term_string"
        }
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How do I open a DOCX file without Microsoft Word?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Download EleViewer — it opens Word documents (.docx) for free with no Microsoft Office required. EleViewer is a portable .exe file that requires no installation and no admin privileges. Just download, double-click, and drag your .docx file in."
            }
          },
          {
            "@type": "Question",
            "name": "How do I open an XLSX file without Microsoft Excel?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EleViewer opens Excel spreadsheets (.xlsx) for free without needing Microsoft Excel installed. It renders your spreadsheet data in a clean table view with column headers and formatting preserved. Download the portable .exe and open your .xlsx files instantly."
            }
          },
          {
            "@type": "Question",
            "name": "Is there a free PowerPoint viewer for Windows 10 and 11?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes. Microsoft discontinued its official PowerPoint Viewer, but EleViewer opens .pptx presentations for free on Windows 10 and 11. It displays slides with text, images, and formatting in a clean slide-by-slide view with text-to-speech support."
            }
          },
          {
            "@type": "Question",
            "name": "How can I read a PDF aloud on Windows for free?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EleViewer has built-in PDF text-to-speech that uses the Windows speech engine (SAPI) to read any PDF page aloud. Press F9 to toggle the TTS reader bar, select a voice, and listen hands-free. It works offline with no internet required."
            }
          },
          {
            "@type": "Question",
            "name": "What is the best free alternative to Microsoft Word Viewer and Excel Viewer?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EleViewer is the best free alternative to the discontinued Microsoft Word Viewer and Excel Viewer. It opens DOCX, XLSX, PPTX, PDF, Markdown, CSV, HTML, and TXT files in one portable app. Unlike LibreOffice, it requires no installation — just download and run the single .exe file."
            }
          },
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
              "text": "EleViewer opens DOCX, XLSX, PPTX, PDF, Markdown, CSV, HTML, and TXT files in one portable app."
            }
          },
          {
            "@type": "Question",
            "name": "Does EleViewer support PDF text-to-speech?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, on Windows 10 and 11. The built-in PDF reader uses the Windows speech engine to read documents aloud so you can study hands-free."
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
            "name": "Is there a free portable PDF reader for Windows with no install?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes — EleViewer is a portable .exe that opens PDFs, DOCX, XLSX, PPTX, Markdown, and more with no installation. Run it directly from a USB drive or a shared lab computer."
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
          },
          {
            "@type": "Question",
            "name": "Is EleViewer a good alternative to Sumatra PDF?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "EleViewer and Sumatra PDF are both free and portable. The key difference is that Sumatra only opens PDFs and ebooks, while EleViewer also opens DOCX, XLSX, PPTX, CSV, HTML, Markdown, and TXT — plus it has text-to-speech, a file vault, and a built-in web browser."
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

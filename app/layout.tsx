import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" })
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://eleviewer.vercel.app"),
  title: "EleViewer — Free Windows document viewer for PDFs, DOCX, XLSX, Markdown",
  description:
    "EleViewer is a free, portable Windows study workspace for students and professionals. Open DOCX, XLSX, PDF, Markdown, CSV, HTML, and TXT in one lightweight app with PDF text-to-speech, find and replace, autosave, file vault, session restore, and no account required.",
  alternates: {
    canonical: "https://eleviewer.vercel.app/",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png" }],
  },
  keywords: [
    "EleViewer",
    "free document viewer",
    "Windows document viewer",
    "portable PDF reader",
    "open source DOCX viewer",
    "XLSX viewer",
    "CSV viewer",
    "HTML viewer",
    "markdown notes editor",
    "PDF text to speech",
    "find and replace",
    "student study app",
    "lightweight file viewer",
    "offline document reader",
    "Windows 10/11 app",
  ],
  openGraph: {
    title: "EleViewer — Free Windows document viewer & study workspace",
    description:
      "Open DOCX, XLSX, PDF, Markdown, CSV, HTML, and TXT in one lightweight Windows app with PDF text-to-speech, file vault, and session restore.",
    url: "https://eleviewer.vercel.app",
    siteName: "EleViewer",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "EleViewer — Free Windows Document Viewer & Study Workspace",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EleViewer — Free Windows document viewer & study workspace",
    description:
      "Open DOCX, XLSX, PDF, Markdown, CSV, HTML, and TXT in one lightweight Windows app with PDF text-to-speech, file vault, and session restore.",
    images: ["/opengraph-image"],
  },
}

export const viewport: Viewport = {
  themeColor: "#131313",
  colorScheme: "dark",
}

import { StructuredData } from "@/components/structured-data"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`bg-background ${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="font-sans">
        {children}
        <StructuredData />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}

import type { Metadata, Viewport } from "next"
import { Analytics } from "@vercel/analytics/next"
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
    "EleViewer is a free, portable Windows study workspace for students and professionals. Open DOCX, XLSX, PDF, Markdown, and TXT in one lightweight app with PDF text-to-speech, file vault, session restore, and no account required.",
  alternates: {
    canonical: "https://eleviewer.vercel.app/",
  },
  keywords: [
    "EleViewer",
    "free document viewer",
    "Windows document viewer",
    "portable PDF reader",
    "open source DOCX viewer",
    "XLSX viewer",
    "markdown notes editor",
    "PDF text to speech",
    "student study app",
    "lightweight file viewer",
    "offline document reader",
    "Windows 10/11 app",
  ],
  openGraph: {
    title: "EleViewer — Free Windows document viewer & study workspace",
    description:
      "Open DOCX, XLSX, PDF, Markdown, and TXT in one lightweight Windows app with PDF text-to-speech, file vault, and session restore.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EleViewer — Free Windows document viewer & study workspace",
    description:
      "Open DOCX, XLSX, PDF, Markdown, and TXT in one lightweight Windows app with PDF text-to-speech, file vault, and session restore.",
  },
}

export const viewport: Viewport = {
  themeColor: "#131313",
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
      </body>
    </html>
  )
}

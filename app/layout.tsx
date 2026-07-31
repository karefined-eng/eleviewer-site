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
  title: "The Lightweight Open Source Study Workspace for Windows (PDF, DOCX, Markdown)",
  description:
    "EleViewer is a free, portable Windows study workspace. Open DOCX, XLSX, PPTX, PDF, Markdown, CSV, HTML, and TXT without Microsoft Office in one portable app with PDF text-to-speech, built-in web browser, find & replace, autosave, file vault, and session restore.",
  applicationName: "EleViewer",
  authors: [{ name: "karefined-eng", url: "https://github.com/karefined-eng" }],
  creator: "karefined-eng",
  publisher: "Karefined",
  alternates: {
    canonical: "https://eleviewer.vercel.app/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
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
    "free Word viewer",
    "XLSX viewer",
    "free Excel viewer",
    "CSV viewer",
    "HTML viewer",
    "markdown notes editor",
    "PDF text to speech",
    "PDF read aloud",
    "find and replace",
    "built-in web browser panel",
    "single instance document viewer",
    "student study app",
    "portable file viewer",
    "offline document reader",
    "Windows 10/11 app",
    "open docx without Word",
    "open xlsx without Excel",
    "free PowerPoint viewer",
    "PPTX viewer Windows",
    "free alternative to Microsoft Word Viewer",
    "free alternative to Microsoft Excel Viewer",
    "portable exe no install",
    "read PDF aloud Windows",
    "text to speech PDF Windows app",
    "study workspace Windows",
    "all-in-one file viewer",
    "view documents without Microsoft Office",
    "free DOCX reader no install",
    "lightweight document viewer",
    "USB portable file reader",
    "school computer document viewer no admin",
    "Sumatra PDF alternative multi format",
    "FreeFileViewer alternative",
  ],
  openGraph: {
    title: "The Lightweight Open Source Study Workspace for Windows (PDF, DOCX, Markdown)",
    description:
      "Open DOCX, XLSX, PDF, Markdown, CSV, HTML, and TXT in one portable Windows app with PDF text-to-speech for Windows, web browser, file vault, and session restore.",
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
    title: "The Lightweight Open Source Study Workspace for Windows (PDF, DOCX, Markdown)",
    description:
      "Open DOCX, XLSX, PDF, Markdown, CSV, HTML, and TXT in one portable Windows app with PDF text-to-speech for Windows, web browser, file vault, and session restore.",
    images: ["/opengraph-image"],
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#131313" },
  ],
  colorScheme: "dark light",
}

import { StructuredData } from "@/components/structured-data"
import { ThemeProvider } from "@/components/theme-provider"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`bg-background ${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="font-sans">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <a
            href="#main-content"
            className="absolute left-0 top-0 -translate-y-full p-4 bg-background text-foreground z-[100] transition-transform focus:translate-y-0"
          >
            Skip to main content
          </a>
          {children}
          <ScrollToTop />
          <StructuredData />
          <Analytics />
          <SpeedInsights />
        </ThemeProvider>
      </body>
    </html>
  )
}

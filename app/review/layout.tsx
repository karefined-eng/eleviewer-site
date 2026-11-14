import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "EleViewer Feedback and Bug Reports",
  description: "Report a bug, request a feature, or share feedback about EleViewer, the free offline Windows document viewer for focused study.",
  alternates: { canonical: "/review" },
  openGraph: {
    url: "https://eleviewer.vercel.app/review",
    images: [{ url: "/opengraph-image", width: 1200, height: 630 }],
  },
}

export default function ReviewLayout({ children }: { children: React.ReactNode }) {
  return children
}

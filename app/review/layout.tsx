import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Feedback Hub — EleViewer",
  description: "Report an EleViewer bug, request a feature, or share feedback about the free Windows study workspace.",
  alternates: { canonical: "/review" },
}

export default function ReviewLayout({ children }: { children: React.ReactNode }) {
  return children
}

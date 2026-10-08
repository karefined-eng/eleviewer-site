import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "EleViewer Community — Join the Study Community",
  description:
    "Connect with other EleViewer users, share workflows, and join the EleViewer community for feature ideas and study feedback.",
  alternates: { canonical: "https://eleviewer.vercel.app/community" },
}

export default function CommunityPage() {
  return (
    <main id="main-content" className="flex-1 px-5 py-16 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
          Community
        </p>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Join the EleViewer community
        </h1>
        <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-muted-foreground">
          Share study workflows, post feedback, ask questions, and stay in the loop on releases and feature ideas for EleViewer.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <a
            href="https://chat.whatsapp.com/FeofuieK0Ae51KdUZEvwTQ"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-11 items-center justify-center rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Open community chat
          </a>
          <Link
            href="/review"
            className="inline-flex h-11 items-center justify-center rounded-lg border border-border bg-panel px-6 text-sm font-medium text-foreground transition-colors hover:bg-panel/80"
          >
            Send feedback instead
          </Link>
        </div>

        <div className="mt-10 rounded-xl border border-border bg-panel/60 p-6 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.4)]">
          <h2 className="text-lg font-semibold text-foreground">What you can do here</h2>
          <ul className="mt-4 space-y-3 text-sm leading-relaxed text-muted-foreground">
            <li>• Share study setups and document workflows that work well on Windows.</li>
            <li>• Request features, report bugs, and vote on priorities.</li>
            <li>• Keep up with release notes, updates, and best practices.</li>
          </ul>
        </div>
      </div>
    </main>
  )
}

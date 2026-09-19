import type { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RELEASES } from "@/lib/releases-data"
import { GITHUB_URL } from "@/lib/links"
import { ArrowRight, Calendar, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "What's New in EleViewer — Release Notes & Updates",
  description:
    "Browse all EleViewer release notes. See what's new, what's fixed, and what changed in every version of EleViewer for Windows.",
  alternates: {
    canonical: "https://eleviewer.vercel.app/updates",
  },
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default function UpdatesPage() {
  const latest = RELEASES[0]
  const older = RELEASES.slice(1)

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col md:flex-row px-5">
        {/* ── Left Sidebar: Version Timeline ───────────────────────────── */}
        <aside
          aria-label="Version history"
          className="hidden md:block w-52 shrink-0 border-r border-border py-10 pr-6 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto"
        >
          <p className="mb-4 font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
            Releases
          </p>
          <nav className="flex flex-col gap-0.5">
            {RELEASES.map((r, i) => (
              <Link
                key={r.version}
                href={`/updates/${r.version}`}
                className={`flex items-center justify-between rounded-md px-3 py-1.5 text-sm transition-colors ${
                  i === 0
                    ? "bg-panel text-foreground font-semibold border border-border"
                    : "text-muted-foreground hover:bg-panel/50 hover:text-foreground"
                }`}
              >
                <span>v{r.version}</span>
                {i === 0 && (
                  <span className="rounded-full bg-accent/20 px-1.5 py-0.5 font-mono text-[10px] text-accent">
                    Latest
                  </span>
                )}
              </Link>
            ))}
            <a
              href={`${GITHUB_URL}/releases`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-1 rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              All releases
              <ArrowRight className="h-3 w-3" />
            </a>
          </nav>
        </aside>

        {/* ── Main Content ──────────────────────────────────────────────── */}
        <main className="flex-1 min-w-0 py-10 md:pl-12">
          {/* Header */}
          <div className="mb-10">
            <p className="mb-2 font-mono text-xs font-semibold uppercase tracking-widest text-accent">
              What&apos;s New
            </p>
            <h1 className="text-3xl font-semibold tracking-tight text-foreground">
              EleViewer Release Notes
            </h1>
            <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
              Every release, explained in plain English. No jargon.
            </p>
          </div>

          {/* ── Latest Release (expanded) ─────────────────────────────── */}
          <section className="mb-14">
            <div className="mb-5 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs font-semibold text-accent">
                Latest · v{latest.version}
              </span>
              <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {formatDate(latest.date)}
              </span>
            </div>

            <h2 className="text-xl font-semibold text-foreground">
              {latest.tagline}
            </h2>

            <ul className="mt-5 space-y-3">
              {latest.highlights.map((h) => (
                <li
                  key={h.title}
                  className="flex gap-3 rounded-lg border border-border bg-panel p-4"
                >
                  <Tag className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {h.title}
                    </p>
                    <p className="mt-0.5 text-[13px] leading-relaxed text-muted-foreground">
                      {h.body}
                    </p>
                  </div>
                </li>
              ))}
            </ul>

            <Link
              href={`/updates/${latest.version}`}
              className="mt-5 inline-flex items-center gap-1.5 rounded-md border border-border bg-panel px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-panel/80"
            >
              Full release notes for v{latest.version}
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </section>

          <hr className="border-border" />

          {/* ── Older Releases (compact cards) ───────────────────────── */}
          <section className="mt-10 space-y-6">
            <h2 className="text-lg font-semibold text-foreground">
              Previous Releases
            </h2>
            {older.map((r) => (
              <Link
                key={r.version}
                href={`/updates/${r.version}`}
                className="group block rounded-xl border border-border bg-panel/40 p-5 transition-colors hover:bg-panel"
              >
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <span className="font-mono text-sm font-semibold text-foreground">
                    v{r.version}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {formatDate(r.date)}
                  </span>
                </div>
                <p className="text-[14px] text-muted-foreground">
                  {r.tagline}
                </p>
                <ul className="mt-3 space-y-1">
                  {r.highlights.slice(0, 2).map((h) => (
                    <li
                      key={h.title}
                      className="text-[13px] text-muted-foreground before:mr-2 before:content-['→']"
                    >
                      <strong className="text-foreground">{h.title}</strong>
                      {" — "}
                      {h.body}
                    </li>
                  ))}
                </ul>
                <p className="mt-3 flex items-center gap-1 text-xs font-medium text-accent opacity-0 transition-opacity group-hover:opacity-100">
                  Read full notes
                  <ArrowRight className="h-3 w-3" />
                </p>
              </Link>
            ))}
          </section>
        </main>
      </div>
      <SiteFooter />
    </div>
  )
}

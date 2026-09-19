import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RELEASES, getReleaseByVersion } from "@/lib/releases-data"
import { GITHUB_URL } from "@/lib/links"
import { BreadcrumbJsonLd } from "@/components/breadcrumb-json-ld"
import { ArrowLeft, ArrowRight, Calendar, Download, Tag } from "lucide-react"

interface Props {
  params: Promise<{ version: string }>
}

export async function generateStaticParams() {
  return RELEASES.map((r) => ({ version: r.version }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { version } = await params
  const release = getReleaseByVersion(version)
  if (!release) return {}
  return {
    title: `EleViewer v${release.version} Release Notes — What's New`,
    description: `${release.tagline}. Full release notes for EleViewer v${release.version} released on ${release.date}.`,
    alternates: {
      canonical: `https://eleviewer.vercel.app/updates/${release.version}`,
    },
  }
}

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
}

export default async function ReleasePage({ params }: Props) {
  const { version } = await params
  const release = getReleaseByVersion(version)
  if (!release) notFound()

  const idx = RELEASES.findIndex((r) => r.version === version)
  const newer = idx > 0 ? RELEASES[idx - 1] : null
  const older = idx < RELEASES.length - 1 ? RELEASES[idx + 1] : null

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <div className="mx-auto flex w-full max-w-6xl flex-1 flex-col md:flex-row px-5">
        {/* ── Left Sidebar: Version Timeline ───────────────────────────── */}
        <aside
          aria-label="Version history"
          className="hidden md:block w-52 shrink-0 border-r border-border py-10 pr-6 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto"
        >
          <Link
            href="/updates"
            className="mb-4 flex items-center gap-1.5 font-mono text-[11px] font-semibold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="h-3 w-3" />
            All releases
          </Link>
          <nav className="flex flex-col gap-0.5">
            {RELEASES.map((r, i) => {
              const isActive = r.version === version
              const isLatest = i === 0
              return (
                <Link
                  key={r.version}
                  href={`/updates/${r.version}`}
                  className={`flex items-center justify-between rounded-md px-3 py-1.5 text-sm transition-colors ${
                    isActive
                      ? "bg-panel text-foreground font-semibold border border-border"
                      : "text-muted-foreground hover:bg-panel/50 hover:text-foreground"
                  }`}
                >
                  <span>v{r.version}</span>
                  {isLatest && !isActive && (
                    <span className="rounded-full bg-accent/20 px-1.5 py-0.5 font-mono text-[10px] text-accent">
                      Latest
                    </span>
                  )}
                </Link>
              )
            })}
            <a
              href={`${GITHUB_URL}/releases`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 flex items-center gap-1 rounded-md px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              GitHub Releases
              <ArrowRight className="h-3 w-3" />
            </a>
          </nav>
        </aside>

        {/* ── Main Content ──────────────────────────────────────────────── */}
        <main className="flex-1 min-w-0 py-10 md:pl-12">
          <BreadcrumbJsonLd items={[{ name: "EleViewer", url: "https://eleviewer.vercel.app/" }, { name: "Updates", url: "https://eleviewer.vercel.app/updates" }, { name: `Version ${release.version}`, url: `https://eleviewer.vercel.app/updates/${release.version}` }]} />
          {/* Back link on mobile */}
          <Link
            href="/updates"
            className="mb-6 flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors md:hidden"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            All releases
          </Link>

          {/* Version header */}
          <div className="mb-8">
            <div className="mb-3 flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-accent/40 bg-accent/10 px-3 py-1 font-mono text-xs font-semibold text-accent">
                v{release.version}
              </span>
              {idx === 0 && (
                <span className="rounded-full border border-border bg-panel px-2.5 py-0.5 font-mono text-[11px] text-muted-foreground">
                  Latest
                </span>
              )}
              <span className="flex items-center gap-1.5 font-mono text-xs text-muted-foreground">
                <Calendar className="h-3 w-3" />
                {formatDate(release.date)}
              </span>
            </div>
            <h1 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {release.tagline}
            </h1>

            {/* Download CTA */}
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`${GITHUB_URL}/releases/tag/v${release.version}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 items-center gap-2 rounded-md bg-primary px-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
              >
                <Download className="h-3.5 w-3.5" />
                Download v{release.version}
              </a>
              <a
                href={`${GITHUB_URL}/releases/tag/v${release.version}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 items-center gap-2 rounded-md border border-border bg-transparent px-4 text-sm font-medium text-foreground transition-colors hover:bg-panel"
              >
                View on GitHub
              </a>
            </div>
          </div>

          {/* Highlights */}
          <section className="mb-10">
            <h2 className="mb-4 text-lg font-semibold text-foreground">
              Highlights
            </h2>
            <ul className="space-y-3">
              {release.highlights.map((h) => (
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
          </section>

          <hr className="border-border" />

          {/* Full change details by section */}
          <div className="mt-10 space-y-10">
            {release.sections.map((section) => (
              <section key={section.title}>
                <h2 className="mb-4 flex items-center gap-2 text-base font-semibold text-foreground">
                  <span aria-hidden="true">{section.emoji}</span>
                  {section.title}
                </h2>
                <ul className="space-y-2">
                  {section.items.map((item, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-[14px] leading-relaxed text-muted-foreground"
                    >
                      <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>

          {/* Prev / Next navigation */}
          <div className="mt-16 flex flex-col gap-3 border-t border-border pt-8 sm:flex-row">
            {older && (
              <Link
                href={`/updates/${older.version}`}
                className="group flex flex-1 flex-col gap-1 rounded-lg border border-border bg-panel/40 p-4 transition-colors hover:bg-panel"
              >
                <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                  <ArrowLeft className="h-3 w-3" />
                  Older
                </span>
                <span className="text-sm font-semibold text-foreground">
                  v{older.version}
                </span>
                <span className="text-[12px] text-muted-foreground line-clamp-1">
                  {older.tagline}
                </span>
              </Link>
            )}
            {newer && (
              <Link
                href={`/updates/${newer.version}`}
                className="group flex flex-1 flex-col items-end gap-1 rounded-lg border border-border bg-panel/40 p-4 transition-colors hover:bg-panel text-right"
              >
                <span className="flex items-center gap-1 font-mono text-[11px] text-muted-foreground">
                  Newer
                  <ArrowRight className="h-3 w-3" />
                </span>
                <span className="text-sm font-semibold text-foreground">
                  v{newer.version}
                </span>
                <span className="text-[12px] text-muted-foreground line-clamp-1">
                  {newer.tagline}
                </span>
              </Link>
            )}
          </div>
        </main>
      </div>
      <SiteFooter />
    </div>
  )
}

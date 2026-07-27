import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { DOCS_TOPICS, getDocTopicBySlug } from "@/lib/docs-data";
import { ArrowLeft, ArrowRight, BookOpen, Terminal, CheckCircle2, AlertTriangle, Info, HelpCircle } from "lucide-react";

export async function generateStaticParams() {
  return DOCS_TOPICS.map((topic) => ({
    slug: topic.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getDocTopicBySlug(slug);
  if (!topic) {
    return { title: "Topic Not Found | EleViewer Docs" };
  }
  return {
    title: `${topic.title} | EleViewer Documentation`,
    description: topic.description,
  };
}

export default async function DocTopicPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const topic = getDocTopicBySlug(slug);

  if (!topic) {
    notFound();
  }

  const currentIndex = DOCS_TOPICS.findIndex((t) => t.slug === slug);
  const prevTopic = currentIndex > 0 ? DOCS_TOPICS[currentIndex - 1] : null;
  const nextTopic =
    currentIndex < DOCS_TOPICS.length - 1 ? DOCS_TOPICS[currentIndex + 1] : null;

  const getNoticeIcon = (type: string) => {
    switch (type) {
      case "warning":
        return <AlertTriangle className="h-4 w-4 text-foreground shrink-0" />;
      case "important":
        return <CheckCircle2 className="h-4 w-4 text-foreground shrink-0" />;
      case "tip":
        return <Terminal className="h-4 w-4 text-foreground shrink-0" />;
      default:
        return <Info className="h-4 w-4 text-foreground shrink-0" />;
    }
  };

  return (
    <div className="flex flex-col xl:flex-row gap-12">
      {/* Main Article Area */}
      <article className="flex-1 min-w-0 max-w-3xl flex flex-col gap-10">
        {/* Topic Header */}
        <div className="flex flex-col items-start gap-3 border-b border-border pb-8">
          <div className="flex items-center gap-2">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider hover:text-foreground transition-colors"
            >
              {topic.eyebrow}
            </Link>
            <span className="font-mono text-xs text-muted-foreground">
              / <Link href="/docs" className="hover:underline hover:text-foreground transition-colors">{topic.category}</Link>
            </span>
          </div>
          <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            {topic.title}
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed">
            {topic.description}
          </p>
        </div>

        {/* Content Sections */}
        <div className="flex flex-col gap-12">
          {topic.sections.map((section) => (
            <section
              key={section.id}
              id={section.id}
              className="flex flex-col gap-4 scroll-mt-20"
            >
              <h2 className="text-xl font-semibold tracking-tight text-foreground pb-2 border-b border-border/40">
                {section.title}
              </h2>

              {/* Paragraphs */}
              {section.paragraphs && (
                <div className="flex flex-col gap-3 text-sm text-muted-foreground leading-relaxed">
                  {section.paragraphs.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>
              )}

              {/* Code Block */}
              {section.code && (
                <div className="my-2 flex flex-col rounded-lg border border-border bg-panel overflow-hidden">
                  <div className="flex items-center justify-between border-b border-border px-4 py-2 bg-panel-2/50 font-mono text-[11px] text-muted-foreground">
                    <span>{section.code.language.toUpperCase()}</span>
                    <span>Atomic Operation</span>
                  </div>
                  <pre className="p-4 overflow-x-auto font-mono text-xs text-foreground leading-relaxed">
                    <code>{section.code.code}</code>
                  </pre>
                </div>
              )}

              {/* Table */}
              {section.table && (
                <div className="my-2 overflow-x-auto rounded-lg border border-border">
                  <table className="w-full border-collapse text-left text-sm">
                    <thead>
                      <tr className="border-b border-border bg-panel">
                        {section.table.headers.map((h, i) => (
                          <th
                            key={i}
                            className="px-4 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-foreground"
                          >
                            {h}
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-border/60">
                      {section.table.rows.map((row, rIdx) => (
                        <tr key={rIdx} className="hover:bg-panel/40 transition-colors">
                          {row.map((cell, cIdx) => (
                            <td
                              key={cIdx}
                              className={`px-4 py-3 text-muted-foreground ${
                                cIdx === 0 ? "font-mono font-medium text-foreground text-xs" : ""
                              }`}
                            >
                              {cell}
                            </td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

              {/* Notice Box */}
              {section.notice && (
                <div className="my-2 rounded-lg border border-border bg-panel/50 p-4 text-left font-mono text-xs text-muted-foreground leading-relaxed flex flex-col gap-1.5">
                  <div className="flex items-center gap-2 font-semibold text-foreground">
                    {getNoticeIcon(section.notice.type)}
                    <span>{section.notice.label}</span>
                  </div>
                  <div className="pl-6 text-muted-foreground">{section.notice.message}</div>
                </div>
              )}
            </section>
          ))}
        </div>

        {/* Article Pagination (Next / Previous) */}
        <div className="mt-8 pt-8 border-t border-border grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prevTopic ? (
            <Link
              href={`/docs/${prevTopic.slug}`}
              className="flex flex-col items-start justify-between rounded-lg border border-border bg-transparent p-4 transition-colors hover:bg-panel group"
            >
              <span className="flex items-center gap-1 font-mono text-[11px] font-medium text-muted-foreground uppercase tracking-wider group-hover:text-foreground">
                <ArrowLeft className="h-3.5 w-3.5" /> Previous Topic
              </span>
              <span className="mt-2 text-sm font-semibold text-foreground group-hover:text-accent transition-colors">
                {prevTopic.title}
              </span>
            </Link>
          ) : (
            <div />
          )}

          {nextTopic && (
            <Link
              href={`/docs/${nextTopic.slug}`}
              className="flex flex-col items-end justify-between rounded-lg border border-border bg-panel/30 p-4 transition-colors hover:bg-panel group sm:col-start-2"
            >
              <span className="flex items-center gap-1 font-mono text-[11px] font-medium text-muted-foreground uppercase tracking-wider group-hover:text-foreground">
                Next Topic <ArrowRight className="h-3.5 w-3.5" />
              </span>
              <span className="mt-2 text-sm font-semibold text-foreground group-hover:text-accent transition-colors text-right">
                {nextTopic.title}
              </span>
            </Link>
          )}
        </div>

        {/* Article Footer Inter-Linking Box */}
        <div className="rounded-lg border border-border bg-panel/40 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-semibold text-foreground text-sm">Ready to test EleViewer on your machine?</span>
            <span className="text-xs text-muted-foreground">Download the free, single-file Windows executable or submit feature requests directly to our dev team.</span>
          </div>
          <div className="flex items-center gap-3 shrink-0">
            <Link href="/download" className="flex h-9 items-center justify-center gap-1.5 rounded-md bg-primary px-4 text-xs font-medium text-primary-foreground hover:opacity-90 transition-opacity">
              Download Executable
            </Link>
            <Link href="/review" className="flex h-9 items-center justify-center gap-1.5 rounded-md border border-border bg-panel px-4 text-xs font-medium text-foreground hover:bg-panel-2 transition-colors">
              Feedback Hub
            </Link>
          </div>
        </div>
      </article>

      {/* Right Column: Sticky Table of Contents ("On This Page") */}
      <aside
        aria-label="Table of contents"
        className="hidden xl:block w-64 shrink-0 pl-6 border-l border-border/60 sticky top-20 h-[calc(100vh-6rem)] overflow-y-auto"
      >
        <div className="flex flex-col gap-3">
          <span className="font-mono text-[11px] font-semibold uppercase tracking-wider text-foreground flex items-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" /> On This Page
          </span>
          <nav className="flex flex-col gap-1.5 text-xs text-muted-foreground">
            {topic.sections.map((sec) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="py-1 hover:text-foreground transition-colors truncate block border-l-2 border-transparent hover:border-foreground pl-2 -ml-2"
              >
                {sec.title}
              </a>
            ))}
          </nav>
        </div>
      </aside>
    </div>
  );
}

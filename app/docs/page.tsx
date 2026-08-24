import Link from "next/link";
import { DOCS_CATEGORIES } from "@/lib/docs-data";
import { ArrowRight, BookOpen, Download, Terminal, Shield, Keyboard, FileText } from "lucide-react";
import { DOWNLOAD_URL } from "@/lib/links";

export const metadata = {
  title: "How to Start Studying with EleViewer | EleViewer",
  description: "Learn how to open course files, listen to PDFs, set up a local course folder, and return to your study session in EleViewer.",
};

export default function DocsOverviewPage() {
  const getCategoryIcon = (slug: string) => {
    switch (slug) {
      case "getting-started":
        return <Terminal className="h-5 w-5" />;
      case "workstations":
        return <FileText className="h-5 w-5" />;
      case "shortcuts":
        return <Keyboard className="h-5 w-5" />;
      case "security-and-data":
        return <Shield className="h-5 w-5" />;
      default:
        return <BookOpen className="h-5 w-5" />;
    }
  };

  return (
    <div className="flex flex-col gap-10 max-w-4xl">
      {/* Page Header */}
      <div className="flex flex-col items-start gap-4 border-b border-border pb-8">
        <span className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
          Beginner guide for Windows
        </span>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Start your first study session
        </h1>
        <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
          Download the portable app, open a course file, press F9 to listen to a reading, and add your course folder when you are ready. These short guides explain the everyday workflow without assuming technical knowledge.
        </p>
        <div className="flex flex-wrap items-center gap-4 pt-2">
          <Link
            href="/docs/overview"
            className="flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            Start the beginner guide <ArrowRight className="h-4 w-4" />
          </Link>
          <a
            href={DOWNLOAD_URL}
            className="flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:bg-panel"
          >
            <Download className="h-4 w-4" /> Download for Windows (~212 MB)
          </a>
        </div>
      </div>

      {/* Categories Overview Grid */}
      <div className="flex flex-col gap-6">
        <h2 className="text-xl font-semibold tracking-tight text-foreground">
          Choose what you want to do
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {DOCS_CATEGORIES.map((category) => (
            <div
              key={category.slug}
              className="flex flex-col justify-between rounded-lg border border-border bg-panel/30 p-6 transition-colors hover:bg-panel/60"
            >
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-panel text-foreground">
                    {getCategoryIcon(category.slug)}
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">
                    {category.title}
                  </h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {category.description}
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-border/60 flex flex-col gap-2">
                <span className="font-mono text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  Topics in this module:
                </span>
                <div className="flex flex-col gap-1.5">
                  {category.topics.map((topic) => (
                    <Link
                      key={topic.slug}
                      href={`/docs/${topic.slug}`}
                      className="flex items-center justify-between group py-1 text-sm text-foreground hover:text-accent transition-colors"
                    >
                      <span>{topic.title}</span>
                      <ArrowRight className="h-3.5 w-3.5 text-muted-foreground group-hover:text-accent transition-colors" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Offline Notice Box */}
      <div className="rounded-lg border border-border bg-panel/50 p-6 text-left font-mono text-xs text-muted-foreground leading-relaxed flex flex-col gap-2">
        <span className="font-semibold text-foreground text-sm flex items-center gap-2">
          ℹ️ Need help offline?
        </span>
        <p>
          The same beginner and reference guides are included with every EleViewer desktop release. Press <kbd className="rounded border border-border bg-background px-1.5 py-0.5 text-[11px] font-semibold text-foreground">F1</kbd> or open <strong className="text-foreground">Help → Getting Started Guide</strong> in EleViewer to read them without an internet connection.
        </p>
      </div>
    </div>
  );
}

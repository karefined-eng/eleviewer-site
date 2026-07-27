"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { DOCS_CATEGORIES } from "@/lib/docs-data";
import { BookOpen, Menu, X, ChevronRight, FileText } from "lucide-react";

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="mx-auto flex max-w-6xl flex-col md:flex-row min-h-[calc(100vh-3.5rem)] px-5">
      {/* Mobile Docs Header Bar */}
      <div className="flex items-center justify-between border-b border-border py-4 md:hidden">
        <Link
          href="/docs"
          className="flex items-center gap-2 font-mono text-xs font-semibold text-foreground uppercase tracking-wider"
        >
          <BookOpen className="h-4 w-4" />
          Documentation Navigation
        </Link>
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-8 w-8 items-center justify-center rounded-md border border-border bg-panel text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle docs navigation"
        >
          {isMobileMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isMobileMenuOpen && (
        <div className="border-b border-border bg-background py-6 md:hidden">
          <nav className="flex flex-col gap-6">
            <div>
              <Link
                href="/docs"
                onClick={() => setIsMobileMenuOpen(false)}
                className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                  pathname === "/docs"
                    ? "bg-panel text-foreground border border-border"
                    : "text-muted-foreground hover:bg-panel/50 hover:text-foreground"
                }`}
              >
                <BookOpen className="h-4 w-4" />
                Documentation Overview
              </Link>
            </div>
            {DOCS_CATEGORIES.map((cat) => (
              <div key={cat.slug} className="flex flex-col gap-1.5">
                <span className="px-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  {cat.title}
                </span>
                <div className="flex flex-col gap-0.5 pl-2 border-l border-border/60 ml-3">
                  {cat.topics.map((topic) => {
                    const topicPath = `/docs/${topic.slug}`;
                    const isActive = pathname === topicPath;
                    return (
                      <Link
                        key={topic.slug}
                        href={topicPath}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`flex items-center gap-2 rounded-md px-3 py-1.5 text-sm transition-colors ${
                          isActive
                            ? "bg-panel text-foreground font-medium border border-border"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                      >
                        <FileText className="h-3.5 w-3.5 shrink-0" />
                        <span className="truncate">{topic.title}</span>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </nav>
        </div>
      )}

      {/* Desktop Left Sidebar Navigation */}
      <aside
        aria-label="Documentation navigation"
        className="hidden md:block w-64 shrink-0 border-r border-border py-8 pr-6 sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto"
      >
        <nav className="flex flex-col gap-6">
          <div>
            <Link
              href="/docs"
              className={`flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium transition-colors ${
                pathname === "/docs"
                  ? "bg-panel text-foreground border border-border"
                  : "text-muted-foreground hover:bg-panel/50 hover:text-foreground"
              }`}
            >
              <BookOpen className="h-4 w-4" />
              Documentation Overview
            </Link>
          </div>

          {DOCS_CATEGORIES.map((cat) => (
            <div key={cat.slug} className="flex flex-col gap-2">
              <span className="px-3 font-mono text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                {cat.title}
              </span>
              <div className="flex flex-col gap-0.5">
                {cat.topics.map((topic) => {
                  const topicPath = `/docs/${topic.slug}`;
                  const isActive = pathname === topicPath;
                  return (
                    <Link
                      key={topic.slug}
                      href={topicPath}
                      className={`flex items-center justify-between rounded-md px-3 py-1.5 text-sm transition-colors ${
                        isActive
                          ? "bg-panel text-foreground font-medium border border-border"
                          : "text-muted-foreground hover:bg-panel/50 hover:text-foreground"
                      }`}
                    >
                      <span className="truncate">{topic.title}</span>
                      {isActive && <ChevronRight className="h-3.5 w-3.5 shrink-0" />}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
        </nav>
      </aside>

      {/* Main Content Area */}
      <main className="flex-1 min-w-0 py-8 md:pl-10">{children}</main>
    </div>
  );
}

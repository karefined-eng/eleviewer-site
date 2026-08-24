import { MessageSquare, Vote, Zap, ArrowRight } from "lucide-react";

export function NightlyExplainer() {
  return (
    <section className="py-20 relative overflow-hidden bg-background border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-border bg-panel/30 p-8 md:p-12 shadow-sm relative">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider mb-4">
              Optional next step
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Help shape what Eleviewer becomes next
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed sm:text-lg">
              Once you have tried the core workflow, Nightly Insiders is an optional community for students, power users, and developers who want to test new builds, report issues, and suggest features. You can use EleViewer without joining, and the public release remains the simplest place to start.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col gap-2 rounded-lg border border-border/60 bg-background/60 p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border/60 bg-panel text-foreground">
                  <Zap className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">Early Access</h3>
                <p className="text-xs text-muted-foreground">Test unreleased builds and new document format previews before they reach the general public.</p>
              </div>

              <div className="flex flex-col gap-2 rounded-lg border border-border/60 bg-background/60 p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border/60 bg-panel text-foreground">
                  <Vote className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">Feature Voting</h3>
                <p className="text-xs text-muted-foreground">Participate in community polls to influence which features are prioritized next.</p>
              </div>

              <div className="flex flex-col gap-2 rounded-lg border border-border/60 bg-background/60 p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-md border border-border/60 bg-panel text-foreground">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">Direct Access</h3>
                <p className="text-xs text-muted-foreground">Chat directly with the core developer, share feedback, and get fast support during active hours.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/community"
                className="flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 shadow-sm"
              >
                Explore the community
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-xs text-muted-foreground font-mono">
                Optional · Join only if useful
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

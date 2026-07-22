import { MessageSquare, Vote, Zap, ArrowRight } from "lucide-react"

export function NightlyExplainer() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-background via-secondary/20 to-background border-t border-border/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-accent/20 bg-gradient-to-br from-accent/5 via-secondary/50 to-background p-8 md:p-12 shadow-2xl relative">
          <div className="absolute top-0 right-0 -translate-y-12 translate-x-12 w-64 h-64 bg-accent/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs font-mono font-semibold text-accent mb-4">
              🚀 COMMUNITY PROGRAM
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              What is <span className="text-accent">Nightly Insiders</span>?
            </h2>
            <p className="mt-4 text-base text-muted-foreground leading-relaxed sm:text-lg">
              Nightly Insiders is our official early-access community of students, power users, and developers who help shape the future of EleViewer. Instead of waiting for major public releases, Insiders get bleeding-edge updates and direct input into development.
            </p>

            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              <div className="flex flex-col gap-2 rounded-lg border border-border/60 bg-background/60 p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <Zap className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">Early Access</h3>
                <p className="text-xs text-muted-foreground">Test unreleased builds and new document format previews before anyone else.</p>
              </div>

              <div className="flex flex-col gap-2 rounded-lg border border-border/60 bg-background/60 p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400">
                  <Vote className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">Feature Voting</h3>
                <p className="text-xs text-muted-foreground">Participate in community polls to vote directly on what features get built next.</p>
              </div>

              <div className="flex flex-col gap-2 rounded-lg border border-border/60 bg-background/60 p-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-500/10 text-purple-400">
                  <MessageSquare className="h-4 w-4" />
                </div>
                <h3 className="font-semibold text-sm text-foreground">Direct Access</h3>
                <p className="text-xs text-muted-foreground">Chat directly with the core developer, share feedback, and get instant support.</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="https://chat.whatsapp.com/FeofuieK0Ae51KdUZEvwTQ"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-600 px-5 py-3 font-mono text-sm font-semibold text-white transition-all hover:bg-emerald-500 hover:shadow-lg hover:shadow-emerald-600/20"
              >
                Join Nightly Insiders on WhatsApp
                <ArrowRight className="h-4 w-4" />
              </a>
              <span className="text-xs text-muted-foreground font-mono">
                100% free · Opt-in anytime
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

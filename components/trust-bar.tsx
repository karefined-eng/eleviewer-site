import { ShieldCheck, Terminal, Users, Sparkles } from "lucide-react"

export function TrustBar() {
  return (
    <section className="border-y border-border/40 bg-secondary/30 backdrop-blur-md py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
          <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 p-3 shadow-sm transition-transform hover:-translate-y-0.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-accent/10 text-accent">
              <Terminal className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-foreground">Winget Verified</p>
              <p className="text-[11px] text-muted-foreground">Official Windows package</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 p-3 shadow-sm transition-transform hover:-translate-y-0.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-emerald-500/10 text-emerald-400">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-foreground">100% Offline</p>
              <p className="text-[11px] text-muted-foreground">Zero tracking or ads</p>
            </div>
          </div>

          <div className="flex items-center gap-[#333] gap-3 rounded-lg border border-border/50 bg-background/50 p-3 shadow-sm transition-transform hover:-translate-y-0.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-purple-500/10 text-purple-400">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-foreground">Nightly Insiders</p>
              <p className="text-[11px] text-muted-foreground">Active WhatsApp Hub</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 p-3 shadow-sm transition-transform hover:-translate-y-0.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-amber-500/10 text-amber-400">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-foreground">Lightning Fast</p>
              <p className="text-[11px] text-muted-foreground">Native PySide6 engine</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

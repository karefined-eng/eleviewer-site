import { ShieldCheck, HardDrive, Users, Sparkles } from "lucide-react"

export function TrustBar() {
  return (
    <section className="border-y border-border/40 bg-panel/30 backdrop-blur-md py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 p-3 shadow-sm transition-transform hover:-translate-y-0.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border/60 bg-panel text-foreground">
              <HardDrive className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-foreground">Portable Windows app</p>
              <p className="text-[11px] text-muted-foreground">One .exe, no admin rights required</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 p-3 shadow-sm transition-transform hover:-translate-y-0.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border/60 bg-panel text-foreground">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-foreground">Private by default</p>
              <p className="text-[11px] text-muted-foreground">Your documents stay on your computer</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 p-3 shadow-sm transition-transform hover:-translate-y-0.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border/60 bg-panel text-foreground">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-foreground">Built with users</p>
              <p className="text-[11px] text-muted-foreground">Join the early-access feedback group</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 p-3 shadow-sm transition-transform hover:-translate-y-0.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border/60 bg-panel text-foreground">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-foreground">Fast and focused</p>
              <p className="text-[11px] text-muted-foreground">Native Windows UI without Electron</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

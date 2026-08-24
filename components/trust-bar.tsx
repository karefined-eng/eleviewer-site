import { ShieldCheck, HardDrive, Sparkles } from "lucide-react"
import { GitHubIcon } from "./github-icon"

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
              <GitHubIcon className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-foreground">Open source</p>
              <p className="text-[11px] text-muted-foreground">Read the code and follow development</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 p-3 shadow-sm transition-transform hover:-translate-y-0.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border/60 bg-panel text-foreground">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-foreground">Ready for Windows</p>
              <p className="text-[11px] text-muted-foreground">Runs locally on Windows 10/11</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

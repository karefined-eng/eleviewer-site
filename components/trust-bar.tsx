"use client";

import { useState } from "react";
import { ShieldCheck, Terminal, Users, Sparkles, Check, Copy } from "lucide-react";

export function TrustBar() {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText("winget install karefined-eng.EleViewer");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section className="border-y border-border/40 bg-panel/30 backdrop-blur-md py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
          <div className="flex flex-col gap-2 rounded-lg border border-border/50 bg-background/50 p-3 shadow-sm transition-transform hover:-translate-y-0.5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border/60 bg-panel text-foreground">
                <Terminal className="h-5 w-5" />
              </div>
              <div>
                <p className="font-mono text-xs font-bold text-foreground">Winget Verified</p>
                <p className="text-[11px] text-muted-foreground">Official Windows package</p>
              </div>
            </div>
            <div className="mt-1 flex items-center justify-between gap-2 rounded border border-border/60 bg-panel/40 px-2 py-1 font-mono text-[11px] text-muted-foreground">
              <code className="truncate select-all">winget install karefined-eng.EleViewer</code>
              <button
                onClick={handleCopy}
                className="flex items-center gap-1 text-[10px] text-foreground hover:underline"
                aria-label="Copy winget command"
              >
                {copied ? <Check className="h-3 w-3 text-foreground" /> : <Copy className="h-3 w-3" />}
                {copied ? "Copied" : "Copy"}
              </button>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 p-3 shadow-sm transition-transform hover:-translate-y-0.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border/60 bg-panel text-foreground">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-foreground">Works fully offline</p>
              <p className="text-[11px] text-muted-foreground">All features run locally on Windows 10/11; no ads or tracking</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 p-3 shadow-sm transition-transform hover:-translate-y-0.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border/60 bg-panel text-foreground">
              <Users className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-foreground">Nightly Insiders early-access builds</p>
              <p className="text-[11px] text-muted-foreground">Active WhatsApp community group for support and feedback</p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-lg border border-border/50 bg-background/50 p-3 shadow-sm transition-transform hover:-translate-y-0.5">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-border/60 bg-panel text-foreground">
              <Sparkles className="h-5 w-5" />
            </div>
            <div>
              <p className="font-mono text-xs font-bold text-foreground">Native PySide6</p>
              <p className="text-[11px] text-muted-foreground">No Electron overhead</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

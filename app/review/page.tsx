"use client"

import { useState, useEffect } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Check, Send, AlertCircle, MessageSquare, Terminal } from "lucide-react"

type Category = "Bug Report" | "Feature Request" | "General Feedback"

export default function ReviewPage() {
  const [category, setCategory] = useState<Category>("Feature Request")
  
  // Bug Report State
  const [bugAction, setBugAction] = useState("")
  const [bugExpected, setBugExpected] = useState("")
  const [bugActual, setBugActual] = useState("")
  
  // Feature Request State
  const [featureProblem, setFeatureProblem] = useState("")
  const [featureSolution, setFeatureSolution] = useState("")
  
  // General Feedback State
  const [generalFeedback, setGeneralFeedback] = useState("")

  // Form Status
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  // Auto-detect environment context smoothly (only on client)
  const [userAgentInfo, setUserAgentInfo] = useState("Unknown Browser")
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserAgentInfo(window.navigator.userAgent)
    }
  }, [])

  const isFormValid = () => {
    if (category === "Bug Report") return bugAction.trim() && bugExpected.trim() && bugActual.trim()
    if (category === "Feature Request") return featureProblem.trim() && featureSolution.trim()
    return generalFeedback.trim()
  }

  const generateDescription = () => {
    if (category === "Bug Report") {
      return `**What did you click or try to do?**\n${bugAction}\n\n**What were you expecting to happen?**\n${bugExpected}\n\n**What actually broke or went wrong?**\n${bugActual}`
    }
    if (category === "Feature Request") {
      return `**What's missing in EleViewer for your studies?**\n${featureProblem}\n\n**How would you want this feature to work?**\n${featureSolution}`
    }
    return generalFeedback
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!isFormValid()) return

    setIsSubmitting(true)
    setStatus("idle")
    setErrorMessage("")

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: category,
          description: generateDescription(),
          version: "Web Form",
          os_name: "Web Browser",
          platform: userAgentInfo,
        }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus("success")
        // Reset specific fields
        if (category === "Bug Report") {
          setBugAction("")
          setBugExpected("")
          setBugActual("")
        } else if (category === "Feature Request") {
          setFeatureProblem("")
          setFeatureSolution("")
        } else {
          setGeneralFeedback("")
        }
      } else {
        setStatus("error")
        setErrorMessage(data.error || "Failed to send submission. Please try again.")
      }
    } catch (err) {
      setStatus("error")
      setErrorMessage("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground selection:bg-accent/30 selection:text-accent">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-3xl px-5 py-16 sm:py-24 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider shadow-sm">
            Direct Developer Inbox
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            How can we improve your study flow?
          </h1>
          <p className="text-muted-foreground text-[15px] leading-relaxed max-w-xl mx-auto">
            Your feedback bypasses the noise and goes directly into our GitHub repository. We review everything to build what you actually need.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-panel/50 backdrop-blur-sm p-6 sm:p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] max-w-xl mx-auto">
          {status === "success" ? (
            <div className="py-10 text-center space-y-5 animate-in fade-in zoom-in duration-500">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full border-2 border-accent/20 bg-accent/10 text-accent shadow-inner">
                <Check className="h-7 w-7" />
              </div>
              <h2 className="text-2xl font-semibold text-foreground tracking-tight">Transmission Received</h2>
              <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                Thank you! Your feedback has been securely routed directly to our GitHub Issues for the developer to review.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-6 inline-flex h-11 items-center justify-center rounded-lg border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-all hover:bg-foreground hover:text-background focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-300">
              <div className="space-y-3">
                <label className="block text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
                  1. What kind of feedback?
                </label>
                <div className="flex rounded-lg bg-background/50 p-1 border border-border">
                  {(["Bug Report", "Feature Request", "General Feedback"] as Category[]).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      className={`flex-1 flex items-center justify-center py-2.5 px-3 rounded-md font-medium text-sm transition-all duration-200 ${
                        category === cat
                          ? "bg-panel text-foreground shadow-sm ring-1 ring-border"
                          : "text-muted-foreground hover:text-foreground hover:bg-panel/40"
                      }`}
                    >
                      {cat === "Bug Report" ? "Bug Report" : cat === "Feature Request" ? "Feature Request" : "General"}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4 animate-in slide-in-from-bottom-2 fade-in duration-300">
                <label className="block text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  2. The Details
                </label>

                {category === "Bug Report" && (
                  <div className="space-y-4">
                    <div>
                      <p className="text-[13px] font-medium mb-1.5 text-foreground/80">What did you click or try to do?</p>
                      <textarea
                        value={bugAction}
                        onChange={(e) => setBugAction(e.target.value)}
                        rows={2}
                        required
                        placeholder="e.g. I pressed Ctrl+T to open the web panel..."
                        className="w-full rounded-lg border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none"
                      />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium mb-1.5 text-foreground/80">What were you expecting to happen?</p>
                      <textarea
                        value={bugExpected}
                        onChange={(e) => setBugExpected(e.target.value)}
                        rows={2}
                        required
                        placeholder="e.g. The web panel should open on the right side."
                        className="w-full rounded-lg border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none"
                      />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium mb-1.5 text-foreground/80">What actually broke or went wrong?</p>
                      <textarea
                        value={bugActual}
                        onChange={(e) => setBugActual(e.target.value)}
                        rows={2}
                        required
                        placeholder="e.g. The app crashed completely and closed."
                        className="w-full rounded-lg border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none"
                      />
                    </div>
                  </div>
                )}

                {category === "Feature Request" && (
                  <div className="space-y-4">
                    <div>
                      <p className="text-[13px] font-medium mb-1.5 text-foreground/80">What's missing in EleViewer for your studies?</p>
                      <textarea
                        value={featureProblem}
                        onChange={(e) => setFeatureProblem(e.target.value)}
                        rows={3}
                        required
                        placeholder="e.g. I study late at night and the current white borders hurt my eyes."
                        className="w-full rounded-lg border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none"
                      />
                    </div>
                    <div>
                      <p className="text-[13px] font-medium mb-1.5 text-foreground/80">How would you want this feature to work?</p>
                      <textarea
                        value={featureSolution}
                        onChange={(e) => setFeatureSolution(e.target.value)}
                        rows={3}
                        required
                        placeholder="e.g. Add a 'True Black' AMOLED theme in the settings."
                        className="w-full rounded-lg border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none"
                      />
                    </div>
                  </div>
                )}

                {category === "General Feedback" && (
                  <div className="space-y-4">
                    <p className="text-[13px] font-medium mb-1.5 text-foreground/80">Tell us what you think...</p>
                    <textarea
                      value={generalFeedback}
                      onChange={(e) => setGeneralFeedback(e.target.value)}
                      rows={5}
                      required
                      placeholder="Share how EleViewer fits into your study routine..."
                      className="w-full rounded-lg border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none"
                    />
                  </div>
                )}
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-xs font-medium text-red-400">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div className="pt-2 border-t border-border/50">
                <button
                  type="submit"
                  disabled={isSubmitting || !isFormValid()}
                  className="group relative flex h-12 w-full items-center justify-center gap-2 rounded-lg bg-foreground text-sm font-semibold text-background transition-all hover:bg-foreground/90 disabled:opacity-50 disabled:cursor-not-allowed focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-background overflow-hidden"
                >
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                  <Send className={`h-4 w-4 transition-transform ${isSubmitting ? "translate-x-1 -translate-y-1 opacity-0" : "group-hover:translate-x-1 group-hover:-translate-y-1"}`} />
                  <span className="relative">
                    {isSubmitting ? "Transmitting to GitHub..." : "Submit to Developer"}
                  </span>
                </button>
                <p className="mt-4 text-center font-mono text-[11px] text-muted-foreground/70">
                  Submitting anonymously · No account or email required
                </p>
              </div>
            </form>
          )}
        </div>

        <div className="mt-16 text-center max-w-xl mx-auto">
          <p className="text-xs text-muted-foreground mb-4">
            Prefer to use GitHub directly? Open an issue or join a discussion on our open-source repository.
          </p>
          <div className="flex justify-center gap-5">
            <a
              href="https://github.com/karefined-eng/eleviewer/issues/new/choose"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              <Terminal className="h-3.5 w-3.5" />
              GitHub Issues
            </a>
            <a
              href="https://github.com/karefined-eng/eleviewer/discussions"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[11px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              GitHub Discussions
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

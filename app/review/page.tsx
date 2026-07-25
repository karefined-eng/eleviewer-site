"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Check, Send, AlertCircle, MessageSquare, Terminal } from "lucide-react"

type Category = "Bug Report" | "Feature Request" | "General Feedback"

export default function ReviewPage() {
  const [category, setCategory] = useState<Category>("Feature Request")
  const [description, setDescription] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const getPlaceholder = () => {
    switch (category) {
      case "Bug Report":
        return "1. What you clicked...\n2. What you expected to happen...\n3. What actually happened..."
      case "Feature Request":
        return "Describe the study workflow or document format you want to streamline..."
      case "General Feedback":
        return "Tell us how EleViewer fits into your study routine or lab sessions..."
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!description.trim()) return

    setIsSubmitting(true)
    setStatus("idle")
    setErrorMessage("")

    try {
      const res = await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          type: category,
          description,
          version: "Web Intake",
          os_name: "Web Browser",
          platform: typeof window !== "undefined" ? window.navigator.userAgent : "Unknown",
        }),
      })

      const data = await res.json()

      if (res.ok && data.success) {
        setStatus("success")
        setDescription("")
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
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 mx-auto max-w-3xl px-5 py-16 sm:py-24 w-full">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider">
            Direct Developer Intake
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            Is there something you wish EleViewer could do?
          </h1>
          <p className="text-muted-foreground text-[15px] leading-relaxed max-w-xl mx-auto">
            Share your idea directly with the developer — every submission is reviewed for our upcoming builds.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-panel p-6 sm:p-8 shadow-sm max-w-xl mx-auto">
          {status === "success" ? (
            <div className="py-8 text-center space-y-4">
              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-border bg-background text-foreground">
                <Check className="h-6 w-6 text-accent" />
              </div>
              <h2 className="text-xl font-semibold text-foreground">Submission Received</h2>
              <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed font-mono">
                Thank you. Your feedback has been routed directly to our GitHub Issues repository for developer review.
              </p>
              <button
                onClick={() => setStatus("idle")}
                className="mt-4 inline-flex h-11 items-center justify-center rounded-lg border border-border bg-transparent px-6 text-sm font-medium text-foreground transition-colors hover:bg-panel-2"
              >
                Send Another Note
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  1. Select Category
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(["Bug Report", "Feature Request", "General Feedback"] as Category[]).map((cat) => (
                    <button
                      key={cat}
                      type="button"
                      onClick={() => setCategory(cat)}
                      className={`flex items-center justify-center py-2.5 px-3 rounded-lg border font-mono text-xs font-medium transition-colors ${
                        category === cat
                          ? "border-foreground bg-foreground text-background"
                          : "border-border bg-background text-muted-foreground hover:text-foreground hover:bg-panel-2"
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider mb-2">
                  2. Your Message
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  rows={6}
                  required
                  placeholder={getPlaceholder()}
                  className="w-full rounded-lg border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:border-foreground focus:outline-none focus:ring-1 focus:ring-foreground transition-colors font-mono"
                />
              </div>

              {status === "error" && (
                <div className="flex items-center gap-2 rounded-lg border border-border bg-background p-3 text-xs font-mono text-muted-foreground">
                  <AlertCircle className="h-4 w-4 shrink-0 text-foreground" />
                  <span>{errorMessage}</span>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isSubmitting || !description.trim()}
                  className="flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-primary px-6 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
                >
                  <Send className="h-4 w-4" />
                  {isSubmitting ? "Transmitting..." : "Submit to Developer"}
                </button>
                <p className="mt-3 text-center font-mono text-[11px] text-muted-foreground">
                  Submitting anonymously · No account or email required
                </p>
              </div>
            </form>
          )}
        </div>

        <div className="mt-12 text-center border-t border-border/40 pt-8 max-w-xl mx-auto">
          <p className="text-xs text-muted-foreground mb-4">
            Prefer GitHub? Open an issue or discussion directly on our open-source repository.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="https://github.com/karefined-eng/eleviewer/issues/new/choose"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-foreground hover:underline"
            >
              <Terminal className="h-3.5 w-3.5 text-accent" />
              GitHub Issues
            </a>
            <a
              href="https://github.com/karefined-eng/eleviewer/discussions"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-xs text-foreground hover:underline"
            >
              <MessageSquare className="h-3.5 w-3.5 text-accent" />
              GitHub Discussions
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}

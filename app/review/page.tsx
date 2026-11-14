"use client"

import { useState } from "react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { Check, Send, AlertCircle, MessageSquare, Terminal } from "lucide-react"
import { EDITORIAL_UPDATED_AT, EDITORIAL_UPDATED_LABEL } from "@/lib/editorial"
import { GITHUB_PROFILE_URL, GITHUB_URL, LATEST_RELEASE_VERSION } from "@/lib/links"
import { getReleaseByVersion } from "@/lib/releases-data"

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
            platform: "Browser",
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
      <main id="main-content" className="flex-1 mx-auto max-w-3xl px-5 py-16 sm:py-24 w-full">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Article",
              headline: "How can we improve your study flow? — EleViewer Feedback Hub",
              description: "Send feedback directly to the EleViewer developer. Bug reports, feature requests, and general feedback for the portable Windows study workspace.",
              url: "https://eleviewer.vercel.app/review",
              datePublished: EDITORIAL_UPDATED_AT,
              dateModified: EDITORIAL_UPDATED_AT,
              image: "https://eleviewer.vercel.app/opengraph-image",
              author: {
                "@type": "Person",
                "@id": `${GITHUB_PROFILE_URL}#person`,
                name: "karefined-eng",
                url: GITHUB_PROFILE_URL,
                worksFor: { "@id": "https://eleviewer.vercel.app/#organization" },
              },
              publisher: { "@id": "https://eleviewer.vercel.app/#organization" },
              mainEntityOfPage: { "@id": "https://eleviewer.vercel.app/review" },
            }),
          }}
        />
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-panel px-3 py-1 font-mono text-xs font-medium text-muted-foreground uppercase tracking-wider shadow-sm">
            Direct Developer Inbox
          </p>
          <h1 className="text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
            How can we improve your study flow?
          </h1>
          <p className="text-muted-foreground text-[15px] leading-relaxed max-w-xl mx-auto">
            Your feedback is sent to our GitHub repository so the developer can review it. Please do not include passwords, private document content, or personal information. We review submissions to improve common study workflows and pain points.
          </p>
        </div>

        <div className="rounded-xl border border-border bg-panel/50 backdrop-blur-sm p-6 sm:p-8 shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)] max-w-xl mx-auto">
          <div className="mb-6 border-b border-border pb-5">
            <h2 className="text-lg font-semibold text-foreground">What can you share?</h2>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
              <li>Report a bug that blocks your study session.</li>
              <li>Suggest a feature for reading or organizing course files.</li>
              <li>Share a workflow that could be easier or clearer.</li>
            </ul>
          </div>
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
            <form method="post" onSubmit={handleSubmit} className="space-y-8 animate-in fade-in duration-300">
              <label htmlFor="website" className="sr-only">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" aria-hidden="true" className="absolute -left-[9999px] h-px w-px opacity-0" />
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
                      <label htmlFor="bug-action" className="text-[13px] font-medium mb-1.5 text-foreground/80">What did you click or try to do?</label>
                      <textarea
                        id="bug-action"
                        value={bugAction}
                        onChange={(e) => setBugAction(e.target.value)}
                        rows={2}
                        required
                        placeholder="e.g. I pressed Ctrl+T to open the web panel..."
                        className="w-full rounded-lg border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="bug-expected" className="text-[13px] font-medium mb-1.5 text-foreground/80">What were you expecting to happen?</label>
                      <textarea
                        id="bug-expected"
                        value={bugExpected}
                        onChange={(e) => setBugExpected(e.target.value)}
                        rows={2}
                        required
                        placeholder="e.g. The web panel should open on the right side."
                        className="w-full rounded-lg border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="bug-actual" className="text-[13px] font-medium mb-1.5 text-foreground/80">What actually broke or went wrong?</label>
                      <textarea
                        id="bug-actual"
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
                      <label htmlFor="feature-problem" className="block text-[13px] font-medium mb-1.5 text-foreground/80">What's missing in EleViewer for your studies?</label>
                      <textarea
                        id="feature-problem"
                        value={featureProblem}
                        onChange={(e) => setFeatureProblem(e.target.value)}
                        rows={3}
                        required
                        placeholder="e.g. I study late at night and the current white borders hurt my eyes."
                        className="w-full rounded-lg border border-border bg-background p-3 text-sm text-foreground placeholder:text-muted-foreground/40 focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent transition-all resize-none"
                      />
                    </div>
                    <div>
                      <label htmlFor="feature-solution" className="block text-[13px] font-medium mb-1.5 text-foreground/80">How would you want this feature to work?</label>
                      <textarea
                        id="feature-solution"
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
                    <label htmlFor="general-feedback" className="block text-[13px] font-medium mb-1.5 text-foreground/80">Tell us what you think...</label>
                    <textarea
                      id="general-feedback"
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
                <div className="flex items-center gap-2 rounded-lg border border-border bg-panel p-4 font-mono text-sm text-muted-foreground">
                  <AlertCircle className="h-4 w-4 shrink-0 text-accent" />
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
                <p className="mt-4 text-center font-mono text-[12px] text-muted-foreground/70">
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
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              <Terminal className="h-3.5 w-3.5" />
              GitHub Issues
            </a>
            <a
              href="https://github.com/karefined-eng/eleviewer/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-[12px] uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
            >
              <MessageSquare className="h-3.5 w-3.5" />
              GitHub Discussions
            </a>
          </div>
        </div>
      </main>

      <section className="mx-auto max-w-3xl px-5 pb-16">
        <aside
          aria-label="Author, update date, and product sources"
          className="mt-12 rounded-lg border border-border bg-panel/50 p-5 text-sm leading-6 text-muted-foreground"
        >
          <div className="flex flex-wrap gap-x-4 gap-y-1 font-mono text-xs">
            <span>
              By{" "}
              <a
                href={GITHUB_PROFILE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-foreground underline underline-offset-4 hover:text-accent"
              >
                Karefined
              </a>
              , EleViewer maintainer
            </span>
            <time dateTime={EDITORIAL_UPDATED_AT}>
              Updated {EDITORIAL_UPDATED_LABEL}
            </time>
          </div>
          <p className="mt-3">
            EleViewer is a portable app for Windows 10 and 11. It opens PDF, DOCX,
            XLSX, PPTX, Markdown, CSV, HTML, and TXT files. The portable download is
            about 135 MB. These facts describe the desktop app; this website uses
            separate analytics.
          </p>
          <p className="mt-3">
            Sources:{" "}
            <a
              href={`${GITHUB_URL}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              GitHub project and source
            </a>
            {" · "}
            <a
              href="/docs"
              className="underline underline-offset-4 hover:text-foreground"
            >
              product documentation
            </a>
            {" · "}
            <a
              href={`${GITHUB_URL}/releases/tag/v${LATEST_RELEASE_VERSION}`}
              target="_blank"
              rel="noopener noreferrer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              v{LATEST_RELEASE_VERSION} release
            </a>
            {" · "}
            <a
              href="/privacy/local-document-viewer"
              className="underline underline-offset-4 hover:text-foreground"
            >
              desktop privacy details
            </a>
          </p>
        </aside>
      </section>

      <SiteFooter />
    </div>
  )
}

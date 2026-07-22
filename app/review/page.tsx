import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"

export default function ReviewPage() {
  return (
    <>
      <SiteHeader />
      <main className="mx-auto max-w-3xl px-5 py-24 sm:py-32">
        <div className="text-center">
          <h1 className="text-balance text-3xl font-semibold tracking-tight text-foreground sm:text-4xl mb-4">
            Leave a Review 🌟
          </h1>
          <p className="text-muted-foreground mb-8 text-[15px] leading-relaxed max-w-xl mx-auto">
            Has EleViewer helped you study better? We'd love to hear your story! Your testimonials help us grow and reach more students.
          </p>
          
          <div className="bg-panel border border-border rounded-xl p-8 max-w-lg mx-auto text-center shadow-lg">
            <h2 className="text-lg font-medium text-foreground mb-2">Share Your Experience</h2>
            <p className="text-sm text-muted-foreground mb-6">
              We collect reviews via our GitHub Discussions page so everyone can see how the app helps real students.
            </p>
            <a
              href="https://github.com/karefined-eng/eleviewer/discussions/new?category=show-and-tell"
              target="_blank"
              rel="noreferrer"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-primary px-8 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90 w-full sm:w-auto"
            >
              Post a Review on GitHub
            </a>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}

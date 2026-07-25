import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { InteractiveDemo } from "@/components/interactive-demo"

export default function DemoPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="mx-auto max-w-6xl px-5 py-12 md:py-20">
          <div className="mb-10 text-center">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Try EleViewer Live
            </h1>
            <p className="mt-4 text-muted-foreground">
              Experience the interface and try out the Text-to-Speech engine right in your browser.
            </p>
          </div>
          
          <div className="mx-auto max-w-5xl">
            <InteractiveDemo />
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}

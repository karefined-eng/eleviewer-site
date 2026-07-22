import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { TrustBar } from "@/components/trust-bar"
import { Formats } from "@/components/formats"
import { Features } from "@/components/features"
import { Shortcuts } from "@/components/shortcuts"
import { OpenSource } from "@/components/open-source"
import { UseCases } from "@/components/use-cases"
import { NightlyExplainer } from "@/components/nightly-explainer"
import { FAQ } from "@/components/faq"
import { DownloadCta } from "@/components/download-cta"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <TrustBar />
        <Formats />
        <UseCases />
        <Features />
        <Shortcuts />
        <NightlyExplainer />
        <OpenSource />
        <FAQ />
        <DownloadCta />
      </main>
      <SiteFooter />
    </>
  )
}

import { Nav } from "@/components/Nav";
import { SiteFooter } from "@/components/SiteFooter";
import { StickyMobileFooter } from "@/components/StickyMobileFooter";
import { AccidentTypeSelector } from "@/components/sections/AccidentTypeSelector";
import { MarqueeBanner } from "@/components/sections/MarqueeBanner";
import { TrustBar } from "@/components/sections/TrustBar";
import { EmotionalHook } from "@/components/sections/EmotionalHook";
import { Faq } from "@/components/sections/Faq";
import { FinalCta } from "@/components/sections/FinalCta";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Mistakes } from "@/components/sections/Mistakes";
import { Testimonials } from "@/components/sections/Testimonials";
import { UrgencyBlock } from "@/components/sections/UrgencyBlock";

export default function Home() {
  return (
    <>
      <Nav />
      <main className="pb-24 md:pb-0">
        <Hero />
        <MarqueeBanner />
        <TrustBar />
        <AccidentTypeSelector />
        <EmotionalHook />
        <UrgencyBlock />
        <Mistakes />
        <HowItWorks />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
      <StickyMobileFooter />
    </>
  );
}

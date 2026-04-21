"use client";

import { ScrollReveal } from "@/components/ScrollReveal";
import { MarqueeBanner } from "@/components/sections/MarqueeBanner";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-100 pb-12 pt-28 md:pb-16 md:pt-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(220,38,38,0.08) 0%, transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute bottom-0 left-8 right-8 h-px section-edge-glow opacity-40" />

      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center md:px-8">
        <ScrollReveal delay={0.05}>
          <h1 className="font-display text-balance-safe text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.92] tracking-[0.02em] text-gray-900">
            Injured in an Accident?
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mx-auto mt-4 max-w-xl text-pretty text-lg font-medium leading-relaxed text-gray-500 md:text-xl">
            Get free help understanding your options. Fast. Confidential. No
            obligation.
          </p>
        </ScrollReveal>
      </div>

      <div className="relative z-10 mt-7 w-full">
        <MarqueeBanner />
      </div>
    </section>
  );
}

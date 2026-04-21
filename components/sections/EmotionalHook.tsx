"use client";

import { PHONE_NUMBER } from "@/lib/constants";
import { ScrollReveal, ScrollRevealSection } from "@/components/ScrollReveal";

export function EmotionalHook() {
  return (
    <ScrollRevealSection className="relative border-t border-white/[0.06] bg-surface-navy px-4 py-16 md:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-accent/80 via-amber-accent/20 to-transparent md:w-1.5" />
      <div className="relative mx-auto max-w-7xl md:pl-8">
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-accent">
              You&apos;re not alone
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[0.02em] text-white">
              This happens every day. Most people don&apos;t know what to do
              next.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="mt-8 max-read text-pretty text-base leading-relaxed text-gray-300 md:max-w-2xl md:text-lg">
              You may be dealing with pain, missed work, and pressure from
              insurance companies calling before you&apos;ve even seen a doctor.
              You don&apos;t have to figure this out alone.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="group mt-10 inline-flex min-h-[52px] items-center gap-2 border-b-2 border-amber-accent/40 pb-1 text-base font-semibold text-amber-accent transition-colors hover:border-amber-accent hover:text-amber-300 md:text-lg"
            >
              Talk to someone now
              <span
                className="transition-transform group-hover:translate-x-1"
                aria-hidden
              >
                →
              </span>
            </a>
          </ScrollReveal>
        </div>
      </div>
    </ScrollRevealSection>
  );
}

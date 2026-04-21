"use client";

import { PHONE_NUMBER } from "@/lib/constants";
import { ScrollReveal, ScrollRevealSection } from "@/components/ScrollReveal";

export function EmotionalHook() {
  return (
    <ScrollRevealSection className="relative border-t border-stone-200 bg-stone-50 px-4 py-10 md:px-8 md:py-24">
      <div className="pointer-events-none absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-amber-400/80 via-amber-400/20 to-transparent md:w-1.5" />
      <div className="relative mx-auto max-w-7xl md:pl-8">
        <div className="max-w-3xl">
          <ScrollReveal>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-amber-600">
              You&apos;re not alone
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.06}>
            <h2 className="mt-5 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[0.02em] text-gray-900">
              This happens every day. Most people don&apos;t know what to do
              next.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.12}>
            <p className="mt-6 max-read text-pretty text-base leading-relaxed text-gray-600 md:max-w-2xl md:text-lg">
              You may be dealing with pain, missed work, and pressure from
              insurance companies calling before you&apos;ve even seen a doctor.
              You don&apos;t have to figure this out alone.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.18}>
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="group mt-8 inline-flex min-h-[52px] items-center gap-2 border-b-2 border-amber-400/40 pb-1 text-base font-semibold text-amber-600 transition-colors hover:border-amber-500 hover:text-amber-700 md:text-lg"
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

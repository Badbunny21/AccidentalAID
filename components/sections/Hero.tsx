"use client";

import { CallButton } from "@/components/CallButton";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ScrollReveal";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-stone-100 px-4 pb-12 pt-28 md:px-8 md:pb-16 md:pt-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -5%, rgba(220,38,38,0.08) 0%, transparent 60%)",
        }}
      />
      <div className="pointer-events-none absolute bottom-0 left-8 right-8 h-px section-edge-glow opacity-40" />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
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

        <ScrollReveal delay={0.15} className="mt-7 flex flex-col items-center">
          <CallButton pulse ariaLabel="Call now for free confidential help">
            📞 Call Now — It&apos;s Free
          </CallButton>
        </ScrollReveal>

        <StaggerReveal className="mt-5 flex flex-wrap justify-center gap-2 md:gap-3">
          {["No cost to call", "No lawyer required", "Takes 2 minutes"].map(
            (label) => (
              <StaggerItem key={label}>
                <span className="inline-flex rounded-full border border-stone-200 bg-stone-50 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-wider text-stone-500 md:text-xs">
                  ✓ {label}
                </span>
              </StaggerItem>
            ),
          )}
        </StaggerReveal>
      </div>
    </section>
  );
}

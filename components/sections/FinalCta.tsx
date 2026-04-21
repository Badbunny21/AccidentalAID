"use client";

import { CallButton } from "@/components/CallButton";
import { IconClock, IconPhone, IconShield } from "@/components/icons";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ScrollReveal";

const trust = [
  { icon: IconShield, label: "No obligation" },
  { icon: IconPhone, label: "Real person answers" },
  { icon: IconClock, label: "Available 24/7" },
];

export function FinalCta() {
  return (
    <section className="relative overflow-hidden border-t border-stone-200 bg-stone-100 px-4 py-16 md:px-8 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(220,38,38,0.06) 0%, transparent 55%), linear-gradient(180deg, #fafaf9 0%, #f5f5f4 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-30" />
      <div className="pointer-events-none absolute bottom-0 left-8 right-8 h-px section-edge-glow opacity-40 md:left-16 md:right-16" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.92] tracking-[0.02em] text-gray-900">
            Get answers in minutes.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="mx-auto mt-6 max-read text-pretty text-lg text-gray-600 md:text-xl">
            Free call. No pressure. Just information.
          </p>
        </ScrollReveal>

        <StaggerReveal className="mt-10 flex flex-wrap justify-center gap-8 md:mt-12 md:gap-14">
          {trust.map(({ icon: Icon, label }) => (
            <StaggerItem key={label}>
              <div className="flex flex-col items-center gap-3">
                <span className="inline-flex rounded-2xl border border-stone-200 bg-stone-50 p-4 text-red-600 shadow-sm">
                  <Icon className="h-7 w-7" />
                </span>
                <span className="max-w-[11rem] text-center text-[11px] font-bold uppercase tracking-[0.15em] text-gray-500">
                  {label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <ScrollReveal delay={0.15} className="mt-10 flex justify-center md:mt-12">
          <CallButton
            className="w-full max-w-md px-6 text-base shadow-cta-glow md:text-lg"
            ariaLabel="Call now for free help and information"
          >
            📞 Call now — free help
          </CallButton>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-6 text-xs text-gray-400 md:text-sm">
            No cost to call · No lawyer required · Takes ~2 minutes
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

"use client";

import { CallButton } from "@/components/CallButton";
import { IconClock, IconPhone, IconShield } from "@/components/icons";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ScrollReveal";

const trust = [
  {
    icon: IconShield,
    label: "No obligation",
  },
  {
    icon: IconPhone,
    label: "Real person answers",
  },
  {
    icon: IconClock,
    label: "Available 24/7",
  },
];

export function FinalCta() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden border-t border-white/[0.06] px-4 py-20 md:min-h-0 md:px-8 md:py-32">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(220,38,38,0.12) 0%, transparent 55%), radial-gradient(ellipse 60% 40% at 0% 100%, rgba(245,158,11,0.06) 0%, transparent 45%), linear-gradient(180deg, #070b14 0%, #030304 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-40" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
      <div className="pointer-events-none absolute bottom-0 left-8 right-8 h-px section-edge-glow opacity-60 md:left-16 md:right-16" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <ScrollReveal>
          <h2 className="font-display text-[clamp(2.5rem,7vw,5rem)] leading-[0.92] tracking-[0.02em] text-white">
            Get answers in minutes.
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.08}>
          <p className="mx-auto mt-8 max-read text-pretty text-lg text-gray-300 md:text-xl">
            Free call. No pressure. Just information.
          </p>
        </ScrollReveal>

        <StaggerReveal className="mt-14 flex flex-wrap justify-center gap-10 md:mt-16 md:gap-14">
          {trust.map(({ icon: Icon, label }) => (
            <StaggerItem key={label}>
              <div className="flex flex-col items-center gap-3">
                <span className="inline-flex rounded-2xl border border-white/[0.08] bg-white/[0.04] p-4 text-amber-accent shadow-[0_0_32px_-12px_rgba(245,158,11,0.35)]">
                  <Icon className="h-7 w-7" />
                </span>
                <span className="max-w-[11rem] text-center text-[11px] font-bold uppercase tracking-[0.15em] text-gray-400">
                  {label}
                </span>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <ScrollReveal delay={0.15} className="mt-14 flex justify-center md:mt-16">
          <CallButton
            className="w-full max-w-md px-6 text-base shadow-cta-glow md:text-lg"
            ariaLabel="Call now for free help and information"
          >
            📞 Call now — free help
          </CallButton>
        </ScrollReveal>

        <ScrollReveal delay={0.2}>
          <p className="mt-8 text-xs text-gray-600 md:text-sm">
            No cost to call · No lawyer required · Takes ~2 minutes
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}

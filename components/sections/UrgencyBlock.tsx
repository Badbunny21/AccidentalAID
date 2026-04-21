"use client";

import { CallButton } from "@/components/CallButton";
import { IconClock, IconWarning } from "@/components/icons";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ScrollReveal";

const items = [
  "Skid marks fade within days",
  "Security footage deleted in weeks",
  "Witness memory fades immediately",
];

export function UrgencyBlock() {
  return (
    <section className="relative overflow-hidden border-t border-red-900/20 px-4 py-16 md:px-8 md:py-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 0% 50%, rgba(127,29,29,0.18) 0%, transparent 50%), linear-gradient(180deg, #140808 0%, #0a0606 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-25" />
      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal className="flex flex-col gap-4 md:flex-row md:items-start md:gap-6">
          <span className="inline-flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border border-red-500/30 bg-red-950/50 text-red-400 shadow-[0_0_40px_-10px_rgba(220,38,38,0.5)]">
            <IconWarning className="h-8 w-8" />
          </span>
          <div className="min-w-0">
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-300/90">
              Time matters
            </p>
            <h2 className="mt-3 font-display text-[clamp(2rem,5vw,3.75rem)] leading-[0.95] tracking-[0.02em] text-white">
              Evidence disappears fast.
            </h2>
          </div>
        </ScrollReveal>

        <StaggerReveal className="mt-12 grid gap-4 sm:grid-cols-3">
          {items.map((text) => (
            <StaggerItem key={text}>
              <div className="card-surface flex h-full gap-3 border-red-900/20 p-5">
                <IconClock className="mt-0.5 h-6 w-6 shrink-0 text-amber-accent" />
                <p className="text-sm font-medium leading-snug text-gray-200">
                  {text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <ScrollReveal delay={0.12} className="mt-12">
          <p className="max-w-3xl text-lg font-bold leading-snug text-white md:text-xl">
            The insurance company is already building their case. You should be
            too.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.18} className="mt-10 flex justify-start">
          <CallButton ariaLabel="Call now about preserving evidence">
            📞 Call now
          </CallButton>
        </ScrollReveal>
      </div>
    </section>
  );
}

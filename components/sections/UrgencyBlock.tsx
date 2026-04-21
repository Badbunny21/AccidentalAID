"use client";

import { IconClock, IconWarning } from "@/components/icons";
import { PHONE_NUMBER } from "@/lib/constants";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ScrollReveal";

const items = [
  "Skid marks fade within days",
  "Security footage deleted in weeks",
  "Witness memory fades immediately",
];

export function UrgencyBlock() {
  return (
    <section className="relative overflow-hidden border-l-4 border-l-red-600 border-t border-t-red-200 bg-red-600 px-4 py-10 md:px-8 md:py-20">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background: "radial-gradient(ellipse 80% 60% at 0% 50%, rgba(0,0,0,0.15) 0%, transparent 60%)",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal className="flex flex-col gap-3 md:flex-row md:items-center md:gap-5">
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/20 text-white">
            <IconWarning className="h-7 w-7" />
          </span>
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-200">
              Time matters
            </p>
            <h2 className="mt-1 font-display text-[clamp(2rem,5vw,3.75rem)] leading-[0.95] tracking-[0.02em] text-white">
              Evidence disappears fast.
            </h2>
          </div>
        </ScrollReveal>

        <StaggerReveal className="mt-7 grid gap-3 sm:grid-cols-3">
          {items.map((text) => (
            <StaggerItem key={text}>
              <div className="flex items-start gap-3 rounded-xl border border-white/20 bg-white/10 p-4 backdrop-blur-sm">
                <IconClock className="mt-0.5 h-5 w-5 shrink-0 text-red-200" />
                <p className="text-sm font-semibold leading-snug text-white">
                  {text}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <ScrollReveal delay={0.12} className="mt-7">
          <p className="max-w-2xl text-base font-bold leading-snug text-white/90 md:text-lg">
            The insurance company is already building their case. You should be too.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.18} className="mt-7">
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex min-h-[52px] items-center justify-center rounded-full bg-white px-8 py-4 text-lg font-bold text-red-600 shadow-lg transition-transform hover:scale-[1.02] active:scale-[0.98]"
          >
            📞 Call now — don&apos;t wait
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}

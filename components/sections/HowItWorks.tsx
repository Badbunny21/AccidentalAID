"use client";

import { CallButton } from "@/components/CallButton";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ScrollReveal";

const steps = [
  {
    title: "Call — Free",
    body: "A real person answers. No bots, no hold music.",
  },
  {
    title: "Tell us what happened",
    body: "We listen and help you understand your options.",
  },
  {
    title: "You focus on healing",
    body: "We connect you with the right help for your situation.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative border-t border-stone-200 bg-stone-50 px-4 py-10 md:px-8 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-20" />
      <div className="relative mx-auto max-w-7xl">

        <ScrollReveal>
          <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-red-600">
            How it works
          </p>
          <h2 className="mx-auto max-w-3xl text-center font-display text-[clamp(2rem,5vw,3.25rem)] leading-[0.95] tracking-[0.02em] text-gray-900">
            Three steps. No confusion. No commitment.
          </h2>
        </ScrollReveal>

        {/* Mobile: vertical stack with connector line */}
        <div className="mt-10 flex flex-col gap-0 md:hidden">
          {steps.map((step, i) => (
            <div key={step.title} className="flex flex-col items-center">
              <div className="flex w-full items-start gap-4 rounded-2xl border border-stone-200 bg-white p-5 shadow-sm">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 font-display text-lg text-white">
                  {i + 1}
                </span>
                <div>
                  <h3 className="font-display text-xl tracking-wide text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-gray-600">
                    {step.body}
                  </p>
                </div>
              </div>
              {i < steps.length - 1 && (
                <div className="flex h-8 w-px flex-col items-center justify-center border-l-2 border-dashed border-red-300" />
              )}
            </div>
          ))}
        </div>

        {/* Desktop: horizontal with arrows */}
        <StaggerReveal className="mt-10 hidden items-start gap-3 md:flex">
          {steps.map((step, i) => (
            <>
              <StaggerItem key={step.title} className="flex-1">
                <div className="relative h-full rounded-2xl border border-stone-200 bg-white p-7 shadow-sm">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-red-600 font-display text-xl text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 font-display text-2xl tracking-wide text-gray-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-600">
                    {step.body}
                  </p>
                </div>
              </StaggerItem>
              {i < steps.length - 1 && (
                <div key={`arrow-${i}`} className="mt-12 shrink-0 text-2xl text-red-300">
                  →
                </div>
              )}
            </>
          ))}
        </StaggerReveal>

        <ScrollReveal delay={0.15} className="mt-10 flex justify-center">
          <CallButton ariaLabel="Call free with no commitment">
            📞 Call free — no commitment
          </CallButton>
        </ScrollReveal>
      </div>
    </section>
  );
}

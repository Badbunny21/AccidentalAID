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
    <section className="relative border-t border-white/[0.06] bg-surface-deep px-4 py-16 md:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-20" />
      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="mx-auto max-w-3xl text-center font-display text-[clamp(2rem,5vw,3.25rem)] leading-[0.95] tracking-[0.02em] text-white">
            Three steps. No confusion. No commitment to call.
          </h2>
        </ScrollReveal>

        <StaggerReveal className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((step, i) => (
            <StaggerItem key={step.title}>
              <div className="card-surface relative h-full p-7 text-center md:text-left">
                <span className="font-display text-6xl leading-none text-white/[0.07] md:absolute md:right-5 md:top-5 md:text-7xl">
                  {i + 1}
                </span>
                <h3 className="mt-2 font-display text-2xl tracking-wide text-white">
                  {step.title}
                </h3>
                <p className="mt-4 max-read text-pretty text-sm leading-relaxed text-gray-400">
                  {step.body}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <ScrollReveal delay={0.15} className="mt-14 flex justify-center">
          <CallButton ariaLabel="Call free with no commitment">
            📞 Call free — no commitment
          </CallButton>
        </ScrollReveal>
      </div>
    </section>
  );
}

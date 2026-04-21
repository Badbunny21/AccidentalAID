"use client";

import { CallButton } from "@/components/CallButton";
import { IconWarning } from "@/components/icons";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ScrollReveal";

const cards = [
  {
    title: "Accepting the first settlement offer",
    body: "Insurance companies make fast, low offers hoping you don't know your rights.",
  },
  {
    title: "Waiting too long to get help",
    body: "Evidence fades. Deadlines exist. Every day of delay works against you.",
  },
  {
    title: "Giving a recorded statement",
    body: "Anything you say to an insurance adjuster can and will be used to reduce your payout.",
  },
];

export function Mistakes() {
  return (
    <section className="relative border-t border-white/[0.06] px-4 py-16 md:px-8 md:py-28">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_0%,rgba(220,38,38,0.08),transparent)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-300/90">
            High-cost mistakes
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[0.02em] text-white">
            What most accident victims do wrong
          </h2>
        </ScrollReveal>

        <StaggerReveal className="mt-12 grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <article className="card-surface flex h-full flex-col border-l-4 border-l-urgent p-6 shadow-none">
                <span className="inline-flex w-fit rounded-xl border border-red-500/20 bg-red-950/40 p-2.5 text-red-400">
                  <IconWarning className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl tracking-wide text-white">
                  {card.title}
                </h3>
                <p className="mt-3 max-read flex-1 text-sm leading-relaxed text-gray-400">
                  {card.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <ScrollReveal delay={0.12} className="mt-14 flex justify-center">
          <CallButton ariaLabel="Call now to avoid costly mistakes after an accident">
            📞 Avoid these mistakes — call now
          </CallButton>
        </ScrollReveal>
      </div>
    </section>
  );
}

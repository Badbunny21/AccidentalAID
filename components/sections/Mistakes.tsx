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
    <section className="relative border-t border-stone-200 bg-stone-100 px-4 py-10 md:px-8 md:py-24">
      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-red-600">
            High-cost mistakes
          </p>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <h2 className="mt-4 max-w-3xl font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[0.02em] text-gray-900">
            What most accident victims do wrong
          </h2>
        </ScrollReveal>

        <StaggerReveal className="mt-10 grid gap-5 md:grid-cols-3">
          {cards.map((card) => (
            <StaggerItem key={card.title}>
              <article className="flex h-full flex-col rounded-2xl border border-stone-200 border-l-4 border-l-red-600 bg-white p-6 shadow-sm">
                <span className="inline-flex w-fit rounded-xl border border-red-100 bg-red-50 p-2.5 text-red-600">
                  <IconWarning className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-display text-xl tracking-wide text-gray-900">
                  {card.title}
                </h3>
                <p className="mt-3 max-read flex-1 text-sm leading-relaxed text-gray-600">
                  {card.body}
                </p>
              </article>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <ScrollReveal delay={0.12} className="mt-10 flex justify-center">
          <CallButton ariaLabel="Call now to avoid costly mistakes after an accident">
            📞 Avoid these mistakes — call now
          </CallButton>
        </ScrollReveal>
      </div>
    </section>
  );
}

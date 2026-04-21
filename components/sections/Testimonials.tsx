"use client";

import { CallButton } from "@/components/CallButton";
import { StarsRow } from "@/components/icons";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ScrollReveal";

const quotes = [
  {
    quote:
      "I called on a Sunday afternoon and a real person picked up in two rings. They walked me through what to expect and matched me with an attorney who called me back the same evening—no pressure, just clarity.",
    name: "Maria T., Texas",
    initials: "MT",
    color: "bg-red-100 text-red-700",
    type: "Car Accident",
  },
  {
    quote:
      "Uber's insurer called me before I left the ER. I almost gave a recorded statement. The person I reached here told me exactly what to say and what not to say—and why. That call probably saved my claim.",
    name: "James R., Florida",
    initials: "JR",
    color: "bg-amber-100 text-amber-700",
    type: "Rideshare Accident",
  },
  {
    quote:
      "I was hit by a van with a big-box logo and assumed I was on my own. They explained how delivery claims work, pushed back on a fast low offer, and got me to counsel who actually understood commercial policies.",
    name: "Denise M., California",
    initials: "DM",
    color: "bg-stone-200 text-stone-700",
    type: "Delivery Driver",
  },
];

export function Testimonials() {
  return (
    <section className="relative border-t border-stone-200 bg-stone-100 px-4 py-10 md:px-8 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(245,158,11,0.05),transparent)]" />
      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <p className="mb-4 text-center text-[11px] font-bold uppercase tracking-[0.22em] text-red-600">
            Real callers
          </p>
          <h2 className="text-center font-display text-[clamp(2rem,5vw,3.25rem)] leading-[0.95] tracking-[0.02em] text-gray-900">
            People who called. Cases that changed.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-pretty text-center text-xs leading-relaxed text-gray-500 md:text-sm">
            Examples of what callers tell us about their experience. Results vary.
          </p>
        </ScrollReveal>

        <StaggerReveal className="mt-10 grid gap-5 md:grid-cols-3">
          {quotes.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="flex h-full flex-col rounded-2xl border border-stone-200 bg-white p-6 shadow-sm">
                <StarsRow className="mb-4" />
                <blockquote className="flex-1 text-pretty text-sm leading-relaxed text-gray-700">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <figcaption className="mt-5 flex items-center gap-3 border-t border-stone-100 pt-4">
                  <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-sm font-bold ${t.color}`}>
                    {t.initials}
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                    <p className="text-xs font-medium text-amber-600">{t.type}</p>
                  </div>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <ScrollReveal delay={0.12} className="mt-10 flex justify-center">
          <CallButton ariaLabel="Call after reading testimonials">
            📞 Call now — free help
          </CallButton>
        </ScrollReveal>
      </div>
    </section>
  );
}

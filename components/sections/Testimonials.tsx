"use client";

import { CallButton } from "@/components/CallButton";
import { StarsRow } from "@/components/icons";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ScrollReveal";

const quotes = [
  {
    quote:
      "I called on a Sunday afternoon and a real person picked up in two rings. They walked me through what to expect and matched me with an attorney who called me back the same evening—no pressure, just clarity.",
    name: "Maria T., Texas",
    type: "Car Accident",
  },
  {
    quote:
      "Uber's insurer called me before I left the ER. I almost gave a recorded statement. The person I reached here told me exactly what to say and what not to say—and why. That call probably saved my claim.",
    name: "James R., Florida",
    type: "Rideshare Accident",
  },
  {
    quote:
      "I was hit by a van with a big-box logo and assumed I was on my own. They explained how delivery claims work, pushed back on a fast low offer, and got me to counsel who actually understood commercial policies.",
    name: "Denise M., California",
    type: "Delivery Driver",
  },
];

export function Testimonials() {
  return (
    <section className="relative border-t border-white/[0.06] px-4 py-16 md:px-8 md:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_0%,rgba(245,158,11,0.06),transparent)]" />
      <div className="relative mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-center font-display text-[clamp(2rem,5vw,3.25rem)] leading-[0.95] tracking-[0.02em] text-white">
            People who called. Cases that changed.
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-pretty text-center text-xs leading-relaxed text-gray-500 md:text-sm">
            Examples of what callers tell us about their experience. Your
            situation is unique—results vary, and calling does not guarantee an
            outcome.
          </p>
        </ScrollReveal>

        <StaggerReveal className="mt-12 grid gap-6 md:mt-16 md:grid-cols-3">
          {quotes.map((t) => (
            <StaggerItem key={t.name}>
              <figure className="card-surface flex h-full flex-col p-7">
                <span
                  className="font-display text-5xl leading-none text-red-600/25"
                  aria-hidden
                >
                  &ldquo;
                </span>
                <blockquote className="mt-1 flex-1 text-pretty text-sm leading-relaxed text-gray-300">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 border-t border-white/[0.06] pt-5">
                  <StarsRow className="mb-3" />
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="mt-0.5 text-xs font-medium text-amber-accent/90">
                    {t.type}
                  </p>
                </figcaption>
              </figure>
            </StaggerItem>
          ))}
        </StaggerReveal>

        <ScrollReveal delay={0.12} className="mt-14 flex justify-center">
          <CallButton ariaLabel="Call after reading testimonials">
            📞 Call now — free help
          </CallButton>
        </ScrollReveal>
      </div>
    </section>
  );
}

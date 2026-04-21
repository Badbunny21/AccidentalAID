"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { CallButton } from "@/components/CallButton";
import { ScrollReveal } from "@/components/ScrollReveal";
import { SITE_NAME } from "@/lib/constants";

const faqs = [
  {
    q: "I'm not sure how badly I'm hurt — do I still have a case?",
    a: "Many injuries take time to show up, and you can still explore your options early. Speaking with someone can help you understand timelines and what to watch for as you recover.",
  },
  {
    q: "The insurance adjuster is already calling me. What now?",
    a: "It's common for adjusters to reach out quickly. You can keep conversations brief and avoid rushing decisions until you've had a chance to get oriented. A quick call can help you understand what to expect.",
  },
  {
    q: "What does it cost to call?",
    a: `There is no cost to call ${SITE_NAME}. The goal is to answer your questions and connect you with appropriate help if it makes sense for your situation.`,
  },
  {
    q: "My accident involved a delivery driver — is that different?",
    a: "Delivery and collisions involving commercial vehicles (like 18-wheelers, semi-trucks, box trucks, or company vans) can involve additional parties and policies. It helps to talk through the facts with someone who understands how these cases are often handled.",
  },
  {
    q: "I already gave a recorded statement. Did I ruin my case?",
    a: "Not necessarily. Cases depend on many factors, and people still move forward after early conversations. Getting guidance now can help you understand practical next steps.",
  },
  {
    q: "How long do I have to take action?",
    a: "Deadlines vary by state and situation, and evidence is often easier to preserve sooner rather than later. If you're unsure, a short call can help you understand urgency without any obligation.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative border-t border-stone-200 bg-stone-50 px-4 py-10 md:px-8 md:py-24">
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-15" />
      <div className="relative mx-auto max-w-3xl">
        <ScrollReveal>
          <h2 className="text-center font-display text-[clamp(2rem,5vw,3.25rem)] leading-[0.95] tracking-[0.02em] text-gray-900">
            FAQ
          </h2>
          <p className="mx-auto mt-5 max-read text-center text-sm text-gray-500">
            Straightforward information — not legal advice.
          </p>
        </ScrollReveal>

        <div className="mt-10 space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <ScrollReveal key={item.q} delay={i * 0.03}>
                <div
                  className={`rounded-2xl border transition-[border-color,background-color,box-shadow] duration-200 ${
                    isOpen
                      ? "border-amber-300 bg-amber-50/50 shadow-sm"
                      : "border-stone-200 bg-white hover:border-stone-300"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left md:px-6 md:py-5"
                    aria-expanded={isOpen}
                  >
                    <span className="text-sm font-semibold text-gray-900 md:text-base">
                      {item.q}
                    </span>
                    <span
                      className={`shrink-0 text-amber-600 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    >
                      ▼
                    </span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden border-t border-stone-100"
                      >
                        <p className="max-read px-5 py-4 text-sm leading-relaxed text-gray-600 md:px-6">
                          {item.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal delay={0.08} className="mt-10 flex justify-center">
          <CallButton ariaLabel="Call with your questions">
            📞 Call with your questions
          </CallButton>
        </ScrollReveal>
      </div>
    </section>
  );
}

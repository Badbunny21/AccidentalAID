"use client";

import { motion, useReducedMotion } from "framer-motion";
import { CallButton } from "@/components/CallButton";
import { ScrollReveal, StaggerItem, StaggerReveal } from "@/components/ScrollReveal";

export function Hero() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative flex min-h-[100dvh] flex-col justify-center overflow-hidden px-4 pb-32 pt-28 md:px-8 md:pb-24 md:pt-28">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 100% 70% at 50% -10%, rgba(220,38,38,0.14) 0%, transparent 55%), radial-gradient(ellipse 80% 50% at 100% 50%, rgba(30,58,138,0.12) 0%, transparent 45%), linear-gradient(180deg, #070b14 0%, #050507 40%, #030304 100%)",
        }}
      />
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-50" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
      <div className="pointer-events-none absolute left-0 top-0 h-full w-px bg-gradient-to-b from-red-600/0 via-red-600/40 to-amber-500/0 opacity-60 md:left-[max(0px,calc(50%-28rem))] md:w-[3px]" />
      <div className="pointer-events-none absolute bottom-24 left-4 right-4 h-px section-edge-glow opacity-80 md:bottom-12 md:left-8 md:right-8" />

      <div className="relative z-10 mx-auto w-full max-w-4xl text-center">
        <ScrollReveal delay={0.05}>
          <h1 className="font-display text-balance-safe text-[clamp(2.75rem,9vw,6.5rem)] leading-[0.92] tracking-[0.02em] text-white">
            Injured in an Accident?
          </h1>
        </ScrollReveal>

        <ScrollReveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-pretty text-lg font-medium leading-relaxed text-gray-200 md:text-xl">
            Get free help understanding your options. Fast. Confidential. No
            obligation.
          </p>
        </ScrollReveal>

        <ScrollReveal
          delay={0.17}
          className="mt-10 flex flex-col items-center gap-4"
        >
          <CallButton pulse ariaLabel="Call now for free confidential help">
            📞 Call Now — It&apos;s Free
          </CallButton>
        </ScrollReveal>

        <StaggerReveal className="mt-8 flex flex-wrap justify-center gap-2 md:gap-3">
          {["No cost to call", "No lawyer required", "Takes 2 minutes"].map(
            (label) => (
              <StaggerItem key={label}>
                <span className="inline-flex rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-2 text-[11px] font-semibold uppercase tracking-wider text-gray-400 backdrop-blur-sm md:text-xs">
                  ✓ {label}
                </span>
              </StaggerItem>
            ),
          )}
        </StaggerReveal>
      </div>

      <motion.div
        className="pointer-events-none absolute bottom-24 left-1/2 z-10 -translate-x-1/2 md:bottom-10"
        initial={{ opacity: 0, y: -6 }}
        animate={
          reduceMotion ? { opacity: 0.4, y: 0 } : { opacity: 0.45, y: 0 }
        }
        transition={
          reduceMotion
            ? { duration: 0.2 }
            : {
                repeat: Infinity,
                repeatType: "reverse",
                duration: 1.8,
                ease: "easeInOut",
              }
        }
        aria-hidden
      >
        <span className="block text-xl text-gray-500">↓</span>
      </motion.div>
    </section>
  );
}

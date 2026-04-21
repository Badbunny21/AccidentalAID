"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const motionViewport = { once: true, margin: "-100px" as const };

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

type ScrollRevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export function ScrollReveal({ children, className, delay = 0 }: ScrollRevealProps) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={motionViewport}
      variants={fadeUp}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  );
}

export function ScrollRevealSection({
  children,
  className,
  delay = 0,
  id,
}: ScrollRevealProps & { id?: string }) {
  return (
    <motion.section
      id={id}
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={motionViewport}
      variants={fadeUp}
      transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.section>
  );
}

type StaggerProps = {
  children: ReactNode;
  className?: string;
  stagger?: number;
};

export function StaggerReveal({ children, className, stagger = 0.1 }: StaggerProps) {
  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: stagger, delayChildren: 0.05 },
    },
  };

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="show"
      viewport={motionViewport}
      variants={container}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div className={className} variants={fadeUp}>
      {children}
    </motion.div>
  );
}

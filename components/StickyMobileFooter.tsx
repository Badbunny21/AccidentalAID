"use client";

import { motion } from "framer-motion";
import { PHONE_NUMBER } from "@/lib/constants";

export function StickyMobileFooter() {
  return (
    <motion.div
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
      className="fixed inset-x-0 bottom-0 z-[9999] border-t border-stone-200 bg-stone-50/95 px-3 py-2.5 shadow-[0_-4px_24px_rgba(28,25,23,0.08)] backdrop-blur-xl md:hidden"
      style={{ minHeight: 64 }}
    >
      <div className="mx-auto flex max-w-lg items-center justify-between gap-3">
        <p className="max-w-[130px] text-[11px] font-semibold leading-snug tracking-wide text-gray-600">
          Free help — no obligation
        </p>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="inline-flex min-h-[52px] flex-1 max-w-[210px] items-center justify-center rounded-full bg-urgent px-5 text-sm font-bold text-white shadow-cta-glow-sm ring-2 ring-red-500/25 transition-colors hover:bg-red-700"
        >
          📞 Call now
        </a>
      </div>
    </motion.div>
  );
}

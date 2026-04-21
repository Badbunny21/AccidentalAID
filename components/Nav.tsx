"use client";

import { useEffect, useState } from "react";
import { PHONE_DISPLAY, PHONE_NUMBER, SITE_NAME, TAGLINE } from "@/lib/constants";

export function Nav() {
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-[10000] transition-[background,backdrop-filter,border-color,box-shadow] duration-500 ${
        solid
          ? "border-b border-stone-200 bg-stone-50/95 shadow-sm backdrop-blur-xl"
          : "border-b border-transparent bg-gradient-to-b from-stone-50/85 to-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 md:px-8">
        <div className="min-w-0">
          <span className="block font-display text-2xl tracking-[0.04em] text-gray-900 md:text-[1.75rem]">
            {SITE_NAME}
          </span>
          <span className="mt-0.5 hidden text-[10px] font-medium uppercase tracking-[0.18em] text-gray-500 sm:block">
            {TAGLINE}
          </span>
        </div>
        <a
          href={`tel:${PHONE_NUMBER}`}
          className="inline-flex min-h-[48px] shrink-0 items-center justify-center rounded-full bg-urgent px-4 py-2.5 text-sm font-bold text-white shadow-cta-glow-sm ring-2 ring-red-500/20 transition-[background-color,transform,box-shadow] duration-200 hover:bg-red-700 hover:ring-red-400/30 active:scale-[0.97] motion-reduce:active:scale-100 md:px-6 md:text-base"
        >
          {PHONE_DISPLAY}
        </a>
      </div>
    </header>
  );
}

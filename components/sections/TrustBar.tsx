"use client";

import { IconClock, IconPhone } from "@/components/icons";

const items = [
  { Icon: IconPhone, text: "Real person answers — always" },
  { Icon: IconClock, text: "Available 24 / 7" },
  {
    Icon: ({ className }: { className?: string }) => (
      <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
        <path
          d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"
          fill="currentColor"
        />
      </svg>
    ),
    text: "All 50 states",
  },
];

export function TrustBar() {
  return (
    <div className="relative border-y border-stone-200 bg-stone-50 py-3.5">
      <div className="mx-auto grid max-w-7xl grid-cols-3 items-center gap-y-3 px-4 md:flex md:flex-wrap md:justify-center md:gap-x-12 md:px-8">
        {items.map(({ Icon, text }) => (
          <div key={text} className="flex flex-col items-center gap-1.5 md:flex-row md:gap-2">
            <Icon className="h-4 w-4 shrink-0 text-red-600" />
            <span className="text-center text-[10px] font-semibold uppercase tracking-[0.14em] text-gray-600 md:text-left md:text-xs md:tracking-[0.16em]">
              {text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

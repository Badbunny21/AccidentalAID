import { PHONE_NUMBER } from "@/lib/constants";

type CallButtonProps = {
  children: React.ReactNode;
  className?: string;
  pulse?: boolean;
  ariaLabel?: string;
};

export function CallButton({
  children,
  className = "",
  pulse = false,
  ariaLabel = "Call now for free help",
}: CallButtonProps) {
  return (
    <a
      href={`tel:${PHONE_NUMBER}`}
      aria-label={ariaLabel}
      className={`inline-flex min-h-[52px] items-center justify-center rounded-full bg-urgent px-8 py-4 text-center text-lg font-bold text-white shadow-cta-glow ring-2 ring-stone-100/80 transition-[transform,background-color,box-shadow] duration-200 hover:bg-red-700 hover:shadow-cta-glow active:scale-[0.98] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-accent motion-reduce:transition-colors motion-reduce:active:scale-100 ${pulse ? "animate-cta-pulse" : ""} ${className}`}
    >
      {children}
    </a>
  );
}

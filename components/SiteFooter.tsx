import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/[0.06] bg-black px-4 py-12 md:px-8">
      <div className="mx-auto max-w-7xl text-center text-xs leading-relaxed text-gray-500 md:text-left">
        <p className="max-w-3xl md:max-w-2xl">
          {SITE_NAME} is a legal referral network — not a law firm. We connect
          accident victims with licensed personal injury attorneys. Calling does
          not create an attorney-client relationship. Results vary. Not
          available in all states.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-2 md:justify-start">
          <Link
            href="/privacy"
            className="font-medium text-amber-accent/85 transition-colors hover:text-amber-accent"
          >
            Privacy Policy
          </Link>
          <Link
            href="/terms"
            className="font-medium text-amber-accent/85 transition-colors hover:text-amber-accent"
          >
            Terms
          </Link>
        </div>
        <p className="mt-8 text-[11px] text-gray-700">
          © 2026 {SITE_NAME}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

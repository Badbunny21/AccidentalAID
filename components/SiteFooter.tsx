import Link from "next/link";
import { PHONE_DISPLAY, PHONE_NUMBER, SITE_NAME } from "@/lib/constants";

export function SiteFooter() {
  return (
    <footer className="border-t border-stone-200 bg-stone-100 px-4 py-12 md:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Top row */}
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div>
            <span className="font-display text-2xl tracking-[0.04em] text-gray-900">
              {SITE_NAME}
            </span>
            <p className="mt-2 max-w-sm text-xs leading-relaxed text-gray-500">
              A legal referral network — not a law firm. We connect accident
              victims with licensed personal injury attorneys. Calling does not
              create an attorney-client relationship.
            </p>
          </div>
          <a
            href={`tel:${PHONE_NUMBER}`}
            className="inline-flex items-center gap-2 self-start rounded-full bg-red-600 px-5 py-2.5 text-sm font-bold text-white shadow-sm transition-colors hover:bg-red-700"
          >
            📞 {PHONE_DISPLAY}
          </a>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-stone-200" />

        {/* Bottom row */}
        <div className="flex flex-col items-center gap-3 text-xs text-gray-400 md:flex-row md:justify-between">
          <p>© 2026 {SITE_NAME}. All rights reserved. Results vary. Not available in all states.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="font-medium text-gray-500 transition-colors hover:text-red-600">
              Privacy Policy
            </Link>
            <Link href="/terms" className="font-medium text-gray-500 transition-colors hover:text-red-600">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

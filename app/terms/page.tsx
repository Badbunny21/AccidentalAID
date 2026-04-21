import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-stone-50 px-4 py-16 text-stone-600 md:px-8">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="text-sm font-semibold text-amber-600 hover:text-amber-500"
        >
          ← Back
        </Link>
        <h1 className="mt-8 font-display text-4xl text-stone-900">Terms</h1>
        <p className="mt-6 text-sm leading-relaxed">
          This is a placeholder terms page for {SITE_NAME}. Replace this page with
          your organization&apos;s official terms before launch.
        </p>
      </div>
    </div>
  );
}

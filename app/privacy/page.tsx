import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-surface-void px-4 py-16 text-gray-300 md:px-8">
      <div className="mx-auto max-w-2xl">
        <Link
          href="/"
          className="text-sm font-semibold text-amber-accent hover:text-amber-400"
        >
          ← Back
        </Link>
        <h1 className="mt-8 font-display text-4xl text-white">Privacy Policy</h1>
        <p className="mt-6 text-sm leading-relaxed">
          This is a placeholder privacy policy for {SITE_NAME}. Replace this page
          with your organization&apos;s official policy before launch.
        </p>
      </div>
    </div>
  );
}

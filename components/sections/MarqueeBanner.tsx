export function MarqueeBanner() {
  const items = [
    "📞 Call Now — It's Free",
    "📞 Call Now — It's Free",
    "📞 Call Now — It's Free",
    "📞 Call Now — It's Free",
    "📞 Call Now — It's Free",
    "📞 Call Now — It's Free",
    "📞 Call Now — It's Free",
    "📞 Call Now — It's Free",
  ];

  const track = items.map((text, i) => (
    <span key={i} className="inline-flex items-center gap-4 shrink-0">
      <span className="text-white/30 text-lg" aria-hidden>·</span>
      <span>{text}</span>
    </span>
  ));

  return (
    <div
      className="overflow-hidden bg-red-600 py-3 w-full"
      aria-label="Service highlights"
    >
      <div className="flex animate-marquee whitespace-nowrap text-white text-sm font-semibold tracking-wide uppercase">
        {track}
        {track}
      </div>
    </div>
  );
}

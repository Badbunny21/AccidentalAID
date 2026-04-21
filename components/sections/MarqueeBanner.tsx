export function MarqueeBanner() {
  const items = [
    "Free to call — no obligation",
    "Real person answers, not a bot",
    "Available 24 / 7",
    "Car, truck & motorcycle accidents",
    "Uber & Lyft accidents covered",
    "Understand your rights",
    "Confidential & 100% free",
    "Connects in under 2 minutes",
    "No lawyer required to call",
    "Pedestrian & cyclist accidents",
    "Speak with someone today",
    "No voicemail trees, ever",
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

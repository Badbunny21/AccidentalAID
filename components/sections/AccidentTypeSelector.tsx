"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useRef, useState } from "react";
import { CallButton } from "@/components/CallButton";
import { IconCheck } from "@/components/icons";
import { ScrollReveal } from "@/components/ScrollReveal";
import type { FC } from "react";

type AccidentId =
  | "car"
  | "delivery"
  | "bigTruck"
  | "motorcycle"
  | "rideshare"
  | "pedestrian";

type CardDef = {
  id: AccidentId;
  label: string;
  sublabel?: string;
  badge?: string;
  Icon: FC<{ className?: string }>;
};

function IconCar({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 13l1.5-4h13L20 13M4 13v3a1 1 0 001 1h1m14-4v3a1 1 0 01-1 1h-1m-12 0h10M6 17v2m12-2v2M7 9l1-3h8l1 3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="7.5" cy="14" r="1.25" fill="currentColor" />
      <circle cx="16.5" cy="14" r="1.25" fill="currentColor" />
    </svg>
  );
}

function IconDeliveryTruck({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M2 12h10v6H2v-6zm10 0h3l3 3v3h-6v-6zM5 18v2m8-2v2m5-2v2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 12V8H2v4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="5.5" cy="18" r="1.25" fill="currentColor" />
      <circle cx="13.5" cy="18" r="1.25" fill="currentColor" />
      <circle cx="20.5" cy="18" r="1.25" fill="currentColor" />
    </svg>
  );
}

function IconSemiTruck({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <rect
        x="2"
        y="8"
        width="9"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M11 12h4l3 2v4h-7v-6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <circle cx="6.5" cy="18" r="1.25" fill="currentColor" />
      <circle cx="17.5" cy="18" r="1.25" fill="currentColor" />
      <circle cx="20.5" cy="18" r="1.25" fill="currentColor" />
    </svg>
  );
}

function IconMotorcycle({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="7" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="17" cy="16" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M10 16h4M13 16l3-8h3M16 8l2-2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function IconCarPhone({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M4 12l1.5-3.5h9L16 12M4 12v4a1 1 0 001 1h1m10-5v4a1 1 0 01-1 1h-1M6 17v1.5M14 17v1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <rect
        x="17"
        y="4"
        width="5"
        height="8"
        rx="1"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M19.5 11V12" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

function IconPedestrian({ className = "h-6 w-6" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden>
      <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 7v5M12 12l-3 6M12 12l3 6M9 18h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="16" r="1.5" stroke="currentColor" strokeWidth="1.25" />
      <path
        d="M7.5 16L10 12"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
      />
    </svg>
  );
}

const cards: CardDef[] = [
  { id: "car", label: "Car Accident", Icon: IconCar },
  {
    id: "delivery",
    label: "Delivery Driver",
    badge: "Amazon · UPS · FedEx",
    Icon: IconDeliveryTruck,
  },
  {
    id: "bigTruck",
    label: "Big Truck",
    sublabel: "18-wheelers, semi-trucks, box trucks",
    Icon: IconSemiTruck,
  },
  { id: "motorcycle", label: "Motorcycle", Icon: IconMotorcycle },
  { id: "rideshare", label: "Uber & Lyft", Icon: IconCarPhone },
  { id: "pedestrian", label: "Pedestrian / Cyclist", Icon: IconPedestrian },
];

function panelFor(id: AccidentId) {
  switch (id) {
    case "car":
      return <PanelCar />;
    case "delivery":
      return <PanelDelivery />;
    case "bigTruck":
      return <PanelBigTruck />;
    case "motorcycle":
      return <PanelMotorcycle />;
    case "rideshare":
      return <PanelRideshare />;
    case "pedestrian":
      return <PanelPedestrian />;
  }
}

export function AccidentTypeSelector() {
  const [selected, setSelected] = useState<AccidentId>("car");
  const panelRef = useRef<HTMLDivElement>(null);

  function handleSelect(id: AccidentId) {
    setSelected(id);
    setTimeout(() => {
      panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  }

  return (
    <section
      id="car-accidents"
      className="relative overflow-hidden border-t border-stone-200 bg-stone-100 px-4 py-6 md:px-8 md:py-12"
    >
      <div className="pointer-events-none absolute inset-0 bg-grain opacity-20" />

      <div className="relative z-10 mx-auto max-w-7xl">
        <ScrollReveal>
          <h2 className="text-center font-display text-[clamp(2rem,5vw,3.5rem)] leading-[0.95] tracking-[0.02em] text-gray-900">
            What type of accident were you in?
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={0.06}>
          <p className="mx-auto mt-3 max-w-2xl text-pretty text-center text-sm leading-relaxed text-gray-500 md:text-base">
            Pick what happened—then read what to know{" "}
            <span className="font-semibold text-gray-700">before</span> you deal with
            insurance.
          </p>
        </ScrollReveal>

        <div className="mt-5 grid grid-cols-2 gap-3 md:mt-6 md:grid-cols-6 md:gap-3">
          {cards.map(({ id, label, sublabel, badge, Icon }) => {
            const isSelected = selected === id;
            return (
              <button
                key={id}
                type="button"
                onClick={() => handleSelect(id)}
                aria-pressed={isSelected}
                className={`flex flex-col items-center rounded-2xl border px-2 py-4 text-center transition-all duration-300 ease-out md:px-2.5 md:py-5 ${
                  isSelected
                    ? "border-red-500 bg-white shadow-cta-glow-sm ring-2 ring-red-500/20"
                    : "border-stone-200 bg-white hover:-translate-y-[2px] hover:border-stone-300 hover:shadow-sm"
                } `}
              >
                <Icon
                  className={`h-10 w-10 shrink-0 md:h-12 md:w-12 ${
                    isSelected ? "text-red-600" : "text-gray-500"
                  } transition-colors duration-300`}
                />
                <span className="mt-3 text-xs font-bold leading-tight text-gray-900 md:text-sm">
                  {label}
                </span>
                {badge && (
                  <span className="mt-1 text-[10px] font-medium leading-tight text-amber-600 md:text-[11px]">
                    {badge}
                  </span>
                )}
                {sublabel && (
                  <span className="mt-1 max-w-[9rem] text-[10px] leading-tight text-gray-500 md:max-w-none md:text-[11px]">
                    {sublabel}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        <p className="mx-auto mt-5 max-w-xl text-center text-[10px] font-bold uppercase tracking-[0.2em] text-gray-400 md:mt-6">
          Guidance for your situation
        </p>

        <div ref={panelRef} className="mt-3 scroll-mt-24 md:mt-4">
          <motion.div
            layout
            className="overflow-hidden rounded-2xl border border-stone-200 bg-white shadow-sm"
            transition={{
              layout: { duration: 0.45, ease: [0.25, 0.8, 0.25, 1] },
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.4, ease: [0.25, 0.8, 0.25, 1] }}
                className="p-5 md:p-8"
              >
                {panelFor(selected)}
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function PanelCar() {
  return (
    <>
      <h3 className="font-display text-3xl text-gray-900 md:text-4xl">
        Car &amp; Motor Vehicle Accidents
      </h3>
      <ul className="mt-6 space-y-3">
        {[
          "Injuries often don't show up for 24–72 hours after the crash",
          "Insurance adjusters are trained to settle fast and low",
          "You may have options you don't know about yet",
        ].map((text) => (
          <li key={text} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
              <IconCheck className="h-4 w-4" />
            </span>
            <p className="max-read text-pretty text-base font-medium text-gray-700">
              {text}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5">
        <p className="text-sm font-semibold leading-relaxed text-amber-800 md:text-base">
          ⚠️ If the other driver&apos;s insurance already called you — do not give
          a recorded statement before speaking with someone.
        </p>
      </div>
      <div className="mt-8">
        <CallButton
          className="w-full md:w-auto"
          ariaLabel="Call to understand your car accident options"
        >
          📞 Call to Understand Your Options
        </CallButton>
      </div>
    </>
  );
}

function PanelDelivery() {
  return (
    <>
      <h3 className="font-display text-3xl text-gray-900 md:text-4xl">
        Injured by a Delivery Driver?
      </h3>
      <ul className="mt-6 space-y-3">
        {[
          "Amazon, UPS, FedEx and other drivers are in neighborhoods every day",
          "These companies classify drivers as 'independent contractors' to reduce liability — that strategy can be challenged",
          "Large company insurance policies are designed to pay as little as possible",
        ].map((text) => (
          <li key={text} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <IconCheck className="h-4 w-4" />
            </span>
            <p className="max-read text-pretty text-base font-medium text-gray-700">
              {text}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5">
        <p className="text-sm font-semibold leading-relaxed text-amber-800 md:text-base">
          ⚠️ Do NOT accept any offer or give a statement to a delivery
          company&apos;s insurance without talking to someone first.
        </p>
      </div>
      <div className="mt-8">
        <CallButton
          className="w-full md:w-auto"
          ariaLabel="Speak with someone about your delivery driver case"
        >
          📞 Speak With Someone About Your Case
        </CallButton>
      </div>
    </>
  );
}

function PanelBigTruck() {
  return (
    <>
      <h3 className="font-display text-3xl text-gray-900 md:text-4xl">
        Truck &amp; Commercial Vehicle Accidents
      </h3>
      <p className="mt-3 text-sm font-medium text-gray-500 md:text-base">
        18-wheelers · Semi-trucks · Box trucks · Company vans · Work vehicles
      </p>
      <ul className="mt-6 space-y-3">
        {[
          "Truck accidents cause more severe injuries than typical car crashes",
          "Trucking companies have legal teams working on their defense immediately after an accident",
          "These claims are more complex — and often worth significantly more",
        ].map((text) => (
          <li key={text} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
              <IconCheck className="h-4 w-4" />
            </span>
            <p className="max-read text-pretty text-base font-medium text-gray-700">
              {text}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5">
        <p className="text-sm font-semibold leading-relaxed text-amber-800 md:text-base">
          ⚠️ Evidence like truck black box data and driver logs can disappear
          quickly. Time matters.
        </p>
      </div>
      <div className="mt-8">
        <CallButton
          className="w-full md:w-auto"
          ariaLabel="Call for immediate truck accident guidance"
        >
          📞 Call for Immediate Guidance
        </CallButton>
      </div>
    </>
  );
}

function PanelMotorcycle() {
  return (
    <>
      <h3 className="font-display text-3xl text-gray-900 md:text-4xl">
        Motorcycle Accidents
      </h3>
      <ul className="mt-6 space-y-3">
        {[
          "Riders are more exposed — injuries are often severe",
          "Insurance companies frequently try to shift blame to the rider even when they did nothing wrong",
          "You deserve a real fight, not a fast denial",
        ].map((text) => (
          <li key={text} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
              <IconCheck className="h-4 w-4" />
            </span>
            <p className="max-read text-pretty text-base font-medium text-gray-700">
              {text}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5">
        <p className="text-sm font-semibold leading-relaxed text-amber-800 md:text-base">
          ⚠️ Don&apos;t let insurance label you as &apos;at fault&apos; before
          you&apos;ve spoken with someone.
        </p>
      </div>
      <div className="mt-8">
        <CallButton
          className="w-full md:w-auto"
          ariaLabel="Talk to someone now about your motorcycle accident"
        >
          📞 Talk to Someone Now
        </CallButton>
      </div>
    </>
  );
}

function PanelRideshare() {
  return (
    <>
      <h3 className="font-display text-3xl text-gray-900 md:text-4xl">
        Rideshare Accidents (Uber &amp; Lyft)
      </h3>
      <ul className="mt-6 space-y-3">
        {[
          "Uber and Lyft carry up to $1,000,000 in liability coverage when a driver is on an active trip",
          "Most victims don't know the full coverage available to them",
          "Rideshare companies make claims complicated on purpose — you don't have to navigate it alone",
        ].map((text) => (
          <li key={text} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-600">
              <IconCheck className="h-4 w-4" />
            </span>
            <p className="max-read text-pretty text-base font-medium text-gray-700">
              {text}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5">
        <p className="text-sm font-semibold leading-relaxed text-amber-800 md:text-base">
          ⚠️ Rideshare insurance claims have specific windows and rules. Acting
          quickly protects your claim.
        </p>
      </div>
      <div className="mt-8">
        <CallButton
          className="w-full md:w-auto"
          ariaLabel="Find out what your rideshare case may be worth"
        >
          📞 Find Out What Your Case Is Worth
        </CallButton>
      </div>
    </>
  );
}

function PanelPedestrian() {
  return (
    <>
      <h3 className="font-display text-3xl text-gray-900 md:text-4xl">
        Pedestrian &amp; Cyclist Accidents
      </h3>
      <ul className="mt-6 space-y-3">
        {[
          "You were the most vulnerable person on the road — you deserve full protection",
          "Drivers and their insurance often try to minimize what they owe pedestrians and cyclists",
          "Medical bills, lost wages, and pain and suffering are all part of your claim",
        ].map((text) => (
          <li key={text} className="flex gap-3">
            <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-red-100 text-red-600">
              <IconCheck className="h-4 w-4" />
            </span>
            <p className="max-read text-pretty text-base font-medium text-gray-700">
              {text}
            </p>
          </li>
        ))}
      </ul>
      <div className="mt-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-5">
        <p className="text-sm font-semibold leading-relaxed text-amber-800 md:text-base">
          ⚠️ Even if you didn&apos;t have a vehicle, you still have rights. Call
          before assuming you have no case.
        </p>
      </div>
      <div className="mt-8">
        <CallButton
          className="w-full md:w-auto"
          ariaLabel="Talk to someone about your pedestrian or cyclist accident"
        >
          📞 Talk to Someone Now
        </CallButton>
      </div>
    </>
  );
}

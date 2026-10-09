"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "How much luggage can your 7 to 11 seater Perth Maxi Cabs accommodate?",
      a: "Our high-roof Toyota HiAce luxury vans easily accommodate up to 8 to 10 large suitcases along with backpacks, prams, golf bags, or surfboards alongside all passengers. You never have to worry about luggage overflowing into passenger seating.",
    },
    {
      q: "How far in advance should I book my transfer?",
      a: "For Perth Airport transfers (T1, T2, T3, T4) and early morning flights, we recommend booking at least 12 to 24 hours in advance to guarantee your preferred pickup slot. However, we also operate 24/7 and accept same-day and immediate dispatch bookings.",
    },
    {
      q: "How do your wheelchair ramps and safety restraints work?",
      a: "Our purpose-built wheelchair accessible maxi taxis feature heavy-duty hydraulic lifts or low-angle foldout ramps. The passenger remains securely seated in their wheelchair while our driver anchors the chair to the chassis floor using certified 4-point Q'Straint tie-downs and an over-shoulder lap-sash safety belt.",
    },
    {
      q: "What happens if my flight into Perth Airport is delayed?",
      a: "We actively monitor live Perth flight arrival schedules using your flight number. Whether your flight lands early or gets delayed by several hours, your driver adjusts your pickup schedule accordingly at zero additional surcharge.",
    },
    {
      q: "Are your prices fixed or metered?",
      a: "We offer guaranteed fixed-price quotes with zero hidden extras and zero surge pricing. The price you are quoted is the exact price you pay, regardless of traffic delays. Standard Western Australia Department of Transport taxi meters are also available upon request.",
    },
    {
      q: "Do you supply certified baby car seats and child boosters?",
      a: "Yes. We carry Australian Safety Standard AS/NZS 1754 compliant rear-facing infant capsules, forward-facing toddler seats, and booster seats. All seats are disinfected and pre-installed prior to your pickup.",
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 bg-black w-full">
      <div className="max-w-[800px] mx-auto">
        <div className="text-center mb-10">
          <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-3 block">Got Questions?</span>
          <h2 className="text-3xl lg:text-4xl font-black uppercase tracking-tight text-white mb-4">Frequently Asked Questions</h2>
          <p className="text-white/60 font-medium max-w-xl mx-auto text-sm sm:text-base">
            Everything you need to know about our Perth maxi cab, airport transfers, and accessible fleet.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-zinc-900 border-4 border-black shadow-[4px_4px_0px_0px_#000] overflow-hidden transition-all duration-200"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full p-3 sm:p-4 text-left flex items-center justify-between gap-4 focus:outline-none focus:bg-zinc-800 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="font-black text-white text-[16px] sm:text-[18px] flex items-start sm:items-center gap-3 uppercase tracking-wide">
                    <HelpCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5 sm:mt-0" />
                    <span>{faq.q}</span>
                  </span>
                  <div className={`w-8 h-8 border-2 border-black flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? "rotate-180 bg-amber-400 text-black" : "bg-black text-white"}`}>
                    <ChevronDown className="w-5 h-5" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-3 sm:px-4 pb-4 pt-1 text-white/70 font-medium text-[14px] sm:text-[15px] leading-relaxed border-t-2 border-black">
                    <p className="pl-8">{faq.a}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

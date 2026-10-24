"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQAccordionProps {
  items?: FAQItem[];
  title?: string;
  badge?: string;
}

const defaultFAQs: FAQItem[] = [
  {
    q: "How much luggage can your Perth Wheelchair Taxi Vans accommodate?",
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

export default function FAQAccordion({
  items = defaultFAQs,
  title = "FAQ'S",
  badge = "Got Questions?",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [isDesktop, setIsDesktop] = useState(false);

  // Viewport width detection to safely disable lateral/rotational offsets on mobile
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="py-8 sm:pt-24 sm:pb-28 px-4 sm:px-6 lg:px-8 bg-black w-full overflow-hidden">
      <div className="max-w-[800px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-5 sm:mb-12">
          {badge && (
            <span className="text-xs font-black text-amber-400 uppercase tracking-[0.25em] mb-1.5 sm:mb-3 block">
              {badge}
            </span>
          )}
          <h2 className="text-[1.5rem] sm:text-3xl lg:text-5xl font-black uppercase tracking-tight text-white mb-2 sm:mb-4">
            {title}
          </h2>
        </div>

        {/* FAQ Accordion List (8px gap on mobile) */}
        <div className="space-y-2 sm:space-y-4">
          {items.map((faq, index) => {
            const isOpen = openIndex === index;

            // Responsive initial magnetic snap values
            const initialX = isDesktop ? (index % 2 === 0 ? -20 : 20) : 0;
            const initialRotate = isDesktop ? (index % 2 === 0 ? -3 : 3) : 0;

            return (
              <motion.div
                key={index}
                layout
                initial={{
                  opacity: 0,
                  y: 50,
                  x: initialX,
                  rotate: initialRotate,
                  scale: 0.95,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  x: 0,
                  rotate: 0,
                  scale: 1,
                }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  type: "spring",
                  stiffness: 300,
                  damping: 24,
                  delay: index * 0.1,
                }}
                className={`group bg-zinc-900 transition-all duration-300 rounded-none overflow-hidden ${
                  isOpen
                    ? "border border-amber-400 sm:border-4 sm:border-amber-400 shadow-[0_0_12px_rgba(251,191,36,0.15)] sm:shadow-[0_8px_30px_rgba(251,191,36,0.15)] sm:ring-2 sm:ring-amber-400/20"
                    : "border border-zinc-800/70 sm:border-4 sm:border-black shadow-none sm:shadow-[4px_4px_0px_0px_#000] hover:border-zinc-700"
                }`}
              >
                {/* Trigger Header Button (12px 14px padding on mobile) */}
                <button
                  type="button"
                  onClick={() => toggle(index)}
                  className="w-full py-3 px-3.5 sm:p-5 text-left flex items-center justify-between gap-2.5 sm:gap-4 focus:outline-none focus:bg-zinc-800/80 transition-colors cursor-pointer select-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold sm:font-black text-white text-[0.85rem] sm:text-lg flex items-start sm:items-center gap-2 sm:gap-3 tracking-[0.2px] sm:tracking-wide leading-[1.35] normal-case sm:uppercase">
                    <HelpCircle
                      className={`w-[18px] h-[18px] sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 sm:mt-0 transition-colors duration-200 ${
                        isOpen ? "text-amber-400" : "text-amber-400/70 group-hover:text-amber-400"
                      }`}
                    />
                    <span>{faq.q}</span>
                  </span>

                  {/* Micro-interaction: Chevron Rotation Badge (28px mobile, 36px desktop) */}
                  <div
                    className={`w-7 h-7 sm:w-9 sm:h-9 border border-zinc-700 sm:border-2 sm:border-black flex items-center justify-center flex-shrink-0 transition-all duration-300 ${
                      isOpen
                        ? "rotate-180 bg-amber-400 text-black shadow-[1px_1px_0px_0px_#000] sm:shadow-[2px_2px_0px_0px_#000]"
                        : "bg-black text-white group-hover:bg-zinc-800"
                    }`}
                  >
                    <ChevronDown className="w-3.5 h-3.5 sm:w-5 sm:h-5 transition-transform duration-300" />
                  </div>
                </button>

                {/* Animated Drawer (250ms duration) */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-3.5 pb-3.5 pt-1 sm:px-5 sm:pb-5 text-white/75 sm:text-white/80 font-medium text-[0.8rem] sm:text-base leading-[1.55] sm:leading-relaxed border-t border-zinc-800 sm:border-t-2 sm:border-black/80 bg-zinc-950/40">
                        <p className="pl-3 sm:pl-8 border-l-2 border-amber-400/50 mt-1">
                          {faq.a}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ZoomIn, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const GALLERY_ITEMS = [
  {
    src: "/images/fleet-perth-skyline.webp",
    alt: "Perth Wheelchair Taxi Van with deployed boarding ramp in front of Perth skyline",
    caption: "Perth Wheelchair Maxi Taxi",
    description:
      "High-roof Toyota HiAce taxi van with automatic hydraulic wheelchair ramp, operating across Perth city and all suburbs.",
  },
  {
    src: "/images/fleet-ramp-deployed.webp",
    alt: "Toyota HiAce rear entry with hydraulic lift lowered for easy wheelchair access",
    caption: "Rear Hydraulic Wheelchair Lift",
    description:
      "Heavy-duty motorized rear lift platform engineered for smooth, level boarding of manual and electric wheelchairs.",
  },
  {
    src: "/images/fleet-cabin-interior.webp",
    alt: "Spacious interior cabin with BraunAbility lift system and comfortable seating",
    caption: "Certified Accessible Cabin",
    description:
      "Spacious passenger cabin equipped with certified restraint systems, heavy-duty floor anchors, and high-visibility grab handles.",
  },
];

export default function FleetGallery() {
  const [active, setActive] = useState<number | null>(null);

  const open = useCallback((idx: number) => setActive(idx), []);
  const close = useCallback(() => setActive(null), []);
  const prev = useCallback(
    () =>
      setActive((i) =>
        i === null ? null : (i - 1 + GALLERY_ITEMS.length) % GALLERY_ITEMS.length
      ),
    []
  );
  const next = useCallback(
    () => setActive((i) => (i === null ? null : (i + 1) % GALLERY_ITEMS.length)),
    []
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    },
    [close, prev, next]
  );

  const activeItem = active !== null ? GALLERY_ITEMS[active] : null;

  return (
    <>
      {/* Gallery Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
        {GALLERY_ITEMS.map((item, idx) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.55, delay: idx * 0.12, ease: "easeOut" }}
            className="group relative rounded-xl overflow-hidden border-2 border-zinc-800 bg-zinc-900 shadow-lg cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
            role="button"
            tabIndex={0}
            aria-label={"View full screen: " + item.caption}
            onClick={() => open(idx)}
            onKeyDown={(e) => e.key === "Enter" && open(idx)}
          >
            <div className="relative aspect-[4/3] w-full overflow-hidden bg-zinc-950">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-amber-400/0 group-hover:bg-amber-400/10 transition-colors duration-300 pointer-events-none" />
              <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/60 backdrop-blur-sm border border-white/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-md">
                <ZoomIn className="w-4 h-4 text-white" />
              </div>
            </div>
            <div className="px-3.5 py-3 flex items-center gap-2 border-t border-zinc-800 bg-zinc-900/90">
              <span className="w-2 h-2 rounded-full bg-amber-400 shrink-0 shadow-[0_0_8px_rgba(251,191,36,0.8)]" />
              <p className="text-xs font-bold text-zinc-100 uppercase tracking-wide truncate">
                {item.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {active !== null && activeItem && (
          <motion.div
            className="fixed inset-0 z-[9999] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            aria-modal="true"
            role="dialog"
            aria-label={"Lightbox: " + activeItem.caption}
            onKeyDown={handleKeyDown}
            tabIndex={-1}
          >
            <div
              className="absolute inset-0 bg-black/92 backdrop-blur-md"
              onClick={close}
              aria-hidden="true"
            />
            <motion.div
              className="relative z-10 w-full max-w-3xl bg-zinc-900 border-2 border-zinc-700 rounded-2xl overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.9)] flex flex-col"
              initial={{ opacity: 0, scale: 0.94 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.94 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <button
                onClick={close}
                aria-label="Close lightbox"
                className="absolute top-3 right-3 z-20 w-9 h-9 rounded-full bg-black/75 border border-zinc-600 flex items-center justify-center text-white hover:border-amber-400 hover:text-amber-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                <X className="w-4 h-4" />
              </button>
              <div className="relative w-full aspect-[16/10] bg-zinc-950">
                <Image
                  src={activeItem.src}
                  alt={activeItem.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, 850px"
                  className="object-contain"
                  priority
                />
              </div>
              <div className="px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 bg-zinc-900">
                <div>
                  <p className="text-amber-400 font-black text-sm uppercase tracking-wider">
                    {activeItem.caption}
                  </p>
                  <p className="text-zinc-300 text-xs mt-0.5 leading-relaxed">
                    {activeItem.description}
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={prev}
                    aria-label="Previous photo"
                    className="w-9 h-9 rounded-full border border-zinc-600 flex items-center justify-center text-white hover:border-amber-400 hover:text-amber-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={next}
                    aria-label="Next photo"
                    className="w-9 h-9 rounded-full border border-zinc-600 flex items-center justify-center text-white hover:border-amber-400 hover:text-amber-400 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-400"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="flex justify-center gap-1.5 pb-3 bg-zinc-900">
                {GALLERY_ITEMS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    aria-label={"Go to photo " + (i + 1)}
                    className={"h-1.5 rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-amber-400 " + (i === active ? "bg-amber-400 w-4" : "bg-zinc-600 hover:bg-zinc-400 w-1.5")}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

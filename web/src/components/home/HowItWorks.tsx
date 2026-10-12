"use client";

import React from "react";
import { motion } from "framer-motion";
import { Zap, Clock, ShieldCheck } from "lucide-react";

const steps = [
  {
    step: "1",
    title: "Select Service",
    description:
      "Pick wheelchair accessible, 7-11 seater, or baby seat taxi with your pickup date & time.",
    hoverColor: "group-hover:bg-amber-400 group-hover:text-black",
    colorAccent: "text-amber-400",
  },
  {
    step: "2",
    title: "Instant Fixed Quote",
    description:
      "We confirm vehicle availability and send an upfront fixed quote with no surge fees.",
    hoverColor: "group-hover:bg-emerald-500 group-hover:text-black",
    colorAccent: "text-emerald-400",
  },
  {
    step: "3",
    title: "Punctual Pickup",
    description:
      "Driver arrives early with ramps or pre-installed child seats, ready for smooth transit.",
    hoverColor: "group-hover:bg-sky-400 group-hover:text-black",
    colorAccent: "text-sky-400",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-12 md:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-black border-4 border-zinc-800 shadow-[8px_8px_0px_0px_#000] p-8 lg:p-12 text-center overflow-hidden"
      >
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] block mb-4"
        >
          Hassle-Free Booking Process
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-3xl sm:text-5xl font-black text-white uppercase tracking-tight mb-12 md:mb-16"
        >
          How It Works
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative max-w-5xl mx-auto">
          {/* Connecting line on desktop */}
          <div className="hidden md:block absolute top-10 left-[16%] right-[16%] h-1 bg-zinc-800 z-0" />

          {steps.map((item, idx) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 40, scale: 0.94 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.25 }}
              transition={{
                duration: 0.55,
                delay: idx * 0.16,
                ease: "easeOut",
              }}
              className="relative z-10 flex flex-col items-center group cursor-default"
            >
              <div
                className={`w-16 h-16 md:w-20 md:h-20 bg-black text-white border-4 border-zinc-800 rounded-none flex items-center justify-center font-black text-2xl md:text-3xl mb-4 ${item.hoverColor} group-hover:border-black transition-all duration-300 shadow-[4px_4px_0px_0px_#000] group-hover:scale-105`}
              >
                {item.step}
              </div>
              <h3 className="font-black text-white text-lg md:text-xl mb-2 uppercase tracking-wider group-hover:text-white transition-colors">
                {item.title}
              </h3>
              <p className="text-white/60 font-medium text-xs md:text-sm leading-relaxed max-w-xs">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

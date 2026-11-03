"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Accessibility, ShieldCheck, CheckCircle2, Sliders, ArrowRight, Eye } from "lucide-react";
import Link from "next/link";
import { SITE_CONFIG } from "@/config/site";

const specs = [
  { label: "Ramp & Lift System", value: "Rear foldout ramp or hydraulic lift with low 1:6 gradient for effortless boarding" },
  { label: "Entrance Height", value: "1,550 mm vertical entrance clearance accommodating tall powerchairs and headrests" },
  { label: "Restraint System", value: "4-point heavy-duty floor tie-down anchor system with lap/sash safety belt" },
  { label: "Wheelchair Types", value: "Supports manual wheelchairs, electric powerchairs, and mobility scooters" },
  { label: "Passenger Seating", value: "Carries up to 10 seated passengers, or wheelchair occupants plus companions" },
  { label: "Child Restraints", value: "Rear-facing baby capsules, forward-facing child seats, and boosters on request" },
  { label: "Climate Comfort", value: "Dual front and rear air-conditioning designed for Western Australian summers" },
  { label: "Luggage Space", value: "Ample room for suitcases, folding mobility aids, luggage and sports gear" },
];

export default function VehicleShowcase() {
  const [selectedPhoto, setSelectedPhoto] = useState<number>(0);

  const gallery = [
    {
      src: "/images/fleet-ramp-rear.jpg",
      alt: "Rear foldout wheelchair ramp deployed on Perth maxi taxi van",
      caption: "Rear Access Ramp Deployed",
    },
    {
      src: "/images/fleet-interior-lift.jpg",
      alt: "Hydraulic wheelchair lift interior view on Perth accessible taxi",
      caption: "Spacious Cabin & Lift Mechanism",
    },
    {
      src: "/images/fleet-rear-interior.jpg",
      alt: "Interior floor tie-down anchors and passenger seating in Perth maxi taxi",
      caption: "4-Point Floor Restraint Anchors",
    },
  ];

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full border-t-4 border-black" aria-label="Vehicle and Wheelchair Accessibility Specifications">
      <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-12">
        <span className="text-xs font-black text-amber-400 uppercase tracking-[0.2em] mb-2 sm:mb-3 block">
          Verified Fleet Specifications
        </span>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-white uppercase tracking-tight mb-3">
          Accessible Vans &amp; Maxi Cabs
        </h2>
        <p className="text-zinc-400 text-xs sm:text-sm font-medium">
          Built for safety, ease of boarding, and comfort. Up to 10 passengers with rear ramp or lift access.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Column: Visual Fleet Gallery (Responsive) */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border-2 border-zinc-800 bg-zinc-950 shadow-lg">
            <Image
              src={gallery[selectedPhoto].src}
              alt={gallery[selectedPhoto].alt}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover transition-all duration-300"
            />
            <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-4 flex items-center justify-between">
              <span className="text-xs font-bold text-white uppercase tracking-wider">
                {gallery[selectedPhoto].caption}
              </span>
              <span className="text-[10px] bg-amber-400 text-black font-black px-2 py-0.5 rounded-full uppercase">
                Perth Fleet
              </span>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="grid grid-cols-3 gap-3">
            {gallery.map((img, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setSelectedPhoto(idx)}
                className={`relative aspect-[16/10] rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                  selectedPhoto === idx
                    ? "border-amber-400 scale-[1.02] shadow-[0_0_12px_rgba(251,191,36,0.3)]"
                    : "border-zinc-800 opacity-60 hover:opacity-100"
                }`}
                aria-label={`View photo ${idx + 1}: ${img.caption}`}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="180px"
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Right Column: In-Page Verified Technical Specifications */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <div className="bg-zinc-950 border-2 border-zinc-800 rounded-2xl p-6 sm:p-8">
            <div className="flex items-center gap-3 mb-6 pb-4 border-b border-zinc-800">
              <div className="w-10 h-10 rounded-xl bg-amber-400/10 border border-amber-400/40 flex items-center justify-center text-amber-400 shrink-0">
                <Accessibility className="w-5 h-5" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-black text-white uppercase tracking-tight">
                  Wheelchair Ramp &amp; Vehicle Standards
                </h3>
                <p className="text-xs text-zinc-400">
                  Fully compliant with Western Australia commercial passenger vehicle standards
                </p>
              </div>
            </div>

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 text-xs">
              {specs.map((item, idx) => (
                <div key={idx} className="p-3 bg-zinc-900/90 rounded-xl border border-zinc-800 flex flex-col gap-1">
                  <dt className="text-amber-400 font-bold uppercase tracking-wider text-[10px]">
                    {item.label}
                  </dt>
                  <dd className="text-zinc-200 leading-snug font-medium">
                    {item.value}
                  </dd>
                </div>
              ))}
            </dl>

            <div className="mt-6 pt-4 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-2 text-xs text-zinc-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" aria-hidden="true" />
                <span>Certified 4-Point Tie-Down Restraints</span>
              </div>
              <Link
                href="/services/wheelchair-accessible-taxi"
                className="inline-flex items-center gap-1.5 text-xs font-black text-amber-400 hover:text-amber-300 uppercase tracking-wider"
              >
                <span>Read Full Wheelchair Guide</span>
                <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

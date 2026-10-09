"use client";

import { useState } from "react";
import { Accessibility, ShieldCheck, CheckCircle2, X, Sliders, ChevronRight } from "lucide-react";

export default function VehicleShowcase() {
  const [isOpen, setIsOpen] = useState(false);

  const specs = [
    { label: "Ramp Angle & Width", value: "850mm wide, low gradient 1:6 angle for easy boarding" },
    { label: "Door Clearance", value: "1,550mm vertical entry height (fits high-headrest powerchairs)" },
    { label: "Tie-Down System", value: "4-point Q'Straint self-tensioning retractors + lap/sash belt" },
    { label: "Max Weight Capacity", value: "Tested & certified for chairs up to 360 kg (Bariatric ready)" },
    { label: "Companion Seating", value: "Seats 4 to 6 additional family members alongside wheelchair" },
    { label: "Luggage Space", value: "Spacious boot accommodates 3–4 large suitcases plus medical gear" },
  ];

  return (
    <>
      {/* Trigger pill button matching design ref.jpeg style */}
      <button
        onClick={() => setIsOpen(true)}
        className="group inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 text-white border border-white/20 px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-md transition-all shadow-sm"
      >
        <span className="w-5 h-5 rounded-full bg-emerald-500 text-white flex items-center justify-center text-[10px] font-bold group-hover:scale-110 transition-transform">
          ✓
        </span>
        <span>View Vehicle & Ramp Specs</span>
        <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover:translate-x-0.5 transition-transform" />
      </button>

      {/* Modal Dialog */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-slate-900 border border-slate-700 text-white rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                <Accessibility className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">Accessible Vehicle Specifications</h3>
                <p className="text-xs text-slate-400">Certified Western Australia Department of Transport standards</p>
              </div>
            </div>

            <div className="space-y-3.5 my-6 text-sm">
              {specs.map((s, idx) => (
                <div key={idx} className="p-3 bg-slate-800/60 rounded-xl border border-slate-700/60 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                  <span className="text-xs text-slate-400 font-semibold">{s.label}:</span>
                  <span className="text-xs sm:text-sm text-slate-100 font-medium">{s.value}</span>
                </div>
              ))}
            </div>

            <div className="bg-emerald-950/50 border border-emerald-500/30 rounded-2xl p-4 flex items-start gap-3 mb-6">
              <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-200 leading-relaxed">
                Passengers remain comfortably and safely seated inside their manual or motorized wheelchairs throughout the entire journey.
              </p>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setIsOpen(false)}
                className="w-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-3 rounded-xl text-sm transition-colors"
              >
                Close Specifications
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

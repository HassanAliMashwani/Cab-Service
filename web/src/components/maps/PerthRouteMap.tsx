"use client";

import React, { useState } from "react";
import { Plane, Building2, Anchor, Stethoscope, Compass, Navigation2, Clock } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

interface RouteNode {
  id: string;
  name: string;
  category: "airport" | "cbd" | "port" | "health" | "coastal";
  x: number; // percentage
  y: number; // percentage
  desc: string;
  timeFromCBD: string;
  timeFromAirport: string;
}

const NODES: RouteNode[] = [
  {
    id: "joondalup",
    name: "Joondalup Hub",
    category: "health",
    x: 48,
    y: 16,
    desc: "Joondalup Health Campus, Northern suburbs & Sunset Coast",
    timeFromCBD: "28 mins",
    timeFromAirport: "35 mins",
  },
  {
    id: "scarborough",
    name: "Scarborough Beach",
    category: "coastal",
    x: 32,
    y: 35,
    desc: "Coastline hotels, beachfront esplanade & event charters",
    timeFromCBD: "20 mins",
    timeFromAirport: "30 mins",
  },
  {
    id: "perth_cbd",
    name: "Perth CBD & Metro",
    category: "cbd",
    x: 46,
    y: 45,
    desc: "Financial hub, RAC Arena, Optus Stadium & Elizabeth Quay",
    timeFromCBD: "0 mins",
    timeFromAirport: "18 mins",
  },
  {
    id: "perth_airport",
    name: "Perth Airport (T1-T4)",
    category: "airport",
    x: 72,
    y: 44,
    desc: "Domestic & International arrivals, flight tracking & ramp curbside",
    timeFromCBD: "18 mins",
    timeFromAirport: "0 mins",
  },
  {
    id: "midland",
    name: "Midland & Swan Valley",
    category: "health",
    x: 78,
    y: 30,
    desc: "St John of God Midland, winery day tours & Eastern corridor",
    timeFromCBD: "25 mins",
    timeFromAirport: "15 mins",
  },
  {
    id: "fremantle",
    name: "Fremantle Port",
    category: "port",
    x: 34,
    y: 65,
    desc: "Passenger cruise terminals, historic markets & hospitals",
    timeFromCBD: "26 mins",
    timeFromAirport: "34 mins",
  },
  {
    id: "murdoch",
    name: "Murdoch Medical Precinct",
    category: "health",
    x: 48,
    y: 68,
    desc: "Fiona Stanley Hospital, St John of God & rehabilitation clinics",
    timeFromCBD: "18 mins",
    timeFromAirport: "22 mins",
  },
  {
    id: "rockingham",
    name: "Rockingham & Coast",
    category: "coastal",
    x: 32,
    y: 84,
    desc: "Naval base access, coastal communities & medical appointments",
    timeFromCBD: "40 mins",
    timeFromAirport: "45 mins",
  },
  {
    id: "mandurah",
    name: "Mandurah & Peel",
    category: "coastal",
    x: 42,
    y: 94,
    desc: "Southern gateway, express highway charter transfers",
    timeFromCBD: "55 mins",
    timeFromAirport: "60 mins",
  },
];

export default function PerthRouteMap() {
  const [activeNode, setActiveNode] = useState<RouteNode>(NODES[3]); // Default: Airport

  return (
    <div className="w-full bg-zinc-950 border border-zinc-800 rounded-3xl overflow-hidden shadow-2xl relative">
      {/* Top Banner / Legend */}
      <div className="p-4 sm:p-5 border-b border-zinc-900 bg-zinc-900/60 flex flex-wrap items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-amber-400 animate-ping" />
          <span className="text-xs font-black uppercase tracking-wider text-white">
            Interactive Perth Arterial Network
          </span>
          <span className="hidden sm:inline-block text-[11px] font-semibold text-zinc-400 ml-2">
            Click pins to preview transit times &amp; coverage
          </span>
        </div>

        <div className="flex items-center gap-3 text-[11px] font-bold text-zinc-400">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-400" /> Airport &amp; CBD
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-sky-400" /> Arterial Highways
          </span>
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-400" /> Ports &amp; Medical
          </span>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
        
        {/* Interactive Map Visual (8 cols) */}
        <div className="lg:col-span-8 relative aspect-[4/3] sm:aspect-[16/10] bg-gradient-to-br from-zinc-950 via-zinc-900/90 to-black p-4 sm:p-8 flex items-center justify-center overflow-hidden">
          
          {/* Subtle Grid Backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(#333_1px,transparent_1px)] [background-size:24px_24px] opacity-30 pointer-events-none" />

          {/* SVG Arterials & Swan River */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Swan River Waterway (stylized glowing curve) */}
            <path
              d="M 15,62 C 30,60 38,52 46,46 C 54,40 65,36 85,32"
              fill="none"
              stroke="#0284c7"
              strokeWidth="2.8"
              strokeOpacity="0.35"
              strokeLinecap="round"
            />
            <path
              d="M 15,62 C 30,60 38,52 46,46 C 54,40 65,36 85,32"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.2"
              strokeOpacity="0.5"
              strokeDasharray="2,2"
            />

            {/* Mitchell & Kwinana Freeway (North-South spine) */}
            <path
              d="M 48,12 L 48,25 L 46,45 L 47,68 L 42,96"
              fill="none"
              stroke="#eab308"
              strokeWidth="2"
              strokeOpacity="0.45"
              strokeDasharray="3,2"
            />

            {/* Tonkin Highway (Eastern corridor & Airport connector) */}
            <path
              d="M 72,18 L 76,30 L 72,44 L 64,68 L 55,85"
              fill="none"
              stroke="#eab308"
              strokeWidth="1.6"
              strokeOpacity="0.4"
              strokeDasharray="2,2"
            />

            {/* Leach / Graham Farmer Freeway cross-connectors */}
            <path
              d="M 34,65 L 48,68 L 72,44"
              fill="none"
              stroke="#fbbf24"
              strokeWidth="1.4"
              strokeOpacity="0.3"
            />
            <path
              d="M 46,45 L 72,44"
              fill="none"
              stroke="#f59e0b"
              strokeWidth="2"
              strokeOpacity="0.6"
            />
          </svg>

          {/* Route Pins */}
          {NODES.map((node) => {
            const isSelected = activeNode.id === node.id;
            const isAirport = node.id === "perth_airport";
            const isCBD = node.id === "perth_cbd";

            return (
              <button
                key={node.id}
                type="button"
                onClick={() => setActiveNode(node)}
                style={{
                  left: `${node.x}%`,
                  top: `${node.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                className={`group absolute z-20 transition-all duration-300 focus:outline-none flex flex-col items-center cursor-pointer`}
              >
                {/* Pin Icon Bubble */}
                <div
                  className={`relative flex items-center justify-center rounded-full transition-all duration-300 ${
                    isSelected
                      ? "w-9 h-9 sm:w-11 sm:h-11 bg-amber-400 text-black shadow-[0_0_25px_rgba(251,191,36,0.8)] scale-110"
                      : isAirport
                      ? "w-8 h-8 sm:w-10 sm:h-10 bg-emerald-500 text-black shadow-[0_0_15px_rgba(16,185,129,0.5)]"
                      : isCBD
                      ? "w-8 h-8 sm:w-9 sm:h-9 bg-amber-500 text-black shadow-[0_0_15px_rgba(245,158,11,0.5)]"
                      : "w-6 h-6 sm:w-7 sm:h-7 bg-zinc-900 border border-zinc-700 text-zinc-300 hover:border-amber-400 hover:text-white"
                  }`}
                >
                  {node.category === "airport" && <Plane className="w-4 h-4 sm:w-5 sm:h-5" />}
                  {node.category === "cbd" && <Building2 className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                  {node.category === "port" && <Anchor className="w-3.5 h-3.5" />}
                  {node.category === "health" && <Stethoscope className="w-3.5 h-3.5" />}
                  {node.category === "coastal" && <Compass className="w-3.5 h-3.5" />}

                  {/* Pulsing ring for selected or airport */}
                  {(isSelected || isAirport) && (
                    <span
                      className={`absolute inset-0 rounded-full animate-ping opacity-35 ${
                        isSelected ? "bg-amber-400" : "bg-emerald-400"
                      }`}
                    />
                  )}
                </div>

                {/* Pin Label */}
                <span
                  className={`mt-1.5 px-2 py-0.5 rounded-md text-[10px] font-black uppercase tracking-wider whitespace-nowrap transition-all ${
                    isSelected
                      ? "bg-amber-400 text-black shadow-md"
                      : "bg-black/80 backdrop-blur-sm text-zinc-300 border border-zinc-800 group-hover:border-amber-400 group-hover:text-white"
                  }`}
                >
                  {node.name.split(" ")[0]}
                </span>
              </button>
            );
          })}

          {/* Quick Compass Overlay */}
          <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-[10px] font-bold text-zinc-500 bg-black/60 px-2 py-1 rounded-lg border border-zinc-900 pointer-events-none">
            <Navigation2 className="w-3 h-3 text-amber-400 rotate-45" />
            <span>METRO PERTH TRANSIT CORRIDOR</span>
          </div>
        </div>

        {/* Selected Hub Detail Card (4 cols) */}
        <div className="lg:col-span-4 p-5 sm:p-6 bg-zinc-950 border-t lg:border-t-0 lg:border-l border-zinc-900 flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[10px] font-black uppercase tracking-widest text-amber-400 px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20">
                Active Zone
              </span>
              <span className="text-xs text-zinc-400 font-semibold">
                Guaranteed Fixed Fare
              </span>
            </div>

            <h3 className="text-xl sm:text-2xl font-black uppercase text-white mb-2">
              {activeNode.name}
            </h3>

            <p className="text-xs text-zinc-300 leading-relaxed font-medium mb-6">
              {activeNode.desc}
            </p>

            {/* Travel Time Pills */}
            <div className="space-y-3 mb-6">
              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Plane className="w-4 h-4 text-emerald-400" />
                  <span className="text-xs font-bold text-zinc-300">
                    To Perth Airport (T1-T4)
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-black text-emerald-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{activeNode.timeFromAirport}</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <Building2 className="w-4 h-4 text-amber-400" />
                  <span className="text-xs font-bold text-zinc-300">
                    To Perth CBD &amp; Hotels
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-xs font-black text-amber-400">
                  <Clock className="w-3.5 h-3.5" />
                  <span>{activeNode.timeFromCBD}</span>
                </div>
              </div>
            </div>

            {/* Features for this hub */}
            <div className="space-y-1.5 text-xs text-zinc-400 font-medium">
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                <span>Zero airport toll surcharges or late-night fees</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Pre-installed wheelchair ramps &amp; child capsules</span>
              </div>
            </div>
          </div>

          {/* Quick Quote CTA for this location */}
          <div className="mt-6 pt-4 border-t border-zinc-900">
            <a
              href={`https://wa.me/923335028515?text=${encodeURIComponent(
                `Hi, I would like to get a fixed fare quote for a Maxi Cab to/from ${activeNode.name}.`
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 bg-[#25D366] hover:bg-[#20ba59] text-white font-black text-xs uppercase tracking-wider py-3.5 px-4 rounded-full shadow-lg transition-all hover:scale-[1.02]"
            >
              <WhatsAppIcon className="w-4 h-4" />
              <span>Quote for {activeNode.name.split(" ")[0]} via WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
}

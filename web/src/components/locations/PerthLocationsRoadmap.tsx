"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  MapPin,
  Plane,
  Building2,
  Compass,
  ArrowRight,
  Navigation,
  Clock,
} from "lucide-react";

export interface SuburbLocation {
  id: string;
  name: string;
  slug: string;
  category: "airport" | "metro" | "coastal" | "southern" | "eastern" | "northern";
  categoryLabel: string;
  x: number; // percentage in SVG viewBox
  y: number; // percentage in SVG viewBox
  timeAirport: string;
  timeCBD: string;
  arterials: string[];
  description: string;
  tagline: string;
  connectedTo: string[]; // ids of connected nodes
}

export const SUBURB_LOCATIONS: SuburbLocation[] = [
  {
    id: "joondalup",
    name: "Joondalup",
    slug: "joondalup",
    category: "northern",
    categoryLabel: "Northern Hub",
    x: 28,
    y: 14,
    timeAirport: "35 mins",
    timeCBD: "26 mins",
    arterials: ["Mitchell Fwy (M1)", "Reid Hwy", "Joondalup Dr"],
    description: "Joondalup Health Campus, Lakeside Shopping City & Northern Sunset Coast corridor.",
    tagline: "Northern Gateway & Medical Precinct",
    connectedTo: ["scarborough", "mount_lawley", "perth_cbd"]
  },
  {
    id: "scarborough",
    name: "Scarborough",
    slug: "scarborough",
    category: "coastal",
    categoryLabel: "Sunset Coast",
    x: 18,
    y: 30,
    timeAirport: "28 mins",
    timeCBD: "18 mins",
    arterials: ["West Coast Hwy", "Scarborough Beach Rd"],
    description: "Beachfront Esplanade, Sunset Strip hotels & accessible coastal promenade charters.",
    tagline: "Premier Sunset Coast Beach Hub",
    connectedTo: ["joondalup", "cottesloe", "subiaco", "perth_cbd"]
  },
  {
    id: "mount_lawley",
    name: "Mount Lawley",
    slug: "mount-lawley",
    category: "metro",
    categoryLabel: "Inner North",
    x: 48,
    y: 32,
    timeAirport: "18 mins",
    timeCBD: "8 mins",
    arterials: ["Beaufort St", "Lord St", "Walcott St"],
    description: "Historic cultural strip, cafes, Astor Theatre & inner-city boutique transport.",
    tagline: "Inner North Arts & Dining Hub",
    connectedTo: ["joondalup", "perth_cbd", "belmont", "midland"]
  },
  {
    id: "subiaco",
    name: "Subiaco",
    slug: "subiaco",
    category: "metro",
    categoryLabel: "Inner West",
    x: 38,
    y: 42,
    timeAirport: "22 mins",
    timeCBD: "7 mins",
    arterials: ["Hay St", "Roberts Rd", "Thomas St"],
    description: "Subiaco Square, King Edward Memorial Hospital & Western Suburbs transit.",
    tagline: "Western Medical & Urban Hub",
    connectedTo: ["scarborough", "cottesloe", "perth_cbd", "applecross"]
  },
  {
    id: "cottesloe",
    name: "Cottesloe",
    slug: "cottesloe",
    category: "coastal",
    categoryLabel: "Western Beaches",
    x: 18,
    y: 48,
    timeAirport: "32 mins",
    timeCBD: "20 mins",
    arterials: ["Stirling Hwy", "Curtin Ave", "Marine Pde"],
    description: "Iconic Cottesloe Beach, coastal cafes, event charters & ocean road transfers.",
    tagline: "Iconic Indian Ocean Coastal Strip",
    connectedTo: ["scarborough", "subiaco", "fremantle"]
  },
  {
    id: "perth_cbd",
    name: "Perth CBD",
    slug: "perth-cbd",
    category: "metro",
    categoryLabel: "Central Metro",
    x: 48,
    y: 44,
    timeAirport: "18 mins",
    timeCBD: "0 mins",
    arterials: ["Mitchell Fwy", "Kwinana Fwy", "Graham Farmer Fwy"],
    description: "Financial hub, Elizabeth Quay, RAC Arena, Optus Stadium & 5-star hotels.",
    tagline: "Capital Core & Metro Junction",
    connectedTo: ["joondalup", "mount_lawley", "subiaco", "victoria_park", "belmont", "applecross", "perth_airport"]
  },
  {
    id: "victoria_park",
    name: "Victoria Park",
    slug: "victoria-park",
    category: "metro",
    categoryLabel: "Burswood Strip",
    x: 56,
    y: 50,
    timeAirport: "14 mins",
    timeCBD: "8 mins",
    arterials: ["Albany Hwy", "Shepperton Rd", "Causeway"],
    description: "Burswood Crown Casino, Optus Stadium, Albany Hwy dining strip & inner east routes.",
    tagline: "Crown & Entertainment Gateway",
    connectedTo: ["perth_cbd", "belmont", "cannington", "applecross"]
  },
  {
    id: "belmont",
    name: "Belmont",
    slug: "belmont",
    category: "airport",
    categoryLabel: "Airport Corridor",
    x: 62,
    y: 40,
    timeAirport: "8 mins",
    timeCBD: "12 mins",
    arterials: ["Great Eastern Hwy", "Tonkin Hwy", "Orrong Rd"],
    description: "Direct airport corridor hotels, Belmont Forum & Swan River eastern precinct.",
    tagline: "Airport West Logistics & Hotel Hub",
    connectedTo: ["perth_cbd", "perth_airport", "victoria_park", "midland"]
  },
  {
    id: "perth_airport",
    name: "Perth Airport",
    slug: "perth-airport",
    category: "airport",
    categoryLabel: "Aviation Hub (T1-T4)",
    x: 74,
    y: 38,
    timeAirport: "0 mins",
    timeCBD: "18 mins",
    arterials: ["Tonkin Hwy", "Airport Dr", "Dunreath Dr"],
    description: "All domestic & international terminals (T1, T2, T3, T4) with 24/7 flight tracking.",
    tagline: "Western Australia's Primary Air Gateway",
    connectedTo: ["belmont", "midland", "cannington", "perth_cbd"]
  },
  {
    id: "midland",
    name: "Midland",
    slug: "midland",
    category: "eastern",
    categoryLabel: "Swan Valley Gateway",
    x: 82,
    y: 24,
    timeAirport: "16 mins",
    timeCBD: "25 mins",
    arterials: ["Great Eastern Hwy", "Roe Hwy", "Lloyd St"],
    description: "St John of God Midland Hospital, Swan Valley winery day charters & eastern arterial.",
    tagline: "Swan Valley & Eastern Foothills Gateway",
    connectedTo: ["mount_lawley", "belmont", "perth_airport", "cannington"]
  },
  {
    id: "applecross",
    name: "Applecross",
    slug: "applecross",
    category: "southern",
    categoryLabel: "River & South Metro",
    x: 38,
    y: 54,
    timeAirport: "20 mins",
    timeCBD: "12 mins",
    arterials: ["Canning Hwy", "Kwinana Fwy", "Sleat Rd"],
    description: "Canning Bridge transport hub, riverside estates & south metro medical transfers.",
    tagline: "Canning River & South Perth Link",
    connectedTo: ["perth_cbd", "subiaco", "victoria_park", "fremantle", "cannington", "rockingham"]
  },
  {
    id: "fremantle",
    name: "Fremantle",
    slug: "fremantle",
    category: "coastal",
    categoryLabel: "Historic Port",
    x: 20,
    y: 62,
    timeAirport: "34 mins",
    timeCBD: "24 mins",
    arterials: ["Stirling Hwy", "Leach Hwy", "South St"],
    description: "Cruise passenger terminal, Fremantle Hospital, historic markets & maritime charters.",
    tagline: "Historic Port & Cruise Ship Terminal",
    connectedTo: ["cottesloe", "applecross", "rockingham"]
  },
  {
    id: "cannington",
    name: "Cannington",
    slug: "cannington",
    category: "eastern",
    categoryLabel: "South East Hub",
    x: 66,
    y: 60,
    timeAirport: "15 mins",
    timeCBD: "16 mins",
    arterials: ["Albany Hwy", "Leach Hwy", "Manning Rd"],
    description: "Westfield Carousel, state exhibition centre & South East metro arterial crossroads.",
    tagline: "Regional Retail & Expressway Crossroads",
    connectedTo: ["victoria_park", "applecross", "perth_airport", "armadale"]
  },
  {
    id: "armadale",
    name: "Armadale",
    slug: "armadale",
    category: "eastern",
    categoryLabel: "South East Foothills",
    x: 80,
    y: 76,
    timeAirport: "28 mins",
    timeCBD: "34 mins",
    arterials: ["South Western Hwy", "Albany Hwy", "Armadale Rd"],
    description: "Armadale Health Service, Darling Scarp foothills & southern eastern corridor.",
    tagline: "Foothills Corridor & South East Hub",
    connectedTo: ["cannington", "mandurah"]
  },
  {
    id: "rockingham",
    name: "Rockingham",
    slug: "rockingham",
    category: "southern",
    categoryLabel: "South Coast & Naval",
    x: 22,
    y: 80,
    timeAirport: "45 mins",
    timeCBD: "40 mins",
    arterials: ["Kwinana Fwy", "Patterson Rd", "Ennis Ave"],
    description: "HMAS Stirling naval base access, Safety Bay beaches & coastal community transfers.",
    tagline: "Naval Base & Southern Coastal Haven",
    connectedTo: ["fremantle", "applecross", "mandurah"]
  },
  {
    id: "mandurah",
    name: "Mandurah",
    slug: "mandurah",
    category: "southern",
    categoryLabel: "Peel Gateway",
    x: 24,
    y: 92,
    timeAirport: "58 mins",
    timeCBD: "50 mins",
    arterials: ["Kwinana Fwy (M1)", "Mandurah Rd", "Old Coast Rd"],
    description: "Peel Region gateway, dolphin ocean marina, holiday charters & hospital express rides.",
    tagline: "Peel Region & Southern Highway Gateway",
    connectedTo: ["rockingham", "armadale"]
  }
];

export default function PerthLocationsRoadmap() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>("all");

  const activeHoveredLocation = hoveredId
    ? SUBURB_LOCATIONS.find((loc) => loc.id === hoveredId)
    : null;

  // Real geographic highway artery routes in Perth
  const HIGHWAY_LINES = [
    // Mitchell Freeway (M1 North): Joondalup -> down to Perth CBD
    { d: "M 28,14 L 38,28 L 48,44", stroke: "#facc15", strokeWidth: 3, label: "Mitchell Fwy (M1)" },
    // Kwinana Freeway (M1 South): Perth CBD -> Applecross -> Cockburn -> Mandurah
    { d: "M 48,44 L 38,54 L 28,74 L 24,92", stroke: "#facc15", strokeWidth: 3, label: "Kwinana Fwy (M1)" },
    // Graham Farmer Fwy & Great Eastern Hwy: Perth CBD -> Belmont -> Airport -> Midland
    { d: "M 48,44 L 62,40 L 74,38 L 82,24", stroke: "#38bdf8", strokeWidth: 2.5, label: "Gt Eastern Hwy" },
    // Tonkin Highway (Eastern Corridor): Midland -> Airport -> Cannington -> Armadale
    { d: "M 82,24 L 74,38 L 66,60 L 80,76", stroke: "#10b981", strokeWidth: 2.2, label: "Tonkin Hwy" },
    // Stirling Highway: Perth CBD -> Subiaco -> Cottesloe -> Fremantle
    { d: "M 48,44 L 38,42 L 18,48 L 20,62", stroke: "#e879f9", strokeWidth: 2.2, label: "Stirling Hwy" },
    // Leach Highway: Fremantle -> Applecross -> Cannington -> Airport
    { d: "M 20,62 L 38,54 L 66,60 L 74,38", stroke: "#fb923c", strokeWidth: 2, label: "Leach Hwy" },
    // Albany Highway: Perth CBD -> Victoria Park -> Cannington -> Armadale
    { d: "M 48,44 L 56,50 L 66,60 L 80,76", stroke: "#a3e635", strokeWidth: 2, label: "Albany Hwy" },
    // West Coast Highway: Joondalup -> Scarborough -> Cottesloe
    { d: "M 28,14 L 18,30 L 18,48", stroke: "#38bdf8", strokeWidth: 1.8, label: "West Coast Hwy" },
    // Coastal Link: Fremantle -> Rockingham
    { d: "M 20,62 L 22,80", stroke: "#38bdf8", strokeWidth: 2, label: "Patterson Rd" },
    // Armadale Link: Armadale -> Kwinana Freeway
    { d: "M 80,76 L 28,74", stroke: "#10b981", strokeWidth: 1.8, label: "Armadale Rd" },
  ];

  return (
    <div className="w-full bg-black text-white">

      {/* ─────────────────────────────────────────────────────────────
          CONNECTED TRANSIT ROADMAP CONTAINER
         ───────────────────────────────────────────────────────────── */}
      <div className="bg-zinc-950 border-4 border-black shadow-[8px_8px_0px_0px_#facc15] rounded-3xl overflow-hidden">
        
        {/* Header Strip with Live Transit Status & Corridor Filters */}
        <div className="p-4 sm:p-6 border-b-4 border-black bg-zinc-900 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-400 text-black flex items-center justify-center font-black shadow-[0_0_15px_rgba(251,191,36,0.6)]">
              <Navigation className="w-5 h-5 animate-pulse" />
            </div>
            <div>
              <h2 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white flex items-center gap-2">
                <span>Perth Connected Transit Arterials</span>
                <span className="hidden sm:inline-block px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                  Live Network
                </span>
              </h2>
              <p className="text-xs text-zinc-400 font-medium">
                Click any suburb node on the map to view direct accessible taxi information and travel times.
              </p>
            </div>
          </div>

          {/* Corridor Filter Chips */}
          <div className="flex flex-wrap items-center gap-1.5">
            {[
              { id: "all", label: "All 16 Hubs" },
              { id: "airport", label: "Airport Corridor" },
              { id: "metro", label: "Central Metro" },
              { id: "coastal", label: "Sunset & Beaches" },
              { id: "southern", label: "South & Port" },
              { id: "eastern", label: "East & Hills" },
            ].map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setFilterCategory(f.id)}
                className={`text-[11px] font-black uppercase tracking-wider px-3 py-1.5 rounded-full transition-all cursor-pointer ${
                  filterCategory === f.id
                    ? "bg-amber-400 text-black shadow-[2px_2px_0px_0px_#000]"
                    : "bg-zinc-800 text-zinc-300 hover:bg-zinc-700 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* ─────────────────────────────────────────────────────────────
            FULL-WIDTH ACCURATE TRANSIT ROADMAP CANVAS
           ───────────────────────────────────────────────────────────── */}
        <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/9] min-h-[560px] sm:min-h-[640px] md:min-h-[720px] bg-gradient-to-br from-zinc-950 via-zinc-900 to-black p-4 sm:p-8 flex items-center justify-center overflow-hidden">
          
          {/* Subtle grid backdrop */}
          <div className="absolute inset-0 bg-[radial-gradient(#3f3f46_1px,transparent_1px)] [background-size:24px_24px] opacity-40 pointer-events-none" />

          {/* Indian Ocean & Coastline Accent (West) */}
          <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-sky-950/40 via-sky-900/10 to-transparent pointer-events-none flex items-center justify-start pl-3">
            <span className="text-[11px] font-black uppercase tracking-[0.35em] text-sky-400/40 -rotate-90 select-none">
              Indian Ocean
            </span>
          </div>

          {/* SVG Map Lines (Highways, Rivers, Connections) */}
          <svg
            className="absolute inset-0 w-full h-full select-none"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            {/* Swan River Waterway (Flowing from Fremantle to Midland) */}
            <path
              d="M 14,62 C 24,60 32,56 38,54 C 44,52 46,46 48,44 C 54,42 58,41 62,40 C 70,38 76,30 84,20"
              fill="none"
              stroke="#0284c7"
              strokeWidth="4"
              strokeOpacity="0.4"
              strokeLinecap="round"
            />
            <path
              d="M 14,62 C 24,60 32,56 38,54 C 44,52 46,46 48,44 C 54,42 58,41 62,40 C 70,38 76,30 84,20"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.6"
              strokeOpacity="0.8"
              strokeDasharray="3 2"
            />

            {/* Canning River Branch (Joining Swan River at Applecross) */}
            <path
              d="M 38,54 C 46,58 56,62 66,68"
              fill="none"
              stroke="#0284c7"
              strokeWidth="2.5"
              strokeOpacity="0.35"
            />

            {/* All Major Interconnected Highway Artery Lines */}
            {HIGHWAY_LINES.map((hwy, i) => (
              <g key={i}>
                <path
                  d={hwy.d}
                  fill="none"
                  stroke="#000000"
                  strokeWidth={hwy.strokeWidth + 2.5}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  opacity={0.8}
                />
                <path
                  d={hwy.d}
                  fill="none"
                  stroke={hwy.stroke}
                  strokeWidth={hwy.strokeWidth}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeOpacity={0.65}
                  strokeDasharray="4 2"
                />
              </g>
            ))}

            {/* Highlighted Arterials when a Suburb is Hovered */}
            {activeHoveredLocation &&
              activeHoveredLocation.connectedTo.map((targetId) => {
                const targetNode = SUBURB_LOCATIONS.find((n) => n.id === targetId);
                if (!targetNode) return null;
                return (
                  <line
                    key={`hover-con-${targetId}`}
                    x1={activeHoveredLocation.x}
                    y1={activeHoveredLocation.y}
                    x2={targetNode.x}
                    y2={targetNode.y}
                    stroke="#facc15"
                    strokeWidth="3"
                    strokeDasharray="4 2"
                    strokeOpacity="0.9"
                    className="animate-pulse"
                  />
                );
              })}
          </svg>

          {/* Interactive Suburb Pins Overlay */}
          {SUBURB_LOCATIONS.map((suburb) => {
            const isHovered = hoveredId === suburb.id;
            const isAirport = suburb.id === "perth_airport";
            const isCBD = suburb.id === "perth_cbd";
            const isDimmed =
              filterCategory !== "all" && suburb.category !== filterCategory;
            const destinationHref =
              suburb.slug === "perth-airport"
                ? "/services/airport-transfers"
                : `/locations/${suburb.slug}`;

            return (
              <Link
                key={suburb.id}
                href={destinationHref}
                onMouseEnter={() => setHoveredId(suburb.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  left: `${suburb.x}%`,
                  top: `${suburb.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                className={`group absolute z-20 flex flex-col items-center focus:outline-none transition-all duration-200 ${
                  isDimmed ? "opacity-30 pointer-events-none" : "opacity-100"
                } ${isHovered ? "scale-125 z-30" : "hover:scale-115"}`}
                aria-label={`View ${suburb.name} transport details`}
              >
                {/* Floating Tooltip Card on Hover */}
                {isHovered && (
                  <div className="absolute bottom-full mb-2 bg-zinc-900 border-2 border-amber-400 text-white rounded-xl px-3 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.6)] whitespace-nowrap pointer-events-none z-50 text-left">
                    <div className="flex items-center gap-1.5 mb-0.5">
                      <span className="text-xs font-black uppercase text-amber-400">
                        {suburb.name}
                      </span>
                      <span className="text-[9px] px-1.5 py-0.2 bg-zinc-800 text-zinc-300 rounded font-semibold">
                        {suburb.categoryLabel}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-[10px] text-zinc-300">
                      <span className="flex items-center gap-1 text-emerald-400 font-bold">
                        <Clock className="w-3 h-3" /> {suburb.timeAirport} to Airport
                      </span>
                    </div>
                    <div className="text-[9px] font-bold text-amber-300 mt-1 flex items-center gap-1">
                      <span>Click to view guide</span>
                      <ArrowRight className="w-2.5 h-2.5" />
                    </div>
                  </div>
                )}

                {/* Pulsing Beacon for Airport */}
                {isAirport && (
                  <span className="absolute w-12 h-12 rounded-full bg-emerald-400 animate-ping pointer-events-none opacity-40" />
                )}

                {/* Node Circle */}
                <div
                  className={`relative w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center font-black transition-all duration-200 border-2 shadow-md ${
                    isAirport
                      ? "bg-emerald-500 text-black border-black shadow-[0_0_15px_#10b981]"
                      : isCBD
                      ? "bg-amber-400 text-black border-black shadow-[0_0_15px_#f59e0b]"
                      : isHovered
                      ? "bg-amber-400 text-black border-black shadow-[0_0_20px_#facc15]"
                      : "bg-zinc-900 text-white border-zinc-700 group-hover:border-amber-400 group-hover:bg-zinc-800"
                  }`}
                >
                  {isAirport ? (
                    <Plane className="w-4 h-4 sm:w-5 sm:h-5 text-black" />
                  ) : isCBD ? (
                    <Building2 className="w-4 h-4 text-black" />
                  ) : suburb.category === "coastal" ? (
                    <Compass className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-sky-400" />
                  ) : (
                    <MapPin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-400" />
                  )}
                </div>

                {/* Suburb Name Pill Below Node */}
                <span
                  className={`mt-1 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-black uppercase tracking-wider whitespace-nowrap shadow-md transition-all ${
                    isHovered
                      ? "bg-amber-400 text-black font-black scale-105"
                      : "bg-black/85 text-white/95 border border-white/10 group-hover:bg-zinc-800 group-hover:text-amber-400"
                  }`}
                >
                  {suburb.name}
                </span>
              </Link>
            );
          })}

          {/* Bottom Left Map Legend */}
          <div className="absolute bottom-3 left-3 z-10 flex flex-wrap gap-2 pointer-events-none">
            <div className="backdrop-blur-md bg-black/80 border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-bold text-zinc-300">
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400" />
              <span>Freeway M1</span>
            </div>
            <div className="backdrop-blur-md bg-black/80 border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-bold text-zinc-300">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400" />
              <span>Perth Airport Hub</span>
            </div>
            <div className="backdrop-blur-md bg-black/80 border border-white/10 px-3 py-1.5 rounded-full flex items-center gap-2 text-[10px] font-bold text-zinc-300">
              <span className="w-2.5 h-2.5 rounded-full bg-sky-400" />
              <span>Swan River</span>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

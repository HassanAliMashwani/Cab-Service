"use client";

import FadeIn from "@/components/animations/FadeIn";
import { 
  ShieldCheck, 
  Clock, 
  Heart, 
  Users, 
  type LucideIcon 
} from "lucide-react";

interface ValueItem {
  id: string;
  step: string;
  title: string;
  desc: string;
  icon: LucideIcon;
  bgColor: string;
}

const values: ValueItem[] = [
  {
    id: "safety",
    step: "01",
    title: "SAFETY FIRST",
    desc: "Certified Q'Straint tie-downs & audits",
    icon: ShieldCheck,
    bgColor: "bg-[#059669]", // Vibrant emerald green
  },
  {
    id: "punctuality",
    step: "02",
    title: "PUNCTUALITY",
    desc: "Flight tracking & guaranteed arrival",
    icon: Clock,
    bgColor: "bg-[#ea580c]", // Bold warm orange
  },
  {
    id: "compassion",
    step: "03",
    title: "DIGNIFIED CARE",
    desc: "Unhurried, patient passenger boarding",
    icon: Heart,
    bgColor: "bg-[#db2777]", // Vibrant berry pink
  },
  {
    id: "community",
    step: "04",
    title: "ALL PASSENGERS",
    desc: "Wheelchair, NDIS & group travel",
    icon: Users,
    bgColor: "bg-[#2563eb]", // Rich royal blue
  },
];

export default function CoreValuesGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
      {values.map((v, index) => {
        const Icon = v.icon;
        return (
          <FadeIn key={v.id} delay={index * 0.08} className="h-full">
            <div
              className={`group relative ${v.bgColor} p-6 sm:p-7 rounded-3xl min-h-[220px] sm:min-h-[240px] h-full flex flex-col justify-between overflow-hidden shadow-lg hover:-translate-y-1.5 hover:shadow-2xl transition-all duration-300`}
            >
              {/* Top Content: Pill & Text */}
              <div className="relative z-10">
                {/* Number Pill Badge */}
                <div className="inline-flex items-center justify-center bg-white/20 backdrop-blur-sm text-white text-xs font-black px-3 py-1 rounded-full mb-6 select-none">
                  {v.step}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-white mb-2 leading-tight">
                  {v.title}
                </h3>

                {/* Short Description */}
                <p className="text-white/95 text-xs sm:text-sm font-medium leading-relaxed max-w-[90%]">
                  {v.desc}
                </p>
              </div>

              {/* Bottom-Right Watermark Outline Icon */}
              <Icon 
                className="absolute -bottom-4 -right-4 w-28 h-28 sm:w-32 sm:h-32 text-white/20 pointer-events-none select-none stroke-[1.6] group-hover:scale-105 group-hover:text-white/25 transition-all duration-300" 
              />
            </div>
          </FadeIn>
        );
      })}
    </div>
  );
}

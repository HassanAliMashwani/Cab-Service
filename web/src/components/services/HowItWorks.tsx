import { FileText, CheckCircle2, MapPin, Smile, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const steps = [
  {
    num: "01",
    title: "Request a Quote",
    icon: FileText,
    color: "text-amber-400",
    hoverBg: "hover:bg-amber-400",
  },
  {
    num: "02",
    title: "Get Fixed Price",
    icon: CheckCircle2,
    color: "text-sky-400",
    hoverBg: "hover:bg-sky-400",
  },
  {
    num: "03",
    title: "Driver Arrives",
    icon: MapPin,
    color: "text-emerald-400",
    hoverBg: "hover:bg-emerald-400",
  },
  {
    num: "04",
    title: "Enjoy the Ride",
    icon: Smile,
    color: "text-violet-400",
    hoverBg: "hover:bg-violet-400",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-zinc-950 border-b-4 border-zinc-800 py-20 px-6 sm:px-10 lg:px-16">
      <div className="max-w-7xl mx-auto">

        {/* Section header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] font-black text-amber-400 uppercase tracking-[0.3em] block mb-2">
              Seamless Process
            </span>
            <h2 className="text-4xl sm:text-5xl font-black uppercase text-white tracking-tight leading-none">
              How It<br />Works
            </h2>
          </div>
          <Link
            href="/enquire"
            className="self-start sm:self-end inline-flex items-center gap-2 bg-amber-400 border-4 border-black text-black font-black uppercase text-xs px-5 py-3 shadow-[4px_4px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
          >
            Book Now <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Steps – brutalist grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-0 border-2 border-zinc-700">
          {steps.map(({ num, title, icon: Icon, color, hoverBg }, i) => (
            <div
              key={i}
              className={`group relative p-8 border-r-2 border-b-2 border-zinc-700 last:border-r-0 ${hoverBg} transition-colors duration-150 overflow-hidden`}
            >
              {/* Giant background number */}
              <span className="absolute -right-3 -bottom-5 text-[8rem] font-black text-white/[0.04] group-hover:text-black/10 select-none leading-none transition-colors">
                {num}
              </span>

              {/* Icon */}
              <div className={`w-16 h-16 border-4 border-zinc-700 group-hover:border-black flex items-center justify-center mb-6 transition-colors`}>
                <Icon className={`w-8 h-8 ${color} group-hover:text-black transition-colors`} />
              </div>

              {/* Step number */}
              <span className="text-[11px] font-black text-zinc-500 group-hover:text-black/60 uppercase tracking-widest block mb-2 transition-colors">
                Step {num}
              </span>

              {/* Title */}
              <h3 className="text-xl font-black text-white group-hover:text-black uppercase tracking-tight transition-colors">
                {title}
              </h3>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

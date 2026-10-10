import Link from "next/link";
import {
  Phone,
  ArrowUpRight,
  ShieldCheck,
  Clock,
  Car,
  Zap,
} from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function FinalCTABanner() {
  return (
    <section className="relative bg-black text-white overflow-hidden border-t-4 border-amber-400">

      {/* Floating giant icon – decorative */}
      <div className="absolute right-0 top-0 pointer-events-none select-none">
        <Car className="w-96 h-96 text-white/[0.03]" />
      </div>
      <div className="absolute left-0 bottom-0 pointer-events-none select-none">
        <Zap className="w-64 h-64 text-amber-400/[0.06] -rotate-12" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-24">

        {/* Giant headline */}
        <h2 className="text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-[0.9] tracking-tighter text-white mb-3">
          READY TO
        </h2>
        <h2 className="text-[clamp(3rem,10vw,8rem)] font-black uppercase leading-[0.9] tracking-tighter text-amber-400 mb-10">
          RIDE?
        </h2>

        {/* Glass trust strip */}
        <div className="flex flex-wrap gap-3 mb-10">
          {[
            { icon: Clock, text: "24/7 Available" },
            { icon: ShieldCheck, text: "Fixed Pricing" },
            { icon: ShieldCheck, text: "WA Licensed" },
          ].map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-2 backdrop-blur-md bg-white/[0.07] border border-white/[0.15] px-4 py-2.5">
              <Icon className="w-4 h-4 text-amber-400" />
              <span className="text-[11px] font-black text-white uppercase tracking-widest">{text}</span>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 items-center">
          <Link
            href="/enquire"
            className="inline-flex items-center gap-2 bg-amber-400 border-4 border-black text-black font-black uppercase text-sm px-8 py-4 rounded-full shadow-[6px_6px_0px_0px_#facc15] hover:shadow-[10px_10px_0px_0px_#facc15] hover:-translate-x-1 hover:-translate-y-1 transition-all"
          >
            Get Quote <ArrowUpRight className="w-5 h-5" />
          </Link>

          <a
            href="tel:+61424791786"
            className="inline-flex items-center gap-2 bg-transparent border-4 border-white/40 text-white font-black uppercase text-sm px-8 py-4 rounded-full hover:border-white hover:bg-white hover:text-black transition-all"
          >
            <Phone className="w-4 h-4" /> +61 424 791 786
          </a>

          <a
            href="https://wa.me/923335028515?text=Hi,%20I%20would%20like%20to%20book%20a%20Maxi%20Cab%20in%20Perth."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] border-4 border-black text-white font-black uppercase text-sm px-8 py-4 rounded-full shadow-[4px_4px_0px_0px_#000] hover:shadow-[7px_7px_0px_0px_#000] hover:-translate-x-1 hover:-translate-y-1 transition-all"
          >
            <WhatsAppIcon className="w-5 h-5" /> WhatsApp
          </a>
        </div>

      </div>
    </section>
  );
}

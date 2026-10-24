import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-2.5 py-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] sm:hidden z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="flex gap-1.5 items-center h-11">
        <a 
          href="tel:+61493252766" 
          className="flex-1 h-full min-h-[44px] flex items-center justify-center gap-1 px-1.5 bg-slate-800 active:bg-slate-700 text-white rounded-full font-bold text-[0.825rem] transition-colors border border-slate-700 whitespace-nowrap"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-3.5 h-3.5 text-amber-400 shrink-0" />
          <span>Call Now</span>
        </a>

        <a 
          href="https://wa.me/61493252766?text=Hi,%20I%20would%20like%20to%20book%20a%20Maxi%20Cab%20in%20Perth."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 h-full min-h-[44px] flex items-center justify-center gap-1 px-1.5 bg-emerald-500 active:bg-emerald-600 text-white rounded-full font-bold text-[0.825rem] transition-colors shadow-sm whitespace-nowrap"
          aria-label="WhatsApp Us"
        >
          <WhatsAppIcon className="w-3.5 h-3.5 shrink-0" />
          <span>WhatsApp</span>
        </a>

        <Link
          href="/enquire"
          className="flex-1 h-full min-h-[44px] flex items-center justify-center gap-1 px-1.5 bg-amber-400 active:bg-amber-300 text-black rounded-full font-black text-[0.825rem] transition-colors shadow-md whitespace-nowrap"
          aria-label="Book Online"
        >
          <Calendar className="w-3.5 h-3.5 text-black shrink-0" />
          <span>Book Now</span>
        </Link>
      </div>
    </div>
  );
}

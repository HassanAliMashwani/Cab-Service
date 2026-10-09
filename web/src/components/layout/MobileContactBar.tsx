import Link from "next/link";
import { Phone, MessageCircle, Calendar } from "lucide-react";

export default function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-slate-950/95 backdrop-blur-md border-t border-slate-800 px-3 py-2.5 sm:hidden z-50 shadow-[0_-4px_20px_rgba(0,0,0,0.3)]">
      <div className="flex gap-2 items-center">
        <a 
          href="tel:+61424791786" 
          className="flex-1 flex items-center justify-center gap-1.5 bg-slate-800 active:bg-slate-700 text-white py-2.5 rounded-xl font-bold text-xs transition-colors border border-slate-700"
          aria-label="Direct Phone Call"
        >
          <Phone className="w-4 h-4 text-amber-400" />
          <span>Call Now</span>
        </a>

        <a 
          href="https://wa.me/61424791786?text=Hi,%20I%20would%20like%20to%20book%20a%20Maxi%20Cab%20in%20Perth."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-[1.3] flex items-center justify-center gap-1.5 bg-emerald-500 active:bg-emerald-600 text-white py-2.5 rounded-xl font-bold text-xs transition-colors shadow-sm"
          aria-label="WhatsApp Us"
        >
          <MessageCircle className="w-4 h-4" />
          <span>WhatsApp</span>
        </a>

        <Link
          href="/enquire"
          className="flex-1 flex items-center justify-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 active:from-amber-600 text-slate-950 py-2.5 rounded-xl font-extrabold text-xs transition-colors shadow-md"
          aria-label="Book Online"
        >
          <Calendar className="w-4 h-4 text-slate-950" />
          <span>Book</span>
        </Link>
      </div>
    </div>
  );
}

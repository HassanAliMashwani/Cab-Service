import { Phone, MessageCircle } from "lucide-react";

export default function MobileContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-3 sm:hidden z-50 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.1)]">
      <div className="flex gap-3">
        <a 
          href="tel:+61400000000" 
          className="flex-1 flex items-center justify-center gap-2 bg-slate-100 text-slate-800 py-3 rounded-lg font-semibold"
        >
          <Phone className="w-5 h-5" />
          <span>Call</span>
        </a>
        <a 
          href="https://wa.me/61400000000?text=Hi,%20I%20need%20a%20wheelchair%20accessible%20taxi%20in%20Perth."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 bg-accent-green hover:bg-accent-green-hover text-white py-3 rounded-lg font-semibold"
        >
          <MessageCircle className="w-5 h-5" />
          <span>WhatsApp</span>
        </a>
      </div>
    </div>
  );
}

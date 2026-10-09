"use client";

import WhatsAppIcon from "@/components/icons/WhatsAppIcon";

export default function FloatingWhatsApp() {
  return (
    <a
      href="https://wa.me/61424791786?text=Hi,%20I%20would%20like%20to%20book%20a%20Maxi%20Cab%20in%20Perth."
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 bg-[#25D366] text-white rounded-full shadow-[0_4px_16px_rgba(37,211,102,0.45)] hover:scale-110 active:scale-95 transition-all duration-300"
      aria-label="Chat on WhatsApp"
    >
      <WhatsAppIcon className="w-7 h-7" />
    </a>
  );
}

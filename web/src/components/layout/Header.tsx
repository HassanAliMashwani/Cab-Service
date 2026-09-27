import Link from "next/link";
import { Phone, Mail, MessageCircle } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Placeholder */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-xl">W</span>
            </div>
            <span className="font-bold text-xl text-primary hidden sm:block">Perth Accessible Taxi</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <Link href="/" className="text-slate-600 hover:text-primary font-medium transition-colors">Home</Link>
            <Link href="/about" className="text-slate-600 hover:text-primary font-medium transition-colors">About Us</Link>
            <Link href="/services" className="text-slate-600 hover:text-primary font-medium transition-colors">Services</Link>
            <Link href="/faq" className="text-slate-600 hover:text-primary font-medium transition-colors">FAQ</Link>
          </nav>

          {/* Contact Actions */}
          <div className="flex items-center gap-3">
            <a 
              href="mailto:contact@example.com" 
              className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Email Us"
            >
              <Mail className="w-5 h-5" />
            </a>
            <a 
              href="tel:+61400000000" 
              className="hidden sm:flex w-10 h-10 items-center justify-center rounded-full bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors"
              aria-label="Call Us"
            >
              <Phone className="w-5 h-5" />
            </a>
            <a 
              href="https://wa.me/61400000000?text=Hi,%20I%20need%20a%20wheelchair%20accessible%20taxi%20in%20Perth."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-accent-green hover:bg-accent-green-hover text-white px-5 py-2.5 rounded-full font-semibold transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              <span>WhatsApp</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

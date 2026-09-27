import Link from "next/link";
import { MessageCircle, ShieldCheck, CheckCircle, Clock, Plane, Car } from "lucide-react";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl">
            <SlideUp>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Premium Wheelchair-Accessible Transport in Perth
              </h1>
            </SlideUp>
            <SlideUp delay={0.1}>
              <p className="text-lg sm:text-xl text-slate-300 mb-8 max-w-2xl">
                Reliable, dignified, and comfortable travel for you or your loved ones. Serving the Perth metropolitan area and Perth Airport.
              </p>
            </SlideUp>
            
            <SlideUp delay={0.2} className="flex flex-col sm:flex-row gap-4">
              <a 
                href="https://wa.me/61400000000?text=Hi,%20I%20need%20a%20wheelchair%20accessible%20taxi%20in%20Perth."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-accent-green hover:bg-accent-green-hover text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Book via WhatsApp</span>
              </a>
              <a 
                href="tel:+61400000000" 
                className="flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-bold text-lg transition-colors backdrop-blur-sm"
              >
                <span>Call Us Direct</span>
              </a>
            </SlideUp>
            
            <FadeIn delay={0.4} className="mt-8 flex flex-wrap gap-4 text-sm font-medium text-slate-300">
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-accent-green" /> Fully Insured</div>
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-accent-green" /> Police Checked</div>
              <div className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-accent-green" /> Experienced Drivers</div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="py-16 bg-white border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-12">
            <h2 className="text-3xl font-bold">Simple, Direct Booking</h2>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center relative">
            <div className="hidden md:block absolute top-12 left-1/6 right-1/6 h-0.5 bg-slate-100"></div>
            
            <SlideUp delay={0.1} className="relative z-10 bg-white px-6">
              <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <MessageCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">1. Send a Message</h3>
              <p className="text-slate-600">Tell us your pickup location, destination, and date via WhatsApp or Email.</p>
            </SlideUp>
            
            <SlideUp delay={0.2} className="relative z-10 bg-white px-6">
              <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">2. We Confirm</h3>
              <p className="text-slate-600">We'll reply promptly to confirm availability and provide a fixed price quote.</p>
            </SlideUp>
            
            <SlideUp delay={0.3} className="relative z-10 bg-white px-6">
              <div className="w-16 h-16 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold mb-3">3. Enjoy the Ride</h3>
              <p className="text-slate-600">Our specially equipped vehicle arrives on time to safely transport you.</p>
            </SlideUp>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">Our Services in Perth</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              Dedicated to providing comfortable and reliable wheelchair-accessible transportation across the city.
            </p>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Airport Card */}
            <SlideUp delay={0.1}>
              <Link href="/services/airport-transfers" className="group block bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-slate-200 h-full">
                <div className="p-8 h-full flex flex-col">
                  <div className="w-12 h-12 bg-orange-50 text-accent-orange rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                    <Plane className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Airport Transfers</h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    Stress-free transfers to and from Perth Airport. We monitor your flight and assist with luggage and boarding.
                  </p>
                  <div className="font-semibold text-primary flex items-center gap-2 mt-auto">
                    Learn more <span className="text-lg group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </Link>
            </SlideUp>

            {/* Local Everyday Card */}
            <SlideUp delay={0.2}>
              <Link href="/services/local-everyday-transport" className="group block bg-white rounded-2xl shadow-sm hover:shadow-md transition-shadow overflow-hidden border border-slate-200 h-full">
                <div className="p-8 h-full flex flex-col">
                  <div className="w-12 h-12 bg-blue-50 text-primary rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110">
                    <Car className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">Local Everyday Travel</h3>
                  <p className="text-slate-600 mb-6 flex-grow">
                    Reliable transport for medical appointments, shopping, social events, and everyday errands around Perth.
                  </p>
                  <div className="font-semibold text-primary flex items-center gap-2 mt-auto">
                    Learn more <span className="text-lg group-hover:translate-x-1 transition-transform">&rarr;</span>
                  </div>
                </div>
              </Link>
            </SlideUp>
          </div>
        </div>
      </section>
      
      {/* Trust & CTA bottom */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <SlideUp>
            <h2 className="text-3xl font-bold mb-6 text-white">Ready to book your transport?</h2>
            <p className="text-xl text-slate-300 mb-10">
              Send us a message directly. We usually respond within minutes.
            </p>
            <a 
              href="https://wa.me/61400000000?text=Hi,%20I%20need%20a%20wheelchair%20accessible%20taxi%20in%20Perth."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-accent-green hover:bg-accent-green-hover text-white px-8 py-4 rounded-xl font-bold text-xl transition-colors shadow-lg"
            >
              <MessageCircle className="w-6 h-6" />
              <span>Message on WhatsApp</span>
            </a>
          </SlideUp>
        </div>
      </section>
    </div>
  );
}

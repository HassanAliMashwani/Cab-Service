import { ShieldCheck, Heart, Navigation, Users } from "lucide-react";
import type { Metadata } from "next";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

export const metadata: Metadata = {
  title: "About Us | Perth Accessible Taxi",
  description: "Learn about our commitment to providing safe, dignified, and reliable wheelchair-accessible transport across Perth.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SlideUp className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Our Story
            </h1>
            <p className="text-xl text-slate-300">
              We believe that safe, comfortable, and dignified transport should be accessible to everyone in Perth.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-20">
            <FadeIn delay={0.1}>
              <h2 className="text-3xl font-bold mb-4">Dedicated to Accessibility</h2>
              <p className="text-slate-600 text-lg leading-relaxed mb-4">
                Perth Accessible Taxi was founded with a single mission: to provide a premium, stress-free transport experience for passengers who use wheelchairs or require mobility assistance.
              </p>
              <p className="text-slate-600 text-lg leading-relaxed">
                We saw a gap in standard taxi services where accessibility was treated as an afterthought. We decided to build a service where accessibility is the core focus, ensuring our vehicles are fully equipped and our drivers are professionally trained.
              </p>
            </FadeIn>
            <FadeIn delay={0.2} className="bg-slate-100 rounded-3xl h-64 md:h-full min-h-[300px] border border-slate-200">
               {/* Image Placeholder */}
               <div className="w-full h-full rounded-3xl bg-[url('https://images.unsplash.com/photo-1579389083078-4e7018379f7e?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center"></div>
            </FadeIn>
          </div>

          {/* Core Values */}
          <div className="mb-16">
            <FadeIn className="text-center mb-12">
              <h2 className="text-3xl font-bold">Our Core Values</h2>
            </FadeIn>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { icon: ShieldCheck, title: "Safety First", desc: "Rigorous vehicle maintenance, secure wheelchair tie-downs, and police-checked drivers." },
                { icon: Heart, title: "Dignity & Respect", desc: "We provide patient, compassionate assistance without rushing our passengers." },
                { icon: Navigation, title: "Reliability", desc: "Punctual service, flight tracking for airport transfers, and guaranteed bookings." },
                { icon: Users, title: "Community Focus", desc: "Proudly serving the Perth local community and international visitors alike." }
              ].map((value, i) => (
                <SlideUp key={i} delay={0.1 * i} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm text-center">
                  <div className="w-12 h-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                  <p className="text-slate-600 text-sm">{value.desc}</p>
                </SlideUp>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

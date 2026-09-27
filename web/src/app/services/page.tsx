import { Plane, Car, Navigation } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import FadeIn from "@/components/animations/FadeIn";
import SlideUp from "@/components/animations/SlideUp";

export const metadata: Metadata = {
  title: "Our Services | Perth Accessible Taxi",
  description: "Explore our range of wheelchair-accessible transport services in Perth, including airport transfers and local everyday travel.",
};

export default function ServicesPage() {
  const services = [
    {
      title: "Wheelchair Accessible Taxi",
      desc: "Our flagship service. Specially equipped vehicles designed to transport passengers safely while remaining seated in their wheelchairs.",
      icon: Navigation,
      href: "/services/wheelchair-accessible-taxi",
      color: "bg-blue-50 text-primary"
    },
    {
      title: "Airport Transfers",
      desc: "Stress-free transfers to and from Perth Airport. We track your flight, assist with luggage, and provide a direct meet-and-greet service.",
      icon: Plane,
      href: "/services/airport-transfers",
      color: "bg-orange-50 text-accent-orange"
    },
    {
      title: "Local Everyday Travel",
      desc: "Reliable transport for medical appointments, shopping, social events, and everyday errands around the Perth metropolitan area.",
      icon: Car,
      href: "/services/local-everyday-transport",
      color: "bg-green-50 text-accent-green"
    }
  ];

  return (
    <div className="flex flex-col w-full">
      {/* Hero */}
      <section className="bg-slate-900 text-white py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SlideUp className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-bold mb-6 text-white">
              Our Services
            </h1>
            <p className="text-xl text-slate-300">
              Specialized transportation tailored to your mobility needs.
            </p>
          </SlideUp>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <FadeIn key={i} delay={0.1 * i}>
                <Link href={service.href} className="group block bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all h-full border border-slate-200 overflow-hidden flex flex-col">
                  <div className="p-8 flex flex-col flex-grow">
                    <div className={`w-14 h-14 ${service.color} rounded-xl flex items-center justify-center mb-6 transition-transform group-hover:scale-110`}>
                      <service.icon className="w-7 h-7" />
                    </div>
                    <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">{service.title}</h2>
                    <p className="text-slate-600 mb-6 flex-grow">
                      {service.desc}
                    </p>
                    <div className="font-semibold text-primary flex items-center gap-2 mt-auto">
                      View details <span className="text-lg group-hover:translate-x-1 transition-transform">&rarr;</span>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

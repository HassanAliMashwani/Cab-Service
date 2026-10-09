import { Star, Quote, CheckCircle2 } from "lucide-react";
import SectionHeading from "./SectionHeading";

export default function TestimonialsSection() {
  const reviews = [
    {
      name: "Marcus & Sarah Jenkins",
      trip: "Perth Airport (T1) Family Transfer",
      rating: 5,
      comment: "We landed at Terminal 1 with 3 kids, 6 large suitcases, and a double pram. Our Maxi Cab was waiting right at the curbside with pre-installed child car seats. The driver was exceptionally polite and helped load everything. Best airport transfer experience in Perth!",
      location: "Fremantle",
    },
    {
      name: "David H. (NDIS Plan Manager)",
      trip: "Weekly Hospital & Medical Transfer",
      rating: 5,
      comment: "Finding a punctual wheelchair-accessible taxi in Perth used to be a nightmare until we booked here. The hydraulic ramp and 4-point Q'Straint tie-downs make my father feel completely secure. Always on time for his Fiona Stanley appointments.",
      location: "Murdoch",
    },
    {
      name: "Chloe Henderson",
      trip: "Wedding Guest Shuttle",
      rating: 5,
      comment: "Booked two 11-seater Maxi Cabs for our wedding party from Perth CBD to Swan Valley wineries. Drivers were super punctual, impeccably dressed, and vehicles were spotless with ice-cold air conditioning. Highly recommended for any event!",
      location: "Perth CBD",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto">
        
        <SectionHeading
          badge="Passenger Feedback"
          title="What Our Clients Say"
          subtitle="Real reviews from Perth families, business travelers, and accessible transport passengers."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev, index) => (
            <div
              key={index}
              className="bg-slate-50 rounded-3xl p-7 sm:p-8 border border-slate-200/80 shadow-xs hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between mb-5">
                  <div className="flex items-center gap-1 text-amber-500">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-8 h-8 text-slate-300" />
                </div>

                {/* Review Text */}
                <p className="text-slate-700 text-sm leading-relaxed italic mb-6">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author Info */}
              <div className="pt-4 border-t border-slate-200/60 flex items-center justify-between">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{rev.name}</h4>
                  <span className="text-xs text-amber-600 font-medium block">{rev.trip}</span>
                  <span className="text-[11px] text-slate-500">{rev.location}, WA</span>
                </div>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-100/70 px-2 py-1 rounded-full">
                  <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                  Verified
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

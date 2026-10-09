"use client";

import { useState } from "react";
import { 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Mail, 
  Plane, 
  Users, 
  Luggage, 
  ShieldCheck, 
  ArrowRight,
  Accessibility,
  Baby,
  Car,
  HeartPulse,
  Sparkles
} from "lucide-react";

export interface FormDataState {
  serviceType: "wheelchair" | "airport" | "maxi-cab" | "baby-seat" | "medical" | "event";
  name: string;
  phone: string;
  email: string;
  pickupLocation: string;
  destination: string;
  pickupDate: string;
  pickupTime: string;
  wheelchairType: "manual" | "electric" | "scooter" | "none" | "other";
  staysSeated: boolean;
  babySeatCapsule: number;
  babySeatChild: number;
  babySeatBooster: number;
  passengersCount: number;
  luggageCount: number;
  flightNumber: string;
  isReturnTrip: boolean;
  returnDate: string;
  returnTime: string;
  accessibilityNotes: string;
}

const initialForm: FormDataState = {
  serviceType: "wheelchair",
  name: "",
  phone: "",
  email: "",
  pickupLocation: "",
  destination: "",
  pickupDate: "",
  pickupTime: "",
  wheelchairType: "manual",
  staysSeated: true,
  babySeatCapsule: 0,
  babySeatChild: 0,
  babySeatBooster: 0,
  passengersCount: 2,
  luggageCount: 2,
  flightNumber: "",
  isReturnTrip: false,
  returnDate: "",
  returnTime: "",
  accessibilityNotes: "",
};

export default function EnquiryForm({ 
  prefilledService = "",
  compact = false 
}: { 
  prefilledService?: string; 
  compact?: boolean;
}) {
  const detectInitialService = (): FormDataState["serviceType"] => {
    const s = prefilledService.toLowerCase();
    if (s.includes("airport")) return "airport";
    if (s.includes("baby")) return "baby-seat";
    if (s.includes("group") || s.includes("maxi") || s.includes("11")) return "maxi-cab";
    if (s.includes("medical") || s.includes("ndis") || s.includes("hospital")) return "medical";
    if (s.includes("event") || s.includes("wedding")) return "event";
    return "wheelchair";
  };

  const [formData, setFormData] = useState<FormDataState>({
    ...initialForm,
    serviceType: detectInitialService(),
    destination: prefilledService.toLowerCase().includes("airport") ? "Perth Airport (PER)" : "",
    wheelchairType: prefilledService.toLowerCase().includes("baby") || prefilledService.toLowerCase().includes("group") ? "none" : "manual",
    staysSeated: prefilledService.toLowerCase().includes("baby") || prefilledService.toLowerCase().includes("group") ? false : true,
  });

  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [successResult, setSuccessResult] = useState<{
    referenceId: string;
    whatsappUrl: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === "checkbox") {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else if (type === "number") {
      setFormData((prev) => ({ ...prev, [name]: parseInt(value, 10) || 0 }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const setService = (type: FormDataState["serviceType"]) => {
    setFormData((prev) => {
      let wheelchair = prev.wheelchairType;
      let stays = prev.staysSeated;
      if (type === "baby-seat" || type === "maxi-cab") {
        wheelchair = "none";
        stays = false;
      } else if (type === "wheelchair") {
        wheelchair = "manual";
        stays = true;
      }
      return {
        ...prev,
        serviceType: type,
        wheelchairType: wheelchair,
        staysSeated: stays,
      };
    });
  };

  const setWheelchair = (type: FormDataState["wheelchairType"]) => {
    setFormData((prev) => ({
      ...prev,
      wheelchairType: type,
      staysSeated: type === "none" ? false : prev.staysSeated,
    }));
  };

  // Instant WhatsApp Direct Link Generation
  const generateWhatsAppUrl = () => {
    const serviceLabels: Record<string, string> = {
      "wheelchair": "Wheelchair Accessible Taxi",
      "airport": "Perth Airport Transfer",
      "maxi-cab": "7-11 Seater Maxi Cab",
      "baby-seat": "Maxi Taxi with Baby Seat",
      "medical": "Medical & Patient Transfer",
      "event": "Special Event / Wedding Charter",
    };

    const wheelchairLabels: Record<string, string> = {
      manual: "Manual Wheelchair",
      electric: "Powered / Electric Wheelchair",
      scooter: "Mobility Scooter",
      none: "Standard Passenger (No wheelchair)",
      other: "Special Mobility Aid"
    };

    const babySeatsList = [];
    if (formData.babySeatCapsule > 0) babySeatsList.push(`${formData.babySeatCapsule}x Infant Capsule (0-6m)`);
    if (formData.babySeatChild > 0) babySeatsList.push(`${formData.babySeatChild}x Child Seat (6m-4y)`);
    if (formData.babySeatBooster > 0) babySeatsList.push(`${formData.babySeatBooster}x Booster Seat (4-7y)`);

    const lines = [
      `*New Booking Enquiry (Perth Maxi & Accessible)*`,
      `*Service:* ${serviceLabels[formData.serviceType]}`,
      ``,
      `*Passenger Details:*`,
      `• Name: ${formData.name || "Customer"}`,
      `• Phone: ${formData.phone || "Not provided"}`,
      formData.email ? `• Email: ${formData.email}` : null,
      ``,
      `*Trip Details:*`,
      `• Pickup: ${formData.pickupLocation || "TBA"}`,
      `• Destination: ${formData.destination || "TBA"}`,
      `• Date: ${formData.pickupDate || "Today/Tomorrow"}`,
      `• Time: ${formData.pickupTime || "TBA"}`,
      formData.flightNumber ? `• Flight No: ${formData.flightNumber}` : null,
      ``,
      `*Party & Capacity:*`,
      `• Passengers: ${formData.passengersCount}`,
      `• Luggage: ${formData.luggageCount} bags`,
      formData.wheelchairType !== "none" ? `• Wheelchair: ${wheelchairLabels[formData.wheelchairType]} (${formData.staysSeated ? "Stays seated in chair" : "Seat transfer"})` : null,
      babySeatsList.length > 0 ? `• Baby Restraints: ${babySeatsList.join(", ")}` : null,
      formData.isReturnTrip ? `• Return Trip: ${formData.returnDate || "TBA"} at ${formData.returnTime || "TBA"}` : null,
      formData.accessibilityNotes ? `• Notes: ${formData.accessibilityNotes}` : null,
      ``,
      `Please confirm price and vehicle availability.`
    ].filter(Boolean);

    return `https://wa.me/61400000000?text=${encodeURIComponent(lines.join("\n"))}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");

    if (!formData.name.trim() || !formData.phone.trim()) {
      setErrorMsg("Please provide your name and contact phone number.");
      return;
    }
    if (!formData.pickupLocation.trim() || !formData.destination.trim()) {
      setErrorMsg("Please specify both pickup location and destination.");
      return;
    }
    if (!formData.pickupDate || !formData.pickupTime) {
      setErrorMsg("Please specify pickup date and time.");
      return;
    }

    setLoading(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const json = await res.json();

      if (!res.ok) {
        throw new Error(json.error || "Failed to submit enquiry.");
      }

      setSuccessResult({
        referenceId: json.referenceId,
        whatsappUrl: json.whatsappUrl,
      });
    } catch (err: unknown) {
      const message = err instanceof Error ? err.message : "Submission error occurred.";
      setErrorMsg(message);
    } finally {
      setLoading(false);
    }
  };

  if (successResult) {
    return (
      <div className="bg-white rounded-3xl p-8 md:p-12 border border-emerald-100 shadow-xl text-center max-w-2xl mx-auto">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle2 className="w-10 h-10" />
        </div>
        <span className="inline-block bg-emerald-50 text-emerald-800 text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-3">
          Booking Enquiry Sent
        </span>
        <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Thank You, {formData.name}!</h2>
        <p className="text-slate-600 text-base mb-6">
          Your booking enquiry reference is{" "}
          <span className="font-mono font-bold text-slate-900 bg-slate-100 px-2 py-1 rounded">
            {successResult.referenceId}
          </span>
          . Our dispatch team has been notified and will confirm your schedule.
        </p>

        <div className="bg-slate-50 rounded-2xl p-6 mb-8 text-left border border-slate-200 text-sm space-y-2">
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Service:</span>
            <span className="font-semibold text-slate-800 capitalize">{formData.serviceType.replace("-", " ")}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Pickup:</span>
            <span className="font-semibold text-slate-800">{formData.pickupLocation}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Destination:</span>
            <span className="font-semibold text-slate-800">{formData.destination}</span>
          </div>
          <div className="flex justify-between border-b border-slate-200 pb-2">
            <span className="text-slate-500">Date & Time:</span>
            <span className="font-semibold text-slate-800">{formData.pickupDate} at {formData.pickupTime}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Passengers / Luggage:</span>
            <span className="font-semibold text-slate-800">
              {formData.passengersCount} passengers, {formData.luggageCount} bags
            </span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={successResult.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg transition-all"
          >
            <MessageCircle className="w-6 h-6" />
            <span>Open in WhatsApp (Instant Confirmation)</span>
          </a>
          <button
            onClick={() => {
              setSuccessResult(null);
              setFormData(initialForm);
            }}
            className="inline-flex items-center justify-center gap-2 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold px-6 py-4 rounded-2xl transition-all"
          >
            Submit Another Booking
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-100 pb-6 mb-8">
        <div>
          <span className="inline-flex items-center gap-1.5 bg-blue-50 text-blue-700 text-xs font-semibold px-3 py-1 rounded-full mb-2">
            <Accessibility className="w-3.5 h-3.5" />
            Direct Owner & Dispatch Booking
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
            Book Perth Maxi Taxi & Accessible Transport
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Fixed transparent pricing • Zero airport surge pricing • Immediate dispatch confirmation
          </p>
        </div>

        <a
          href={generateWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-emerald-50 hover:bg-emerald-100 text-emerald-700 border border-emerald-200 px-4 py-2 rounded-xl text-sm font-bold transition-colors self-start sm:self-center"
        >
          <MessageCircle className="w-4 h-4 text-emerald-600" />
          <span>Quick WhatsApp</span>
        </a>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 flex items-center gap-3 text-sm">
          <AlertCircle className="w-5 h-5 flex-shrink-0" />
          <span>{errorMsg}</span>
        </div>
      )}

      {/* Service Selector Tabs */}
      <div className="mb-8">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
          Select Service Required
        </label>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2">
          {[
            { id: "wheelchair", label: "Wheelchair Taxi", icon: Accessibility },
            { id: "airport", label: "Airport Transfer", icon: Plane },
            { id: "maxi-cab", label: "7-11 Seater Maxi", icon: Users },
            { id: "baby-seat", label: "Taxi w/ Baby Seat", icon: Baby },
            { id: "medical", label: "Medical Transfer", icon: HeartPulse },
            { id: "event", label: "Weddings / Events", icon: Sparkles },
          ].map((item) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setService(item.id as FormDataState["serviceType"])}
              className={`p-3 rounded-2xl text-xs font-bold border transition-all flex flex-col items-center justify-center gap-1.5 text-center ${
                formData.serviceType === item.id
                  ? "bg-slate-900 text-white border-slate-900 shadow-md ring-2 ring-slate-900/10"
                  : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300 hover:bg-slate-100"
              }`}
            >
              <item.icon className="w-4 h-4" />
              <span>{item.label}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Section 1: Trip Itinerary */}
      <div className="space-y-6 mb-8">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          1. Trip Itinerary
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-emerald-600" />
              Pickup Location *
            </label>
            <input
              type="text"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              placeholder="e.g. Perth Airport Terminal 1, or Suburb Address"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none text-slate-900 text-sm transition-all"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-blue-600" />
              Destination *
            </label>
            <input
              type="text"
              name="destination"
              value={formData.destination}
              onChange={handleChange}
              placeholder="e.g. Fiona Stanley Hospital, Hotel, or Suburb"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-900 focus:border-slate-900 outline-none text-slate-900 text-sm transition-all"
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Calendar className="w-4 h-4 text-slate-400" />
              Pickup Date *
            </label>
            <input
              type="date"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-900 outline-none text-slate-900 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-slate-400" />
              Pickup Time *
            </label>
            <input
              type="time"
              name="pickupTime"
              value={formData.pickupTime}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-900 outline-none text-slate-900 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Plane className="w-4 h-4 text-slate-400" />
              Flight Number (Optional)
            </label>
            <input
              type="text"
              name="flightNumber"
              value={formData.flightNumber}
              onChange={handleChange}
              placeholder="e.g. QF10, EK420"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-900 outline-none text-slate-900 text-sm"
            />
          </div>
        </div>

        {/* Return Trip Checkbox */}
        <div className="pt-2">
          <label className="inline-flex items-center gap-2 cursor-pointer text-sm font-medium text-slate-700">
            <input
              type="checkbox"
              name="isReturnTrip"
              checked={formData.isReturnTrip}
              onChange={handleChange}
              className="w-4 h-4 rounded text-slate-900 focus:ring-slate-900 cursor-pointer"
            />
            <span>I need a return trip (Guaranteed return pickup)</span>
          </label>

          {formData.isReturnTrip && (
            <div className="mt-3 p-4 bg-slate-50 border border-slate-200 rounded-2xl grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Return Date</label>
                <input
                  type="date"
                  name="returnDate"
                  value={formData.returnDate}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-600 mb-1">Return Time</label>
                <input
                  type="time"
                  name="returnTime"
                  value={formData.returnTime}
                  onChange={handleChange}
                  className="w-full px-3 py-2 rounded-lg border border-slate-300 text-xs sm:text-sm"
                />
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Section 2: Passengers & Capacity */}
      <div className="space-y-6 mb-8 border-t border-slate-100 pt-8">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          2. Passengers & Luggage
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Users className="w-4 h-4 text-slate-400" />
              Total Passengers (Up to 11)
            </label>
            <select
              name="passengersCount"
              value={formData.passengersCount}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-900 outline-none text-slate-900 text-sm bg-white"
            >
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Passenger" : "Passengers"}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Luggage className="w-4 h-4 text-slate-400" />
              Luggage Pieces
            </label>
            <select
              name="luggageCount"
              value={formData.luggageCount}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-900 outline-none text-slate-900 text-sm bg-white"
            >
              {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
                <option key={num} value={num}>
                  {num} {num === 1 ? "Suitcase / Large Bag" : "Suitcases / Large Bags"}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Baby Seat Restraints Selector */}
        <div className="bg-amber-50/60 rounded-2xl p-5 border border-amber-200/80">
          <div className="flex items-center gap-2 mb-3">
            <Baby className="w-5 h-5 text-amber-700" />
            <h4 className="font-bold text-slate-900 text-sm">
              Need Child Restraints? (AS/NZS 1754 Certified)
            </h4>
          </div>
          <p className="text-xs text-slate-600 mb-4">
            Seats are pre-installed and disinfected prior to your pickup. Select required quantities:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Infant Capsule (0–6m)
              </label>
              <select
                name="babySeatCapsule"
                value={formData.babySeatCapsule}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border border-amber-300 text-xs sm:text-sm bg-white"
              >
                <option value={0}>0 - None</option>
                <option value={1}>1 Capsule</option>
                <option value={2}>2 Capsules</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Child Seat (6m–4y)
              </label>
              <select
                name="babySeatChild"
                value={formData.babySeatChild}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border border-amber-300 text-xs sm:text-sm bg-white"
              >
                <option value={0}>0 - None</option>
                <option value={1}>1 Toddler Seat</option>
                <option value={2}>2 Toddler Seats</option>
                <option value={3}>3 Toddler Seats</option>
              </select>
            </div>
            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">
                Booster Seat (4–7y+)
              </label>
              <select
                name="babySeatBooster"
                value={formData.babySeatBooster}
                onChange={handleChange}
                className="w-full px-3 py-2 rounded-xl border border-amber-300 text-xs sm:text-sm bg-white"
              >
                <option value={0}>0 - None</option>
                <option value={1}>1 Booster</option>
                <option value={2}>2 Boosters</option>
                <option value={3}>3 Boosters</option>
              </select>
            </div>
          </div>
        </div>

        {/* Wheelchair & Accessibility Section */}
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-2">
            Wheelchair or Mobility Device:
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-3">
            {[
              { id: "manual", label: "Manual Chair" },
              { id: "electric", label: "Power / Electric" },
              { id: "scooter", label: "Mobility Scooter" },
              { id: "none", label: "No Wheelchair" },
            ].map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setWheelchair(item.id as FormDataState["wheelchairType"])}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold border transition-all text-center ${
                  formData.wheelchairType === item.id
                    ? "bg-slate-900 text-white border-slate-900 shadow-sm"
                    : "bg-slate-50 text-slate-700 border-slate-200 hover:border-slate-300"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {formData.wheelchairType !== "none" && (
            <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex items-start gap-4">
              <input
                type="checkbox"
                id="staysSeated"
                name="staysSeated"
                checked={formData.staysSeated}
                onChange={handleChange}
                className="w-5 h-5 rounded text-emerald-600 focus:ring-emerald-500 mt-1 cursor-pointer"
              />
              <label htmlFor="staysSeated" className="cursor-pointer">
                <span className="block text-sm font-bold text-slate-900">
                  Passenger stays seated in wheelchair during trip
                </span>
                <span className="block text-xs text-slate-500 mt-0.5">
                  Our vehicle will deploy the hydraulic ramp and lock the wheelchair securely with 4-point Q'Straint safety harnesses.
                </span>
              </label>
            </div>
          )}
        </div>

        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            Special Requests or Mobility Notes (Optional)
          </label>
          <textarea
            name="accessibilityNotes"
            value={formData.accessibilityNotes}
            onChange={handleChange}
            rows={2}
            placeholder="e.g. Extra-wide powerchair, assistance needed from hospital lobby, pram and surfboards on board..."
            className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-900 outline-none text-slate-900 text-sm"
          />
        </div>
      </div>

      {/* Section 3: Passenger Contact Details */}
      <div className="space-y-6 mb-8 border-t border-slate-100 pt-8">
        <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400">
          3. Contact Details
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <User className="w-4 h-4 text-slate-400" />
              Full Name *
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="e.g. John Doe"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-900 outline-none text-slate-900 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Phone className="w-4 h-4 text-emerald-600" />
              Phone / WhatsApp Number *
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+61 400 000 000"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-900 outline-none text-slate-900 text-sm"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5 flex items-center gap-1.5">
              <Mail className="w-4 h-4 text-slate-400" />
              Email Address (Optional)
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="john@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-slate-900 outline-none text-slate-900 text-sm"
            />
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-slate-100">
        <button
          type="submit"
          disabled={loading}
          className="flex-1 inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold py-4 px-6 rounded-2xl shadow-lg transition-all disabled:opacity-50 text-base"
        >
          {loading ? (
            <span>Processing Enquiry...</span>
          ) : (
            <>
              <Send className="w-5 h-5" />
              <span>Confirm & Send Booking Enquiry</span>
            </>
          )}
        </button>

        <a
          href={generateWhatsAppUrl()}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-bold py-4 px-6 rounded-2xl shadow-md transition-all text-base"
        >
          <MessageCircle className="w-5 h-5" />
          <span>Send Direct to WhatsApp</span>
        </a>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-500 font-medium">
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          Zero Advance Payment Required
        </span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          Guaranteed Fixed Quote
        </span>
        <span className="flex items-center gap-1.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          WA Dept of Transport Licensed
        </span>
      </div>
    </form>
  );
}

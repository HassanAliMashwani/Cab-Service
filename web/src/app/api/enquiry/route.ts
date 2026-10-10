import { NextResponse } from "next/server";

export interface EnquiryPayload {
  serviceType: "wheelchair" | "airport" | "maxi-cab" | "baby-seat" | "medical" | "event";
  name: string;
  phone: string;
  email?: string;
  pickupLocation: string;
  destination: string;
  pickupDate: string;
  pickupTime: string;
  wheelchairType: "manual" | "electric" | "scooter" | "none" | "other";
  staysSeated: boolean;
  babySeatCapsule?: number;
  babySeatChild?: number;
  babySeatBooster?: number;
  passengersCount: number;
  luggageCount: number;
  flightNumber?: string;
  isReturnTrip?: boolean;
  returnDate?: string;
  returnTime?: string;
  accessibilityNotes?: string;
}

export async function POST(request: Request) {
  try {
    const data: EnquiryPayload = await request.json();

    // Validation
    if (!data.name || !data.phone || !data.pickupLocation || !data.destination || !data.pickupDate || !data.pickupTime) {
      return NextResponse.json(
        { error: "Please fill in all required fields (Name, Phone, Pickup, Destination, Date, and Time)." },
        { status: 400 }
      );
    }

    const referenceId = `PER-${Date.now().toString(36).toUpperCase()}-${Math.floor(Math.random() * 900 + 100)}`;

    const serviceLabels: Record<string, string> = {
      "wheelchair": "Wheelchair Accessible Taxi",
      "airport": "Perth Airport Transfer (24/7)",
      "maxi-cab": "7 to 11 Seater Maxi Cab",
      "baby-seat": "Maxi Taxi with Baby Seat",
      "medical": "Medical & Patient Transport",
      "event": "Special Event / Wedding Charter",
    };

    const wheelchairLabels: Record<string, string> = {
      "manual": "Manual Wheelchair",
      "electric": "Powered / Electric Wheelchair",
      "scooter": "Mobility Scooter",
      "none": "Standard Passenger (No wheelchair)",
      "other": "Special Mobility Aid"
    };

    const serviceName = serviceLabels[data.serviceType] || "Maxi Cab Service";
    const wheelchairLabel = wheelchairLabels[data.wheelchairType] || data.wheelchairType;

    const babySeatsList = [];
    if (data.babySeatCapsule && data.babySeatCapsule > 0) babySeatsList.push(`${data.babySeatCapsule}x Infant Capsule (0-6m)`);
    if (data.babySeatChild && data.babySeatChild > 0) babySeatsList.push(`${data.babySeatChild}x Child Seat (6m-4y)`);
    if (data.babySeatBooster && data.babySeatBooster > 0) babySeatsList.push(`${data.babySeatBooster}x Booster Seat (4-7y)`);

    const messageLines = [
      `*New Booking Enquiry [#${referenceId}]*`,
      `*Service:* ${serviceName}`,
      ``,
      `*Passenger Details:*`,
      `• Name: ${data.name}`,
      `• Phone: ${data.phone}`,
      data.email ? `• Email: ${data.email}` : null,
      ``,
      `*Trip Details:*`,
      `• Pickup: ${data.pickupLocation}`,
      `• Destination: ${data.destination}`,
      `• Date: ${data.pickupDate}`,
      `• Time: ${data.pickupTime}`,
      data.flightNumber ? `• Flight No: ${data.flightNumber}` : null,
      ``,
      `*Party & Capacity:*`,
      `• Total Passengers: ${data.passengersCount || 1}`,
      `• Luggage: ${data.luggageCount || 0} suitcases`,
      data.wheelchairType !== "none" ? `• Wheelchair: ${wheelchairLabel} (${data.staysSeated ? "Stays seated in chair" : "Seat transfer"})` : null,
      babySeatsList.length > 0 ? `• Baby Restraints: ${babySeatsList.join(", ")}` : null,
      data.isReturnTrip ? `• Return Trip: ${data.returnDate || "TBA"} at ${data.returnTime || "TBA"}` : null,
      data.accessibilityNotes ? `• Notes: ${data.accessibilityNotes}` : null,
      ``,
      `Please provide fixed quote and driver availability.`
    ].filter(Boolean);

    const fullMessage = messageLines.join("\n");
    const encodedMessage = encodeURIComponent(fullMessage);
    const whatsappUrl = `https://wa.me/923335028515?text=${encodedMessage}`;

    // Log the enquiry for operational records
    console.log(`[ENQUIRY_LOG] Ref: ${referenceId} - ${serviceName} from ${data.name} (${data.phone})`);

    return NextResponse.json({
      success: true,
      referenceId,
      message: "Enquiry received successfully! We will confirm your booking promptly.",
      whatsappUrl,
      enquirySummary: {
        referenceId,
        service: serviceName,
        name: data.name,
        pickup: data.pickupLocation,
        destination: data.destination,
        date: data.pickupDate,
        time: data.pickupTime,
        passengers: data.passengersCount,
        babySeats: babySeatsList.join(", ") || "None",
        wheelchairType: wheelchairLabel
      }
    });
  } catch (error) {
    console.error("Enquiry API Error:", error);
    return NextResponse.json(
      { error: "Failed to process enquiry. Please contact us directly via WhatsApp or phone." },
      { status: 500 }
    );
  }
}

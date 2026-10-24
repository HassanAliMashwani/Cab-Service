export const SITE_CONFIG = {
  name: "Perth Wheelchair Taxi Van",
  shortName: "Perth Wheelchair Taxi",
  tagline: "Dedicated Wheelchair Accessible Maxi Taxis in Perth",
  phone: "+61 493 252 766",
  phoneRaw: "+61493252766",
  phoneTel: "tel:+61493252766",
  whatsappNumber: "61493252766",
  whatsappDisplay: "+61 493 252 766",
  whatsappUrl: (message?: string) => 
    `https://wa.me/61493252766${message ? `?text=${encodeURIComponent(message)}` : ""}`,
  email: "bookings@wheelchairmaxiperth.com",
};

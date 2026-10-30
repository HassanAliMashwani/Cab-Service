import type { MetadataRoute } from "next";
import { SITE_URL } from "@/config/site";
import { suburbs } from "@/app/locations/page";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/services",
    "/services/wheelchair-accessible-taxi",
    "/services/medical-ndis-transport",
    "/services/group-maxi-cab",
    "/services/baby-seat-taxi",
    "/services/airport-transfers",
    "/services/tours-and-events-transport",
    "/locations",
    "/faq",
    "/contact",
    "/enquire",
    "/privacy",
    "/terms",
  ];

  const staticEntries: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `${SITE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.8,
  }));

  const locationEntries: MetadataRoute.Sitemap = suburbs.map((suburb) => ({
    url: `${SITE_URL}/locations/${suburb.toLowerCase().replace(/\s+/g, "-")}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  return [...staticEntries, ...locationEntries];
}

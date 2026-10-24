"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import "leaflet/dist/leaflet.css";

interface PlaceData {
  id: string;
  name: string;
  shortLabel: string;
  lat: number;
  lng: number;
  distanceKm: number;
  category: string;
  corridor: string;
  corridorLabel: string;
  showInPreview: boolean;
  googleMapsUrl: string;
}

interface BaseData {
  name: string;
  suburb: string;
  state: string;
  lat: number;
  lng: number;
  radiusKm: number;
  googleMapsUrl: string;
}

const BASE_LOCATION: BaseData = {
  name: "Perth Wheelchair Taxi Van - Our Base",
  suburb: "Girrawheen",
  state: "WA",
  lat: -31.8463333,
  lng: 115.8368056,
  radiusKm: 20.0,
  googleMapsUrl:
    "https://www.google.com/maps?q=31%C2%B050%2746.8%22S+115%C2%B050%2712.5%22E",
};

const PREVIEW_PLACES: PlaceData[] = [
  {
    id: "stirling",
    name: "Stirling City Centre / Station",
    shortLabel: "Stirling",
    lat: -31.8942,
    lng: 115.8058,
    distanceKm: 6.07,
    category: "station",
    corridor: "metro",
    corridorLabel: "Central Metro",
    showInPreview: true,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Stirling%20City%20Centre%20/%20Station,-31.8942,115.8058",
  },
  {
    id: "scarborough",
    name: "Scarborough Beach",
    shortLabel: "Scarborough",
    lat: -31.8971,
    lng: 115.7551,
    distanceKm: 9.56,
    category: "venue",
    corridor: "coastal",
    corridorLabel: "Sunset & Beaches",
    showInPreview: true,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Scarborough%20Beach,-31.8971,115.7551",
  },
  {
    id: "hillarys",
    name: "Hillarys Boat Harbour",
    shortLabel: "Hillarys Harbour",
    lat: -31.8241,
    lng: 115.7361,
    distanceKm: 9.83,
    category: "venue",
    corridor: "coastal",
    corridorLabel: "Sunset & Beaches",
    showInPreview: true,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Hillarys%20Boat%20Harbour,-31.8241,115.7361",
  },
  {
    id: "perth_cbd",
    name: "Perth CBD (Perth Railway Station)",
    shortLabel: "Perth CBD",
    lat: -31.9514,
    lng: 115.8604,
    distanceKm: 11.89,
    category: "station",
    corridor: "metro",
    corridorLabel: "Central Metro",
    showInPreview: true,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Perth%20CBD%20(Perth%20Railway%20Station),-31.9514,115.8604",
  },
  {
    id: "optus_stadium",
    name: "Optus Stadium, Burswood",
    shortLabel: "Optus Stadium",
    lat: -31.951,
    lng: 115.8891,
    distanceKm: 12.64,
    category: "sport",
    corridor: "metro",
    corridorLabel: "Central Metro",
    showInPreview: true,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Optus%20Stadium%2C%20Burswood,-31.951,115.8891",
  },
  {
    id: "joondalup",
    name: "Joondalup City Centre & Health Campus",
    shortLabel: "Joondalup",
    lat: -31.7455,
    lng: 115.7667,
    distanceKm: 13.02,
    category: "hospital",
    corridor: "coastal",
    corridorLabel: "Sunset & Beaches",
    showInPreview: true,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Joondalup%20City%20Centre%20%26%20Health%20Campus,-31.7455,115.7667",
  },
  {
    id: "belmont",
    name: "Belmont Forum",
    shortLabel: "Belmont",
    lat: -31.967,
    lng: 115.9288,
    distanceKm: 15.98,
    category: "shopping",
    corridor: "airport",
    corridorLabel: "Airport Corridor",
    showInPreview: true,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Belmont%20Forum,-31.967,115.9288",
  },
  {
    id: "perth_airport",
    name: "Perth Airport (Terminals T1-T4)",
    shortLabel: "Perth Airport",
    lat: -31.9415,
    lng: 115.9656,
    distanceKm: 16.12,
    category: "airport",
    corridor: "airport",
    corridorLabel: "Airport Corridor",
    showInPreview: true,
    googleMapsUrl:
      "https://www.google.com/maps/search/?api=1&query=Perth%20Airport%20(Terminals%20T1-T4),-31.9415,115.9656",
  },
];

export default function ServiceAreaMapClient() {
  const mapContainerRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);

  useEffect(() => {
    let isCancelled = false;

    async function initMap() {
      if (!mapContainerRef.current || mapInstanceRef.current) return;
      const L = (await import("leaflet")).default;
      if (isCancelled || !mapContainerRef.current) return;

      const map = L.map(mapContainerRef.current, {
        center: [BASE_LOCATION.lat, BASE_LOCATION.lng],
        zoom: 10,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: true,
      });

      mapInstanceRef.current = map;

      // Clean Light Grey / Monochrome tiles (zero watermarks, Google Maps style)
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a> contributors',
        maxZoom: 19,
        className: "service-area-greyscale-tiles",
      }).addTo(map);

      // Dashed yellow 20 km circle around Girrawheen base
      L.circle([BASE_LOCATION.lat, BASE_LOCATION.lng], {
        radius: BASE_LOCATION.radiusKm * 1000,
        color: "#FACC15",
        dashArray: "8, 8",
        weight: 2.5,
        fillColor: "#FACC15",
        fillOpacity: 0.04,
      }).addTo(map);

      // ── Base Marker ──
      const baseIcon = L.divIcon({
        className: "base-custom-icon",
        html: `
          <div role="button" tabindex="0" aria-label="${BASE_LOCATION.name} - Click to open Google Maps" style="display: flex; flex-direction: column; align-items: center; cursor: pointer; transform: translate(-50%, -100%);">
            <div style="background: #000000; color: #FACC15; border: 2px solid #FACC15; font-size: 11px; font-weight: 800; padding: 3px 9px; border-radius: 9999px; box-shadow: 0 4px 14px rgba(0,0,0,0.7); white-space: nowrap; margin-bottom: 4px; display: flex; align-items: center; gap: 4px;">
              <span>⭐</span>
              <span>${BASE_LOCATION.name}</span>
            </div>
            <div style="width: 32px; height: 32px; border-radius: 9999px; background: #FACC15; border: 3px solid #000000; display: flex; align-items: center; justify-content: center; box-shadow: 0 0 16px rgba(250, 204, 21, 0.75);">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                <polyline points="9 22 9 12 15 12 15 22"></polyline>
              </svg>
            </div>
          </div>
        `,
        iconSize: [0, 0],
      });

      const baseMarker = L.marker([BASE_LOCATION.lat, BASE_LOCATION.lng], {
        icon: baseIcon,
        title: BASE_LOCATION.name,
        alt: `${BASE_LOCATION.name} in Girrawheen`,
        zIndexOffset: 2000,
      }).addTo(map);

      baseMarker.on("click", () => {
        window.open(BASE_LOCATION.googleMapsUrl, "_blank", "noopener,noreferrer");
      });

      // ── Key Preview Places (6 to 8 places) ──
      const latLngs: [number, number][] = [
        [BASE_LOCATION.lat, BASE_LOCATION.lng],
      ];

      PREVIEW_PLACES.forEach((place) => {
        latLngs.push([place.lat, place.lng]);

        const isAirport = place.id === "perth_airport";
        const pinBg = isAirport ? "#10B981" : "#27272a";
        const dotBg = isAirport ? "#000000" : "#FACC15";

        const placeIcon = L.divIcon({
          className: "preview-place-icon",
          html: `
            <div role="button" tabindex="0" aria-label="${place.name} - Click to open Google Maps" style="display: flex; flex-direction: column; align-items: center; cursor: pointer; transform: translate(-50%, -100%);">
              <div style="background: rgba(18, 18, 22, 0.95); color: #ffffff; border: 1.5px solid ${isAirport ? "#10B981" : "rgba(250,204,21,0.6)"}; font-size: 10.5px; font-weight: 800; padding: 2px 7px; border-radius: 6px; box-shadow: 0 3px 10px rgba(0,0,0,0.55); white-space: nowrap; margin-bottom: 2px;">
                ${place.shortLabel}
              </div>
              <div style="width: 22px; height: 22px; border-radius: 9999px; background: ${pinBg}; border: 2px solid #FACC15; display: flex; align-items: center; justify-content: center; box-shadow: 0 2px 8px rgba(0,0,0,0.5);">
                <div style="width: 7px; height: 7px; border-radius: 9999px; background: ${dotBg};"></div>
              </div>
            </div>
          `,
          iconSize: [0, 0],
        });

        const marker = L.marker([place.lat, place.lng], {
          icon: placeIcon,
          title: `${place.name} (${place.distanceKm} km)`,
          alt: `${place.name}, ${place.distanceKm} km from Girrawheen base`,
          zIndexOffset: isAirport ? 1500 : 500,
        }).addTo(map);

        marker.on("click", () => {
          const url = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            `${place.name},${place.lat},${place.lng}`
          )}`;
          window.open(url, "_blank", "noopener,noreferrer");
        });
      });

      // Fit bounds with generous padding so every label and pin sits fully inside visible area
      const bounds = L.latLngBounds(latLngs);
      map.fitBounds(bounds, {
        paddingTopLeft: [35, 30],
        paddingBottomRight: [35, 30],
        maxZoom: 11,
      });

      setTimeout(() => {
        map.invalidateSize();
      }, 250);
    }

    initMap();

    return () => {
      isCancelled = true;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  return (
    <div className="w-full text-white">
      {/* ── Wide Preview Map Card (spans full content width, desktop: 360px, mobile: 280px) ── */}
      <div className="relative w-full rounded-2xl overflow-hidden border-2 border-zinc-800 bg-zinc-900 shadow-xl mb-6">
        <style jsx global>{`
          .service-area-greyscale-tiles {
            filter: grayscale(100%) contrast(92%) brightness(102%);
          }
          .home-preview-map-container {
            width: 100%;
            height: 360px;
            background-color: #f2f2f2;
          }
          @media (max-width: 640px) {
            .home-preview-map-container {
              height: 280px;
            }
          }
          .home-preview-map-container .leaflet-control-attribution {
            background: rgba(255, 255, 255, 0.85) !important;
            color: #52525b !important;
            font-size: 10px !important;
            padding: 2px 6px !important;
          }
          .home-preview-map-container .leaflet-control-zoom {
            border: 1px solid rgba(0, 0, 0, 0.15) !important;
            border-radius: 8px !important;
            overflow: hidden;
          }
          .home-preview-map-container .leaflet-control-zoom-in,
          .home-preview-map-container .leaflet-control-zoom-out {
            background: #ffffff !important;
            color: #18181b !important;
            min-width: 32px;
            min-height: 32px;
            line-height: 32px;
          }
        `}</style>

        <div
          ref={mapContainerRef}
          className="home-preview-map-container"
          tabIndex={0}
          aria-label="Interactive preview map of Perth service area within 20 km of Girrawheen base"
        />

        {/* Live Network & Click Hint overlay */}
        <div className="absolute bottom-3 left-3 z-[1000] bg-black/85 backdrop-blur-sm border border-white/10 px-3 py-1.5 rounded-lg text-[11px] text-zinc-300 pointer-events-none flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Click any pin to explore on Google Maps</span>
        </div>
      </div>

      {/* ── Only ONE Button Below Map: "View full map" linking to /locations ── */}
      <div className="flex justify-center pt-2">
        <Link
          href="/locations"
          className="inline-flex items-center justify-center gap-2.5 bg-amber-400 hover:bg-amber-300 text-black font-extrabold text-sm sm:text-base px-8 py-3.5 rounded-full transition-all duration-150 shadow-[0_4px_16px_rgba(250,204,21,0.3)] hover:shadow-[0_6px_22px_rgba(250,204,21,0.5)] hover:scale-105 active:scale-95 min-h-[44px]"
          aria-label="View full interactive transit roadmap on the Locations page"
        >
          <span>View full map</span>
          <ArrowRight className="w-4 h-4 text-black" />
        </Link>
      </div>
    </div>
  );
}

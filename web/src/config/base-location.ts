export const BASE_LOCATION = {
  name: "Girrawheen Base",
  label: "Our Base",
  suburb: "Girrawheen",
  state: "Western Australia",
  country: "Australia",
  latitude: -31.8463333,
  longitude: 115.8368056,
  radiusKm: 20.0,
  coordinatesDms: "31°50'46.8\"S 115°50'12.5\"E",
  googleMapsUrl:
    "https://www.google.com/maps?q=31%C2%B050%2746.8%22S+115%C2%B050%2712.5%22E",
  showBaseMarker: true, // User chose: Show exact base location publicly with a yellow marker labelled "Our Base"
} as const;

export type BaseLocationConfig = typeof BASE_LOCATION;

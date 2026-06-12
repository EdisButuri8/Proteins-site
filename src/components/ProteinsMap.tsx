import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export default function ProteinsMap() {
  const mapRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    const map = L.map(mapRef.current).setView([-24.61771122595817, -53.71042433413768], 15);

    L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
      attribution: "&copy; OpenStreetMap",
    }).addTo(map);

    L.marker([-24.61771122595817, -53.71042433413768])
      .addTo(map)
      .bindPopup(
        "<strong>Proteins Biotecnologia</strong><br />Biopark - Toledo PR",
      );

    return () => {
      map.remove();
    };
  }, []);

  return <div ref={mapRef} className="h-[420px] w-full rounded-2xl" />;
}

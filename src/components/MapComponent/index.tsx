"use client";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix marker icon issue
delete (L as any).Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
});

const MapComponent: React.FC = () => {
  const [position, setPosition] = useState<[number, number]>([51.505, -0.09]); // Default position (latitude, longitude)

  // Function to update position
  const updatePosition = (lat: number, lng: number) => {
    setPosition([lat, lng]);
  };

  useEffect(() => {
    // For demonstration, simulate location update every 5 seconds
    const interval = setInterval(() => {
      const newLat = position[0] + (Math.random() - 0.5) * 0.01; // Random lat change
      const newLng = position[1] + (Math.random() - 0.5) * 0.01; // Random lng change
      updatePosition(newLat, newLng);
    }, 5000);

    return () => clearInterval(interval);
  }, [position]);

  return (
    <MapContainer
      center={position}
      zoom={13}
      style={{ height: "400px", width: "100%" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={position}>
        <Popup>
          Current Location: {position[0].toFixed(5)}, {position[1].toFixed(5)}
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default MapComponent;

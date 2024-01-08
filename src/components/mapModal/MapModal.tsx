import React, { useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import markerIcon from "../../constants/markerIcon";
import MapMarker from "../marker/MapMarker";
import styles from "./MapModal.module.scss";

interface MapModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectLocation: (lat: number, lng: number) => void;
}

const MapModal: React.FC<MapModalProps> = ({
  isOpen,
  onClose,
  onSelectLocation,
}) => {
  const [mapCenter, setMapCenter] = useState<[number, number]>([49.0, 31.0]);

  const handleMapClick = (e: L.LeafletMouseEvent) => {
    const { lat, lng } = e.latlng;
    setMapCenter([lat, lng]);

    onSelectLocation(lat, lng);
  };

  return (
    <div
      className={`${styles.mapContainer} ${isOpen ? styles.showContainer : ""}`}
    >
      <MapContainer
        center={mapCenter}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: "400px", width: "800px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker icon={markerIcon} position={mapCenter}>
          <Popup>Your selected location</Popup>
        </Marker>
        <MapMarker handleMapClick={handleMapClick} />
      </MapContainer>
    </div>
  );
};

export default MapModal;

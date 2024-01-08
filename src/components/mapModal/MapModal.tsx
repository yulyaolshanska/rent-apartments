import React, { useEffect, useState } from "react";
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

  const handleBackdrop = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return (): void => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div
      className={`${styles.modalBackdrop} ${
        isOpen ? styles.showContainer : ""
      }`}
      onClick={handleBackdrop}
    >
      <div className={styles.mapContainer}>
        <MapContainer
          center={mapCenter}
          zoom={6}
          scrollWheelZoom={false}
          style={{ height: "600px", width: "800px" }}
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
        <button onClick={onClose}>Зберегти розташування</button>
      </div>
    </div>
  );
};

export default MapModal;

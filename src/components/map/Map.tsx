import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { Apartment } from "../../types/interfaces";
import "leaflet/dist/leaflet.css";
import LocationMarker from "../LocationMarker/LocationMarker";
import markerIcon from "../../constants/markerIcon";

interface MapProps {
  apartments: Apartment[];
  handleMarkerClick: (apartment: Apartment) => void;
  handleMapClick: () => void;
}

const Map: React.FC<MapProps> = ({
  apartments,
  handleMarkerClick,
  handleMapClick,
}) => {
  return (
    <>
      <MapContainer
        center={[49.0, 31.0]}
        zoom={6}
        scrollWheelZoom={false}
        style={{ height: "600px", width: "700px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
        />
        {apartments.map((apartment) => (
          <Marker
            icon={markerIcon}
            key={apartment._id}
            position={[apartment.lat, apartment.lon]}
            eventHandlers={{
              click: () => handleMarkerClick(apartment),
            }}
          >
            <Popup>{apartment.description}</Popup>
          </Marker>
        ))}
        <LocationMarker
          apartments={apartments}
          handleMapClick={handleMapClick}
        />
      </MapContainer>
    </>
  );
};

export default Map;

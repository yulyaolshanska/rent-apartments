import React, { useState } from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import { Apartment } from "../../types/interfaces";
import markerIconURL from "../../images/icons/icons8-location-30.png";
import L from "leaflet";
import icon from "../../constants/icon";
import "leaflet/dist/leaflet.css";

const markerIcon = new L.Icon({
  iconUrl: markerIconURL,
  iconSize: [30, 30],
  iconAnchor: [5, 30],
});

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
  const [position, setPosition] = useState<L.LatLng>();
  // const map = useMapEvents({
  //   click() {
  //     map.locate();
  //   },
  //   locationfound(e) {
  //     setPosition(e.latlng);
  //     map.flyTo(e.latlng, map.getZoom());
  //   },
  // });
  // const map = useMap();

  // useMapEvents({
  //   click: (e) => {
  //     const { lat, lng } = e.latlng;
  //     L.marker([lat, lng], { icon }).addTo(map);
  //   },
  // });

  return (
    <MapContainer
      center={[49.0, 31.0]}
      zoom={6}
      scrollWheelZoom={false}
      style={{ height: "600px", width: "800px" }}
      // onClick={handleMapClick}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
      />
      {apartments.map((apartment) => (
        <Marker
          icon={markerIcon}
          key={apartment.id}
          position={[apartment.lat, apartment.lon]}
          eventHandlers={{
            click: () => handleMarkerClick(apartment),
          }}
        >
          <Popup>{apartment.description}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;

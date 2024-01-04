import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import { Location } from "../../types/interfaces";
import "leaflet/dist/leaflet.css";

interface MapProps {
  locations: Location[];
  handleMarkerClick: (location: Location) => void;
}

const Map: React.FC<MapProps> = ({ locations, handleMarkerClick }) => {
  const center: LatLngExpression = [51.505, -0.09];

  return (
    <MapContainer
      center={center}
      zoom={13}
      scrollWheelZoom={false}
      style={{ height: "500px", width: "800px" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright%22%3EOpenStreetMap</a> contributors'
      />
      {locations.map((location) => (
        <Marker
          key={location.id}
          position={[location.latitude, location.longitude]}
          // onClick={() => handleMarkerClick(location)}
          eventHandlers={{
            click: () => handleMarkerClick(location),
          }}
        >
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;

import { useMapEvents } from "react-leaflet";

interface MapMarkerProps {
  handleMapClick: (e: L.LeafletMouseEvent) => void;
}

const MapMarker: React.FC<MapMarkerProps> = ({ handleMapClick }) => {
  useMapEvents({
    click: (e) => {
      handleMapClick(e);
    },
  });

  return <></>;
};

export default MapMarker;

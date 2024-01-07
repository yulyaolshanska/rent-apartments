import markerIconURL from "../images/icons/icons8-location-30.png";
import L from "leaflet";

const markerIcon = new L.Icon({
  iconUrl: markerIconURL,
  iconSize: [30, 30],
  iconAnchor: [5, 30],
  shadowUrl: "https://unpkg.com/leaflet@1.7/dist/images/marker-shadow.png",
});

export default markerIcon;

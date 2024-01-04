import React, { useState } from "react";
// import AddAdvertisement from "./components/addAdvertisement/AddAdvertisement";
import Map from "./components/map/Map";
import { Location } from "./types/interfaces";
import "leaflet/dist/leaflet.css";

const exampleLocations = [
  {
    id: 1,
    name: "Example Location 1",
    latitude: 51.51,
    longitude: -0.1,
  },
  {
    id: 2,
    name: "Example Location 2",
    latitude: 51.52,
    longitude: -0.08,
  },
];

const App: React.FC = () => {
  const [locations, setLocations] = useState<Location[]>(exampleLocations);

  const handleMarkerClick = (location: Location) => {
    console.log("Marker clicked:", location);
  };

  // const handleAdvertisementAdded = (newAdvertisement: Location) => {
  //   setLocations([...locations, newAdvertisement]);
  // };

  return (
    <div>
      <Map locations={locations} handleMarkerClick={handleMarkerClick} />
      {/* <AddAdvertisement onAdvertisementAdded={handleAdvertisementAdded} /> */}
    </div>
  );
};

export default App;

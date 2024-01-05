import React, { useState } from "react";
// import AddAdvertisement from "./components/addAdvertisement/AddAdvertisement";
import Map from "./components/map/Map";
import { Apartment } from "./types/interfaces";
import "leaflet/dist/leaflet.css";
import { apartmentList } from "./mock/apartments";
import ApartmentCard from "./components/apartmentCard/ApartmentCard";
import styles from "./App.module.scss";

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
  const [apartments, setApartments] = useState<Apartment[]>(apartmentList);
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(
    null
  );

  const handleMarkerClick = (apartment: Apartment) => {
    console.log("Marker clicked:", apartment);
    setSelectedApartment(apartment);
  };

  const handleMapClick = () => {
    setSelectedApartment(null);
  };

  // const handleAdvertisementAdded = (newAdvertisement: Location) => {
  //   setLocations([...locations, newAdvertisement]);
  // };

  return (
    <div className={styles.pageContainer}>
      <Map
        apartments={apartments}
        handleMarkerClick={handleMarkerClick}
        handleMapClick={handleMapClick}
      />
      {/* <AddAdvertisement onAdvertisementAdded={handleAdvertisementAdded} /> */}
      <div style={{ marginLeft: "10px", width: "300px" }}>
        {selectedApartment && (
          <ApartmentCard
            title={selectedApartment.title}
            description={selectedApartment.description}
            type={selectedApartment.type}
            address={selectedApartment.address}
            image={selectedApartment.image}
            price={selectedApartment.price}
          />
        )}
      </div>
    </div>
  );
};

export default App;

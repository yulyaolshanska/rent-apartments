import React, { useState } from "react";
import Map from "./components/map/Map";
import { Apartment } from "./types/interfaces";
import "leaflet/dist/leaflet.css";
import { apartmentList } from "./mock/apartments";
import ApartmentCard from "./components/apartmentCard/ApartmentCard";
import styles from "./App.module.scss";
import ApartmentList from "./components/apartmentList/ApartmentList";
import { useSelector } from "react-redux";
import { RootState } from "./redux/store/store";
import AddApartmentForm from "./components/addApartmentForm/AddApartmentForm";

const App: React.FC = () => {
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(
    null
  );
  const [apartments, setApartments] = useState<Apartment[]>(apartmentList);
  const visibleApartments = useSelector(
    (state: RootState) => state.apartments.apartments
  );

  const handleMarkerClick = (apartment: Apartment) => {
    setSelectedApartment(apartment);
  };

  const handleMapClick = () => {
    setSelectedApartment(null);
  };

  return (
    <>
      <header></header>
      <main>
        <div className={styles.pageContainer}>
          <Map
            apartments={apartments}
            handleMarkerClick={handleMarkerClick}
            handleMapClick={handleMapClick}
          />
          {selectedApartment ? (
            <ApartmentCard
              title={selectedApartment.title}
              description={selectedApartment.description}
              type={selectedApartment.type}
              address={selectedApartment.address}
              image={selectedApartment.image}
              price={selectedApartment.price}
            />
          ) : (
            <ApartmentList apartments={visibleApartments} />
          )}
          <AddApartmentForm />
        </div>
      </main>
    </>
  );
};

export default App;

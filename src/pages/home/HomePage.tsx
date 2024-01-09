import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { Apartment } from "../../types/interfaces";
import { RootState } from "../../redux/store/store";
import ApartmentCard from "../../components/apartmentCard/ApartmentCard";
import ApartmentList from "../../components/apartmentList/ApartmentList";
import Map from "../../components/map/Map";
import styles from "./HomePage.module.scss";

const apiUrl = process.env.REACT_APP_API_URL || "";

const HomePage: React.FC = () => {
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(
    null
  );
  const [apartments, setApartments] = useState<Apartment[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(apiUrl);
        setApartments(response.data);
      } catch (error) {
        console.error("Error fetching apartments:", error);
      }
    };

    fetchData();
  }, []);

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
      <div className={styles.pageContainer}>
        <Map
          apartments={apartments}
          handleMarkerClick={handleMarkerClick}
          handleMapClick={handleMapClick}
        />
        {selectedApartment ? (
          <div className={styles.selectedContainer}>
            <ApartmentCard
              title={selectedApartment.title}
              description={selectedApartment.description}
              type={selectedApartment.type}
              address={selectedApartment.address}
              image={selectedApartment.image}
              price={selectedApartment.price}
            />
          </div>
        ) : (
          <ApartmentList apartments={visibleApartments} />
        )}
      </div>
    </>
  );
};

export default HomePage;

import { useEffect, useState } from "react";
import { useMap } from "react-leaflet";
import { Apartment } from "../types/interfaces";

const useVisibleApartments = (apartments: Apartment[]) => {
  const [visibleApartments, setVisibleApartments] = useState<Apartment[]>([]);
  const map = useMap();

  useEffect(() => {
    const updateVisibleApartments = () => {
      const bounds = map.getBounds();
      const newVisibleApartments = apartments.filter(
        (apartment) =>
          bounds.contains([apartment.lat, apartment.lon]) &&
          apartment.description.trim() !== ""
      );
      setVisibleApartments(newVisibleApartments);
    };

    map.on("moveend", updateVisibleApartments);

    updateVisibleApartments();

    return () => {
      map.off("moveend", updateVisibleApartments);
    };
  }, [apartments, map]);

  return visibleApartments;
};

export default useVisibleApartments;

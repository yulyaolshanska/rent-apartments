import { useEffect } from "react";
import { useMapEvents } from "react-leaflet";
import useVisibleApartments from "../../hooks/useVisibleApartments";
import { Apartment } from "../../types/interfaces";
import { useAppDispatch } from "../../redux/store/store";
import { apartmentsChanged } from "../../redux/slices/apartmentSlice";

interface LocationMarkerProps {
  apartments?: Apartment[];
  handleMapClick: (e: L.LeafletMouseEvent) => void;
}

const LocationMarker: React.FC<LocationMarkerProps> = ({
  apartments,
  handleMapClick,
}) => {
  const visibleApartments = useVisibleApartments(apartments || []);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(apartmentsChanged(visibleApartments));
  }, [visibleApartments]);

  useMapEvents({
    click: (e) => {
      handleMapClick(e);
    },
  });

  return <></>;
};

export default LocationMarker;

import { Apartment } from "../../types/interfaces";
import ApartmentCard from "../apartmentCard/ApartmentCard";
import styles from "./ApartmentList.module.scss";

interface ApartmentsProps {
  apartments: Apartment[];
}

const ApartmentList: React.FC<ApartmentsProps> = ({ apartments }) => {
  return (
    <ul className={styles.apartmentList}>
      {apartments.map((apartment) => (
        <ApartmentCard
          key={apartment._id}
          title={apartment.title}
          description={apartment.description}
          type={apartment.type}
          address={apartment.address}
          image={apartment.image}
          price={apartment.price}
        />
      ))}
    </ul>
  );
};

export default ApartmentList;

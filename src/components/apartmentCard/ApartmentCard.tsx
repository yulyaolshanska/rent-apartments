import defaultImage from "../../images/defaultApartment.jpeg";
import styles from "./ApartmentCard.module.scss";

interface ApartmentCardProps {
  type: string;
  address: string;
  image: string;
  price: number;
  description: string;
  title: string;
}

const ApartmentCard: React.FC<ApartmentCardProps> = ({
  title,
  description,
  image,
  type,
  address,
  price,
}) => {
  return (
    <li className={styles.card}>
      <h2 className={styles.title}>{title}</h2>
      <div>
        <img
          className={styles.image}
          src={image || defaultImage}
          alt={title}
          width={300}
        />
      </div>
      <div className={styles.textContainer}>
        <p>Type: {type}</p>
        <p>Address: {address}</p>
        <p>Price: {price}</p>
        <p>Details: {description}</p>
      </div>
    </li>
  );
};

export default ApartmentCard;

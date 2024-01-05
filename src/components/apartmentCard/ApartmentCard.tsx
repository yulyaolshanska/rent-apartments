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
    <div>
      <h2>{title}</h2>
      <img src={image} alt={title} width={300} />
      <p>Type: {type}</p>
      <p>Address: {address}</p>
      <p>Price: {price}</p>
      <p>Details: {description}</p>
    </div>
  );
};

export default ApartmentCard;

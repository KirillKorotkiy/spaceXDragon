import { Card } from "./ItemCard.styled";

export const ItemCard = ({ flickr_images, name, first_flight }) => {
  return (
    <div>
      <Card src={flickr_images[0]} alt={name} />
      <h2>{name}</h2>
      <p>{first_flight}</p>
    </div>
  );
};

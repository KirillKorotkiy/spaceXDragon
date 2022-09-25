import { Card } from "./ItemCard.styled";

export const ItemCard = ({ flickr_images, name, first_flight }) => {
  return (
    <div>
      <Card src={flickr_images[0]} alt={name} />
      <h2>Model: {name}</h2>
      <p>First flight: {first_flight}</p>
    </div>
  );
};

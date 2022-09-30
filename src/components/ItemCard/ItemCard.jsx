import { Card, Wrapper, Model } from './ItemCard.styled';
import { NavLink } from './ItemCard.styled';

export const ItemCard = ({ flickr_images, name, id }) => {
  return (
    <NavLink to={`info/${id}`}>
      <Wrapper>
        <Card src={flickr_images[0]} alt={name} />
        <Model>{name}</Model>
      </Wrapper>
    </NavLink>
  );
};

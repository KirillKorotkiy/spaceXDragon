import { TechnicalOverview, InfoItem } from "./DragonIngo.styled";

export const DragonInfo = ({ dragon }) => {
  return (
    <>
     <TechnicalOverview>
        <InfoItem>Height: {dragon.data.height_w_trunk.meters} m</InfoItem>
        <InfoItem>Launch payload mass: {dragon.data.launch_payload_mass.kg} kg</InfoItem>
        <InfoItem>Launch payload vol: {dragon.data.launch_payload_vol.cubic_meters} cubic meters</InfoItem>
          Heat shield:
          <InfoItem>Material: {dragon.data.heat_shield.material}</InfoItem>
          <InfoItem>Size: {dragon.data.heat_shield.size_meters} m</InfoItem>
          <InfoItem>Material: {dragon.data.heat_shield.material}</InfoItem>

        <a href={dragon.data.wikipedia}>Link to Wikipedia</a>
      </TechnicalOverview>
    </>

  );
};

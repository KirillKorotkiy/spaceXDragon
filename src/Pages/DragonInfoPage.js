import { useGetDragonsById } from 'hooks/useGetCurrentDragon';
import { Carusel } from 'components/Carusel/Carusel';
import { DragonInfo } from 'components/DragonInfo/DragonInfo';

export const DragonInfoPage = () => {
  const dragon = useGetDragonsById();

  return (
    <div className="wrapper">
      {dragon && (
        <>
          <div>
            <h2>Model:<br/> {dragon.data.name}</h2>
            <p>First flight: {dragon.data.first_flight}</p>
            <p>{dragon.data.description}</p>
          </div>
          <div className="dragon-info">
            <Carusel dragon={dragon} />
            <DragonInfo dragon={dragon} />
          </div>
        </>
      )}
    </div>
  );
};

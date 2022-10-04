import { FavoritesCards } from 'components/Favorites/Favorites';
import { Outlet } from 'react-router-dom';

const FavoritesPage = () => {
  return (
    <>
      <FavoritesCards />
      <Outlet />
    </>
  );
};

export default FavoritesPage;

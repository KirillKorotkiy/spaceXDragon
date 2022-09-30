import { AppBar } from 'components/AppBar/AppBar';
import { Outlet } from 'react-router-dom';

export const LayoutPage = () => {
  return (
    <>
      <AppBar />
      <div className="wrapper">
        <Outlet />
      </div>
    </>
  );
};

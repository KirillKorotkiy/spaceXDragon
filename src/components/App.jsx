import { HomePage } from 'Pages/HomePage';
import { LayoutPage } from 'Pages/LayoutPage';
import { LoginPage } from 'Pages/LoginPage';
import { RegisterPage } from 'Pages/RegisterPage';
import { Routes, Route, Navigate } from 'react-router-dom';
import { DragonInfoPage } from 'Pages/DragonInfoPage';
import { Info } from 'Pages/Info';
import { PublicRoute } from '../hoc/PublicRoute';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route
            path="login"
            element={
              <PublicRoute>
                <LoginPage />
              </PublicRoute>
            }
          />
          <Route
            path="register"
            element={
              <PublicRoute>
                <RegisterPage />
              </PublicRoute>
            }
          />
          <Route path="info" element={<Info />} />
          <Route path="info/:infoId" element={<DragonInfoPage />} />
        </Route>
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
};

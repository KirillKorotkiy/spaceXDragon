import { Routes, Route, Navigate } from 'react-router-dom';
import { PublicRoute } from '../hoc/PublicRoute';
import { lazy } from 'react';
import { RequireAuth } from 'hoc/RequireAuth';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';

const HomePage = lazy(() => import('../pages/HomePage'));
const LayoutPage = lazy(() => import('../pages/LayoutPage'));
const LoginPage = lazy(() => import('../pages/LoginPage'));
const RegisterPage = lazy(() => import('../pages/RegisterPage'));
const DragonInfoPage = lazy(() => import('../pages/DragonInfoPage'));
// const Info = lazy(() => import('../pages/Info'));
const PersonalSettingsPage = lazy(() =>
  import('../pages/PersonalSettingsPage')
);
const FavoritesPage = lazy(() => import('../pages/FavoritesPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
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
            <Route
              path="personal"
              element={
                <RequireAuth>
                  <PersonalSettingsPage />
                </RequireAuth>
              }
            />
            <Route
              path="favorites"
              element={
                <RequireAuth>
                  <FavoritesPage />
                </RequireAuth>
              }
            />
            <Route path="/:infoId" element={<DragonInfoPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};

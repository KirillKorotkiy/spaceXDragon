import { HomePage } from "Pages/HomePage";
import { LayoutPage } from "Pages/LayoutPage";
import { LoginPage } from "Pages/LoginPage";
import { RegisterPage } from "Pages/RegisterPage";
import { Routes, Route, Navigate } from 'react-router-dom';


export const App = () => {
  return (
 <>
 <Routes>
    <Route path="/" element={<LayoutPage/>}>
    <Route index element={<HomePage/>}/>
    <Route path="login" element={<LoginPage/>}/>
    <Route path="register" element={<RegisterPage/>} />
    </Route>
    <Route path="*" element={<Navigate to="/" />} />
 </Routes>
 </>
  );
};

import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import Home from "../pages/Home";
import Authentication from "../pages/Authentication";
import Empresa from "../pages/Empresa";
import Ventas from "../pages/Ventas";
import Informes from "../pages/Informes";
import Gastos from "../pages/Gastos";
import Accountant from "../pages/Accountant";
import Compras from "../pages/Compras";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/compras" element={<Compras />} />
      <Route path="/gastos" element={<Gastos />} />
      <Route path="/ventas" element={<Ventas />} />
      <Route path="/informes" element={<Informes />} />
      <Route path="/empresa" element={<Empresa />} />
      <Route path="/mi-contador" element={<Accountant />} />
      <Route path="/signin" element={<Authentication />} />
      <Route path="/signup" element={<Authentication />} />
      <Route path="/signuprecord" element={<Authentication />} />
    </Routes>
  );
};

export default AppRoutes;

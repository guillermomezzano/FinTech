import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import Home from "../pages/Home";
import Authentication from "../pages/Authentication";
import Ventas from "../components/modules/views/dashboard/Ventas";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ventas" element={<Ventas />} />
      <Route path="/signin" element={<Authentication />} />
      <Route path="/signup" element={<Authentication />} />
      <Route path="/signuprecord" element={<Authentication />} />
    </Routes>
  );
};

export default AppRoutes;

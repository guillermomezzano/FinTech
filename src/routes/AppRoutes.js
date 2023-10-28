import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import Home from "../pages/Home";
import Authentication from "../pages/Authentication";
import DiaryBook from "../pages/DiaryBook";
import SimpleAuxiliaryBook from "../pages/SimpleAuxiliaryBook";
import IncomeUpdateForm from "../pages/IncomeUpdateForm";
import CarouselTabs from "../components/modules/views/dashboard/tabs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Authentication />} />
      <Route path="/diarybook" element={<DiaryBook />} />
      <Route path="/simpleauxiliarybook" element={<SimpleAuxiliaryBook />} />
      <Route path="/incomeupdateform" element={<IncomeUpdateForm />} />
      <Route path="/carousel" element={<CarouselTabs />} />
    </Routes>
  );
};

export default AppRoutes;

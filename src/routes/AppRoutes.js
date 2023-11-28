import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import Home from "../pages/Home";
import Authentication from "../pages/Authentication";
import IncomeUpdateForm from "../pages/IncomeUpdateForm";
import WidgetConteinerComplete from "../pages/WidgetConteinerComplete";
import DiaryBook from "../pages/DiaryBook";
import ElderlyBook from "../pages/ElderlyBook";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/:id" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Authentication />} />
      <Route path="/signup" element={<Authentication />} />
      <Route path="/signuprecord" element={<Authentication />} />
      <Route path="/incomeupdateform" element={<IncomeUpdateForm />} />
      <Route path="/libroMayor" element={<ElderlyBook />} />
      <Route path="/libroDiario" element={<DiaryBook />} />
      <Route
        path="/widgetconteinercomplete/:id"
        element={<WidgetConteinerComplete />}
      />
    </Routes>
  );
};

export default AppRoutes;

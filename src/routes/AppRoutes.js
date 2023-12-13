import React from "react";
import { Route, Routes } from "react-router-dom";

// components
import Home from "../pages/Home";
import Authentication from "../pages/Authentication";
import SimpleSalesAuxiliaryBook from "../pages/SimpleSalesAuxiliaryBook";
import IncomeUpdateForm from "../pages/IncomeUpdateForm";
import CarouselTabs from "../components/modules/views/dashboard/tabs";
import WidgetConteinerComplete from "../pages/WidgetConteinerComplete";
import Tabs from "../components/modules/tabs/DashboardTabs";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/:id" element={<Home />} />
      <Route path="/" element={<Home />} />
      <Route path="/signin" element={<Authentication />} />
      <Route path="/signup" element={<Authentication />} />
      <Route path="/diarybook" element={<SimpleSalesAuxiliaryBook />} />
      <Route path="/incomeupdateform" element={<IncomeUpdateForm />} />
      <Route path="/carousel" element={<CarouselTabs />} />
      <Route
        path="/widgetconteinercomplete/:id"
        element={<WidgetConteinerComplete />}
      />
      <Route path="/tabs" element={<Tabs />} />
    </Routes>
  );
};

export default AppRoutes;

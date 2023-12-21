import React from "react";

// components
import Title from "../components/modules/ui/Title";
import InformesCard from "../components/modules/views/dashboard/Infirormes/informesCard";
import Layout from "../components/layouts/index";

const Informes = () => {
  return (
    <div>
      <Layout>
        <Title className="text-6xl py-4">Informes</Title>
        <InformesCard />
      </Layout>
    </div>
  );
};

export default Informes;

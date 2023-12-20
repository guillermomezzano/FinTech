import React from "react";

// components
import Title from "../components/modules/ui/Title";
import Tabs from "../components/modules/tabs/Tabs";
import VisionDelNegocio from "../components/modules/views/dashboard/Empresa/VisionDelNegocio";
import Acciones from "../components/modules/views/dashboard/Empresa/Acciones";
import Layout from "../components/layouts/index";

const Empresa = () => {
  const data = [
    {
      title: "Acciones",
      content: <Acciones />,
    },
    {
      title: "Visión Negocio",
      content: <VisionDelNegocio />,
    },
    {
      title: "Flujo de Caja",
      content: <h2 className="w-full m-auto p-10">Contenido flujo de caja</h2>,
    },
  ];

  return (
    <div>
      <Layout>
        <Title className="text-6xl py-4">Empresa</Title>
        <Tabs tabs={data} />
      </Layout>
    </div>
  );
};

export default Empresa;

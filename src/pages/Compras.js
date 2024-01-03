import React from "react";

// components
import Title from "../components/modules/ui/Title";
import Tabs from "../components/modules/tabs/Tabs";
import Layout from "../components/layouts/index";
import TodasLasCompras from "../components/modules/views/dashboard/Compras/TodasLasCompras";
import Proveedores from "../components/modules/views/dashboard/Compras/Proveedores";
// material

const Compras = () => {
  const data = [
    {
      title: "Todas las compras",
      content: <TodasLasCompras />,
    },
    {
      title: "Proveedores",
      content: <Proveedores />,
    },
    {
      title: "Productos y servicios",
      content: <h2 className="w-full m-auto p-10">Contenido flujo de caja</h2>,
    },
  ];

  return (
    <>
      <Layout>
        <Title className="text-6xl py-4">Compras</Title>
        <Tabs tabs={data} />
      </Layout>
    </>
  );
};

export default Compras;

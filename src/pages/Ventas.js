import React from "react";

// components
import Title from "../components/modules/ui/Title";
import Tabs from "../components/modules/tabs/Tabs";
import Layout from "../components/layouts/index";
import TodasLasVentas from "../components/modules/views/dashboard/Ventas/TodasLasVentas";
import Clientes from "../components/modules/views/dashboard/Ventas/Clientes";
// material

const Ventas = () => {
  const data = [
    {
      title: "Todas las ventas",
      content: <TodasLasVentas />,
    },
    {
      title: "Clientes",
      content: <Clientes />,
    },
    {
      title: "Productos y servicios",
      content: <h2 className="w-full m-auto p-10">Contenido flujo de caja</h2>,
    },
  ];

  return (
    <>
      <Layout>
        <Title className="text-6xl py-4"> Ventas</Title>
        <Tabs tabs={data} />
      </Layout>
    </>
  );
};

export default Ventas;

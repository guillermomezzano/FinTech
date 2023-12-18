import React from "react";

// data
import { cols, rows } from "../../data/dataTablaVentas";

// components
import Layout from "../../../layouts/index";
import Title from "../../ui/Title";
import Tabs from "../../tabs/Tabs";
import Card from "../../card/Card";
import Table from "../../table/Table";

// material

const Ventas = () => {
  const data = [
    {
      title: "Acciones",
      content: (
        <>
          <div className="py-10">
            <Card title="Clientes" type="tablas" idChart="" />
          </div>
          <Table data={{ cols, rows }} edit />
        </>
      ),
    },
    {
      title: "Visión Negocio",
      content: <h2 className="w-full m-auto p-10">Contenido de vision de negoico</h2>,
    },
    {
      title: "Flujo de Caja",
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

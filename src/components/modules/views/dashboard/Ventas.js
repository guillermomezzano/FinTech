import React from "react";

// data

// components
import Layout from "../../../layouts/index";
import Title from "../../ui/Title";
import Card from "../../card/Card";

// material

const Ventas = () => {
  return (
    <>
      <Layout>
        <Title className="text-6xl"> Ventas</Title>
        <div className="py-10">
          <Card title="Clientes" type="tablas" idChart="" />
        </div>
      </Layout>
    </>
  );
};

export default Ventas;

import React from "react";

// data

// components
import Layout from "../../../layouts/index";
import Title from "../../ui/Title";
import Tabs from "../../tabs/Tabs";

// material

const Ventas = () => {
  return (
    <>
      <Layout>
        <Title className="text-6xl py-4"> Ventas</Title>
        <Tabs />
      </Layout>
    </>
  );
};

export default Ventas;

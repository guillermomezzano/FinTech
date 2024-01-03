import React from "react";

// components
import Title from "../components/modules/ui/Title";
import Tabs from "../components/modules/tabs/Tabs";
import Layout from "../components/layouts/index";
import TodosLosHonorarios from "../components/modules/views/dashboard/Honorarios/TodosLosHonorarios";
import Honorarios from "../components/modules/views/dashboard/Honorarios/Honorarios";
// material

const Honorario = () => {
  const data = [
    {
      title: "Todos los Honorarios",
      content: <TodosLosHonorarios />,
    },
    {
      title: "Honorarios",
      content: <Honorarios />,
    },
    {
      title: "Productos y servicios",
      content: (
        <h2 className="w-full m-auto p-10">Contenido flujo de honorarios</h2>
      ),
    },
  ];

  return (
    <>
      <Layout>
        <Title className="text-6xl py-4">Honorarios</Title>
        <Tabs tabs={data} />
      </Layout>
    </>
  );
};

export default Honorario;

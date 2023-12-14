import React, { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { getDeudaClienteUnico } from "../../../api/chart.api.js";
import { getListaClientes } from "../../../api/list.api.js";

ChartJS.register(ArcElement, Tooltip, Legend);

export const options = {
  responsive: true,
  // maintainAspectRatio: false,
};

var datos = {
  labels: ["a"],
  datasets: [
    {
      label: "Dataset 1",
      data: [0],
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
  ],
};

const PieChartUnico = ({ tempo }) => {
  const texto = tempo;
  const [selected, setSelected] = useState("0");
  const [sqlDatos, setSqlDatos] = useState([]);
  const [textoBarras, setTextoBarras] = useState([]);
  const [optionJson, setOptionJson] = useState([]);
  useEffect(() => {
    const fetchApiComparaCliente = async () => {
      if (selected == 0) {
        const dataoption = await getListaClientes(); //cuando {dataoption} no funcionaba
        console.log("dataoption es: ", dataoption);
        setSelected(dataoption.data[0].key); //FUNCIONO NO SE QUE PASA!
        setOptionJson(dataoption.data);
      } else {
        const { data } = await getDeudaClienteUnico(selected);
        console.log("data es: ", data.data);
        setSqlDatos(data.data);
        setTextoBarras(data.barras);
      }
    };

    switch (texto) {
      case "ComparaCliente":
        console.log("primero");
        fetchApiComparaCliente(); //PORQUE NO FUNCIONA!?
        break;
      default:
    }
  }, [selected]);
  datos = {
    labels: textoBarras?.map((data) => data),
    datasets: [
      {
        data: sqlDatos?.map((data) => data),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(0, 0, 128, 0.5)",
          "rgba(0, 128, 128, 0.5)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(0, 0, 128, 1)",
          "rgba(0, 128, 128, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const listItems = optionJson?.map((opcion) => (
    <option value={opcion.key}>{opcion.data}</option>
  ));

  return (
    <>
      <select value={selected} onChange={(e) => setSelected(e.target.value)}>
        {listItems}
      </select>
      <Pie options={options} data={datos} />
    </>
  );
};

export default PieChartUnico;

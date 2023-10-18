import React, { useEffect, useState } from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { getCV } from "../../../api/tasks.api.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
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

const BarraParalela = ({ tempo }) => {
  console.log("tempo ", tempo);
  const myArray = tempo.split("&");
  var temporal = myArray[0];
  var texto = myArray[1];
  const [tasks, setDailyData] = useState([]);
  const [mes, MesData] = useState([]);
  const [task, setDailvData] = useState([]);
  const [mec, MecData] = useState([]);

  useEffect(() => {
    const fetchApiCompraVenta = async () => {
      const { data } = await getCV(temporal);
      console.log("data es: ", data.data);
      setDailyData(data.dataV);
      MesData(data.fechaV);
      setDailvData(data.dataC);
      MecData(data.fechaC);
    };

    switch (texto) {
      case "CompraVenta":
        console.log("primero");
        fetchApiCompraVenta();
        break;
      default:
    }
  }, [tempo]);
  datos = {
    labels: mec?.map((data) => data),
    datasets: [
      {
        label: "Compra",
        data: task?.map((data) => data),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },

      {
        label: "Venta",
        data: tasks?.map((data) => data),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  return <Bar options={options} data={datos} />;
};

export default BarraParalela;

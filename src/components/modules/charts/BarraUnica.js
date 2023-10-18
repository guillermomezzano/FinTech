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
import { getTasksVCl, getTaskVM } from "../../../api/tasks.api.js";

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

const BarraUnica = ({ tempo }) => {
  console.log("tempo ", tempo);
  const myArray = tempo.split("&");
  var temporal = myArray[0];
  var texto = myArray[1];
  const [tasks, setDailyData] = useState([]);
  const [mes, MesData] = useState([]);

  useEffect(() => {
    const fetchApiComparaCliente = async () => {
      const { data } = await getTasksVCl(temporal);
      console.log("data es: ", data.data);
      setDailyData(data.data);
      MesData(data.fecha);
    };

    const fetchApiVentasMes = async () => {
      const { data } = await getTaskVM(temporal);
      setDailyData(data.data);
      MesData(data.fecha);
    };
    switch (texto) {
      case "ComparaCliente":
        console.log("primero");
        fetchApiComparaCliente(); //PORQUE NO FUNCIONA!?
        break;
      case "VentasMes":
        console.log("segundo");
        fetchApiVentasMes();
        break;
      default:
    }
  }, [tempo]);
  datos = {
    labels: mes?.map((data) => data),
    datasets: [
      {
        label: "Bruto Honorarios",
        data: tasks?.map((data) => data),
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

  return <Bar options={options} data={datos} />;
};

export default BarraUnica;

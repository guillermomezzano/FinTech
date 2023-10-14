import React, { useEffect, useState } from 'react'
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2'
import {getTaskV} from'../api/tasks.api.js'

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
  plugins: {
    legend: {
      position: 'top', // as const, no se porque sale eso en el sandbox
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

var data = {
  labels: ["a"],
  datasets: [
    {
      label: 'Dataset 1',
      data: [0],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};
const BarChart = ({tempo}) => {
  console.log("tempo ",tempo);
  const [tasks, setDailyData] = useState([]);
  const [mes, MesData] = useState([]);
  
  useEffect(() => {
    const fetchApi = async () => {
      const  {data}  = await getTaskV(tempo);
      console.log("data es: ",data.data);
      setDailyData(data.data);
      MesData(data.fecha);
    };

    fetchApi();
  }, [tempo]);
  data = {
    labels: mes?.map((data) => data),
    datasets: [
      {
        label: 'Dataset 1',
        data: tasks?.map((data) => data),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
    ],
  };

  return (
    <Bar options={options} data={data} />
  //   <Bar
  //   data={{
  //     labels: mes?.map((data) => data),
  //     datasets: [
  //       {
  //         label: 'Bruto Honorarios',
  //         data: tasks?.map((data) => data),
  //         backgroundColor: [
  //           'rgba(255, 99, 132, 0.2)',
  //           'rgba(54, 162, 235, 0.2)',
  //           'rgba(255, 206, 86, 0.2)',
  //           'rgba(75, 192, 192, 0.2)',
  //           'rgba(153, 102, 255, 0.2)',
  //           'rgba(255, 159, 64, 0.2)',
  //         ],
  //         borderColor: [
  //           'rgba(255, 99, 132, 1)',
  //           'rgba(54, 162, 235, 1)',
  //           'rgba(255, 206, 86, 1)',
  //           'rgba(75, 192, 192, 1)',
  //           'rgba(153, 102, 255, 1)',
  //           'rgba(255, 159, 64, 1)',
  //         ],
  //         borderWidth: 1,
  //       },
  //       // {
  //       //   label: 'Quantity',
  //       //   data: [47, 52, 67, 58, 9, 50],
  //       //   backgroundColor: 'orange',
  //       //   borderColor: 'red',
  //       // },
  //     ],
  //   }}
  //   height={200}//altura
  //   width={600}
  //   options={{ //par
      
  //     // maintainAspectRatio: false,
  //     // scales: {
  //     //   yAxes: [
  //     //     {
  //     //       ticks: {
  //     //         beginAtZero: true,
  //     //       },
  //     //     },
  //     //   ],
  //     // },
  //     legend: {
  //       position: 'bottom',
  //       labels: {
  //         fontSize: 13,//tamaño del label superior
  //         color: 'rgb(255, 99, 132)',
  //       },
  //     },
  //   }}
  // />
  )
}

export default BarChart

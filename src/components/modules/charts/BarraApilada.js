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
import {getDeudasClientes} from'../../../api/chart.api.js'

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
  scales: {
    x: {
      stacked: true,
    },
    y: {
      stacked: true,
    },
  },
};

var datos = {
  labels: ["a"],
  datasets: [
    {
      label: 'Dataset 1',
      data: [0],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const BarraParalela = ({tempo}) => {
  const texto = tempo;
  const [selected, setSelected] = useState('5');

  const myArray = [{"value":"5","text":"5"},{"value":"6","text":"6"},
  {"value":"7","text":"7"},{"value":"8","text":"8"}];
  var temporal = selected;
    const [sqlDatos, setSqlDatos] = useState([]);
    const [textoBarras, setTextoBarras] = useState([]);
    const [datosComparativos, setDatosComparativo] = useState([]);
    const [textoLabel, setTextoLabel] = useState([]);
    
    const SelectDoble = () =>{
      var selectBox = 
      <select 
        value={selected}
        onChange={e => setSelected(e.target.value)}> 
        {myArray.map((datos)=><option value={datos.value} selected>{datos.text}</option> 
        )}
      </select>;

      return(<>
        {selectBox}
      </>);
    }
    useEffect(() => {
      const fetchApiDeudasClientes = async () => {
        const  {data}  = await getDeudasClientes(temporal);
        console.log("data es: ",data.data);
        setSqlDatos(data.data);
        setTextoBarras(data.barras);
        setDatosComparativo(data.compara);
        setTextoLabel(data.text);
      };
      
      switch(texto) {
          case "DeudasClientes":
              console.log("primero");
              fetchApiDeudasClientes();
            break;
        default:
        }
    }, [tempo]);
    datos = {
      labels: textoBarras?.map((data) => data),
      datasets: [
        {
          label: textoLabel?.map((data) => data)[0],
          data: sqlDatos?.map((data) => data),
          backgroundColor:'rgba(255, 99, 132, 0.2)',
          borderColor:'rgba(255, 99, 132, 1)',
          borderWidth: 1,
        },
        
        {
          label: textoLabel?.map((data) => data)[1],
          data: datosComparativos?.map((data) => data),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
  
    return (
      <>
      {SelectDoble()}
      <Bar options={options} data={datos} />
      </>
    )
  }
  
  export default BarraParalela
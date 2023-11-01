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
import {getComparaCompraVenta,getVentasMesComparaYear,getComparaIvaCompra,getComparaIvaVenta} from'../../../api/chart.api.js'

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
      label: 'Dataset 1',
      data: [0],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const BarraParalela = ({tempo}) => {
    console.log("tempo ",tempo);
    const myArray = tempo.split("&");
    var temporal = myArray[0];
    var texto = myArray[1];
    const [sqlDatos, setSqlDatos] = useState([]);
    const [textoBarras, setTextoBarras] = useState([]);
    const [datosComparativos, setDatosComparativo] = useState([]);
    const [textoLabel, setTextoLabel] = useState([]);
    
    useEffect(() => {
      const fetchApiCompraVentaCompara = async () => {
        const  {data}  = await getComparaCompraVenta(temporal);
        console.log("data es: ",data.data);
        setSqlDatos(data.data);
        setTextoBarras(data.barras);
        setDatosComparativo(data.compara);
        setTextoLabel(data.text);
      };
      const fetchApiComparaVentaMesYear = async () => {
        const  {data}  = await getVentasMesComparaYear(temporal);
        console.log("data es: ",data.data);
        setSqlDatos(data.data);
        setTextoBarras(data.barras);
        setDatosComparativo(data.compara);
        setTextoLabel(data.text);
      };
      
      const fetchApiComparaIvaCompra = async () => {
        const  {data}  = await getComparaIvaCompra(temporal);
        console.log("data es: ",data.data);
        setSqlDatos(data.data);
        setTextoBarras(data.barras);
        setDatosComparativo(data.compara);
        setTextoLabel(data.text);
      };
      const fetchApiComparaIvaVenta = async () => {
        const  {data}  = await getComparaIvaVenta(temporal);
        console.log("data es: ",data.data);
        setSqlDatos(data.data);
        setTextoBarras(data.barras);
        setDatosComparativo(data.compara);
        setTextoLabel(data.text);
      };
      switch(texto) {
        case "CompraVenta":
            console.log("primero");
            fetchApiCompraVentaCompara();
          break;
          case "ComparaVenta":
              console.log("segundo");
              fetchApiComparaVentaMesYear();
          break;
          case "ComparaVentaIVA":
              console.log("tercero");
              fetchApiComparaIvaCompra();
            break;
          case "ComparaCompraIVA":
              console.log("cuarto");
              fetchApiComparaIvaVenta();
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
      <Bar options={options} data={datos} />
    )
  }
  
  export default BarraParalela
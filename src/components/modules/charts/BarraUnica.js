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
import {getComparaClientesMesYear, getVentasMes} from'../../../api/chart.api.js'

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
          display: false //esconde el label superior (que sirve en graficos comparativos)
      }
    }
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

const BarraUnica = ({tempo}) => {
    const texto = tempo;
    const [selected, setSelected] = useState('5');
    const [counted, setContar] = useState('s');

    var myArray = [{"value":"y","text":"Año"},{"value":"m","text":"Mes"}];
    var myArray2 =[{"value":"s","text":"Sumatoria"},{"value":"c","text":"Cantidad"}];

    var temporal = selected+counted;

    const [sqlDatos, setSqlDatos] = useState([]);
    const [textoBarras, setTextoBarras] = useState([]);
    const [textoLabel, setTextoLabel] = useState([]);

    switch(texto) {
      case "ComparaCliente":
          console.log("primero");
          myArray = [{"value":"y","text":"Año"},{"value":"m","text":"Mes"}];
          myArray2 =[{"value":"s","text":"Sumatoria"},{"value":"c","text":"Cantidad"}];
          temporal = selected+counted;
        break;
      default:
          myArray = [{"value":"5","text":"5"},{"value":"6","text":"6"},
          {"value":"7","text":"7"},{"value":"8","text":"8"}];
          temporal = selected;
      }
    const SelectDoble = () =>{
      var selectBox = <></>;
      <select 
        value={selected}
        onChange={e => setSelected(e.target.value)}> 
        {myArray.map((datos)=><option value={datos.value} selected>{datos.text}</option> 
        )}
      </select>;

      var selectBox2 = <></>;
      
      switch(texto) {
        case "ComparaCliente":           
          selectBox = 
          <select 
            value={selected}
            onChange={e => setSelected(e.target.value)}> 
            {myArray.map((datos)=><option value={datos.value} selected>{datos.text}</option> 
            )}
          </select>;
          selectBox2 =<select 
            value={counted}
            onChange={e => setContar(e.target.value)}> 
            {myArray2.map((datos)=><option value={datos.value} selected>{datos.text}</option> 
            )}
          </select> ;
          
          break;
        default:
          selectBox = 
          <select 
            value={selected}
            onChange={e => setSelected(e.target.value)}> 
            {myArray.map((datos)=><option value={datos.value} selected>{datos.text}</option> 
            )}
          </select>;
          selectBox2 = <></>;
        }
      return(<>
        {selectBox}
        {selectBox2}
      </>);
    }
    useEffect(() => {
      const fetchApiComparaCliente = async () => {
        const  {data}  = await getComparaClientesMesYear(temporal);
        console.log("data es: ",data.data);
        setSqlDatos(data.data);
        setTextoBarras(data.barras);
        setTextoLabel(data.text);
      };
      
      const fetchApiVentasMes = async () => {
        const  {data}  = await getVentasMes(temporal);
        setSqlDatos(data.data);
        setTextoBarras(data.barras);
        setTextoLabel(data.text);
      };
      switch(texto) {
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
    }, [tempo,selected,counted]);
    datos = {
        labels: textoBarras?.map((data) => data),
        datasets: [
          {
            label: textoLabel?.map((data) => data)[0],
            data: sqlDatos?.map((data) => data),
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(0, 0, 128, 0.5)',
              'rgba(0, 128, 128, 0.5)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(0, 0, 128, 1)',
              'rgba(0, 128, 128, 1)',
            ],
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
  
  export default BarraUnica
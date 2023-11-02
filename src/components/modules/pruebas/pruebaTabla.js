import React, { useEffect, useState } from 'react'
import {pruebaTablaTabla} from'../../../api/list.api.js';

export function ReactTable(){
  const [sqlDatos, setSqlDatos] = useState([]);
  const [textoCabeza, setTextoCabeza] = useState([]);
  useEffect(() => {
    const fetchApiComparaCliente = async () => {
      const  {data}  = await pruebaTablaTabla();
      console.log("data es: ",data.data);
      setSqlDatos(data.data);
      setTextoCabeza(data.titulos);
    }
    fetchApiComparaCliente();
  }, []);

var datosJson=[
  "0",
  "Fecha",
  "Folio",
  "Comprobante",
  "Monto",
  "Cuenta"
];
var cuerpoArr =[
    [
    "DTH CONSULTORES LIMITADA\n76730093-K",
    "2023-10-04T04:00:00.000Z",
    "0\n335129689",
    56,
    5102662,
    "VENTAS EXENTAS"
  ],
  [
    "DTH CONSULTORES LIMITADA\n76730093-K",
    "2023-08-31T04:00:00.000Z",
    "34\n315302609",
    52,
    5102662,
    "VENTAS EXENTAS"
  ],
    [
    "DTH CONSULTORES LIMITADA\n76730093-K",
    "2023-08-02T04:00:00.000Z",
    "34\n315302609",
    51,
    5102662,
    "VENTAS EXENTAS"
  ],
  [
    "DTH CONSULTORES LIMITADA\n76730093-K",
    "2023-07-03T04:00:00.000Z",
    "34\n309675955",
    50,
    5538262,
    "VENTAS EXENTAS"
  ],
    [
    "DTH CONSULTORES LIMITADA\n76730093-K",
    "2023-06-04T04:00:00.000Z",
    "34\n305002350",
    49,
    5102662,
    "VENTAS EXENTAS"
  ]];
  const listItems = textoCabeza?.map((opcion) =>
    <th>
      {opcion}
    </th>
  );
    return(
        <div>
           <table>
            <thead>
                <tr>
                    {/* <th>Name</th>
                    <th>Link</th> */}
                    {listItems}
                </tr>
            </thead>
            <tbody>
                {
                   sqlDatos?.map((val,i)=>
                   <tr key={i}>
                    {val.map((colm)=> 
                    <td>{colm}</td>
                    )
                    
                    }

                    {/* <td>{val[i]}</td> */}
                   </tr>
                   ) 
                }
            </tbody>
           </table>
        </div>
    );
}
export default ReactTable;
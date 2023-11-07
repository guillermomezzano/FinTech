import React, { useEffect, useState } from 'react'
import {pruebaTablaTabla} from'../../../api/list.api.js';

// material
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

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
        <TableContainer>
        <Table>
         <TableHead>
        <TableRow className="uppercase">
                    {listItems}
        </TableRow>
      </TableHead>
      <TableBody>
                {
                   sqlDatos?.map((val,i)=>
                   <TableRow key={i}>
                    {val.map((colm)=> 
                    <TableCell style={{ padding: "20px" }}>{colm}</TableCell>
                    )
                    
                    }

                    {/* <td>{val[i]}</td> */}
                    </TableRow>
                   ) 
                }
            </TableBody>
            </Table>
          </TableContainer>
        </div>
    );
}
export function ReactTableDoble(){
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
  "Clientes",
  "Fecha",
  "Comprobante",
  "Folio",
  "Vencim",
  "Debe",
  "Haber",
  "Saldo",
  "Conciliacion Bancaria"
];
var cuerpoArr =[
  [
    [
      "DTH CONSULTORES LIMITADA\n76730093-K",
      "3/4/2023",
      43,
      "293901165\n34",
      "2023-05-03T04:00:00.000Z",
      4352154,
      null,
      4352154,
      "pendiente"
    ],
    [
      "DTH CONSULTORES LIMITADA\n76730093-K",
      "3/4/2023",
      45,
      "293901165\n34",
      "2023-05-03T04:00:00.000Z",
      4502154,
      null,
      8854308,
      "pendiente"
    ],
    [
      "DTH CONSULTORES LIMITADA\n76730093-K",
      "3/4/2023",
      46,
      "293901165\n34",
      "2023-05-03T04:00:00.000Z",
      4352154,
      null,
      13206462,
      "pendiente"
    ],
    [
      "DTH CONSULTORES LIMITADA\n76730093-K",
      "2/5/2023",
      47,
      "298567586\n34",
      "2023-06-01T04:00:00.000Z",
      5090787,
      null,
      18297249,
      "pendiente"
    ],
    [
      "DTH CONSULTORES LIMITADA\n76730093-K",
      "4/6/2023",
      49,
      "305002350\n34",
      "2023-07-04T04:00:00.000Z",
      5102662,
      null,
      23399911,
      "pendiente"
    ],
    [
      "DTH CONSULTORES LIMITADA\n76730093-K",
      "3/7/2023",
      50,
      "309675955\n34",
      "2023-08-02T04:00:00.000Z",
      5538262,
      null,
      28938173,
      "pendiente"
    ],
    [
      "DTH CONSULTORES LIMITADA\n76730093-K",
      "2/8/2023",
      51,
      "315302609\n34",
      "2023-09-01T04:00:00.000Z",
      5102662,
      null,
      34040835,
      "pendiente"
    ],
    [
      "DTH CONSULTORES LIMITADA\n76730093-K",
      "31/8/2023",
      52,
      "315302609\n34",
      "2023-09-30T04:00:00.000Z",
      5102662,
      null,
      39143497,
      "pendiente"
    ],
    [
      "DTH CONSULTORES LIMITADA\n76730093-K",
      "4/10/2023",
      56,
      "335129689\n34",
      "2023-11-03T04:00:00.000Z",
      5102662,
      null,
      44246159,
      "pendiente"
    ],
    [
      "DTH CONSULTORES LIMITADA\n76730093-K",
      "2/11/2023",
      57,
      "345637167\n34",
      "2023-12-02T04:00:00.000Z",
      5102662,
      null,
      49348821,
      "pendiente"
    ],
    [
      "",
      "",
      "",
      "",
      "Total",
      49348821,
      0,
      49348821,
      ""
    ]
  ],
  [
    [
      "cliente falso de prueba",
      "3/4/2023",
      43,
      "293901165\n34",
      "2023-05-03T04:00:00.000Z",
      4352154,
      null,
      4352154,
      "pendiente"
    ],
    [
      "cliente falso de prueba",
      "3/4/2023",
      45,
      "293901165\n34",
      "2023-05-03T04:00:00.000Z",
      4502154,
      null,
      8854308,
      "pendiente"
    ],
    [
      "cliente falso de prueba",
      "3/4/2023",
      46,
      "293901165\n34",
      "2023-05-03T04:00:00.000Z",
      4352154,
      null,
      13206462,
      "pendiente"
    ],
    [
      "cliente falso de prueba",
      "2/5/2023",
      47,
      "298567586\n34",
      "2023-06-01T04:00:00.000Z",
      5090787,
      null,
      18297249,
      "pendiente"
    ],
    [
      "cliente falso de prueba",
      "4/6/2023",
      49,
      "305002350\n34",
      "2023-07-04T04:00:00.000Z",
      5102662,
      null,
      23399911,
      "pendiente"
    ],
    [
      "cliente falso de prueba",
      "3/7/2023",
      50,
      "309675955\n34",
      "2023-08-02T04:00:00.000Z",
      5538262,
      null,
      28938173,
      "pendiente"
    ],
    [
      "cliente falso de prueba",
      "2/8/2023",
      51,
      "315302609\n34",
      "2023-09-01T04:00:00.000Z",
      5102662,
      null,
      34040835,
      "pendiente"
    ],
    [
      "cliente falso de prueba",
      "31/8/2023",
      52,
      "315302609\n34",
      "2023-09-30T04:00:00.000Z",
      5102662,
      null,
      39143497,
      "pendiente"
    ],
    [
      "cliente falso de prueba",
      "4/10/2023",
      56,
      "335129689\n34",
      "2023-11-03T04:00:00.000Z",
      5102662,
      null,
      44246159,
      "pendiente"
    ],
    [
      "cliente falso de prueba",
      "2/11/2023",
      57,
      "345637167\n34",
      "2023-12-02T04:00:00.000Z",
      5102662,
      null,
      49348821,
      "pendiente"
    ],
    [
      "",
      "",
      "",
      "",
      "Total",
      49348821,
      0,
      49348821,
      ""
    ]
  ],
];
  const listItems = datosJson?.map((opcion) =>
    <th>
      {opcion}
    </th>
  );
    return(
        <div>
        <TableContainer sx={{ maxiWidth: 440 }}>
        <Table>
         <TableHead>
        <TableRow className="uppercase">
                    {listItems}
        </TableRow>
      </TableHead>
      <TableBody>
                {cuerpoArr?.map((cliente,i)=>cliente.map((val)=>
                   <TableRow key={i}>
                    { val.map((colm)=> 
                    <TableCell style={{ padding: "20px" }}>{colm}</TableCell>
                    )}
                    </TableRow>
                   ))}
            </TableBody>
            </Table>
          </TableContainer>
        </div>
    );
}
export default ReactTable;
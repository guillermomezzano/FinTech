import React, { useEffect, useState } from "react";
import { pruebaTablaTabla } from "../../../api/list.api.js";

// material
import Typography from "@mui/material/Typography";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TablePagination from "@mui/material/TablePagination";
import { createTheme, ThemeProvider } from "@mui/material/styles";
const customTableTheme = createTheme({
  overrides: {
    MuiTable: {
      root: {
        maxWidth: "50%", // Ajusta el ancho de la tabla según tus necesidades
      },
    },
    MuiTableCell: {
      root: {
        // Ajusta el espacio interno de las celdas según tus necesidades
        fontSize: "22px", // Ajusta el tamaño de fuente de las celdas
      },
    },
  },
});

export function ReactTable() {
  // const [sqlDatos, setSqlDatos] = useState([]);
  // const [textoCabeza, setTextoCabeza] = useState([]);
  // useEffect(() => {
  //   const fetchApiComparaCliente = async () => {
  //     const { data } = await pruebaTablaTabla();
  //     console.log("data es: ", data.data);
  //     setSqlDatos(data.data);
  //     setTextoCabeza(data.titulos);
  //   };
  //   fetchApiComparaCliente();
  // }, []);

  var datosJson = ["0", "Fecha", "Folio", "Comprobante", "Monto", "Cuenta"];
  var cuerpoArr = [
    [
      "DTH CONSULTORES LIMITADA\n76730093-K",
      "2023-10-04T04:00:00.000Z",
      "0\n335129689",
      56,
      5102662,
      "VENTAS EXENTAS",
    ],
    [
      "DTH CONSULTORES LIMITADA\n76730093-K",
      "2023-08-31T04:00:00.000Z",
      "34\n315302609",
      52,
      5102662,
      "VENTAS EXENTAS",
    ],
    [
      "DTH CONSULTORES LIMITADA\n76730093-K",
      "2023-08-02T04:00:00.000Z",
      "34\n315302609",
      51,
      5102662,
      "VENTAS EXENTAS",
    ],
    [
      "DTH CONSULTORES LIMITADA\n76730093-K",
      "2023-07-03T04:00:00.000Z",
      "34\n309675955",
      50,
      5538262,
      "VENTAS EXENTAS",
    ],
    [
      "DTH CONSULTORES LIMITADA\n76730093-K",
      "2023-06-04T04:00:00.000Z",
      "34\n305002350",
      49,
      5102662,
      "VENTAS EXENTAS",
    ],
  ];
  const listItems = datosJson?.map((opcion) => <th>{opcion}</th>);
  return (
    <ThemeProvider theme={customTableTheme}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>{listItems}</TableRow>
          </TableHead>
          <TableBody>
            {cuerpoArr.map((val, i) => (
              <TableRow key={i}>
                {val.map((colm, j) => (
                  <TableCell key={j}>{colm}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </ThemeProvider>
  );
}
export default ReactTable;

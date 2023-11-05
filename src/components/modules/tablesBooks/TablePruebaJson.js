import React, { useEffect, useState } from "react";
import { pruebaTablaTabla } from "../../../api/list.api.js";
import { Link } from "react-router-dom";

// material

import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import TextField from "@mui/material/TextField";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import TaskIcon from "@mui/icons-material/Task";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
import { green } from "@mui/material/colors";
import { blue } from "@mui/material/colors";
import { yellow } from "@mui/material/colors";
import Tooltip from "@mui/material/Tooltip";

export function TablePruebaJson({ textoCabeza, sqlDatos, page, rowsPerPage }) {
  const [filterNombreEmpresa, setFilterNombreEmpresa] = useState("");

  const handleFilterIdChange = (e) => {
    setFilterNombreEmpresa(e.target.value);
  };
  const listItems = textoCabeza?.map((opcion) => <th>{opcion}</th>);
  // const filteredData = sqlDatos
  //   .filter((row) => {
  //     const filter = filterNombreEmpresa.trim().toLowerCase();
  //     if (filter === "") return true;
  //     const nombre = row.nombre.toLowerCase();
  //     return nombre.startsWith(filter);
  //   })
  //   ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);
  //   const [sqlDatos, setSqlDatos] = useState([]);
  //   const [textoCabeza, setTextoCabeza] = useState([]);
  //   useEffect(() => {
  //     const fetchApiComparaCliente = async () => {
  //       const  {data}  = await pruebaTablaTabla();
  //       console.log("data es: ",data.data);
  //       setSqlDatos(data.data);
  //       setTextoCabeza(data.titulos);
  //     }
  //     fetchApiComparaCliente();
  //   }, []);

  // var datosJson=[
  //   "0",
  //   "Fecha",
  //   "Folio",
  //   "Comprobante",
  //   "Monto",
  //   "Cuenta"
  // ];
  // var cuerpoArr =[
  //     [
  //     "DTH CONSULTORES LIMITADA\n76730093-K",
  //     "2023-10-04T04:00:00.000Z",
  //     "0\n335129689",
  //     56,
  //     5102662,
  //     "VENTAS EXENTAS"
  //   ],
  //   [
  //     "DTH CONSULTORES LIMITADA\n76730093-K",
  //     "2023-08-31T04:00:00.000Z",
  //     "34\n315302609",
  //     52,
  //     5102662,
  //     "VENTAS EXENTAS"
  //   ],
  //     [
  //     "DTH CONSULTORES LIMITADA\n76730093-K",
  //     "2023-08-02T04:00:00.000Z",
  //     "34\n315302609",
  //     51,
  //     5102662,
  //     "VENTAS EXENTAS"
  //   ],
  //   [
  //     "DTH CONSULTORES LIMITADA\n76730093-K",
  //     "2023-07-03T04:00:00.000Z",
  //     "34\n309675955",
  //     50,
  //     5538262,
  //     "VENTAS EXENTAS"
  //   ],
  //     [
  //     "DTH CONSULTORES LIMITADA\n76730093-K",
  //     "2023-06-04T04:00:00.000Z",
  //     "34\n305002350",
  //     49,
  //     5102662,
  //     "VENTAS EXENTAS"
  //   ]];
  // const listItems = textoCabeza?.map((opcion) =>
  //   <th>
  //     {opcion}
  //   </th>
  // );
  return (
    <div>
      <TextField
        color="secondary"
        label="Buscar empresa"
        value={filterNombreEmpresa}
        onChange={handleFilterIdChange}
        style={{ marginBottom: "20px" }}
      />
      <TableContainer
        sx={{ maxHeight: 440, backgroundColor: "rgba(255, 255, 255, 0.5)" }}
      >
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              {textoCabeza?.map((item) => (
                <TableCell style={{ fontWeight: "bold" }}>{item}</TableCell>
              ))}
              <TableCell style={{ fontWeight: "bold" }}>Documento</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {sqlDatos?.map((val, i) => (
              <TableRow key={i}>
                {val.map((colm) => (
                  <TableCell style={{ padding: "20px" }}>{colm}</TableCell>
                ))}
                <TableCell style={{ padding: "20px" }}>
                  <Tooltip title="Aceptado en SII" arrow>
                    <TaskIcon style={{ color: green[500] }} />
                  </Tooltip>
                  <Tooltip title="Ver Documento en pdf" arrow>
                    <PlagiarismIcon style={{ color: blue[500] }} />
                  </Tooltip>
                  <Tooltip title="Editar Documento" arrow>
                    <Link to="/IncomeUpdateForm">
                      <NoteAddIcon style={{ color: yellow[800] }} />
                    </Link>
                  </Tooltip>
                </TableCell>

                {/* <td>{val[i]}</td> */}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}
export default TablePruebaJson;

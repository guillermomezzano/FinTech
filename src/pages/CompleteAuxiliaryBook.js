// react
import React, { useState } from "react";

// components
import Sidebar from "../components/modules/ui/sideBar/SideBar";

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

const rowsPerPageOptions = [5, 10, 25];

// data que vendria de la api o base de datos

const initialData = [
  {
    id: "1",
    fecha: "05/07/22",
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "2",
    fecha: "05/07/22",
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "3",
    fecha: "05/07/22",
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "4",
    fecha: "05/07/22",
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "5",
    fecha: "05/07/22",
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "6",
    fecha: "05/07/22",
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "7",
    fecha: "05/07/22",
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "8",
    fecha: "05/07/22",
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "9",
    fecha: "05/07/22",
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "10",
    fecha: "05/07/22",
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "11",
    fecha: "05/07/22",
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "12",
    fecha: "05/07/22",
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "13",
    fecha: "05/07/22",
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "14",
    fecha: "05/07/22",
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "15",
    fecha: "05/07/22",
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "16",
    fecha: "05/07/22",
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
];

const theme = createTheme({
  typography: {
    fontSize: 17,
  },
});

const CompleteAuxiliaryBook = () => {
  const [fechaInicio, setFechaInicio] = useState("");
  const [fechaFin, setFechaFin] = useState("");
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const data = initialData; // Usamos el array de objetos aquí

  // Funciónes para manejar cambios en las fechas
  const handleFechaInicioChange = (e) => {
    setFechaInicio(e.target.value);
  };

  const handleFechaFinChange = (e) => {
    setFechaFin(e.target.value);
  };

  // Función para avanzar de pagaina
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };
  // Función para retroceder de pagaina
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  // Rellenar con tus datos
  return (
    <div>
      <Sidebar />
      <div className="ml-[5%] p-[2%]">
        {/* barra superior */}
        <div className="flex justify-between mb-10 ">
          <Typography variant="h4">Libro Auxiliar</Typography>
          <div className="flex gap-10">
            <Button
              variant="contained"
              style={{ backgroundColor: "#4b5563", color: "white" }}
            >
              Descargar en pdf
            </Button>
            <Button
              variant="contained"
              style={{ backgroundColor: "#4b5563", color: "white" }}
            >
              Actualizar
            </Button>
            {/* Filtros de fechas */}
            <div>
              <input
                type="date"
                value={fechaInicio}
                onChange={handleFechaInicioChange}
              />
            </div>
            <div>
              <input
                type="date"
                value={fechaFin}
                onChange={handleFechaFinChange}
              />
            </div>
          </div>
        </div>
        {/* Tabla */}
        <ThemeProvider theme={theme}>
          <div className="w-full">
            <div>
              <TableContainer>
                <Table>
                  <TableHead>
                    <TableRow className="uppercase">
                      <TableCell style={{ fontWeight: "bold" }}>
                        Clientes
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Fecha
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Folio
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>Debe</TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Comprobante
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Monto
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Cuenta
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Conciliación Bancaria
                      </TableCell>
                      <TableCell style={{ fontWeight: "bold" }}>
                        Documento
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {data
                      .slice(
                        page * rowsPerPage,
                        page * rowsPerPage + rowsPerPage
                      )
                      .map((row) => (
                        <TableRow key={row.id}>
                          <TableCell style={{ padding: "20px" }}>
                            {row.id}
                          </TableCell>
                          <TableCell style={{ padding: "20px" }}>
                            {row.fecha}
                          </TableCell>
                          <TableCell style={{ padding: "20px" }}>
                            {row.cuenta}
                          </TableCell>
                          <TableCell style={{ padding: "20px" }}>
                            {row.debe}
                          </TableCell>
                          <TableCell style={{ padding: "20px" }}>
                            {row.haber}
                          </TableCell>
                          <TableCell style={{ padding: "20px" }}>
                            {row.glosa}
                          </TableCell>
                          <TableCell style={{ padding: "20px" }}>
                            {row.tipo}
                          </TableCell>
                          <TableCell style={{ padding: "20px" }}>
                            {row.comentario}
                          </TableCell>
                        </TableRow>
                      ))}
                  </TableBody>
                </Table>
              </TableContainer>
              {/* componete para la paginacion */}
              <TablePagination
                rowsPerPageOptions={rowsPerPageOptions}
                component="div"
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
                labelRowsPerPage="Filas por página:"
                labelDisplayedRows={({ from, to, count }) =>
                  `${from}-${to} de ${count}`
                }
              />
            </div>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default CompleteAuxiliaryBook;

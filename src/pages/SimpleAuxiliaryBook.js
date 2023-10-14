// react
import React, { useState, useEffect } from "react";

// components
import Sidebar from "../components/modules/ui/sideBar/SideBar";
import SearchCalendar from "../components/modules/SearchCalendar";
import PaginationControls from "../components/modules/PaginationControls";
import TableSimpleAuxiliaryBooks from "../components/modules/tablesBooks/TableSimpleAuxiliaryBook";
import Header from "../components/layouts/Header";
// material
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// data que vendria de la api o base de datos

const initialData = [
  {
    id: "1",
    nombre: "empresa uno",
    fecha: new Date("1/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "2",
    nombre: "empresa dos",
    fecha: new Date("2/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "3",
    nombre: "cocacola",
    fecha: new Date("3/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "4",
    nombre: "ccu",
    fecha: new Date("3/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "5",
    nombre: "daniel",
    fecha: new Date("4/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "6",
    nombre: "lilian",
    fecha: new Date("4/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "7",
    nombre: "guillermo",
    fecha: new Date("7/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "8",
    nombre: "pc",
    fecha: new Date("7/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "9",
    nombre: "lalllalaal",
    fecha: new Date("11/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "10",
    nombre: "empresa cuatro",
    fecha: new Date("12/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "11",
    nombre: "zapallo",
    fecha: new Date("12/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "12",
    nombre: "alberto",
    fecha: new Date("10/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    nombre: "empresa dedededede",
    id: "13",
    fecha: new Date("9/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    nombre: "alberto uno",
    id: "14",
    fecha: new Date("3/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "15",
    nombre: "guille uno",
    fecha: new Date("8/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "16",
    nombre: "dani uno",
    fecha: new Date("8/15/2023"),
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

const SimpleAuxiliaryBook = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [data, setData] = useState(initialData);

  return (
    <div>
      <Header />
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
            <SearchCalendar initialData={initialData} setData={setData} />
          </div>
        </div>
        <ThemeProvider theme={theme}>
          <div className="w-full">
            <div>
              {/* Tabla */}
              <TableSimpleAuxiliaryBooks
                data={data}
                page={page}
                rowsPerPage={rowsPerPage}
              />
              {/* componete para la paginacion */}
              <PaginationControls
                count={data.length}
                rowsPerPage={rowsPerPage}
                page={page}
                setPage={setPage}
                setRowsPerPage={setRowsPerPage}
              />
            </div>
          </div>
        </ThemeProvider>
      </div>
    </div>
  );
};

export default SimpleAuxiliaryBook;

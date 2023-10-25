// react
import React, { useState } from "react";

// components
import Sidebar from "../../src/components/modules/ui/sideBar/SideBar";
import TableDiaryBook from "../../src/components/modules/tablesBooks/TableDiaryBook";
import PaginationControls from "../components/modules/PaginationControls";
import SearchCalendar from "../components/modules/SearchCalendar";
import Header from "../components/layouts/Header";

// material
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

// data que vendria de la api o base de datos

const initialData = [
  {
    id: "1",
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
    fecha: new Date("10/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
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

const DiaryBook = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [data, setData] = useState(initialData);

  return (
    <div>
      <Header />
      <Sidebar />
      <div className="ml-[5%] p-[2%]">
        {/* barra superior */}
        <div className="flex justify-between mb-10 ">
          <Typography variant="h4">Libro Diario</Typography>
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
        {/* Tabla */}
        <ThemeProvider theme={theme}>
          <div className="w-full">
            <div>
              <TableDiaryBook
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

export default DiaryBook;

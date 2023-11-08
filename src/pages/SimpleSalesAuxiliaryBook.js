// react
import React, { useState, useEffect } from "react";

// components

// import TableDiaryBook from "../components/modules/tablesBooks/TableDiaryBook";
import PaginationControls from "../components/modules/PaginationControls";
import SearchCalendar from "../components/modules/SearchCalendar";

import Layout from "../components/layouts/index";
// material
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TablePruebaJson from "../components/modules/tablesBooks/TableJsonIncomplete.js";

import { getLibroAuxiliarVentaResumido } from "../api/table.api.js";
// data que vendria de la api o base de datos

const theme = createTheme({
  typography: {
    fontSize: 17,
  },
});

const DiaryBook = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sqlDatos, setSqlDatos] = useState([]);
  const [textoCabeza, setTextoCabeza] = useState([]);
  const [initialData, setInitialData] = useState();

  useEffect(() => {
    const fetchApiComparaCliente = async () => {
      const { data } = await getLibroAuxiliarVentaResumido();
      console.log("data es: ", data.data);
      setInitialData(data);
      setSqlDatos(data.data);
      setTextoCabeza(data.titulos);
    };
    fetchApiComparaCliente();
  }, []);

  return (
    <div>
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
            {/* <SearchCalendar initialData={initialData} setData={setData} /> */}
          </div>
        </div>
        {/* Tabla */}
        <ThemeProvider theme={theme}>
          <div className="w-full">
            <div>
              <TablePruebaJson
                textoCabeza={textoCabeza}
                sqlDatos={sqlDatos}
                page={page}
                rowsPerPage={rowsPerPage}
              />
              {/* componete para la paginacion */}
              <PaginationControls
                count={sqlDatos.length}
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

// react
import React, { useState, useEffect } from "react";

// components

// import TableDiaryBook from "../components/modules/tablesBooks/TableDiaryBook";
import PaginationControls from "../../modules/PaginationControls.js";
// import SearchCalendar from "../components/modules/SearchCalendar";

// material
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import TableJsonComplete from "./TableJsonComplete";
import TableJsonCompleteDouble from "./TableJsonCompleteDouble.js";

// data
import {
  getLibroAuxiliarVentaCompleto,
  getLibroAuxiliarCompraCompleto,
  getLibroAuxiliarClienteCompleto,
  getLibroAuxiliarProveedorCompleto,
  getLibroAuxiliarIngresoCompleto,
  getLibroAuxiliarEgresoCompleto,
  getComprobanteLibro,
} from "../../../api/table.api";

const theme = createTheme({
  typography: {
    fontSize: 17,
  },
});

// getComprobanteLibro
const DiaryBook = ({ id }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sqlDatos, setSqlDatos] = useState([]);
  const [textoCabeza, setTextoCabeza] = useState([]);
  const [initialData, setInitialData] = useState();
  const [titleTable, setTitleTable] = useState();

  useEffect(() => {
    let endPoint;
    switch (id) {
      case "LibroAuxiliarVentaCompleto":
        setTitleTable("LibroAuxiliarVentaCompleto");
        endPoint = getLibroAuxiliarVentaCompleto;
        break;
      case "LibroAuxiliarCompraCompleto":
        setTitleTable("LibroAuxiliarCompraCompleto");
        endPoint = getLibroAuxiliarCompraCompleto;
        break;
      case "LibroAuxiliarClienteCompleto":
        setTitleTable("LibroAuxiliarClienteCompleto");
        endPoint = getLibroAuxiliarClienteCompleto; // Cambiar al endpoint correcto
        break;
      case "LibroAuxiliarProveedorCompleto":
        setTitleTable("LibroAuxiliarProveedorCompleto");
        endPoint = getLibroAuxiliarProveedorCompleto;
        break;
      case "LibroAuxiliarIngresoCompleto":
        setTitleTable("LibroAuxiliarIngresoCompleto");
        endPoint = getLibroAuxiliarIngresoCompleto;
        break;
      case "LibroAuxiliarEgresoCompleto":
        setTitleTable("LibroAuxiliarEgresoCompleto");
        endPoint = getLibroAuxiliarEgresoCompleto;
        break;
      default:
        setTitleTable("ComprobanteLibro");
        endPoint = getComprobanteLibro; // Cambiar al endpoint correcto
    }

    const fetchApiComparaCliente = async () => {
      const { data } = await endPoint();
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
          <Typography variant="h4">{titleTable}</Typography>
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
              {id === "LibroAuxiliarClienteCompleto" ? (
                <TableJsonCompleteDouble
                  textoCabeza={textoCabeza}
                  sqlDatos={sqlDatos}
                  page={page}
                  rowsPerPage={rowsPerPage}
                />
              ) : (
                <TableJsonComplete
                  textoCabeza={textoCabeza}
                  sqlDatos={sqlDatos}
                  page={page}
                  rowsPerPage={rowsPerPage}
                />
              )}

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

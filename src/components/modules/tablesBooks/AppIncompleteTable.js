import React, { useEffect, useState } from "react";

// components
import TableJsonIncomplete from "./TableJsonIncomplete.js";

// data
import {
  getLibroAuxiliarClienteResumido,
  getLibroAuxiliarVentaResumido,
  getLibroAuxiliarCompraResumido,
  getLibroAuxiliarProveedorResumido,
  getLibroAuxiliarIngresoResumido,
  getLibroAuxiliarEgresoResumido,
} from "../../../api/table.api";

const AppIncompleteTable = ({ id }) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [sqlDatos, setSqlDatos] = useState([]);
  const [textoCabeza, setTextoCabeza] = useState([]);

  useEffect(() => {
    let endPoint;
    switch (id) {
      case "LibroAuxiliarClienteResumido":
        endPoint = getLibroAuxiliarClienteResumido;
        break;
      case "LibroAuxiliarVentaResumido":
        endPoint = getLibroAuxiliarVentaResumido;
        break;
      case "LibroAuxiliarCompraResumido":
        endPoint = getLibroAuxiliarCompraResumido;
        break;
      case "LibroAuxiliarProveedorResumido":
        endPoint = getLibroAuxiliarProveedorResumido;
        break;
      case "LibroAuxiliarIngresoResumido":
        endPoint = getLibroAuxiliarIngresoResumido;
        break;
      default:
        endPoint = getLibroAuxiliarEgresoResumido;
    }

    const fetchApiComparaCliente = async () => {
      const { data } = await endPoint();
      console.log("data es: ", data.data);
      setSqlDatos(data.data);
      setTextoCabeza(data.titulos);
    };
    fetchApiComparaCliente();
  }, [id]);

  return (
    <div>
      <TableJsonIncomplete
        textoCabeza={textoCabeza}
        sqlDatos={sqlDatos}
        page={page}
        rowsPerPage={rowsPerPage}
      />
    </div>
  );
};
export default AppIncompleteTable;

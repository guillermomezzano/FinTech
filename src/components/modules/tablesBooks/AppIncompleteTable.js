import React, { useEffect, useState } from "react";
import { pruebaTablaTabla } from "../../../api/list.api.js";

// material
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
  const [endPoint, setEndPoint] = useState();

  useEffect(() => {
    // Definir el endpoint según el valor de id
    let endPoint;
    switch (id) {
      case "LibroAuxiliarClienteResumido":
        endPoint = getLibroAuxiliarClienteResumido;
        break;
      case "LibroAuxiliarVentaResumido":
        endPoint = getLibroAuxiliarVentaResumido;
        break;
      case "LibroAuxiliarCompraResumido":
        endPoint = getLibroAuxiliarCompraResumido; // Cambiar al endpoint correcto
        break;
      case "LibroAuxiliarProveedorResumido":
        endPoint = getLibroAuxiliarProveedorResumido;
        break;
      case "LibroAuxiliarIngresoResumido":
        endPoint = getLibroAuxiliarIngresoResumido;
        break;
      default:
        endPoint = getLibroAuxiliarEgresoResumido; // Cambiar al endpoint correcto
    }

    const fetchApiComparaCliente = async () => {
      const { data } = await endPoint(); // Utilizar el endpoint correspondiente
      console.log("data es: ", data.data);
      setSqlDatos(data.data);
      setTextoCabeza(data.titulos);
    };
    fetchApiComparaCliente();
  }, [id]); // Asegúrate de que useEffect se ejecute cuando id cambie

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

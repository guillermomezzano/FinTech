import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MultiChartApp } from "../../../modules/charts/App";
import ReactTable from "../../pruebas/ReactTable";
import AppIncompleteTable from "../../../modules/tablesBooks/AppIncompleteTable";

const WidgetConteiner = () => {
  const { id } = useParams();
  const [widgetType, setWidgetType] = useState();
  const [idTableComplete, setIdTableComplete] = useState();
  const allowedIdsCharts = [
    "BarraUnica&ComparaCliente",
    "BarraUnica&VentasMes",
    "BarraParalela&ComparaVenta",
    "BarraParalela&CompraVenta",
    "BarraParalela&ComparaCompraIVA",
    "BarraApilada&DeudasClientes",
    "GraficoDeTorta&ComparaCliente",
    "BarraParalela&ComparaVentaIVA",
  ];

  const allowedIdsTable = [
    "LibroAuxiliarClienteResumido",
    "LibroAuxiliarVentaResumido",
    "LibroAuxiliarCompraResumido",
    "LibroAuxiliarProveedorResumido",
    "LibroAuxiliarIngresoResumido",
    "LibroAuxiliarEgresoResumido",
  ];

  useEffect(() => {
    if (allowedIdsCharts.includes(id))
      setWidgetType(<MultiChartApp typeid={id} key={"1"} />);
    if (allowedIdsTable.includes(id)) {
      setWidgetType(<AppIncompleteTable id={id} />);
      setIdTableComplete(id.replace("Resumido", "Completo"));
    }

    // if (idTable) setWidgetType(<ReactTable id={id} />);
  }, [id]);

  return (
    <div className="w-[20%] ml-[150px] bg-white drop-shadow-lg rounded-lg border-2">
      <Link
        to={`/widgetconteinercomplete/${
          idTableComplete ? idTableComplete : id
        }`}
      >
        <div>{widgetType}</div>
      </Link>
    </div>
  );
};

export default WidgetConteiner;

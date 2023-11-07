import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { MultiChartApp } from "../../../modules/charts/App";
import ReactTable from "../../pruebas/ReactTable";

const WidgetConteiner = () => {
  const { id } = useParams();
  const [widgetType, setWidgetType] = useState();
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

  const allowedIdsTable = ["TableUno", "TableDos", "TableTres"];

  useEffect(() => {
    const idCharts = allowedIdsCharts.includes(id);
    const idTable = allowedIdsTable.includes(id);
    if (idCharts) setWidgetType(<MultiChartApp typeid={id} key={"1"} />);
    if (idTable) setWidgetType(<ReactTable />);
  }, [id]);

  return (
    <div className="w-[20%] ml-[150px] bg-white drop-shadow-lg rounded-lg border-2">
      <Link to={`/widgetconteinercomplete/${id}`}>
        <div>{widgetType}</div>
      </Link>
    </div>
  );
};

export default WidgetConteiner;

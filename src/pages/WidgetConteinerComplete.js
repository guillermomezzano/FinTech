import { useParams } from "react-router-dom";
import React, { useState, useEffect } from "react";

//components
import { MultiChartApp } from "../components/modules/charts/App";
import AppCompleteTable from "../components/modules/tablesBooks/AppCompleteTable";
import Layout from "../components/layouts/index";

const WidgetConteinerComplete = () => {
  const { id } = useParams();
  const [widget, setWidget] = useState();
  const [stylesDependenci, setStylesDependenci] = useState("");

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
    "LibroAuxiliarVentaCompleto",
    "LibroAuxiliarCompraCompleto",
    "LibroAuxiliarClienteCompleto",
    "LibroAuxiliarProveedorCompleto",
    "LibroAuxiliarIngresoCompleto",
    "LibroAuxiliarEgresoCompleto",
    "ComprobanteLibro",
  ];

  useEffect(() => {
    if (allowedIdsCharts.includes(id)) {
      setWidget(<MultiChartApp typeid={id} key={"1"} />);
      setStylesDependenci("charts");
    }
    if (allowedIdsTable.includes(id)) {
      setWidget(<AppCompleteTable id={id} />);
      setStylesDependenci("table");
    }
  }, [id]);
  return (
    <Layout>
      <div
        className={`${
          stylesDependenci === "charts"
            ? "mx-[15%] h-[750px] bg-opacity-75 bg-white rounded-lg border-2 shadow-md"
            : ""
        }`}
      >
        {widget}
      </div>
    </Layout>
  );
};

export default WidgetConteinerComplete;

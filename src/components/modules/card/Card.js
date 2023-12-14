import React, { useState, useEffect } from "react";

//components
import { MultiChartApp } from "../charts/App";
import CustomButton from "../ui/CustomButton.js";

//material
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

//data
import { infoCardTable } from "../data/dataCardInfoTable.js";

const Card = ({ title, type, idChart }) => {
  const [chart, setChart] = useState();

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

  // const allowedIdsTable = [
  //   "LibroAuxiliarVentaCompleto",
  //   "LibroAuxiliarCompraCompleto",
  //   "LibroAuxiliarClienteCompleto",
  //   "LibroAuxiliarProveedorCompleto",
  //   "LibroAuxiliarIngresoCompleto",
  //   "LibroAuxiliarEgresoCompleto",
  //   "ComprobanteLibro",
  // ];

  const renderCardByType = () => {
    if (type === "ventas" || type === "compras") {
      return CardVentaCompras();
    } else if (type === "flujoCaja") {
      return CardFlujoCaja();
    } else if (type === "tablas") {
      return CardTablas();
    }
    // Puedes agregar más condiciones según sea necesario
    return null;
  };

  useEffect(() => {
    if (allowedIdsCharts.includes(idChart)) {
      setChart("");
    }
  }, []);

  const CardVentaCompras = () => {
    return (
      <div className="shadow-3xl">
        <div className="p-6 flex justify-between">
          <h2 className="text-lg font-bold">{title}</h2>
          <div className="border-solid border border-black px-4">MES</div>
        </div>
        <div className=" flex justify-between bg-light-gray-card p-6">
          <div className="max-w-[35%]">{chart}</div>
          <div className="flex flex-col justify-center gap-4">
            <div className="flex flex-col">
              <p>{type === "ventas" ? "Pagadas" : "Facturadas"}</p>
              <p className="font-bold">150.000</p>
            </div>
            <div className="flex flex-col">
              <p>{type === "ventas" ? "Por cobrar" : "Pagadas"}</p>
              <p className="font-bold">50.000</p>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const CardFlujoCaja = () => {
    return (
      <div className="shadow-3xl">
        <div className="px-6 pt-6 pb-4 flex flex-col justify-between">
          <div className="flex justify-between">
            <h2 className="uppercase text-lg font-semibold">{title}</h2>
            <div className="flex gap-10">
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 border-solid border border-black bg-light-orange rounded-full"></div>
                <p className="uppercase text-xs font-bold">ingreso</p>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 border-solid border border-black bg-aqua-green rounded-full"></div>
                <p className="uppercase text-xs font-bold">egreso</p>
              </div>
            </div>
          </div>
          <p className="italic">Revisa como se mueve el negocio en el tiempo</p>
        </div>
        <div className="bg-light-gray-card p-6">
          <div className="max-w-xs">{chart}</div>
        </div>
      </div>
    );
  };

  const CardTablas = () => {
    return (
      <div className="shadow-3xl">
        <div className="p-6 flex justify-between">
          <h2 className="text-lg font-bold">{title}</h2>
          {title === "Clientes" ? (
            <div className="flex gap-1">
              <CustomButton
                className="bg-aqua-green text-white font-bold py-1 px-6"
                title="Nuevo Cliente"
              />
              <CustomButton
                className="bg-aqua-green text-white font-bold py-1 px-6"
                title={<ExpandMoreIcon />}
              />
            </div>
          ) : (
            <KeyboardArrowUpIcon />
          )}
        </div>
        <div className="flex bg-light-gray-card p-6 justify-between gap-4">
          {infoCardTable.map((unInfoCardTable, index) => (
            <div key={index} className="flex flex-col w-[25%]">
              <p className="px-3">{unInfoCardTable.name}</p>
              <p className="font-bold px-3">{unInfoCardTable.value}</p>
              <div
                className={`w-auto h-5 mt-4 ${unInfoCardTable.bgColor}`}
              />
            </div>
          ))}
        </div>
      </div>
    );
  };

  return renderCardByType();
};

export default Card;

import React, { useState, useEffect } from "react";

//components
// import { MultiChartApp } from "../charts/App";
import CustomButton from "../ui/CustomButton.js";
import Title from "../ui/Title.js";
import SearchInput from "../ui/SearchInput.js";

//material
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";

//assets
import iconoPregunta from "../../../assets/iconoPregunta.jpg";
import personaNovedades from "../../../assets/personaNovedades.jpeg";

//data
import { infoCardTable } from "../data/dataCardInfoTable.js";
import { mesageAlertTable } from "../data/dataTableAlertas.js";
import {
  favoriteInfo,
  comrprasInfo,
  ventasInfo,
} from "../data/dataInfoCardInformes.js";

const Card = ({ title, type, idChart }) => {
  // const [chart, setChart] = useState();
  const [informesType, setInformesType] = useState();

  // const allowedIdsCharts = [
  //   "BarraUnica&ComparaCliente",
  //   "BarraUnica&VentasMes",
  //   "BarraParalela&ComparaVenta",
  //   "BarraParalela&CompraVenta",
  //   "BarraParalela&ComparaCompraIVA",
  //   "BarraApilada&DeudasClientes",
  //   "GraficoDeTorta&ComparaCliente",
  //   "BarraParalela&ComparaVentaIVA",
  // ];

  // const allowedIdsTable = [
  //   "LibroAuxiliarVentaCompleto",
  //   "LibroAuxiliarCompraCompleto",
  //   "LibroAuxiliarClienteCompleto",
  //   "LibroAuxiliarProveedorCompleto",
  //   "LibroAuxiliarIngresoCompleto",
  //   "LibroAuxiliarEgresoCompleto",
  //   "ComprobanteLibro",
  // ];
  const typeInformes = [
    "informesVentas",
    "informesCompras",
    "informesFavoritos",
  ];

  const renderCardByType = () => {
    if (type === "ventas" || type === "compras") {
      return CardVentaCompras();
    } else if (type === "flujoCaja") {
      return CardFlujoCaja();
    } else if (type === "tablas") {
      return CardTablas();
    } else if (type === "alertas") {
      return CardAlertas();
    } else if (type === "novedades") {
      return CardNovedades();
    } else if (typeInformes.includes(type)) {
      return CardInformes();
    }
    // Puedes agregar más condiciones según sea necesario
    return null;
  };
  useEffect(() => {
    if (type === "informesFavoritos") setInformesType(favoriteInfo);
    if (type === "informesCompras") setInformesType(comrprasInfo);
    if (type === "informesVentas") setInformesType(ventasInfo);
  }, []);

  // useEffect(() => {
  //   if (allowedIdsCharts.includes(idChart)) {
  //     setChart(<MultiChartApp typeid={idChart} key={"1"} />);
  //   }
  // }, []);

  const CardVentaCompras = () => {
    return (
      <div className="shadow-3xl">
        <div className="p-6 flex justify-between">
          <h2 className="text-lg font-bold">{title}</h2>
          <div className="border-solid border border-black px-4">MES</div>
        </div>
        <div className=" flex justify-between bg-light-gray-card p-6">
          <div className="max-w-[35%]">""</div>
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
          <div className="max-w-xs">""</div>
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
                className="bg-aqua-green text-white font-bold px-6"
                title="Nuevo Cliente"
              />
              <CustomButton
                className="bg-aqua-green text-white font-bold px-6"
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
              <div className={`w-auto h-5 mt-4 ${unInfoCardTable.bgColor}`} />
            </div>
          ))}
        </div>
      </div>
    );
  };

  const CardAlertas = () => {
    return (
      <div className="shadow-3xl p-4 max-h-[300px] overflow-y-auto">
        <div className="flex flex-col gap-2">
          <Title className="uppercase font-bold">{title}</Title>
          <p className="italic">Luca necesita verificar ciertos movimientos</p>
        </div>
        <div className="">
          <table className="w-full">
            <thead>
              <tr>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {mesageAlertTable.map((unMesageAlertTable, index) => (
                <tr key={index} className="">
                  <td className="border-b border-gray-300 px-6 py-6 font-bold">
                    {unMesageAlertTable.name}
                  </td>
                  <td className="border-b border-gray-300 px-6">
                    <button className="bg-[#8F9FB2] py-1 px-4">
                      <EditOutlinedIcon sx={{ color: "white" }} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const CardNovedades = () => {
    return (
      <div className="flex flex-col gap-4 shadow-3xl py-4 px-6">
        <div className="flex flex-col gap-2">
          <Title className="uppercase font-bold">{title}</Title>
          <p className="italic">
            Accede a nuevas funcionalidades en la sección de empleados, ahora
            podrás agregar las horas de su jornada laboral.
          </p>
        </div>
        <div className="flex justify-between">
          <div className="flex flex-col gap-12">
            <div className="flex gap-4">
              <img className="w-6" src={iconoPregunta} alt="" />
              <p className="font-bold">Cómo funciona</p>
            </div>
            <CustomButton
              className="bg-aqua-green text-white font-bold h-1/4"
              title="Tutorial"
            />
          </div>
          <img className="w-[50%]" src={personaNovedades} alt="" />
        </div>
      </div>
    );
  };

  const CardInformes = () => {
    return (
      <div className="flex flex-col shadow-3xl mt-6">
        <div className="flex justify-between px-4 py-2 items-center">
          <Title className="text-xl font-bold">{title}</Title>
          <SearchInput />
        </div>
        <div className="flex bg-light-gray-card pl-4 pr-36 justify-between">
          {informesType?.map((unInformesType) => (
            <button
              key={unInformesType.id}
              className="flex flex-col w-[7%] items-center"
            >
              <img
                className="w-full h-auto max-w-full object-contain"
                src={unInformesType.icon}
                alt=""
              />
              <div className="flex flex-col items-start ">
                <p className="font-bold">{unInformesType.name}</p>
                <p className="font-bold uppercase">{unInformesType.text}</p>
              </div>
            </button>
          ))}
        </div>
      </div>
    );
  };

  return renderCardByType();
};

export default Card;

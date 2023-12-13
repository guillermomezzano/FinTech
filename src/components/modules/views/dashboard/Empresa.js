import React from "react";

// components
import Title from "../../../modules/ui/Title";
import Card from "../../../modules/card/Card";

const Empresa = () => {
  return (
    <>
      <Title className="text-6xl">Empresa</Title>
      <div className="grid grid-cols-3 gap-3 py-10">
        <div className="">
          <Card
            title="Ventas"
            type="ventas"
            idChart="GraficoDeTorta&ComparaCliente"
          />
        </div>
        <div className="">
          <Card
            title="Compras"
            type="compras"
            idChart="GraficoDeTorta&ComparaCliente"
          />
        </div>
        <div className="">
          <Card
            title="Ventas"
            type="ventas"
            idChart="GraficoDeTorta&ComparaCliente"
          />
        </div>
        <div className="col-span-2">
          <Card
            title="flujo de caja"
            type="flujoCaja"
            idChart="BarraUnica&ComparaCliente"
          />
        </div>
      </div>
    </>
  );
};

export default Empresa;

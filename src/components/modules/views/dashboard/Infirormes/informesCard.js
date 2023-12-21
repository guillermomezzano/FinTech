import React from "react";
// components
import Card from "../../../card/Card";

const InformesCard = () => {
  return (
    <div>
      <Card title="Informes Favoritos" type="informesFavoritos" idChart="" />
      <Card title="Informes Compras" type="informesCompras" idChart="" />
      <Card title="Informes Ventas" type="informesVentas" idChart="" />
    </div>
  );
};

export default InformesCard;

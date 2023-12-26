import React, { useState } from "react";
import { Link } from "react-router-dom";
// data
import {
  itemsFilaUno,
  itemsFilaDos,
  itemsFilaTres,
} from "../../../data/dataEmpresaAccionesImg.js";

//components
import SearchInput from "../../../ui/SearchInput";
import Card from "../../../card/Card";
import Title from "../../../ui/Title";

const Acciones = () => {
  const [hoveredItem, setHoveredItem] = useState(null);
  const handleButtonClick = (item) => {
    // Agrega aquí la lógica que desees al hacer clic en un botón
    console.log(`Haz hecho clic en el botón con ID: ${item.id}`);
  };

  const handleMouseOver = (item) => {
    setHoveredItem(item);
  };

  const handleMouseOut = () => {
    setHoveredItem(null);
  };

  return (
    <div className="flex">
      <div className="py-12 w-3/5">
        <div>
          <Title className="pb-0 my-0">Gestión de contactos</Title>
          <div className="flex gap-40 justify-between">
            {itemsFilaUno.map((unItemsFilaUno) => (
              <>
                <Link
                  to={unItemsFilaUno.link}
                  key={unItemsFilaUno.id}
                  className="overflow-hidden w-[15%]"
                  onMouseOver={() => handleMouseOver(unItemsFilaUno)}
                  onMouseOut={handleMouseOut}
                >
                  <img
                    src={
                      hoveredItem === unItemsFilaUno
                        ? unItemsFilaUno.iconHover
                        : unItemsFilaUno.icon
                    }
                    alt={unItemsFilaUno.name}
                    className="w-full h-auto max-w-full object-contain"
                  />
                </Link>
              </>
            ))}
          </div>
        </div>
        <div className="my-8">
          <Title className="pb-0 my-0">Movimientos</Title>
          <div className="flex gap-40 justify-between">
            {itemsFilaDos.map((unItemsFilaDos) => (
              <Link
                to={unItemsFilaDos.link}
                key={unItemsFilaDos.id}
                className="overflow-hidden w-[15%]"
                onClick={() => handleButtonClick(unItemsFilaDos)}
                onMouseOver={() => handleMouseOver(unItemsFilaDos)}
                onMouseOut={handleMouseOut}
              >
                <img
                  src={
                    hoveredItem === unItemsFilaDos
                      ? unItemsFilaDos.iconHover
                      : unItemsFilaDos.icon
                  }
                  alt=""
                  className="w-full h-auto max-w-full object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
        <div className="my-8">
          <Title className="pb-0 my-0">Movimientos</Title>
          <div className="flex gap-40 justify-between">
            {itemsFilaTres.map((unItemsFilaTres) => (
              <Link
                to={unItemsFilaTres.link}
                key={unItemsFilaTres.id}
                className="overflow-hidden w-[15%]"
                onClick={() => handleButtonClick(unItemsFilaTres)}
                onMouseOver={() => handleMouseOver(unItemsFilaTres)}
                onMouseOut={handleMouseOut}
              >
                <img
                  src={
                    hoveredItem === unItemsFilaTres
                      ? unItemsFilaTres.iconHover
                      : unItemsFilaTres.icon
                  }
                  alt=""
                  className="w-full h-auto max-w-full object-contain"
                />
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-6 pt-6 pb-12 pl-28 w-[40%]">
        <SearchInput />
        <Card title="alertas" type="alertas" />
        <Card title="novedades" type="novedades" />
      </div>
    </div>
  );
};

export default Acciones;

import Title from "../../../ui/Title";
import React, { useState } from "react";
// data
import {
  itemsFilaUno,
  itemsFilaDos,
  itemsFilaTres,
} from "../../../data/dataEmpresaAccionesImg.js";

//components
import SearchInput from "../../../ui/SearchInput";
import Card from "../../../card/Card";

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
          <Title className="text-2xl">Gestión de contactos</Title>
          <div className="flex gap-40 justify-between">
            {itemsFilaUno.map((unItemsFilaUno) => (
              <>
                <button
                  key={unItemsFilaUno.id}
                  className="overflow-hidden w-[15%]"
                  onClick={() => handleButtonClick(unItemsFilaUno)}
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
                </button>
              </>
            ))}
          </div>
        </div>
        <div className="my-12">
          <Title className="text-2xl">Movimientos</Title>
          <div className="flex gap-40 justify-between">
            {itemsFilaDos.map((unItemsFilaDos) => (
              <button
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
              </button>
            ))}
          </div>
        </div>
        <div className="my-12">
          <Title className="text-2xl">Movimientos</Title>
          <div className="flex gap-40 justify-between">
            {itemsFilaTres.map((unItemsFilaTres) => (
              <button
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
              </button>
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

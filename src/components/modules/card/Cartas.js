import React from "react";

const Card = ({ title, type }) => {
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

  const CardVentaCompras = () => {
    return (
      <div className="shadow-3xl">
        <div className="p-6 flex justify-between">
          <h2 className="text-lg font-bold">{title}</h2>
          <div className="border-solid border border-black px-4">MES</div>
        </div>
        <div className=" flex justify-between bg-light-orange-card p-6">
          <p className="text-gr ay-600">Contenido de la tarjeta...</p>
          <div className="flex flex-col gap-4">
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
        <div className="p-6 flex flex-col justify-between">
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">{title}</h2>
            <div className="flex gap-10">
              <div className="flex gap-2">
                <div className="border-solid border border-black rounded-full"></div>
                <p>ingreso</p>
              </div>
              <div className="flex gap-2">
                <div className="border-solid border border-black rounded-full"></div>
                <p>egreso </p>
              </div>
            </div>
          </div>
          <p>Revisa como se mueve el negocio en el tiempo</p>
        </div>
        <div className="bg-light-orange-card p-6">
          <p className="text-gr ay-600">Contenido de la tarjeta...</p>
        </div>
      </div>
    );
  };

  const CardTablas = () => {
    return (
      <div className="shadow-3xl">
        <div className="p-6 flex felx-col justify-between">
          <h2 className="text-lg font-bold">{title}</h2>
        </div>
        <div className="bg-light-orange-card p-6">
          <p className="text-gr ay-600">Contenido de la tarjeta...</p>
        </div>
      </div>
    );
  };

  return (
    <div className="shadow-3xl">
      <div
        className={`p-6 flex ${
          type === "flujoCaja" && "flex-col"
        } justify-between`}
      >
        {type === "flujoCaja" ? (
          <div className="flex justify-between">
            <h2 className="text-lg font-semibold">{title}</h2>
            <div className="flex gap-10">
              <div className="flex gap-2">
                <div className="border-solid border border-black rounded-full"></div>
                <p>ingreso</p>
              </div>
              <div className="flex gap-2">
                <div className="border-solid border border-black rounded-full"></div>
                <p>egreso </p>
              </div>
            </div>
          </div>
        ) : (
          <div>
            <h2 className="text-lg font-bold">{title}</h2>
            <div className="border-solid border border-black px-4">MES</div>
          </div>
        )}
      </div>
      <div className=" flex justify-between bg-light-orange-card p-6">
        <p className="text-gr ay-600">Contenido de la tarjeta...</p>
        <div className="flex flex-col gap-4">
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

export default Card;

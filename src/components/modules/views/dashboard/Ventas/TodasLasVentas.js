import React, { useContext, useEffect } from "react";

// data
import { cols } from "../../../data/dataTablaVentas";

// components
import Card from "../../../card/Card";
import Table from "../../../table/Table";
// import inputFilterTable from "../../../ui/InputFilterTable";
import Input from "../../../ui/Input";
import GlobalContext from "../../../../../context/global-context";
// material

const TodasLasVentas = () => {
  const [data, setData] = React.useState([]);
  const { empresa } = useContext(GlobalContext);

  useEffect(() => {
    (async () => {
      if (!empresa?.key) return;
      try {
        const response = await fetch(
          `http://localhost:4000/getLibroVentaLibro/${empresa?.key}&2023&10`
        );
        console.log(response);
        const data = await response.json();
        console.log(data);
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [empresa]);

  return (
    <div>
      <div className="py-10">
        <Card title="Transacciones de venta" type="tablas" idChart="" />
      </div>
      <div className="flex gap-2 ">
        <Input className="bg-white border-2" />
        <Input className="bg-white border-2" />
        <Input className="bg-white border-2" />
        <Input className="bg-white border-2" />
      </div>
      <Table data={{ cols, rows: data }} edit path="/ventas" />

    </div>
  );
};

export default TodasLasVentas;

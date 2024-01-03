import React, { useContext, useEffect, useState } from "react";

// data
import { cols } from "../../../data/dataTablaProveedores";

// components
import Card from "../../../card/Card";
import Table from "../../../table/Table";
// import inputFilterTable from "../../../ui/InputFilterTable";
import Input from "../../../ui/Input";
import GlobalContext from "../../../../../context/global-context";
// material

const Clientes = () => {
  const [data, setData] = useState([]);
  const { empresa } = useContext(GlobalContext);

  useEffect(() => {
    (async () => {
      if (!empresa?.key) return;
      try {
        const response = await fetch(
          `http://localhost:4000/getLibroProveedorLibro/${empresa?.key}&2023&11`
        );
        console.log(response);
        const data = await response.json();
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, [empresa]);

  return (
    <div>
      <div className="py-10">
        <Card title="Clientes" type="tablas" idChart="" />
      </div>
      <div className="flex gap-2 ">
        <Input className="bg-white border-2" />
      </div>
      <Table data={{ cols, rows: data }} edit />
    </div>
  );
};

export default Clientes;

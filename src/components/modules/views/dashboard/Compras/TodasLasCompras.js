import React, { useContext, useEffect, useState } from "react";

// data
import { cols } from "../../../data/dataTablaCompras";

// components
import Card from "../../../card/Card";
import Table from "../../../table/Table";
// import inputFilterTable from "../../../ui/InputFilterTable";
import SearchInput from "../../../ui/SearchInput";
import GlobalContext from "../../../../../context/global-context";

// material

const TodasLasCompras = () => {
  const [data, setData] = useState([]);
  const { empresa } = useContext(GlobalContext);

  useEffect(() => {
    (async () => {
      if (!empresa?.key) return;
      try {
        const response = await fetch(
          `http://localhost:4000/getLibroCompraLibro/${empresa?.key}&2023&11`
        );
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
        <Card title="Transacciones de compras" type="tablas" idChart="" />
      </div>
      <div className="flex gap-2 ">
        <SearchInput className="bg-white border-2" />
        <SearchInput className="bg-white border-2" />
        <SearchInput className="bg-white border-2" />
        <SearchInput className="bg-white border-2" />
      </div>
      <Table data={{ cols, rows: data }} edit path="/compras" />
    </div>
  );
};

export default TodasLasCompras;

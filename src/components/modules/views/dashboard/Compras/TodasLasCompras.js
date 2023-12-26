import React, { useContext, useEffect } from "react";

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
  const [data, setData] = React.useState([]);
  const { empresa } = useContext(GlobalContext);

  useEffect(() => {
    const getData = async () => {
      if (!empresa?.key) return;
      try {
        const response = await fetch(
          `http://localhost:4000/getLibroCompraLibro/${empresa?.key}`
        );
        const data = await response.json();
        console.log(data);
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    };
    
    getData();
  }, [empresa]);

  return (
    <div>
      <div className="py-10">
        <Card title="Transacciones de venta" type="tablas" idChart="" />
      </div>
      <div className="flex gap-2 ">
        <SearchInput className="bg-white border-2" />
        <SearchInput className="bg-white border-2" />
        <SearchInput className="bg-white border-2" />
        <SearchInput className="bg-white border-2" />
      </div>
      <Table data={{ cols, rows: data }} edit />
    </div>
  );
};

export default TodasLasCompras;

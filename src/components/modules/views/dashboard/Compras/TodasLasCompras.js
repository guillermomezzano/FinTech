import React, { useContext, useEffect, useState } from "react";

// data
import { cols } from "../../../data/dataTablaCompras";

// components
import Card from "../../../card/Card";
import Table from "../../../table/Table";
import { Button } from "../../../ui/index";
// import inputFilterTable from "../../../ui/InputFilterTable";
import SearchInput from "../../../ui/SearchInput";
import GlobalContext from "../../../../../context/global-context";

// material

const TodasLasCompras = () => {
  const [data, setData] = useState([]);
  const { empresa } = useContext(GlobalContext);
  const [monthFilter, setMonthFilter] = useState("");
  const [yearFilter, setYearFilter] = useState("");
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const getData = async () => {
    if (!empresa?.key) return;
    try {
      const response = await fetch(
        `http://localhost:4000/getLibroCompraLibro/${empresa?.key}&${
          yearFilter ? yearFilter : year
        }&${monthFilter ? monthFilter : month}`
      );
      const data = await response.json();
      console.log(data);
      setData(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, [empresa]);

  const handleSearch = () => {
    getData();
  };

  return (
    <div>
      <div className="py-10">
        <Card title="Transacciones de compras" type="tablas" idChart="" />
      </div>
      <div className="flex gap-2 items-center">
        <SearchInput className="bg-white border-2" />
        <SearchInput className="bg-white border-2" />
        <SearchInput className="bg-white border-2" />
        <label>Mes</label>
        <input
          type="number"
          value={monthFilter}
          onChange={(e) => setMonthFilter(e.target.value)}
        />
        <label>Año</label>
        <input
          type="number"
          value={yearFilter}
          onChange={(e) => setYearFilter(e.target.value)}
        />
        <Button
          className="bg-aqua-green border text-white font-bold"
          onClick={handleSearch}
          title="Buscar"
        />
      </div>
      <Table data={{ cols, rows: data }} edit path="/compras" />
    </div>
  );
};

export default TodasLasCompras;

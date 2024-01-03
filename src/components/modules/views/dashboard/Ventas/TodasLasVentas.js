import React, { useContext, useEffect, useState } from "react";
import GlobalContext from "../../../../../context/global-context";

// data
import { cols } from "../../../data/dataTablaVentas";

// components
import Card from "../../../card/Card";
import Table from "../../../table/Table";
import { Button } from "../../../ui/index";
// import inputFilterTable from "../../../ui/InputFilterTable";
import Input from "../../../ui/Input";
// material

const TodasLasVentas = () => {
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
        `http://localhost:4000/getLibroHonorarioLibro/${empresa?.key}&${
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
        <Card title="Transacciones de venta" type="tablas" idChart="" />
      </div>
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
      <Table data={{ cols, rows: data }} edit path="/ventas" />
    </div>
  );
};

export default TodasLasVentas;

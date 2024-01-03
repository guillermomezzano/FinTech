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

const TodosLosHonorarios = () => {
  const [data, setData] = useState([]);
  const { empresa } = useContext(GlobalContext);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

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

  useEffect(() => {
    getData();
  }, [empresa]);

  const getQueryInitialDate = (startDate) => {
    const splitDate = startDate.split("-");
    const year = splitDate[0];
    const month = splitDate[1];
    return `${empresa.key}&${year}&${month}`;
  };

  const getQueryEndDate = (endDate) => {
    const splitDate = endDate.split("-");
    const year = splitDate[0];
    const month = splitDate[1];
    return `${empresa.key}&${year}&${month}`;
  };

  const handleSearch = () => {
    const queryDateInitial = getQueryInitialDate(startDate);
    const queryDateEnd = getQueryEndDate(endDate);
    console.log("queryDateInitial", queryDateInitial);
    console.log("queryDateEnd", queryDateEnd);
  };
  useEffect(() => {
    console.log("empresa", empresa.key);
  }, [empresa]);

  // useEffect(() => {
  //   console.log("startDate", startDate);
  //   console.log("endDate", endDate);
  // }, [startDate, endDate]);
  debugger;
  return (
    <div>
      <div className="py-10">
        <Card title="Transacciones de venta" type="tablas" idChart="" />
      </div>
      <div className="flex gap-2 items-center">
        <SearchInput className="bg-white border-2" />
        <SearchInput className="bg-white border-2" />
        <SearchInput className="bg-white border-2" />
        <label>Fecha de Inicio:</label>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />
        <label>Fecha de Fin:</label>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
        <button onClick={handleSearch}>Buscar</button>
      </div>
      <Table data={{ cols, rows: data }} edit path="/compras" />
    </div>
  );
};

export default TodosLosHonorarios;

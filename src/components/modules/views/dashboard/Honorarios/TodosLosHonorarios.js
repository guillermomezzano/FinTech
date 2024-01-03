import React, { useContext, useEffect, useState } from "react";

// data
import { cols } from "../../../data/dataTablaHonorarios";

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

  useEffect(() => {
    (async () => {
      if (!empresa?.key) return;
      try {
        const response = await fetch(
          `http://localhost:4000/getLibroHonorarioLibro/${empresa?.key}&2023&11`
        );
        const data = await response.json();
        setData(data.data);
      } catch (error) {
        console.log(error);
      }
    })();
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
      <Table data={{ cols, rows: data }} edit path="/honorarios" />
    </div>
  );
};

export default TodosLosHonorarios;

import React, { useContext, useEffect, useState } from "react";

// data
import { cols } from "../../../data/dataTablaCompras";

// components
import Card from "../../../card/Card";
import Table from "../../../table/Table";
// import inputFilterTable from "../../../ui/InputFilterTable";
import DateRangeFilter from "../../../buttonFilter/DateRangeFilter";
import SearchInput from "../../../ui/SearchInput";
import GlobalContext from "../../../../../context/global-context";

// material

const TodosLosHonorarios = () => {
  const [data, setData] = useState([]);
  const { empresa } = useContext(GlobalContext);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth() + 1;

  const getData = async () => {
    if (!empresa?.key) return;
    try {
      const response = await fetch(
        `http://localhost:4000/getLibroHonorarioLibro/${empresa?.key}&${year}&${month}`
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
  // const handleSearch = () => {
  //   const queryDateInitial = DateRangeFilter.getQueryDate(startDate);
  //   const queryDateEnd = DateRangeFilter.getQueryDate(endDate);
  //   console.log("queryDateInitial", queryDateInitial);
  //   console.log("queryDateEnd", queryDateEnd);
  // };
  useEffect(() => {
    console.log("empresa", empresa?.key);
    console.log("date", date);
    console.log("year", year);
    console.log("month", month);
  }, [empresa, date, year, month]);

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
        {/* <DateRangeFilter
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          handleSearch={handleSearch}
        /> */}
      </div>
      <Table data={{ cols, rows: data }} edit path="/compras" />
    </div>
  );
};

export default TodosLosHonorarios;

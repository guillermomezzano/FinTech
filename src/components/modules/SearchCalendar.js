import React, { useState, useEffect } from "react";

const SearchCalendar = ({ initialData, setData }) => {
  const today = new Date();
  const firstDayOfCurrentMonth = new Date(
    today.getFullYear(),
    today.getMonth(),
    1
  );
  const lastDayOfLastMonth = new Date(today.getFullYear(), today.getMonth(), 0);
  const lastDayOfCurrentMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0
  );

  const [fechaInicio, setFechaInicio] = useState(firstDayOfCurrentMonth);
  const [fechaFin, setFechaFin] = useState(lastDayOfCurrentMonth);

  const handleFechaInicioChange = (e) => {
    setFechaInicio(e.target.value);
  };

  const handleFechaFinChange = (e) => {
    setFechaFin(e.target.value);
  };
  debugger;
  useEffect(() => {
    // Función para filtrar las filas por fecha
    const filterDataByDateRange = () => {
      debugger;
      const filteredRows = initialData.filter((row) => {
        const rowFecha = new Date(row.fecha);
        const startFecha = new Date(fechaInicio);
        const endFecha = new Date(fechaFin);
        // Comprobación si la fecha inicial es menor o igual que la final y viceversa
        return rowFecha >= startFecha && rowFecha <= endFecha;
      });
      // Actualiza el estado Data con las filas filtradas
      setData(filteredRows);
    };
    // Llama a la función cuando cambien las fechas
    debugger;
    filterDataByDateRange();
  }, [fechaInicio, fechaFin]);
  return (
    <>
      <div>
        <input
          type="date"
          value={fechaInicio}
          onChange={handleFechaInicioChange}
        />
      </div>
      <div>
        <input type="date" value={fechaFin} onChange={handleFechaFinChange} />
      </div>
    </>
  );
};

export default SearchCalendar;

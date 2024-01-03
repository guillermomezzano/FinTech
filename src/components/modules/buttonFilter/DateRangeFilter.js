import React, { useContext } from "react";
import GlobalContext from "../../../context/global-context";

const DateRangeFilter = ({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
  handleSearch,
}) => {
  const { empresa } = useContext(GlobalContext);
  const getQueryDate = (date) => {
    const splitDate = date.split("-");
    const year = splitDate[0];
    const month = splitDate[1];
    const key = empresa?.key;
    return `${key}&${year}&${month}`;
  };

  return (
    <div className="flex gap-2 items-center">
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
  );
};

export default DateRangeFilter;

// DateFilterComponent.jsx
import React from "react";

//components
import { Button } from "../ui/index";

const DateFilterComponent = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  onSearch,
}) => {
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
      <Button onClick={onSearch} title="Buscar" />
    </div>
  );
};

export default DateFilterComponent;

import React, { useState } from "react";
import { Button, TextField } from "@mui/material";

const StepFormTwo = ({ active, onNext, onBack }) => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    onNext(formData);
  };

  const handleBack = () => {
    onBack(formData);
  };

  return (
    <div style={{ display: active ? "block" : "none" }}>
      <h1>StepFormTwo</h1>
      <TextField
        label="Campo 1"
        name="campo1"
        value={formData.campo1 || ""}
        onChange={handleChange}
      />
      <TextField
        label="Campo 2"
        name="campo2"
        value={formData.campo2 || ""}
        onChange={handleChange}
      />
      {/* Agrega más campos según sea necesario */}
      <Button variant="contained" onClick={handleBack}>
        Atras
      </Button>
      <Button variant="contained" onClick={handleNext}>
        Siguiente
      </Button>
    </div>
  );
};

export default StepFormTwo;

import React, { useState } from "react";
import { Button } from "@mui/material";
import welcomeImage from "../../../../assets/welcomeImage.jpg";

const StepForm = ({ active, onNext }) => {
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    onNext(formData);
  };

  return (
    <div style={{ display: active ? "block" : "none" }}>
      <h1 className="text-6xl mb-6">¡Bienvenido!</h1>
      <h3 className="text-2xl">
        <span className="text-2xl"> Necesitamos pedirte unos datos para</span>
        <br />
        entregarte todo el potencial de Luca.
      </h3>
      <div className="flex">
        <Button variant="contained" onClick={handleNext}>
          Siguiente
        </Button>
        <img src={welcomeImage} />
      </div>
    </div>
  );
};

export default StepForm;

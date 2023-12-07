import React, { useState } from "react";
import CustomButton from "../../../modules/ui/CustomButton";
import welcomeImage from "../../../../assets/welcomeImage.jpg";

const StepForm = ({ active, onNext }) => {
  const [formData, setFormData] = useState({});

  const handleNext = () => {
    onNext(formData);
  };

  return (
    <div className="w-full" style={{ display: active ? "block" : "none" }}>
      <h1 className="text-6xl">¡Bienvenido!</h1>
      <h3 className="text-2xl mt-8">
        <span className="text-2xl"> Necesitamos pedirte unos datos para</span>
        <br />
        entregarte todo el potencial de Luca.
      </h3>
      <div className="flex gap-20">
        <CustomButton className="h-12 w-48 mt-12" onClick={handleNext}>
          Iniciar
        </CustomButton>
        <img className="w-full" src={welcomeImage} alt="welcomeImage" />
      </div>
    </div>
  );
};

export default StepForm;

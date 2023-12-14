import React, { useState } from "react";
import { OutlinedInput } from "@mui/material";
import CustomButton from "../../../modules/ui/CustomButton";

const StepperFormThree = ({ active, onNext, onBack }) => {
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
    <div className="w-full" style={{ display: active ? "block" : "none" }}>
      <h1 className="text-6xl">¿Cuál es tu giro?</h1>
      <h3 className="text-2xl mt-8">
        Empieza a escribir y busca el tuyo. Puedes cambiarlo más adelante.
      </h3>
      <div className="w-5/6">
        <OutlinedInput
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.1)",
          }}
          fullWidth
          name="giro"
          value={formData.giro || ""}
          onChange={handleChange}
        />
      </div>
      {/* Agrega más campos según sea necesario */}
      <div className="flex gap-4">
        <CustomButton
          className="bg-light-gray text-white font-bold py-2 px-4 w-40"
          title="Aterior"
          onClick={handleBack}
        />
        <CustomButton
          className="bg-aqua-green text-white font-bold py-2 px-4 w-40"
          title="Siguiente"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default StepperFormThree;

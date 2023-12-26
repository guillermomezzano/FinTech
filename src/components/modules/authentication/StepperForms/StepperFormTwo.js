import React, { useState } from "react";
import { OutlinedInput } from "@mui/material";
import CustomButton from "../../../modules/ui/CustomButton";

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
    <div className="w-full" style={{ display: active ? "block" : "none" }}>
      <h1 className="text-6xl">¿Cómo se llama tu empresa?</h1>
      <h3 className="text-2xl mt-8">
        Con este nombre podrás trabajar con Luca
      </h3>
      <div className="w-5/6">
        <OutlinedInput
          style={{
            marginTop: "50px",
            marginBottom: "50px",
            boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.1)",
          }}
          fullWidth
          name="nameCompany"
          value={formData.nameCompany || ""}
          onChange={handleChange}
        />
      </div>
      <div className="flex gap-4">
        <CustomButton
          className="w-40 bg-light-gray text-white font-bold py-2 px-4"
          title="Aterior"
          onClick={handleBack}
        />
        <CustomButton
          className={`w-40 ${
            formData.nameCompany ? "bg-aqua-green" : "bg-light-gray"
          }  text-white font-bold py-2 px-4`}
          title="Siguiente"
          onClick={handleNext}
          disabled={formData.nameCompany ? false : true}
        />
      </div>
    </div>
  );
};

export default StepFormTwo;

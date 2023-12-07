import React, { useState } from "react";
import { Button } from "@mui/material";
import CustomButton from "../../../modules/ui/CustomButton";

const StepperFormSix = ({ active, onNext, onBack }) => {
  const [formData, setFormData] = useState({});

  const options = [
    {
      name: "Buscar factura de gastos",
    },
    {
      name: "Buscar facturas impagas",
    },
  ];

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
      <h1 className="text-6xl mb-8">¿Que deberíamos hacer primero?</h1>
      <div className="grid grid-cols-2 gap-6 w-5/6">
        {options.map((unOptions) => (
          <div>
            <Button
              fullWidth
              variant="outlined"
              name="typeCompany"
              value={unOptions.name}
              sx={{
                height: "100px",
                boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.1)",
                color: "black",
              }}
              onClick={handleChange}
            >
              <span style={{ fontWeight: "bold" }}>{unOptions.name}</span>
            </Button>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-16">
        <CustomButton className="bg-light-gray w-40" onClick={handleBack}>
          Aterior
        </CustomButton>
        <CustomButton className="w-40" onClick={handleNext}>
          Siguiente
        </CustomButton>
      </div>
    </div>
  );
};

export default StepperFormSix;

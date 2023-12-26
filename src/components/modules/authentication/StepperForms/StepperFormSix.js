import React, { useState } from "react";
import { Button } from "@mui/material";
import CustomButton from "../../../modules/ui/CustomButton";

const StepperFormSix = ({ active, onNext, onBack }) => {
  const [formData, setFormData] = useState({});
  const [selectedButton, setSelectedButton] = useState(null);

  const options = [
    {
      id: "1",
      name: "Buscar factura de gastos",
    },
    {
      id: "2",
      name: "Buscar facturas impagas",
    },
  ];

  const handleChange = (id) => {
    setSelectedButton(id);
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
        {options.map((unOptions, index) => (
          <div key={index}>
            <Button
              fullWidth
              id={unOptions.id}
              variant="outlined"
              name=""
              value={unOptions.name}
              sx={{
                height: "100px",
                boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.1)",
                color: "black",
                backgroundColor: selectedButton === unOptions.id && "#8d9fb5",
                "&:hover": {
                  backgroundColor: selectedButton === unOptions.id && "#8d9fb5",
                },
              }}
              onClick={() => handleChange(unOptions.id)}
            >
              <span
                style={{ fontWeight: "bold" }}
                onClick={() => handleChange(unOptions.id)}
              >
                {unOptions.name}
              </span>
            </Button>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-16">
        <CustomButton
          className="bg-light-gray text-white font-bold py-2 px-4 w-40"
          title="Aterior"
          onClick={handleBack}
        />

        <CustomButton
          className={`text-white font-bold py-2 px-4 w-40 ${
            selectedButton ? "bg-aqua-green" : "bg-light-gray"
          }  `}
          title="Siguiente"
          onClick={handleNext}
          disabled={selectedButton ? false : true}
        />
      </div>
    </div>
  );
};

export default StepperFormSix;

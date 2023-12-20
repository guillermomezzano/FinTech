import React, { useState } from "react";
import { Button } from "@mui/material";
import CustomButton from "../../../modules/ui/CustomButton";

const StepperFormFour = ({ active, onNext, onBack }) => {
  const [formData, setFormData] = useState({});
  const [selectedButton, setSelectedButton] = useState(null);
  const options = [
    {
      id: "1",
      name: "Comerciante único",
    },
    {
      id: "2",
      name: "Consorcio",
    },
    {
      id: "3",
      name: "Empresa comerciante",
    },
    {
      id: "4",
      name: "Fundación o caridad",
    },
    {
      id: "5",
      name: "Sociedad",
    },
    {
      id: "6",
      name: "Otro",
    },
  ];

  const handleChange = (id, name) => {
    // setFormData({ ...formData, [e.target.name]: e.target.value });
    // setSelectedButton(e.target.id);
    setFormData({ ...formData, typeCompany: name });
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
      <h1 className="text-6xl mb-8">¿Qué tipo de empresa es?</h1>
      <div className="grid grid-cols-2 gap-6 w-5/6">
        {options.map((unOptions, index) => (
          <div key={index}>
            <Button
              fullWidth
              id={unOptions.id}
              variant="outlined"
              name="typeCompany"
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
              onClick={() => handleChange(unOptions.id, unOptions.name)}
            >
              <span
                style={{ fontWeight: "bold" }}
                onClick={() => handleChange(unOptions.id, unOptions.name)}
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
          className="bg-aqua-green text-white font-bold py-2 px-4 w-40"
          title="Siguiente"
          onClick={handleNext}
        />
      </div>
    </div>
  );
};

export default StepperFormFour;

import React, { useEffect, useState } from "react";
import CustomButton from "../../../modules/ui/CustomButton";

const StepperFormSeven = ({ active, onNext, onBack }) => {
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
      <h1 className="text-6xl mb-8">¿Que deberíamos hacer primero?</h1>
      <div className="grid grid-cols-2 gap-6 w-5/6">
        <div className="">
          <h1>Pantalla vinculacion API</h1>
        </div>
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

export default StepperFormSeven;

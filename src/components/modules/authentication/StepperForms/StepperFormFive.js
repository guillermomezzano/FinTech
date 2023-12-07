import React, { useState } from "react";
import { Button } from "@mui/material";
import CustomButton from "../../../modules/ui/CustomButton";

const StepperFormFive = ({ active, onNext, onBack }) => {
  const [formData, setFormData] = useState({});

  const options = [
    {
      name: "Gastos",
      icon: require("../../../../assets/iconos/iconLibroA.png"),
    },
    {
      name: "Ventas",
      icon: require("../../../../assets/iconos/iconDinero.png"),
    },
    {
      name: "Informes",
      icon: require("../../../../assets/iconos/iconRedes.png"),
    },
    {
      name: "Transacciones",
      icon: require("../../../../assets/iconos/iconAvion.png"),
    },
    {
      name: "Impuestos",
      icon: require("../../../../assets/iconos/iconCalendario.png"),
    },
    {
      icon: require("../../../../assets/iconos/iconLibroA.png"),
      name: "Clientes",
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
      <h1 className="text-6xl">¿Que necesitas de Luca?</h1>
      <h3 className="text-2xl my-8">
        Tus elecciones ayudan a organizar tus areas de trabajo. Luego puedes
        modificar tus elecciones.
      </h3>
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
              <img
                src={unOptions.icon}
                alt={`Icono ${unOptions.name}`}
                className="w-10, h-10 mr-4"
              />
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

export default StepperFormFive;

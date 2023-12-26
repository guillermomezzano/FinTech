import React, { useState } from "react";
import { Button } from "@mui/material";
import CustomButton from "../../../modules/ui/CustomButton";

const StepperFormFive = ({ active, onNext, onBack }) => {
  const [formData, setFormData] = useState({
    initialsWidget: [],
  });

  const options = [
    {
      id: "1",
      name: "Gastos",
      icon: require("../../../../assets/iconos/iconLibroA.png"),
    },
    {
      id: "2",
      name: "Ventas",
      icon: require("../../../../assets/iconos/iconDinero.png"),
    },
    {
      id: "3",
      name: "Informes",
      icon: require("../../../../assets/iconos/iconRedes.png"),
    },
    {
      id: "4",
      name: "Transacciones",
      icon: require("../../../../assets/iconos/iconAvion.png"),
    },
    {
      id: "5",
      name: "Impuestos",
      icon: require("../../../../assets/iconos/iconCalendario.png"),
    },
    {
      id: "6",
      icon: require("../../../../assets/iconos/iconLibroA.png"),
      name: "Clientes",
    },
  ];

  const handleChange = (id, name) => {
    let updatedSelection;

    if (formData.initialsWidget.some((btn) => btn.id === id)) {
      // Si ya está seleccionado, quítalo del array
      updatedSelection = formData.initialsWidget.filter((btn) => btn.id !== id);
    } else {
      // Si no está seleccionado, agrégalo al array
      updatedSelection = [
        ...formData.initialsWidget,
        { id, name }, // Agregar el objeto con id y name
      ];
    }

    setFormData((prevFormData) => ({
      ...prevFormData,
      initialsWidget: updatedSelection,
    }));
  };

  const handleNext = () => {
    onNext(formData);
  };

  const handleBack = () => {
    onBack(formData);
  };
  debugger;
  return (
    <div className="w-full" style={{ display: active ? "block" : "none" }}>
      <h1 className="text-6xl">¿Que necesitas de Luca?</h1>
      <h3 className="text-2xl my-8">
        Tus elecciones ayudan a organizar tus áreas de trabajo. Luego puedes
        modificar tus elecciones.
      </h3>
      <div className="grid grid-cols-2 gap-6 w-5/6">
        {options.map((unOptions) => (
          <div key={unOptions.id}>
            <Button
              fullWidth
              id={unOptions.id}
              variant="outlined"
              name="initialsWidget"
              value={unOptions.name}
              sx={{
                height: "100px",
                boxShadow: "0px 0px 10px 10px rgba(0, 0, 0, 0.1)",
                color: "black",
                backgroundColor:
                  formData.initialsWidget.some(
                    (btn) => btn.id === unOptions.id
                  ) && "#8d9fb5",
                "&:hover": {
                  backgroundColor:
                    formData.initialsWidget.some(
                      (btn) => btn.id === unOptions.id
                    ) && "#8d9fb5",
                },
              }}
              onClick={() => handleChange(unOptions.id, unOptions.name)}
            >
              <img
                src={unOptions.icon}
                alt={`Icono ${unOptions.name}`}
                className={`w-10, h-10 mr-4 ${
                  formData.initialsWidget.some(
                    (btn) => btn.id === unOptions.id
                  ) && "filter grayscale brightness-0"
                }`}
              />
              <span style={{ fontWeight: "bold" }}>{unOptions.name}</span>
            </Button>
          </div>
        ))}
      </div>
      <div className="flex gap-4 mt-16">
        <CustomButton
          className="bg-light-gray text-white font-bold py-2 px-4 w-40"
          title="Anterior"
          onClick={handleBack}
        />
        <CustomButton
          className={`w-40 ${
            formData.initialsWidget.length > 0
              ? "bg-aqua-green"
              : "bg-light-gray"
          }  text-white font-bold py-2 px-4 w-40`}
          title="Siguiente"
          onClick={handleNext}
          disabled={formData.initialsWidget.length === 0}
        />
      </div>
    </div>
  );
};

export default StepperFormFive;

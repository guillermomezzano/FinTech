import React, { useState } from "react";
import { Button, TextField, Stepper, Step, StepLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [datos, setDatos] = useState({
    nombre: "",
    apellido: "",
    email: "",
    contraseña: "",
    confirmarContraseña: "",
    telefono: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setDatos({ ...datos, [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    console.log(datos);
    navigate("/signuprecord");
  };

  return (
    <div>
      <TextField
        label="Nombre"
        name="nombre"
        value={datos.nombre}
        onChange={handleChange}
      />
      <TextField
        label="Apellido"
        name="apellido"
        value={datos.apellido}
        onChange={handleChange}
      />
      <TextField
        label="Email"
        name="email"
        value={datos.email}
        onChange={handleChange}
      />
      <TextField
        label="Contraseña"
        type="password"
        name="contraseña"
        value={datos.contraseña}
        onChange={handleChange}
      />
      <TextField
        label="Confirmar Contraseña"
        type="password"
        name="confirmarContraseña"
        value={datos.confirmarContraseña}
        onChange={handleChange}
      />
      <TextField
        label="Teléfono"
        name="telefono"
        value={datos.telefono}
        onChange={handleChange}
      />
      <Button variant="contained" onClick={handleClick}>
        Registro
      </Button>
    </div>
  );
};

export default SignUpForm;

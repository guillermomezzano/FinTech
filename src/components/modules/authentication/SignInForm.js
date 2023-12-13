import React, { useState } from "react";
import { TextField, Button, FormControl, FormHelperText } from "@mui/material";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";

const SignInForm = () => {
  const { login } = UserAuth();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const validateFields = () => {
    let errors = {};

    if (!formValues.email) {
      errors.email = "Ingrese su correo electrónico.";
    }

    if (!formValues.password) {
      errors.password = "Ingrese su contraseña.";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validateFields();

    if (Object.keys(errors).length === 0) {
      try {
        // Lógica de inicio de sesión
        await login(formValues.email, formValues.password);
        navigate("/");
      } catch (error) {
        // Manejar errores de inicio de sesión
        console.error("Error al iniciar sesión:", error.message);
      }
    } else {
      setErrors(errors);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col space-y-4 p-12 m-12 shadow-lg max-w-5xl"
    >
      <h1 className="text-2xl font-semibold">Ingresa con tu cuenta en Luca.</h1>
      <p>
        ¿No tienes cuenta?{" "}
        <a href="/signup" className="text-secondary hover:underline">
          Regístrate aquí
        </a>
      </p>
      <Input
        name="email"
        label="CORREO"
        variant="outlined"
        value={formValues.email}
        onChange={handleChange}
        error={!!errors.email}
        helperText={errors.email}
      />
      <FormControl error={!!errors.password}>
        <Input
          name="password"
          label="CONTRASEÑA"
          variant="outlined"
          type="password"
          value={formValues.password}
          onChange={handleChange}
        />
        {errors.password && <FormHelperText>{errors.password}</FormHelperText>}
      </FormControl>
      <button
        type="submit"
        className="w-36 py-2 bg-primary hover:bg-opacity-90 active:translate-y-[2px] text-white font-bold"
      >
        Iniciar Sesión
      </button>
    </form>
  );
};

export default SignInForm;

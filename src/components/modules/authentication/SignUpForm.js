import { useState } from "react";

// MUI Components
import { FormControl, FormHelperText } from "@mui/material";
import { UserAuth } from "../../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Input from "../ui/Input";
import ContactInfo from "./ContactInfo";

// Assets
import logoLuca from "../../../assets/logoLuca.png";

const SignUpForm = () => {
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    repeatPassword: "",
  });
  const [errors, setErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    password: "",
    repeatPassword: "",
  });

  const styles = {
    inputContainer:
      "flex md:flex-row flex-col justify-between space-y-4 md:space-x-4 md:space-y-0 mb-4",
    input: "sm:w-[300px]",
  };

  const validateEmail = (email) => {
    // Implementa tu lógica de validación aquí, por ejemplo:
    return /\S+@\S+\.\S+/.test(email);
  };

  const validatePassword = (password) => {
      // Verifica que la contraseña tenga al menos 8 caracteres, una mayuscula, una minuscula y un numero etc.
      return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
    };
    

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormValues({ ...formValues, [name]: value });

    // Podemos agregar aquí la lógica de validación para actualizar el estado de los errores
    if (name === "correo" && value && !validateEmail(value)) {
      setErrors({ ...errors, correo: "Por favor ingresa un correo válido." });
    } else {
      setErrors({ ...errors, [name]: null });
    }

    if (name === "contrasena" && value && !validatePassword(value)) {
      setErrors({
        ...errors,
        contrasena: "La contraseña no cumple con los requisitos.",
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(formValues);
    console.log(errors);
    try {
      if (formValues.password !== formValues.repeatPassword) {
        setErrors({
          ...errors,
          repeatPassword: "Las contraseñas no coinciden.",
        });
        throw new Error("Las contraseñas no coinciden.");
      }
      if (!validateEmail(formValues.email)) {
        setErrors({
          ...errors,
          email: "Por favor ingresa un correo válido.",
        });
        throw new Error("Por favor ingresa un correo válido.");
      }
      if (!validatePassword(formValues.password)) {
        setErrors({
          ...errors,
          password: "La contraseña no cumple con los requisitos.",
        });
        throw new Error("La contraseña no cumple con los requisitos.");
      } else {
        setErrors("");
        await createUser(formValues.email, formValues.password);
        navigate("/signuprecord");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col p-10  px-20">
        <div className="w-full">
          <img src={logoLuca} alt="logoLuca" />
        </div>
      <div className="flex justify-between items-start pt-16">
        <div>
        <h1 className="text-5xl font-light">¡Partamos!</h1>
        <form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-4 p-12 my-12 shadow-lg"
        >
          <h1 className="text-2xl font-semibold">Crea una cuenta en Luca.</h1>
          <p>
            ¿Ya tienes una cuenta?{" "}
            <a href="/signin" className="text-secondary hover:underline">
              Ingresa aquí
            </a>
          </p>
          <div className="flex flex-col">
            <div className={styles.inputContainer}>
              <Input
                label="NOMBRE"
                name="firstName"
                variant="outlined"
                className={styles.input}
                value={formValues.firstName}
                onChange={handleChange}
              />
              <Input
                label="APELLIDO"
                name="lastName"
                variant="outlined"
                className={styles.input}
                value={formValues.lastName}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <FormControl error={!!errors.email}>
                <Input
                  label="CORREO"
                  id="email"
                  name="email"
                  className={styles.input}
                  value={formValues.email}
                  onChange={handleChange}
                />
                {errors.email && (
                  <FormHelperText>{errors.email}</FormHelperText>
                )}
              </FormControl>
              <Input
                label="TELÉFONO"
                name="phoneNumber"
                variant="outlined"
                className={styles.input}
                value={formValues.phoneNumber}
                onChange={handleChange}
              />
            </div>
            <div className={styles.inputContainer}>
              <FormControl error={!!errors.password}>
                <Input
                  label="CONTRASEÑA"
                  id="password"
                  name="password"
                  className={styles.input}
                  type="password"
                  value={formValues.password}
                  onChange={handleChange}
                />
                {errors.password && (
                  <FormHelperText>{errors.password}</FormHelperText>
                )}
              </FormControl>
              <Input
                label="REPETIR CONTRASEÑA"
                name="repeatPassword"
                variant="outlined"
                className={styles.input}
                type="password"
                value={formValues.repetirContrasena}
                onChange={handleChange}
              />
            </div>
          </div>
          <button
            type="submit"
            className="w-36 py-2 bg-primary hover:bg-opacity-90 active:translate-y-[2px] text-white font-bold"
          >
            Suscribirse
          </button>
        </form>
        </div>
      <ContactInfo />
      </div>
    </div>
  );
};

export default SignUpForm;

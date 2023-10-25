import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación, por ejemplo, enviar los datos al servidor.
    console.log("Username:", username);
    console.log("Password:", password);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="w-96 p-4 bg-white shadow-lg rounded-lg">
        <h2 className="text-2xl font-semibold mb-4">Inicio de sesión</h2>
        <TextField
          label="Nombre de usuario"
          variant="outlined"
          fullWidth
          value={username}
          onChange={handleUsernameChange}
          className="mb-4"
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          type="password"
          fullWidth
          value={password}
          onChange={handlePasswordChange}
          className="mb-4"
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleLogin}
          fullWidth
        >
          Iniciar sesión
        </Button>
      </div>
    </div>
  );
};

export default SignInForm;

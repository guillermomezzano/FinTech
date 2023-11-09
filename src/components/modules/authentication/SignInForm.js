import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import PersonIcon from "@mui/icons-material/Person";

const SignInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  // const history = useHistory();

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleLogin = () => {
    // Aquí puedes agregar la lógica de autenticación, por ejemplo, enviar los datos al servidor.
    console.log("Username:", username);
    console.log("Password:", password);
    // history.push("/");
  };

  return (
    <div className="flex flex-col gap-3 px-12 py-10 h-auto bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-semibold mb-10 text-stone-500">
        Inicio de sesión
      </h1>
      <TextField
        label="Usuario"
        variant="outlined"
        fullWidth
        value={username}
        onChange={handleUsernameChange}
        className="mb-4"
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <PersonIcon />
            </InputAdornment>
          ),
        }}
      />
      <FormControl variant="outlined">
        <InputLabel>Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? "text" : "password"}
          onChange={handlePasswordChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <div className="flex flex-col gap-3 my-1">
        <Link>
          <p className="text-stone-500 hover:text-[#6d1b7b]">Registrar</p>
        </Link>
        <Link>
          <p className="text-stone-500 italic hover:text-[#6d1b7b]">
            ¿Olvidaste tu Contraseña?
          </p>
        </Link>
      </div>

      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={handleLogin}
        fullWidth
      >
        Iniciar sesión
      </Button>
    </div>
  );
};

export default SignInForm;

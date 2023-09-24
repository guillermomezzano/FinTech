import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

// end points
import {
  createUserRequest,
  getUserRequest,
  updateUserRequest,
} from "../services/userServices.js";

// material
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

// components
import Sidebar from "../ui/sideBar/SideBar";

const FormsUsers = () => {
  // Definir dos variables de estado para los inputs
  const [userName, setuserName] = useState("");
  const [email, setEmail] = useState("");
  const params = useParams();

  // Función para manejar cambios en los inputs
  const handleInputChangeuserName = (e) => {
    setuserName(e.target.value);
  };

  const handleInputChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  // Función para enviar los datos a la API
  const handleSubmit = async () => {
    try {
      if (params.id) {
        const data = {
          user_name: userName,
          email,
        };
        const response = await updateUserRequest(params.id, data);
        console.log(response);
      } else {
        const data = {
          userName,
          email,
        };
        const response = await createUserRequest(data);
        setuserName("");
        setEmail("");
        console.log(response);
      }
    } catch (error) {
      console.error("Error al enviar datos:", error);
    }
  };

  useEffect(() => {
    const loadUser = async () => {
      if (params.id) {
        const { data } = await getUserRequest(params.id);
        setuserName(data.user_name);
        setEmail(data.email);
        console.log("data", data);
      }
    };

    loadUser();
  }, []);

  return (
    <>
      <Sidebar />
      <div className="flex justify-center items-center flex-col gap-3 mt-5">
        <div>
          <TextField
            name="userName"
            label="userName"
            variant="outlined"
            value={userName}
            onChange={handleInputChangeuserName}
          />
        </div>
        <div>
          <TextField
            name="email"
            label="email"
            variant="outlined"
            value={email}
            onChange={handleInputChangeEmail}
          />
        </div>
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Enviar
        </Button>
      </div>
    </>
  );
};

export default FormsUsers;

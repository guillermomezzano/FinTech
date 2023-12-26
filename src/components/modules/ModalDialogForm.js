import React, { useState, useEffect } from "react";

//api
import { postEmpresa } from "../../api/list.api";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import { Button } from "./ui/index";

const ModalForm = ({ open, setShowForm }) => {
  const [formData, setFormData] = useState({
    rut: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleSubmitForm = async () => {
    try {
      // Llama a la función postEmpresa con los datos del formulario
      await postEmpresa(formData);
      console.log("Inserción exitosa!");
      handleCloseForm();
    } catch (error) {
      console.error("Error al intentar insertar en la base de datos:", error);
      // Puedes manejar el error según tus necesidades
    }
  };

  useEffect(() => {
    if (formData) {
      console.log(formData);
    }
  }, [formData]);

  debugger;
  return (
    <Dialog open={open} onClose={handleCloseForm}>
      <DialogTitle>Empresa</DialogTitle>
      <DialogContent>
        <TextField
          label="Rut"
          variant="outlined"
          fullWidth
          name="rut"
          value={formData.rut}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          label="Clave"
          variant="outlined"
          fullWidth
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          margin="normal"
        />
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleCloseForm}
          className="bg-light-gray text-white font-bold px-6"
          title="Cerrar"
        />
        <Button
          onClick={handleSubmitForm}
          className="bg-aqua-green text-white font-bold px-6"
          title="Agregar"
        />
      </DialogActions>
    </Dialog>
  );
};

export default ModalForm;

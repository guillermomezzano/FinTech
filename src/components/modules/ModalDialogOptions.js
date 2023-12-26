import { useState } from "react";

//data
import { menuItemsDefaults } from "./data/dataModalDialogOptions";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
//components
import { Input, Button } from "./ui/index";

const ModalDialogOptions = ({ setOpen, open }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    input1: "",
    input2: "",
  });

  const handleClose = () => {
    setOpen(false);
  };

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  const handleOpenForm = () => {
    setShowForm(true);
  };

  const handleCloseForm = () => {
    setShowForm(false);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmitForm = () => {
    // Aquí puedes manejar la lógica de envío del formulario si es necesario
    // Por ahora, simplemente cerramos el formulario
    handleCloseForm();
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      scroll="paper"
      style={{
        backdropFilter: "blur(3px)",
      }}
    >
      <DialogTitle>Atajos</DialogTitle>
      <DialogContent dividers="paper">
        {menuItemsDefaults.map((unMenuItemsDefaults, index) => (
          <ListItem
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <button
              className="flex gap-6 items-center hover:bg-light-gray hover:text-white w-[100%] px-4 py-2 rounded-lg"
              onClick={handleOpenForm}
            >
              <img
                className={`w-[20%] ${
                  hoveredIndex === index ? "brightness-200" : ""
                }`}
                src={unMenuItemsDefaults.icon}
                alt=""
              />
              <Typography variant={unMenuItemsDefaults.variant}>
                {unMenuItemsDefaults.name}
              </Typography>
            </button>
          </ListItem>
        ))}
      </DialogContent>
      <DialogActions>
        <Button
          onClick={handleClose}
          className="bg-aqua-green text-white font-bold px-6"
          title=" Cerrar"
        />
      </DialogActions>

      {/* Formulario */}
      <Dialog open={showForm} onClose={handleCloseForm}>
        <DialogTitle>Empresa</DialogTitle>
        <DialogContent>
          <TextField
            label="Nombre"
            variant="outlined"
            fullWidth
            name="input1"
            value={formData.input1}
            onChange={handleInputChange}
            margin="normal"
          />
          <TextField
            label="Clave"
            variant="outlined"
            fullWidth
            name="input2"
            value={formData.input2}
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
    </Dialog>
  );
};

export default ModalDialogOptions;

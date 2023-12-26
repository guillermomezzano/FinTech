import React, { useState } from "react";

// data
import { menuItemsDefaults } from "./data/dataModalDialogOptions";

// components
import { Button } from "./ui/index";
import ModalDialogForm from "./ModalDialogForm";

// material
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ListItem from "@mui/material/ListItem";
import Typography from "@mui/material/Typography";

const ModalDialogOptions = ({ setOpen, open }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [showForm, setShowForm] = useState(false);

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

  return (
    <>
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
      </Dialog>

      {/* Formulario */}
      <ModalDialogForm open={showForm} setShowForm={setShowForm} />
    </>
  );
};

export default ModalDialogOptions;

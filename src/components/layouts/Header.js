import React, { useState } from "react";

//services

// components
import AutoCompleteHeader from "../modules/AutoCompleteHeader";
import ModalDialogOptions from "../modules/ModalDialogOptions";

//material
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import WebhookIcon from "@mui/icons-material/Webhook";

const initialData = [
  {
    id: "1",
    nombre: "Asesorias Corporativas Santa Trinidad LTDA",
    fecha: new Date("1/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "2",
    nombre: "empresa uno",
    fecha: new Date("2/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "3",
    nombre: "empresa dos",
    fecha: new Date("3/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "4",
    nombre: "CCU",
    fecha: new Date("3/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
  {
    id: "5",
    nombre: "Falabella",
    fecha: new Date("4/15/2023"),
    cuenta: "12312312312 PROVEEDORES LTDA",
    debe: 34,
    haber: 45,
    glosa: "glosa del elemento",
    tipo: "compras",
    comentario: "comentario",
  },
];

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => () => {
    setOpen(true);
  };

  return (
    <div className="mb-20">
      <AppBar>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <WebhookIcon sx={{ fontSize: 50 }} />
          <div className="flex gap-4">
            <AutoCompleteHeader initialData={initialData} />
            <IconButton onClick={handleClickOpen()} color="inherit">
              <AddIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      <ModalDialogOptions setOpen={setOpen} open={open} />
    </div>
  );
};

export default Header;

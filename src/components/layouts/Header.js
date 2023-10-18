import React, { useState, useContext } from "react";
import GlobalContext from "../../context/global-context";

//services

// components
import AutoCompleteHeader from "../modules/AutoCompleteHeader";

//material
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import WebhookIcon from "@mui/icons-material/Webhook";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

const initialData = [
  {
    id: "1",
    nombre: "empresa uno",
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
    nombre: "empresa dos",
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
    nombre: "cocacola",
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
    nombre: "ccu",
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
    nombre: "daniel",
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
  const [openDialog, setOpenDialog] = useState(false);
  const { ui } = useContext(GlobalContext);

  const handleDialogOpen = () => {
    debugger;
    ui.setDialog({
      open: true,
      title: "Proyecto creado",
      body: "El proyecto ha sido creado y está en proceso de aprobación.",
      btnText: "Ok",
    });
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <div className="mb-20">
      <AppBar>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <WebhookIcon sx={{ fontSize: 50 }} />
          <div className="flex gap-4">
            <AutoCompleteHeader initialData={initialData} />
            <IconButton onClick={handleDialogOpen} color="inherit">
              <AddIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;

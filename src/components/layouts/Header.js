import React, { useState } from "react";

//services

//material
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import Typography from "@mui/material/Typography";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

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

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <div>
      <AppBar position="static" className="pl-[5%]">
        <Toolbar>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Mi Aplicación
          </Typography>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            getOptionLabel={(option) => option.nombre}
            options={initialData}
            sx={{
              width: 300,
              backgroundColor: "white", // Establecer el fondo en blanco
            }}
            renderInput={(params) => (
              <TextField {...params} label="nombre de la empresa" />
            )}
          />
          <IconButton onClick={handleDialogOpen} color="inherit">
            <AddIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Dialog open={openDialog} onClose={handleDialogClose}>
        <DialogTitle>Opciones del Diálogo</DialogTitle>
        <DialogContent>
          {/* Aquí puedes colocar el contenido de tu diálogo */}
        </DialogContent>
        <DialogActions>
          <button onClick={handleDialogClose} color="primary">
            Cerrar
          </button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Header;

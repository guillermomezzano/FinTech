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
import SearchIcon from "@mui/icons-material/Search";

// assets
import iconParlanteNegro from "../../assets/iconos/iconParlanteNegro.png";
import iconTuercaNegro from "../../assets/iconos/iconTuercaNegro.png";

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
  const [searchText, setSearchText] = useState("");
  const handleClickOpen = () => () => {
    setOpen(true);
  };

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  return (
    <div className="ml-20">
      <nav
        sx={{
          zIndex: "0",
          backgroundColor: "white",
        }}
      >
        <Toolbar sx={{ justifyContent: "flex-end" }}>
          <div className="flex gap-4 items-center justify-end pr-8">
            <SearchIcon sx={{ fontSize: 30, color: "black" }} />
            <input
              className="text-black outline-none border-none"
              type="text"
              placeholder="Buscador"
              value={searchText}
              onChange={handleInputChange}
            />
            <AutoCompleteHeader initialData={initialData} />
            <img className="w-[3%] h-[3%] ml-4" src={iconParlanteNegro} />
            <img className="w-[3%] h-[3%]" src={iconTuercaNegro} />
            <IconButton onClick={handleClickOpen()} color="black">
              <AddIcon />
            </IconButton>
          </div>
        </Toolbar>
      </nav>
      <ModalDialogOptions setOpen={setOpen} open={open} />
    </div>
  );
};

export default Header;

import React, { useState, useEffect } from "react";
//services

// components
import AutoCompleteHeader from "../modules/AutoCompleteHeader";
import ModalDialogOptions from "../modules/ModalDialogOptions";

//material
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import AddIcon from "@mui/icons-material/Add";
import SearchIcon from "@mui/icons-material/Search";

// assets
import iconParlanteNegro from "../../assets/iconos/iconParlanteNegro.png";
import iconTuercaNegro from "../../assets/iconos/iconTuercaNegro.png";

import { getListaUsuarios } from "../../api/list.api";

const Header = () => {
  const [empresa, setEmpresa] = useState([]);
  const [open, setOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const handleClickOpen = () => () => {
    setOpen(true);
  };

  useEffect(() => {
    const getEmpresas = async () => {
      try {
        const { data } = await getListaUsuarios();
        console.log("data es: ", data);
        setEmpresa(data);
      } catch (error) {
        console.error(error);
      }
    };

    getEmpresas();
  }, []);

  const handleInputChange = (event) => {
    setSearchText(event.target.value);
  };
  console.log(empresa);
  debugger;
  return (
    <div>
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
            <AutoCompleteHeader initialData={empresa} />
            <img
              className="w-[3%] h-[3%] ml-4"
              src={iconParlanteNegro}
              alt=""
            />
            <img className="w-[3%] h-[3%]" src={iconTuercaNegro} alt="" />
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

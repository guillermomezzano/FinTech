// react
import React, { useState } from "react";

// Styles
import "./sideBar.css";

// Material
import WebhookIcon from "@mui/icons-material/Webhook";
import ConstructionIcon from "@mui/icons-material/Construction";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

const menuItemsDefaults = [
  {
    id: 0,
    name: "LUCA",
    variant: "h4",
    icon: <WebhookIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 1,
    name: "busqueda",
    variant: "h6",
    icon: <SearchIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 2,
    name: "Working",
    variant: "h6",
    icon: <ConstructionIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 3,
    name: "Reportes",
    variant: "h6",
    icon: <LibraryBooksIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 4,
    name: "Configuracion",
    variant: "h6",
    icon: <BuildCircleIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 5,
    name: "Soporte",
    variant: "h6",
    icon: <ContactPhoneIcon sx={{ fontSize: 50 }} />,
  },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [menuItems, setMenuItems] = useState(menuItemsDefaults);
  const [searchText, setSearchText] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleMouseEnter = (value, id) => {
    setExpanded(value);
    id === 1 ? setShowInput(value) : setShowInput(false);
  };

  //funcion para cuando el mouse esta fuera del menu
  const handleMouseLeave = (value) => {
    setSearchText("");
    setExpanded(value);
    setShowInput(value);
  };

  const handleInputChange = (event) => {
    debugger;
    setSearchText(event.target.value);
  };

  const filteredData = menuItems.filter((row) => {
    const filter = searchText.trim().toLowerCase();
    if (filter === "") {
      return true;
    }
    const name = row.name.toLowerCase();
    return name.startsWith(filter);
  });

  return (
    <>
      {/* menu lateral */}
      <div className={`sidebar ${expanded ? "expanded" : ""}`}>
        <div></div>
        {filteredData.map((menuItem) => (
          <div
            key={menuItem.id}
            className={`flex h-16 ${
              menuItem.id === 1 ? " hover:bg-white" : "hover:bg-[#4b5563]"
            } cursor-pointer rounded-lg ${
              expanded ? "icon-hover p-6" : "justify-center"
            }`}
            onMouseEnter={() => handleMouseEnter(true, menuItem.id)}
            onMouseLeave={() => handleMouseLeave(false, menuItem.id)}
          >
            <div className="flex items-center gap-4">
              {menuItem.id === 1 && showInput ? (
                <Box className="flex text-black hover:bg-white items-end">
                  {menuItem.icon}
                  <TextField
                    label="Biblioteca de Recursos..."
                    variant="standard"
                    onChange={handleInputChange}
                    value={searchText}
                  />
                </Box>
              ) : (
                <>
                  {menuItem.icon}
                  {expanded && (
                    <Typography variant={menuItem.variant}>
                      {menuItem.name}
                    </Typography>
                  )}
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;

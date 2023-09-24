// react
import React, { useState } from "react";

// components
import Reports from "../subSideBar/Reports";
import Configuration from "../subSideBar/Configuration";

// Styles
import "./sideBar.css";

// Material
import WebhookIcon from "@mui/icons-material/Webhook";
import ConstructionIcon from "@mui/icons-material/Construction";
import BuildCircleIcon from "@mui/icons-material/BuildCircle";
import LibraryBooksIcon from "@mui/icons-material/LibraryBooks";
import ContactPhoneIcon from "@mui/icons-material/ContactPhone";
import Typography from "@mui/material/Typography";

const menuItemsDefaults = [
  {
    id: 1,
    name: "LUCA",
    variant: "h4",
    icon: <WebhookIcon sx={{ fontSize: 50 }} />,
  },
  {
    id: 2,
    name: "Working",
    variant: "h6",
    icon: <ConstructionIcon sx={{ fontSize: 30 }} />,
  },
  {
    id: 3,
    name: "Reportes",
    variant: "h6",
    icon: <LibraryBooksIcon sx={{ fontSize: 30 }} />,
  },
  {
    id: 4,
    name: "Configuracion",
    variant: "h6",
    icon: <BuildCircleIcon sx={{ fontSize: 30 }} />,
  },
  {
    id: 5,
    name: "Soporte",
    variant: "h6",
    icon: <ContactPhoneIcon sx={{ fontSize: 30 }} />,
  },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [showSubMenuReports, setShowSubMenuReports] = useState(false);
  const [menuItems, setMenuItems] = useState(menuItemsDefaults);
  // varables de estado para el resto de submenus
  const [showSubMenuConfiguration, setShowSubMenuConfiguration] =
    useState(false);
  // const [showSubMenuWorking, setShowSubMenuWorking] = useState(false);
  // const [showSubMenuSuport, setShowSubMenuSuport] = useState(false);

  //funcion para cuando el mouse esta sobre del menu
  // vaule es true en este caso y id es el item
  const handleMouseEnter = (value, id) => {
    if (id === 3) {
      setShowSubMenuReports(value);
    }

    if (id === 4) {
      setShowSubMenuConfiguration(value);
    }
    setExpanded(value);
  };

  //funcion para cuando el mouse esta fuera del menu
  const handleMouseLeave = (value, id) => {
    if (id === 3) {
      setShowSubMenuReports(value);
    }

    if (id === 4) {
      setShowSubMenuConfiguration(value);
    }
    // en es caso de que un submenu este habilitado no se cierra el menu principal
    if (showSubMenuReports === true || showSubMenuConfiguration === true) {
      return setExpanded(true);
    }

    setExpanded(value);
  };

  return (
    <>
      {/* menu lateral */}
      <div className={`sidebar ${expanded ? "expanded" : ""}`}>
        {menuItems.map((menuItem) => (
          <div
            key={menuItem.id}
            className={`flex justify-evenly items-center h-16 hover:bg-[#4b5563] cursor-pointer rounded-lg ${
              expanded ? "icon-hover" : ""
            }`}
            onMouseEnter={() => handleMouseEnter(true, menuItem.id)}
            onMouseLeave={() => handleMouseLeave(false, menuItem.id)}
          >
            <div className="flex items-center gap-4">
              {menuItem.icon}
              {expanded && (
                <Typography variant={menuItem.variant}>
                  {menuItem.name}
                </Typography>
              )}
            </div>
          </div>
        ))}
      </div>
      {/* el resto de submenus */}
      <Reports
        showSubMenuReports={showSubMenuReports}
        setShowSubMenuReports={setShowSubMenuReports}
        setExpanded={setExpanded}
        expanded={expanded}
      />
      <Configuration
        showSubMenuConfiguration={showSubMenuConfiguration}
        setShowSubMenuConfiguration={setShowSubMenuConfiguration}
        setExpanded={setExpanded}
        expanded={expanded}
      />
    </>
  );
};

export default Sidebar;

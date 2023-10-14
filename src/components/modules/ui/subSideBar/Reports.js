// react
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles
import "./report.css";

// Material
import Typography from "@mui/material/Typography";

const menuItemsDefaults = [
  {
    id: 1,
    name: "Libro Registro de Venta",
    link: "/",
  },
  {
    id: 2,
    name: "Libro Diario",
    link: "/DiaryBook",
  },
  {
    id: 3,
    name: "Libro Registro de Compra",
    link: "/",
  },
  {
    id: 4,
    name: "Libro Mayor",
    link: "/",
  },
  {
    id: 5,
    name: "Libro Remuneraciones",
    link: "/",
  },
  {
    id: 6,
    name: "Libro Clientes",
    link: "/",
  },
  {
    id: 7,
    name: "Libro Auxiliar Simple",
    link: "/SimpleAuxiliaryBook",
  },
  {
    id: 8,
    name: "Libro Auxiliar Completo",
    link: "/",
  },
];

const Reports = ({
  showSubMenuReports,
  setShowSubMenuReports,
  setExpanded,
  expanded,
}) => {
  const [menuItems, setMenuItems] = useState(menuItemsDefaults);

  const handleMouseEnter = (value) => {
    if (expanded === true) {
      setShowSubMenuReports(value);
    }
  };

  const handleMouseLeave = (value) => {
    setShowSubMenuReports(value);
    setExpanded(value);
  };
  return (
    <div
      className={`sub-menu ${showSubMenuReports ? "show" : ""}`}
      onMouseEnter={() => handleMouseEnter(true)}
      onMouseLeave={() => handleMouseLeave(false)}
    >
      <div className="flex flex-col gap-4">
        <Typography className="h-16 flex items-center pl-[10%]" variant="h4">
          Reportes
        </Typography>
        {menuItems.map((menuItem) => (
          <Link key={menuItem.id} to={menuItem.link}>
            <Typography
              className="h-16 flex items-center hover:bg-[#4b5563] pl-[10%] rounded-lg cursor-pointer"
              variant="h6"
            >
              {menuItem.name}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Reports;

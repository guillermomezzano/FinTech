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
    name: "FormsUsers",
    link: "/FormsUsers",
  },
  {
    id: 2,
    name: "PageUsers",
    link: "/PageUsers",
  },
  {
    id: 3,
    name: "Otra Opcion",
    link: "/",
  },
  {
    id: 4,
    name: "Otra Opcion",
    link: "/",
  },
  {
    id: 5,
    name: "Otra Opcion",
    link: "/",
  },
];

const Configuration = ({
  showSubMenuConfiguration,
  setShowSubMenuConfiguration,
  setExpanded,
  expanded,
}) => {
  const [menuItems, setMenuItems] = useState(menuItemsDefaults);

  const handleMouseEnter = (value) => {
    if (expanded === true) {
      setShowSubMenuConfiguration(value);
    }
  };

  const handleMouseLeave = (value) => {
    setShowSubMenuConfiguration(value);
    setExpanded(value);
  };
  return (
    <div
      className={`sub-menu ${showSubMenuConfiguration ? "show" : ""}`}
      onMouseEnter={() => handleMouseEnter(true)}
      onMouseLeave={() => handleMouseLeave(false)}
    >
      <div className="flex flex-col gap-4">
        <Typography className="h-16 flex items-center pl-[10%]" variant="h4">
          Configuration
        </Typography>
        {menuItems.map((menuItem) => (
          <Link to={menuItem.link}>
            <Typography
              key={menuItem.id}
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

export default Configuration;

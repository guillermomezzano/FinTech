// react
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles
import "./sideBar.css";

// data
import { menuItemsDefaults } from "../../modules/data/dataSideBar.js";

// Material

import Typography from "@mui/material/Typography";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [menuItems, setMenuItems] = useState(menuItemsDefaults);
  const [showInput, setShowInput] = useState(false);

  const handleMouseEnter = (value, name) => {
    setExpanded(value);
    name === "busqueda" ? setShowInput(value) : setShowInput(false);
  };

  //funcion para cuando el mouse esta fuera del menu
  const handleMouseLeave = (value) => {
    setExpanded(value);
  };

  return (
    <>
      <div className={`sidebar ${expanded ? "expanded" : ""}`}>
        {menuItems.map((menuItem) => (
          <div
            key={menuItem.id}
            className={`flex h-16 hover:bg-[#4b5563] cursor-pointer rounded-lg ${
              expanded ? "icon-hover p-6" : "justify-center"
            }`}
            onMouseEnter={() => handleMouseEnter(true, "")}
            onMouseLeave={() => handleMouseLeave(false)}
          >
            <div className="flex items-center gap-4">
              <>
                <div>
                  <img className="w-8 h-8" src={menuItem.icon} />
                </div>
                {expanded && (
                  <Link>
                    <Typography sx={{ fontSize: menuItem.fontSize }}>
                      {menuItem.name}
                    </Typography>
                  </Link>
                )}
              </>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;

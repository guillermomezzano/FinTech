// react
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

// Styles
import "./sideBar.css";

// data
import { menuItemsDefaults } from "../../modules/data/dataSideBar.js";

// assets
import logoLuca from "../../../assets/logoLuca.png";

// Material
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import CycloneIcon from "@mui/icons-material/Cyclone";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [menuItems, setMenuItems] = useState(menuItemsDefaults);

  const location = useLocation();
  const currentPath = location.pathname;

  const handleButtonClick = () => {
    setExpanded(!expanded);
  };
  debugger;
  return (
    <>
      <div className={`sidebar ${expanded ? "expanded" : ""}`}>
        <button className="toggle-button" onClick={handleButtonClick}>
          {expanded ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
        </button>
        {expanded ? (
          <img className="w-1/2 h-14 m-6 mb-6" src={logoLuca} alt="" />
        ) : (
          <div className="p-3 my-6">
            <CycloneIcon sx={{ fontSize: "2.5rem" }} />
          </div>
        )}
        {menuItems.map((menuItem) => (
          <Link to={menuItem.path}>
            <div
              key={menuItem.id}
              className={`flex mb-2 h-16 cursor-pointer icon-hover hover:border-light-orange ${
                expanded ? "p-6 border-b-4 border-dark-gray" : "justify-center"
              } ${
                currentPath === menuItem.path &&
                expanded &&
                "border-light-orange"
              }`}
            >
              <div className="flex items-center gap-6">
                <img
                  className={`w-8 h-8 ${
                    currentPath === menuItem.path && "selected"
                  }`}
                  src={menuItem.icon}
                  alt={menuItem.name}
                />
                {expanded && (
                  <p
                    className={`text-xl ${
                      currentPath === menuItem.path && "text-light-orange"
                    }`}
                  >
                    {menuItem.name}
                  </p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Sidebar;

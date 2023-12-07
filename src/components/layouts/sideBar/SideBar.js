// react
import React, { useState } from "react";
import { Link } from "react-router-dom";

// Styles
import "./sideBar.css";

// data
import { menuItemsDefaults } from "../../modules/data/dataSideBar.js";

// assets
import logoLuca from "../../../assets/logoLuca.png";

// Material
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [menuItems, setMenuItems] = useState(menuItemsDefaults);
  const [showInput, setShowInput] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);

  const handleButtonClick = () => {
    setButtonPressed(!buttonPressed);
    setExpanded(!expanded);
  };

  return (
    <>
      <div className={`sidebar ${expanded ? "expanded" : ""}`}>
        <button className="toggle-button" onClick={handleButtonClick}>
          {expanded ? <ArrowBackIosNewIcon /> : <ArrowForwardIosIcon />}
        </button>
        {expanded ? (
          <img className="w-1/2 h-14 m-6 mb-14" src={logoLuca} alt="" />
        ) : (
          <GitHubIcon className="m-4" />
        )}
        {menuItems.map((menuItem) => (
          <div
            key={menuItem.id}
            className={`flex h-16 cursor-pointer ${
              expanded
                ? "icon-hover p-6 border-b-4 border-light-gray hover:border-light-orange transition-colors duration-300 ease-in-out"
                : "justify-center"
            }`}
          >
            <div className="flex items-center gap-6">
              <>
                <img
                  className="w-8 h-8"
                  src={menuItem.icon}
                  alt={menuItem.name}
                />
                {expanded && (
                  <Link to={menuItem.path}>
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

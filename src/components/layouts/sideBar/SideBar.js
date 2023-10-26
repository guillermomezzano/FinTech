// react
import React, { useState } from "react";

// Styles
import "./sideBar.css";

// data
import {
  menuItemsDefaults,
  menuItemsDefaultsStatic,
} from "../../modules/data/dataSideBar.js";

// Material

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

const Sidebar = () => {
  const [expanded, setExpanded] = useState(false);
  const [menuItems, setMenuItems] = useState(menuItemsDefaults);
  const [searchText, setSearchText] = useState("");
  const [showInput, setShowInput] = useState(false);
  // const [scrollPosition, setScrollPosition] = useState(0);

  const handleMouseEnter = (value, name) => {
    setExpanded(value);
    name === "busqueda" ? setShowInput(value) : setShowInput(false);
  };

  // useEffect(() => {
  //   console.log(scrollPosition);
  // }, [scrollPosition]);

  // useEffect(() => {
  //   if (!expanded) {
  //     // Si el menú no está expandido, restablece la posición del scroll a la parte superior
  //     sidebarRef.current.scrollTop = 0;
  //     setScrollPosition(0);
  //   }
  // }, [expanded]);

  // const handleScroll = () => {
  //   setScrollPosition(sidebarRef.current.scrollTop);
  // };

  //funcion para cuando el mouse esta fuera del menu
  const handleMouseLeave = (value) => {
    setExpanded(value);
    setShowInput(value);
  };

  const handleInputChange = (event) => {
    debugger;
    setSearchText(event.target.value);
  };

  const filteredData = menuItems.filter((row) => {
    const filter = searchText.trim().toLowerCase();
    if (filter === "") return true;
    const name = row.name.toLowerCase();
    return name.startsWith(filter);
  });

  return (
    <>
      {/* menu lateral */}
      <div
        className={`sidebar ${expanded ? "expanded" : ""}`}
        // ref={sidebarRef}
        // onScroll={handleScroll}
      >
        {menuItemsDefaultsStatic.map((menuItem) => (
          <div
            key={menuItem.id}
            className={`flex h-16 ${
              showInput ? "hover:bg-white" : "hover:bg-[#4b5563]"
            } 
            cursor-pointer rounded-lg ${
              expanded ? "icon-hover p-6" : "justify-center"
            }`}
            onMouseEnter={() => handleMouseEnter(true, menuItem.name)}
            onMouseLeave={() => handleMouseLeave(false)}
          >
            <div className="flex items-center gap-4">
              {menuItem.id === 2 && showInput ? (
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
        {filteredData.map((menuItem) => (
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
                {menuItem.icon}
                {expanded && (
                  <Typography
                    sx={{
                      fontSize: menuItem.fontSize,
                      // transition: "20s ease-in-out",
                      // opacity: `${expanded ? "1" : "0"}`,
                    }}
                  >
                    {/* // <Typography variant={menuItem.variant}> */}
                    {menuItem.name}
                  </Typography>
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

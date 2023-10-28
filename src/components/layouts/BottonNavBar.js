import React, { useState } from "react";
import { Link } from "react-router-dom";

const BottonNavBar = () => {
  const squares = [
    { color: "#84cc16", to: "/DiaryBook" },
    { color: "red", to: "/SimpleAuxiliaryBook" },
    { color: "blue", to: "/IncomeUpdateForm" },
    { color: "orange", to: "/carousel" },
  ];

  const [expanded, setExpanded] = useState(false);

  const handleMouseEnter = () => {
    setExpanded(true);
  };

  const handleMouseLeave = () => {
    setExpanded(false);
  };

  return (
    <div
      // className={`flex fixed bottom-[5%] left-1/2 transform -translate-x-1/2 translate-y-1/2 gap-3 border-solid border
      //  border-black px-6 py-1.5 rounded-lg "transition-all ease-in-out duration-500"  ${
      //    expanded ? "transition-all ease-in-out duration-500" : ""
      //  }`}
      className={`flex fixed bottom-[5%] left-1/2 transform -translate-x-1/2 translate-y-1/2 gap-3 border-solid border
      border-black px-6 py-1.5 rounded-lg hover:transition-all`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {expanded ? (
        <>
          {squares.map((square, index) => (
            <Link to={square.to} key={index}>
              <div
                className="w-14 h-14 rounded-lg hover:scale-125 transition-all ease-in-out duration-500"
                style={{ backgroundColor: square.color }}
              ></div>
            </Link>
          ))}
        </>
      ) : (
        <>
          <div className="w-14 h-14 rounded-lg bg-black transition-all ease-in-out duration-500"></div>
        </>
      )}
    </div>
  );
};

export default BottonNavBar;

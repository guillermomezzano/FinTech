import React from "react";

const CustomButton = ({ children, className, onClick }) => {
  const buttonStyles = `bg-aqua-green text-white font-bold py-2 px-4 rounded-none  ${className} hover:shadow-lg`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      {children}
    </button>
  );
};

export default CustomButton;

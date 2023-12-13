import React from "react";

const CustomButton = ({ title, className, onClick }) => {
  const buttonStyles = `${className} hover:shadow-lg`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      {title}
    </button>
  );
};

export default CustomButton;

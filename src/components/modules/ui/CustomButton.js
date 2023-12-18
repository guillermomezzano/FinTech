import React from "react";

const CustomButton = ({ title, className, onClick }) => {
  const buttonStyles = `${className} hover:shadow-lg hover:bg-opacity-90`;

  return (
    <button className={buttonStyles} onClick={onClick}>
      {title}
    </button>
  );
};

export default CustomButton;

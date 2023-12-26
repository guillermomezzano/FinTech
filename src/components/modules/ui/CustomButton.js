import React from "react";

const CustomButton = ({ title, className, onClick, disabled }) => {
  const buttonStyles = `${className} hover:shadow-lg hover:bg-opacity-90 p-2`;

  return (
    <button className={buttonStyles} onClick={onClick} disabled={disabled}>
      {title}
    </button>
  );
};

export default CustomButton;

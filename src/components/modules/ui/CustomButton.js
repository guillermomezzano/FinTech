import React from "react";

const CustomButton = ({ title, className, onClick, disabled, imageSrc }) => {
  const buttonStyles = `${className}hover:shadow-lg hover:bg-opacity-90 p-2`;

  return (
    <button className={buttonStyles} onClick={onClick} disabled={disabled}>
      <div className=" flex items-center justify-center">
        {imageSrc && <img src={imageSrc} alt="" className="mr-2" />}
        {title}
      </div>
    </button>
  );
};

export default CustomButton;

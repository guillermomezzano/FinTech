import { useState } from "react";

// Libraries
import clsx from "clsx";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// Icons
import icon from "../../../assets/iconos/iconPregunta.png";

const Accordion = ({ children, title, ...rest }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="accordion" {...rest}>
      <div
        onClick={toggle}
        className="cursor-pointer p-6 justify-between items-center flex border-b-4 border-gray-200"
      >
        <h2 className="flex items-center text-2xl font-bold uppercase">
          <img src={icon} className="h-14 mr-2" alt="left accordion icon" />
          {title}
        </h2>
        <ArrowForwardIosIcon
          fontSize="large"
          className={clsx("text-light-gray", {
            "-rotate-90": isOpen,
            "rotate-90": !isOpen,
          })}
        />
      </div>
      <div
        className={clsx("p-6", {
          "flex-1": isOpen,
          hidden: !isOpen,
        })}
      >
        {children}
      </div>
    </div>
  );
};

export default Accordion;

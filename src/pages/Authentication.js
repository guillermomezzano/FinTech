import { useLocation } from "react-router-dom";

// Components
// import Forgotpassword from '../components/modules/authentication/Forgotpassword';
import SignInForm from "../components/modules/authentication/SignInForm";
import SignUpForm from "../components/modules/authentication/SignUpForm";

import Typography from "@mui/material/Typography";

const Authentication = () => {
  const location = useLocation();

  const authComponents = {
      "/signin": <SignInForm />,
      "/signup": <SignUpForm />,
      //   '/forgotpassword': <Forgotpassword />,
    },
    defaultComponent = <SignInForm />,
    selectedComponent = authComponents[location.pathname] || defaultComponent;

  return (
    <div className="flex flex-row max-md:justify-center bg-white">
      <div
        className={`grid min-h-screen py-10 px-6 md:px-10 max-sm:justify-center bg-white md:w-[60%] w-[80%] sm:mx-[5%]`}
      >
        <div className="max-w-[500px] self-center">
          <Typography variant="h1" className="mb-14">
            hola
          </Typography>
          {selectedComponent}
        </div>
        <div className="self-end h-full pt-14 text-black">
          <Typography variant="body" className="tracking-wider text-sm">
            Luca | {new Date().getFullYear()}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default Authentication;

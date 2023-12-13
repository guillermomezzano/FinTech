import { useLocation } from "react-router-dom";

// Components
// import Forgotpassword from '../components/modules/authentication/Forgotpassword';
import SignInForm from "../components/modules/authentication/SignInForm";
import SignUpForm from "../components/modules/authentication/SignUpForm";
import SignUpStepperRecord from "../components/modules/authentication/SignUpStepperRecord";

import Typography from "@mui/material/Typography";

const Authentication = () => {
  const location = useLocation();

  const authComponents = {
      "/signin": <SignInForm />,
      "/signup": <SignUpForm />,
      "/signuprecord": <SignUpStepperRecord />,
      //   '/forgotpassword': <Forgotpassword />,
    },
    defaultComponent = <SignInForm />,
    selectedComponent = authComponents[location.pathname] || defaultComponent;

  return (
    <div>
      <div>{selectedComponent}</div>
      <Typography variant="body" className="text-lg z-10 absolute bottom-4">
        Luca | {new Date().getFullYear()}
      </Typography>
    </div>
  );
};

export default Authentication;

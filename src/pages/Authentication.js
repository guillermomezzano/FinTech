import { useLocation } from "react-router-dom";

// image
// import singin from "../assets/singin.jpg";

// Components
// import Forgotpassword from '../components/modules/authentication/Forgotpassword';
import SignInForm from "../components/modules/authentication/SignInForm";
import SignUpForm from "../components/modules/authentication/SignUpForm";

// import Typography from "@mui/material/Typography";

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
    <div className="flex flex-col items-center justify-center min-h-screen">
    {selectedComponent}
      {/* <Typography variant="body" className="text-lg z-10 absolute bottom-4">
        Luca | {new Date().getFullYear()}
      </Typography> */}
    </div>
  );
};

export default Authentication;

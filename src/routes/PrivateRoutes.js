import { AuthContext } from "../context/AuthContext";
import React, { useContext } from "react";

const PrivateRoutes = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  debugger;
  return (
    <div>
      <h1>Private Routes</h1>
    </div>
  );
};

export default PrivateRoutes;

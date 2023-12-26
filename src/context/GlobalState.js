import React, { useState } from "react";
import GlobalContext from "./global-context";

const GlobalState = (props) => {
  // const [auth, dispatch] = useReducer(authReducer, initialAuthState);
  const [empresa, setEmpresa] = useState(null);
  const [loader, setLoader] = useState({ visible: false, text: "" });
  const [snackbar, setSnackbar] = useState({
    message: "",
    severity: "success",
  });
  const [dialog, setDialog] = useState({
    title: "",
    body: "",
    btnText: "",
    open: false,
  });

  const [dialogForm, setDialogForm] = useState({
    title: "",
    body: "",
    btnTextClose: "",
    btnTextOpen: "",
    open: false,
  });

  return (
    <GlobalContext.Provider
      value={{
        ui: {
          loader: loader,
          setLoader: setLoader,
          snackbar: snackbar,
          setSnackbar: setSnackbar,
          dialog: dialog,
          setDialog: setDialog,
          dialogForm: dialogForm,
          setDialogForm: setDialogForm,
        },
        empresa: empresa,
        setEmpresa: setEmpresa,
      }}
    >
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;

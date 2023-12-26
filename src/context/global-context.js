import React from "react";

const GlobalContext = React.createContext({
  ui: {
    loader: false,
    setLoader: () => {},
    snackbar: {},
    setSnackbar: () => {},
    dialog: {},
    setDialog: () => {},
    dialogForm: {},
    setDialogForm: () => {},
  },
  empresa: {},
  setEmpresa: () => {},
});

export default GlobalContext;

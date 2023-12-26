import React from "react";

const GlobalContext = React.createContext({
  ui: {
    loader: false,
    setLoader: () => {},
    snackbar: {},
    setSnackbar: () => {},
    dialog: {},
    setDialog: () => {},
  },
  empresa: {},
  setEmpresa: () => {},

  // auth: {
  //   jwt: false,
  //   setJwt: () => {},
  // },
});

export default GlobalContext;

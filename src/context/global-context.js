import React from 'react';

const GlobalContext = React.createContext({
  ui: {
    loader: false,
    setLoader: () => {},
    snackbar: {},
    setSnackbar: () => {},
    dialog: {},
    setDialog: () => {},
  },
  auth: {
    jwt: false,
    setJwt: () => {},
  },
});

export default GlobalContext;

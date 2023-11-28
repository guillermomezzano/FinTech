// react
import { BrowserRouter } from "react-router-dom";
import GlobalState from "./context/GlobalState";

// components
import AppRoutes from "./routes/AppRoutes";
import Loader from "./components/modules/Loader";
import SnackbarMessage from "./components/modules/SnackbarMessage";

// styles
import "./App.css";

// material
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#eb5e4f",
    },
    secondary: {
      main: "#cac3c3",
    },
  },
  // typography: {
  //   fontFamily: ['Karla, sans-serif'].join(','),
  //   fontSize: 17,
  // },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <Loader />
        <SnackbarMessage />
        <BrowserRouter>
          <AppRoutes />
        </BrowserRouter>
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;

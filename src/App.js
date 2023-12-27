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
import { esES } from "@mui/material/locale";
import { AuthContextProvider } from "./context/AuthContext";

const theme = createTheme(
  {
    palette: {
      primary: {
        main: "#1FB4B0",
      },
      secondary: {
        main: "#EB5E4F",
      },
    },
  },
  esES,
);

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalState>
        <AuthContextProvider>
          <Loader />
          <SnackbarMessage />
          <BrowserRouter>
            <AppRoutes />
          </BrowserRouter>
        </AuthContextProvider>
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;

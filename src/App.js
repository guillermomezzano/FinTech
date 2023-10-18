// react
import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalState from "./context/GlobalState";

// components
import Home from "./pages/Home";
import DiaryBook from "./pages/DiaryBook";
import SimpleAuxiliaryBook from "./pages/SimpleAuxiliaryBook";
import IncomeUpdateForm from "./pages/IncomeUpdateForm";
import Loader from "./components/modules/Loader";
import SnackbarMessage from "./components/modules/SnackbarMessage";

// styles
import "./App.css";

// material
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#6d1b7b",
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
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/DiaryBook" element={<DiaryBook />} />
            <Route
              path="/SimpleAuxiliaryBook"
              element={<SimpleAuxiliaryBook />}
            />
            <Route path="/IncomeUpdateForm" element={<IncomeUpdateForm />} />
          </Routes>
        </BrowserRouter>
      </GlobalState>
    </ThemeProvider>
  );
}

export default App;

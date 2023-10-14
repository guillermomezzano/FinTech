// react
import { Route, Routes, BrowserRouter } from "react-router-dom";
import GlobalState from "./context/GlobalState";

// components
import Home from "./pages/Home";
import DiaryBook from "./pages/DiaryBook";
import FormsUsers from "./pages/FormsUsers";
import PageUsers from "./pages/PageUsers";
import SimpleAuxiliaryBook from "./pages/SimpleAuxiliaryBook";
import IncomeUpdateForm from "./pages/IncomeUpdateForm";
import Loader from "./components/modules/Loader";
import SnackbarMessage from "./components/modules/SnackbarMessage";

// styles
import "./App.css";

function App() {
  return (
    <GlobalState>
      <Loader />
      <SnackbarMessage />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DiaryBook" element={<DiaryBook />} />
          <Route path="/FormsUsers" element={<FormsUsers />} />
          <Route path="/FormsUsers/:id" element={<FormsUsers />} />
          <Route path="/PageUsers" element={<PageUsers />} />
          <Route
            path="/SimpleAuxiliaryBook"
            element={<SimpleAuxiliaryBook />}
          />
          <Route path="/IncomeUpdateForm" element={<IncomeUpdateForm />} />
        </Routes>
      </BrowserRouter>
    </GlobalState>
  );
}

export default App;

// react
import { Route, Routes, BrowserRouter } from "react-router-dom";

// components
import Home from "./pages/Home";
import DiaryBook from "./pages/DiaryBook";
import FormsUsers from "./pages/FormsUsers";
import PageUsers from "./pages/PageUsers";

// styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DiaryBook" element={<DiaryBook />} />
          <Route path="/FormsUsers" element={<FormsUsers />} />
          <Route path="/FormsUsers/:id" element={<FormsUsers />} />
          <Route path="/PageUsers" element={<PageUsers />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

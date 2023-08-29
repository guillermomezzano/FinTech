// react
import { Route, Routes, BrowserRouter } from "react-router-dom";

// components
import Home from "./pages/Home";
import DiaryBook from "./pages/DiaryBook";

// styles
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/DiaryBook" element={<DiaryBook />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

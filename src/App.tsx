import "./styles/style.css";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Register } from "./pages/Register";

export function App() {
  return (
    <BrowserRouter>
      <div style={{ width: "1519.2px" }}>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

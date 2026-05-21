import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home";
import { MealDetail } from "./pages/MealDetail";

export function App() {
  return (
    <BrowserRouter>
      <div style={{ minHeight: "100vh", background: "#f9fafb", fontFamily: "system-ui, sans-serif" }}>
        <nav style={{
          background: "#fff",
          borderBottom: "1px solid #e5e7eb",
          padding: "0 24px",
          height: "60px",
          display: "flex",
          alignItems: "center",
        }}>
          <a href="/" style={{ fontWeight: 800, fontSize: "1.2rem", color: "#16a34a", textDecoration: "none" }}>
            🥗 MealBox
          </a>
        </nav>

        <Routes>
          <Route path="/"           element={<Home />} />
          <Route path="/meals/:id"  element={<MealDetail />} />
          <Route path="*"           element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

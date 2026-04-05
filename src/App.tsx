import { Route, Routes, Navigate } from "react-router-dom";
import { CursorGlow } from "./components/CursorGlow";
import { PortfolioPage } from "./pages/PortfolioPage";

export default function App() {
  return (
    <>
      <CursorGlow />
      <Routes>
        <Route path="/" element={<PortfolioPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

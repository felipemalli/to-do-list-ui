import { Navigate, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/inicialPage" element={<p>Página inicial teste</p>} />

      <Route path="*" element={<Navigate to="/inicialPage" />} />
    </Routes>
  );
}

export default AppRoutes;

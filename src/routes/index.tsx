import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";

function AppRoutes() {
  return (
    <Routes>
      <Route path="/inicialPage" element={<Button>Teste</Button>} />

      <Route path="*" element={<Navigate to="/inicialPage" />} />
    </Routes>
  );
}

export default AppRoutes;

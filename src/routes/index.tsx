import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/inicialPage" element={<Button variant='contained'>Teste</Button>} />

      <Route path="*" element={<Navigate to="/inicialPage" />} />
    </Routes>
  );
}

import { Button } from '@mui/material';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useAppThemeContext } from '../shared/contexts';

export function AppRoutes() {
  const { toggleTheme } = useAppThemeContext();

  return (
    <Routes>
      <Route path="/initialPage" element={<Button variant="contained" onClick={toggleTheme}>Teste</Button>} />

      <Route path="*" element={<Navigate to="/initialPage" />} />
    </Routes>
  );
}

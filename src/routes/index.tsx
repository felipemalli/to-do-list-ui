import { Button } from '@mui/material';
import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { useDrawerContext } from '../shared/contexts';

export function AppRoutes() {
  // const { toggleTheme } = useAppThemeContext();
  const { toggleDrawerOpen, setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      { icon: 'home', path: '/initialPage', label:  'Tasks' },
      { icon: 'person', path: '/profile', label:  'Profile' },
    ]);
  }, []);

  return (
    <Routes>
      {/* <Route path="/initialPage" element={<Button variant="contained" onClick={toggleTheme}>Test</Button>} /> */}
      <Route path="/initialPage" element={<Button variant="contained" onClick={toggleDrawerOpen}>Test</Button>} />

      <Route path="*" element={<Navigate to="/initialPage" />} />
    </Routes>
  );
}

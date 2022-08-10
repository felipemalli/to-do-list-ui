import { useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Dashboard } from '../pages';
import { useDrawerContext } from '../shared/contexts';

export function AppRoutes() {
  const { setDrawerOptions } = useDrawerContext();

  useEffect(() => {
    setDrawerOptions([
      { icon: 'home', path: '/initialPage', label:  'Tasks' },
      { icon: 'person', path: '/profile', label:  'Profile' },
    ]);
  }, []);

  return (
    <Routes>
      <Route path="/initialPage" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/initialPage" />} />
    </Routes>
  );
}

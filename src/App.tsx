import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AsideDrawer } from './shared/components';
import { AppThemeProvider } from './shared/contexts/ThemeContext';

export const App = () => {
  return (
    <AppThemeProvider>
      <BrowserRouter>

        <AsideDrawer>
          <AppRoutes />
        </AsideDrawer>
        
      </BrowserRouter>
    </AppThemeProvider>
  );
};

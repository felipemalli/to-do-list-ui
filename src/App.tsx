import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { AsideDrawer } from './shared/components';
import { AppThemeProvider, DrawerProvider } from './shared/contexts';

export const App = () => {
  return (
    <AppThemeProvider>
      <DrawerProvider>
        <BrowserRouter>

          <AsideDrawer>
            <AppRoutes />
          </AsideDrawer>
        
        </BrowserRouter>
      </DrawerProvider>
    </AppThemeProvider>
  );
};

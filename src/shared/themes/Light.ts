import { createTheme } from '@mui/material';
import { grey, orange } from '@mui/material/colors';

export const LightTheme = createTheme({
  palette: {
    primary: {
      main: orange[700],
      dark: orange[800],
      light: orange[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: grey[400],
      dark: grey[600],
      light: grey[200],
      contrastText: '#ffffff',
    },
    background: {
      default: '#f7f6f3',
      paper: '#ffffff',
    }
  }
});


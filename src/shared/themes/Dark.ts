import { createTheme } from '@mui/material';
import { cyan, orange } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    primary: {
      main: orange[700],
      dark: orange[800],
      light: orange[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: cyan[500],
      dark: cyan[600],
      light: cyan[300],
      contrastText: '#ffffff',
    },
    background: {
      default: '#202124',
      paper: '#303134',
    }
  }
});


import { createTheme } from '@mui/material';
import { grey, orange } from '@mui/material/colors';

export const DarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: orange[700],
      dark: orange[800],
      light: orange[500],
      contrastText: '#ffffff',
    },
    secondary: {
      main: grey[800],
      dark: grey[900],
      light: '#303134',
      contrastText: '#ffffff',
    },
    background: {
      default: '#202124',
      paper: '#303134',
    }
  },
  typography: {
    allVariants: {
      color: 'white'
    }
  }
});


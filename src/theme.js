import { createTheme } from '@mui/material/styles';

// Definindo o tema claro
export const lightTheme = createTheme({
  typography: {
    fontFamily: 'Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
  },
  palette: {
    mode: 'light',
    primary: {
      main: '#7367EF',
    },
    secondary: {
      main: '#F8F9FA',
    },
  },
});

// Definindo o tema escuro
export const darkTheme = createTheme({
  typography: {
    fontFamily: 'Segoe UI, Roboto, Helvetica Neue, Arial, sans-serif',
  },
  palette: {
    mode: 'dark',
    primary: {
      main: '#7367EF',
    },
    secondary: {
      main: '#1D2B36',
    },
  },
});

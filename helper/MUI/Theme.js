import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import { useMemo } from 'react';
import RTL from './RTL';

const Theme = ({ children }) => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = useMemo(
    () =>
      createTheme({
        direction: 'rtl',
        palette: {
          mode: prefersDarkMode ? 'dark' : 'light',
          primary: {
            main: '#ffb300',
            light: '#ffffa8',
          },
          secondary: {
            main: '#1a0090',
          },
          background: {
            paper: prefersDarkMode ? '#202020' : '#e6e6e6',
            default: prefersDarkMode ? '#000' : '#fff',
          },
          warning: {
            main: '#2196f3',
          },
          neutral: {
            main: '#64748B',
            contrastText: '#fff',
          },
          profile: {
            main: 'rgba(178, 125, 0, 0.11)',
          },
        },
        breakpoints: {
          sm: 600,
        },
        typography: {
          fontFamily: [
            'var(--yekan-font)',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(','),
        },
        components: {
          MuiTextField: {
            styleOverrides: {
              root: {
                '& .MuiOutlinedInput-input': {
                  padding: 10,
                },
                '& .MuiOutlinedInput-root': {
                  borderRadius: 25,
                },
              },
            },
          },
        },
      }),
    [prefersDarkMode]
  );
  return (
    <RTL>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </RTL>
  );
};

export default Theme;

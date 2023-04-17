import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from '@mui/material';
import { useMemo } from 'react';
import MockRTL from './MockRTL';

import './global.css';

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
            // light: "#ffffa8",
          },
          secondary: {
            main: '#1a0090',
          },
          background: {
            paper: prefersDarkMode ? '#181818' : '#F5F5F5',
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
        typography: {
          fontFamily: [
            'YekanBakh',
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
    <MockRTL>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </MockRTL>
  );
};

export default Theme;

import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import { useMemo } from "react";

const Theme = ({ children }) => {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#ffb300",
            light: "#ffffa8",
          },
          secondary: {
            main: "#1a0090",
          },
          warning: {
            main: "#2196f3",
          },
          neutral: {
            main: "#64748B",
            contrastText: "#fff",
          },
          profile: {
            main: "rgba(178, 125, 0, 0.11)",
          },
        },
        typography: {
          fontFamily: [
            "YekanBakh",
            "-apple-system",
            "BlinkMacSystemFont",
            '"Segoe UI"',
            "Roboto",
            '"Helvetica Neue"',
            "Arial",
            "sans-serif",
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
          ].join(","),
        },
      }),
    [prefersDarkMode]
  );
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </ThemeProvider>
  );
};

export default Theme;

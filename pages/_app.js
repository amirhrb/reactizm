import { useEffect, useMemo } from "react";

//css
import "../styles/globals.css";
import "../styles/fonts.css";

//layout
import Layout from "../layout";

//apollo client
import { ApolloProvider } from "@apollo/client";
import client from "../graphql/apollo-client";

//mui
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";

//context
import DrawerContextProvider from "../contexts/DrawerContextProvider";

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    document.documentElement.dir = "rtl";
    document.documentElement.lang = "fa";
  }, []);

  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
          primary: {
            main: "#ffb300",
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
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <DrawerContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DrawerContextProvider>
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;

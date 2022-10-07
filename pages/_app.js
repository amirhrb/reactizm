import { useEffect, useMemo } from "react";
import { ApolloProvider } from "@apollo/client";

import "../styles/globals.css";
import "../styles/fonts.css";

//
import Layout from "../layout";

//apollo client
import client from "../graphql/apollo-client";
import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from "@mui/material";
import DrawerContextProvider from "../contexts/DrawerContextProvider";
import Head from "next/head";

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

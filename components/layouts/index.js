import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import { Box, Container } from "@mui/material";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const { route } = useRouter();
  return (
    <Box sx={{ minHeight: "100vh", overflow: "hidden" }}>
      <Header />
      <Container maxWidth="md" sx={{ height: "90vh", marginY: 8, p: 0 }}>
        {children}
      </Container>
      {route === "/404" ? "" : route === "/" ? "" : <Footer />}
    </Box>
  );
}

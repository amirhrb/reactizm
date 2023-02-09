import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import { Container } from "@mui/material";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const { route } = useRouter();
  return (
    <>
      <Header />
      <Container maxWidth="md" sx={{ minHeight: "85vh", marginTop: 8, p: 0 }}>
        {children}
      </Container>
      {route === "/404" ? "" : route === "/" ? "" : <Footer />}
    </>
  );
}

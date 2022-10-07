import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import { Container } from "@mui/material";

export default function Layout({ children }) {
  return children.type.name === "Home" || "NotFound" ? (
    <>
      <Header />
      {children}
    </>
  ) : (
    <>
      <Header />
      <Container maxWidth="md" sx={{ minHeight: "85vh", marginTop: 8 }}>
        {children}
      </Container>
      <Footer />
    </>
  );
}

import React from "react";
import Footer from "./Footer";
import Header from "./Header";

import { Container } from "@mui/material";

export default function Layout({ children }) {
  const {
    type: { name },
  } = children;
  if (name !== "NotFound" || "Home") {
    return (
      <>
        <Header />
        <Container maxWidth="lg" sx={{ minHeight: "85vh", marginTop: 8, p: 0 }}>
          {children}
        </Container>
      </>
    );
  }
}

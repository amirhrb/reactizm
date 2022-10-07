import { Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function Footer() {
  return (
    <footer style={{ width: "100vw" }}>
      <Container maxWidth="md">
        <Typography variant="body1">this is the footer</Typography>
        <Typography variant="h3">contact us</Typography>
      </Container>
    </footer>
  );
}

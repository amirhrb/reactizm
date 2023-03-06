import { Typography, Container, Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={(theme) => ({
        width: "100%",
        marginTop: "2rem",
        marginBottom: 0,
        backgroundColor:
          theme.palette.mode === "dark" ? "primary.main" : "primary.light",
      })}
    >
      <Container maxWidth="md">
        <Typography variant="body1">this is the footer</Typography>
        <Typography variant="h3">contact us</Typography>
      </Container>
    </Box>
  );
}

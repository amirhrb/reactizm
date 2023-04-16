import { Typography, Container, Box, Grid, IconButton } from '@mui/material';
//icon
import { Instagram, YouTube, Twitter } from '@mui/icons-material';

//font
import { aquire } from '../../helper/fonts/aquire';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={(theme) => ({
        width: '100%',
        // marginTop: "2rem",
        marginBottom: 0,
        backgroundColor:
          theme.palette.mode === 'dark' ? 'primary.main' : 'primary.light',
      })}
    >
      <Container maxWidth="md">
        <Grid
          sx={{
            width: '100%',
            py: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Typography
            component="h3"
            variant="h5"
            style={{ fontFamily: aquire.style.fontFamily, marginBottom: 5 }}
          >
            Follow #Reactizm
          </Typography>
          <Box sx={{ my: 2 }}>
            <IconButton aria-label="instagram">
              <Instagram fontSize="large" />
            </IconButton>
            <IconButton aria-label="instagram">
              <YouTube fontSize="large" />
            </IconButton>
            <IconButton aria-label="instagram">
              <Twitter fontSize="large" />
            </IconButton>
          </Box>
          <Typography>All Rights Reserved©️</Typography>
        </Grid>
      </Container>
    </Box>
  );
}

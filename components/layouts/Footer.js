import { Typography, Container, Box, Grid, IconButton } from '@mui/material';
//icon
import { Instagram, YouTube, Twitter } from '@mui/icons-material';
//font
import { aquire } from '../../helper/fonts/aquire';
import { yekan } from '../../helper/fonts/yekan';
import React from 'react';

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
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginBottom: 2,
            }}
          >
            <Typography
              component="span"
              variant="h5"
              sx={{
                fontFamily: yekan.style.fontFamily,
                fontWeight: '800',
              }}
            >
              دنبال کردن
            </Typography>{' '}
            <Typography
              component="h5"
              variant="h5"
              dir="ltr"
              sx={{ fontFamily: aquire.style.fontFamily }}
            >
              #Reactizm
            </Typography>
          </Box>

          <Box sx={{ my: 2 }}>
            <a
              href="https://www.instagram.com/reactizm"
              target="_blank"
              rel="noopener noreferer"
            >
              <IconButton aria-label="instagram">
                <Instagram fontSize="large" />
              </IconButton>
            </a>
            <IconButton aria-label="instagram">
              <YouTube fontSize="large" />
            </IconButton>
            <IconButton aria-label="instagram">
              <Twitter fontSize="large" />
            </IconButton>
          </Box>
          <Typography> &copy;نمام حقوق رزرو شده2023</Typography>
        </Grid>
      </Container>
    </Box>
  );
}

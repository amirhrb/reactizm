import { AppBar, Box, Container, Toolbar, useTheme } from '@mui/material';

//styles
import styles from '../styles/Header.module.scss';

export default function Navbar() {
  const theme = useTheme();
  return (
    <>
      <AppBar
        className={styles.AppBar}
        component="nav"
        position="fixed"
        sx={{
          bgcolor: theme.palette.background.default,
          color: theme.palette.text.primary,
          boxShadow: 'none',
          zIndex: 12,
        }}
      >
        <Container
          maxWidth="md"
          sx={{ display: 'flex', justifyContent: 'center' }}
        >
          <Toolbar
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
            disableGutters
          >
            <Box
              sx={{
                display: { xs: 'none', sm: 'block' },
                color: '#fff',
              }}
            >
              <Box
                sx={{
                  width: 45,
                  height: 45,
                  borderRadius: '50%',
                  backgroundColor: 'var(--mui-background-paper)',
                }}
              ></Box>
            </Box>
            <Box
              component="nav"
              sx={{
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              {[1, 2, 3, 4].map((item) => (
                <Box
                  key={item}
                  sx={{
                    width: 50,
                    height: 25,
                    mb: 1,
                    mx: 1,
                    borderRadius: 5,
                    backgroundColor: 'var(--mui-background-paper)',
                  }}
                ></Box>
              ))}
            </Box>
            <Box
              sx={{
                width: 45,
                height: 45,
                borderRadius: '50%',
                backgroundColor: 'var(--mui-background-paper)',
              }}
            ></Box>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
}

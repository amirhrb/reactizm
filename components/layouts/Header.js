import { useContext } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';

//contexts
import { drawerContext } from '../../helper/contexts/DrawerContextProvider';

import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  useTheme,
  IconButton,
} from '@mui/material';

//sstyles
import styles from './styles/Header.module.scss';

//components
import DrawerComponent from './Drawer';

//shapes
import Logo from '../../resources/Logo.png';
import ShapeLineIcon from '@mui/icons-material/ShapeLine';

const linksList = [
  { text: 'نویسندگان', href: '/authors' },
  { text: 'سرویس', href: '/services' },
  { text: 'مقالات', href: '/articles' },
  { text: 'درباره', href: '/about' },
];

export default function Navbar() {
  const {
    palette: { mode },
  } = useTheme();
  const theme = useTheme();
  const router = useRouter();
  const { setOpen } = useContext(drawerContext);

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
            <IconButton
              onClick={() => {
                setOpen(true);
              }}
              sx={(theme) => ({
                color: theme.palette.secondary.light,
                display: { sm: 'none', xs: 'flex' },
              })}
              aria-label="more options"
            >
              <ShapeLineIcon />
            </IconButton>
            <Box
              sx={{
                display: { xs: 'none', sm: 'block' },
                color: '#fff',
              }}
            >
              <Link href="auth">
                <Button variant="outlined" className={styles.loginBtn}>
                  ثبت نام/ورود
                </Button>
              </Link>
            </Box>
            <Box
              component="nav"
              sx={{
                marginLeft: '38px',
                display: { xs: 'none', sm: 'block' },
              }}
            >
              {linksList.map((link) => (
                <span className={styles.link} key={link.href}>
                  <Link href={link.href}>{link.text}</Link>
                  <div
                    style={{
                      backgroundColor: mode === 'dark' ? '#fff' : '#000',
                    }}
                  ></div>
                </span>
              ))}
            </Box>
            <IconButton aria-label="home page">
              <Box
                width={40}
                height={40}
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  cursor: 'pointer',
                }}
              >
                <Image
                  className={styles.logo}
                  src={Logo}
                  width={45}
                  height={45}
                  alt="logo"
                  onClick={() => router.push('/')}
                />
              </Box>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <DrawerComponent linksList={linksList} />
    </>
  );
}

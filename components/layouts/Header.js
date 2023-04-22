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

//suspense
// import { Suspense } from 'react';

import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs';

//styles
import styles from './styles/Header.module.scss';

//components
import DrawerComponent from './Drawer';

//shapes
import Logo from '../../resources/Logo.png';
import ShapeLineIcon from '@mui/icons-material/ShapeLine';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import SidebarComponent from '../modules/Sidebar';
import { useState } from 'react';

const linksList = [
  { text: 'نویسندگان', href: '/authors' },
  { text: 'سرویس', href: '/services' },
  { text: 'مقالات', href: '/articles' },
  { text: 'درباره', href: '/about' },
];

export default function Navbar() {
  const theme = useTheme();
  const router = useRouter();
  const { setOpen } = useContext(drawerContext);
  // const [sidebarActive, setSidebarActive] = useState(false);
  // const { data: session, status } = useSession();

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
            <IconButton
              onClick={() => {
                setOpen(true);
              }}
              sx={(theme) => ({
                color: theme.palette.secondary.light,
                width: 56,
                height: 56,
                display: { sm: 'none', xs: 'flex' },
              })}
              aria-label="more options"
            >
              <ShapeLineIcon sx={{ width: 35, height: 35 }} />
            </IconButton>
            <Box
              sx={{
                display: { xs: 'none', sm: 'block' },
                color: '#fff',
              }}
            >
              <SignedIn>
                {/* Mount the UserButton component */}
                <UserButton />
              </SignedIn>
              <SignedOut>
                {/* Signed out users get sign in button */}
                <SignInButton />
              </SignedOut>
            </Box>
            <Box
              component="nav"
              sx={{
                display: { xs: 'none', sm: 'block' },
              }}
            >
              {linksList.map((link) => (
                <span className={styles.link} key={link.href}>
                  <Link href={link.href}>{link.text}</Link>
                  <div
                    style={{
                      backgroundColor:
                        theme.palette.mode === 'dark' ? '#fff' : '#000',
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
      {/* <SidebarComponent
        sidebarActive={sidebarActive}
        setSidebarActive={setSidebarActive}
      /> */}
      <DrawerComponent
        linksList={linksList}
        // setSidebarActive={setSidebarActive}
      />
    </>
  );
}

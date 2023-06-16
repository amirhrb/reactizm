import { useContext } from 'react';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';

//contexts
import { drawerContext } from '@/helper/contexts/DrawerContextProvider';

//mui
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  useTheme,
  IconButton,
} from '@mui/material';

//styles
import styles from './styles/Header.module.scss';

//components
import DrawerComponent from './Drawer';

//shapes
import ShapeLineIcon from '@mui/icons-material/ShapeLine';

const UserButton = dynamic(() => import('../elements/UserButton'), {
  ssr: false,
  loading: () => (
    <Box
      sx={{
        width: 45,
        height: 45,
        borderRadius: '50%',
        backgroundColor: 'var(--mui-background-paper)',
      }}
    ></Box>
  ),
});
const linksList = [
  { text: 'نویسندگان', href: '/authors' },
  { text: 'سرویس', href: '/services' },
  { text: 'مقالات', href: '/articles' },
  { text: 'درباره', href: '/about' },
];

export default function Navbar() {
  const theme = useTheme();
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
                if (setOpen) setOpen(true);
              }}
              sx={theme => ({
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
              <UserButton />
            </Box>
            <Box
              component="nav"
              sx={{
                display: { xs: 'none', sm: 'block' },
              }}
            >
              {linksList.map(link => (
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
            <Link href="/">
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
                    src="/resources/Logo.png"
                    width={45}
                    height={45}
                    alt="logo"
                  />
                </Box>
              </IconButton>
            </Link>
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

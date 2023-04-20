import React, { useEffect } from 'react';

import { useRouter } from 'next/router';

import { signOut } from 'next-auth/react';

import {
  Box,
  Container,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Chatgpt from '../../resources/Chatgpt';

const SideBar = ({ sidebarActive, setSidebarActive }) => {
  const { route } = useRouter();

  useEffect(() => {
    setSidebarActive(false);
  }, [route]);

  return (
    <Container maxWidth="md">
      <Box
        component="aside"
        sx={{
          width: 200,
          borderRadius: 5,
          backgroundColor: 'var(--mui-background-paper)',
          position: 'fixed',
          transition: 'all 0.3s ease-in',
          transformOrigin: '50% 0',
          top: 0,
          visibility: sidebarActive ? 'visible' : 'hidden',
          opacity: sidebarActive ? 1 : 0,
          transform: sidebarActive
            ? 'translate(0,80px)'
            : 'translate(-200px,80px)',

          overflow: 'hidden',
          zIndex: 200,
        }}
        onClick={() => console.log('first')}
      >
        <ListItemButton>
          <ListItemIcon>
            <AccountCircleIcon />
          </ListItemIcon>
          <ListItemText primary="پروفایل" />
        </ListItemButton>
        <ListItemButton>
          <ListItemIcon>
            <Chatgpt width={25} height={25} style={{ fill: 'currentColor' }} />
          </ListItemIcon>
          <ListItemText primary="چت جی پی تی" />
        </ListItemButton>
        <ListItemButton
          onClick={() => {
            signOut();
          }}
        >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="خروج از حساب" />
        </ListItemButton>
      </Box>
      <Box
        sx={{
          width: '100vw',
          height: '100svh',
          position: 'absolute',
          display: sidebarActive ? 'block' : 'none',
          top: 0,
          left: 0,
          zIndex: 100,
          bgcolor: 'rgba(0,0,0,0.2)',
          backdropFilter: 'blur(2px)',
        }}
        onClick={() => setSidebarActive(false)}
      ></Box>
    </Container>
  );
};

export default SideBar;

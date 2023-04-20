import React from 'react';

// import { signOut } from 'next-auth/react';
// import { delay } from '../../helper/utils/functions';

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
import { toast } from 'react-toastify';

const SideBar = ({ sidebarActive, setSidebarActive }) => {
  const HandleSignOut = async () => {
    const res = await fetch('/api/auth/credential-signout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const data = await res.json();
    if (res.status === 200) {
      toast(data.message);
      // await delay(1000);
    }
  };
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
        <ListItemButton onClick={HandleSignOut}>
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

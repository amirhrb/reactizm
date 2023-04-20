import { Suspense, useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
//next-auth
// import { useSession } from 'next-auth/react';

//mui
import {
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

//context
import { drawerContext } from '../../helper/contexts/DrawerContextProvider';
import { refreshContext } from '../../helper/contexts/RefreshContextProvider';

function DrawerComponent({ linksList, setSidebarActive }) {
  const { isOpen, setOpen } = useContext(drawerContext);
  const { user, status } = useContext(refreshContext);
  const { route } = useRouter();
  useEffect(() => {
    setOpen(false);
  }, [route]);

  return (
    <Drawer anchor="bottom" open={isOpen} onClose={() => setOpen(!isOpen)}>
      <List sx={{ p: 0 }}>
        {status === 'authenticated' ? (
          <ListItem
            sx={{ display: 'flex', justifyContent: 'center' }}
            disablePadding
          >
            <IconButton
              sx={{ width: 56, height: 56, mb: 1 }}
              onClick={() => {
                setOpen(false);
                setSidebarActive(true);
              }}
            >
              {user.image ? (
                <Suspense
                  fallback={
                    <AccountCircleIcon sx={{ width: 45, height: 45 }} />
                  }
                >
                  <Image
                    src={user.image}
                    width={45}
                    height={45}
                    loading="lazy"
                    style={{ borderRadius: '50%' }}
                    alt="avatar"
                  />
                </Suspense>
              ) : (
                <AccountCircleIcon sx={{ width: 45, height: 45 }} />
              )}
            </IconButton>
          </ListItem>
        ) : (
          <Link href="authorization">
            <ListItem
              sx={{ display: 'flex', justifyContent: 'center' }}
              disablePadding
            >
              <ListItemButton>
                <ListItemText
                  sx={{ display: 'flex', justifyContent: 'center' }}
                >
                  ثبت نام/ورود
                </ListItemText>
              </ListItemButton>
            </ListItem>
          </Link>
        )}
        <Divider />
        {linksList.map((item) => (
          <Link href={item.href} key={item.href}>
            <ListItem
              sx={{ display: 'flex', justifyContent: 'center' }}
              disablePadding
            >
              <ListItemButton>
                <ListItemText
                  primary={item.text}
                  sx={{ display: 'flex', justifyContent: 'center' }}
                />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
      </List>
    </Drawer>
  );
}

export default DrawerComponent;

import { Suspense, useContext, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

//mui
import {
  Button,
  Divider,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

//context
import { drawerContext } from '../../helper/contexts/DrawerContextProvider';
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs';

function DrawerComponent({ linksList }) {
  const { isOpen, setOpen } = useContext(drawerContext);
  const { route } = useRouter();
  useEffect(() => {
    setOpen(false);
  }, [route]);

  return (
    <Drawer anchor="bottom" open={isOpen} onClose={() => setOpen(!isOpen)}>
      <List sx={{ p: 0 }}>
        <ListItem sx={{ justifyContent: 'center' }}>
          {/* Mount the UserButton component */}
          <IconButton
            sx={{ display: 'flex', justifyContent: 'center' }}
            disablePadding
          >
            <SignedIn>
              <UserButton />
            </SignedIn>
          </IconButton>
          {/* Signed out users get sign in button */}
          <IconButton
            sx={{ display: 'flex', justifyContent: 'center' }}
            disablePadding
          >
            <SignedOut>
              <SignInButton
                mode="modal"
                children={
                  <Button variant="contained" sx={{ borderRadius: 5 }}>
                    ورود
                  </Button>
                }
              />
            </SignedOut>
          </IconButton>
        </ListItem>

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

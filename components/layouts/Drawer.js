import { useContext, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

import UserButton from '../elements/UserButton';

//mui
import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from '@mui/material';

// import AccountCircleIcon from '@mui/icons-material/AccountCircle';

//context
import { drawerContext } from '../../helper/contexts/DrawerContextProvider';

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
          <UserButton />
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

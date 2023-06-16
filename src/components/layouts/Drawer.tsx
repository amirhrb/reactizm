import { useContext, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

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

//context
import { drawerContext } from '@/helper/contexts/DrawerContextProvider';

type Props = { linksList: { text: string; href: string }[] };

function DrawerComponent({ linksList }: Props) {
  const { isOpen, setOpen } = useContext(drawerContext);
  const pathname = usePathname();
  useEffect(() => {
    if (setOpen) {
      setOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  const closeHandler = () => {
    if (setOpen) setOpen(!isOpen);
  };

  return (
    <Drawer anchor="bottom" open={isOpen} onClose={closeHandler}>
      <List sx={{ p: 0 }}>
        <ListItem sx={{ justifyContent: 'center' }}>
          <UserButton />
        </ListItem>

        <Divider />
        {linksList.map(item => (
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

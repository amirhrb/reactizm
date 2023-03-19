import { useContext, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

//mui
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
//context
import { drawerContext } from "../../helper/contexts/DrawerContextProvider";

function DrawerComponent({ linksList }) {
  const { isOpen, setOpen } = useContext(drawerContext);
  const { route } = useRouter();
  useEffect(() => {
    setOpen(false);
  }, [route]);

  return (
    <Drawer anchor="bottom" open={isOpen} onClose={() => setOpen(!isOpen)}>
      <List>
        <ListItem disablePadding>
          <Link href="/auth">
            <ListItemButton>
              <ListItemText
                primary="ثبت نام/ ورود"
                sx={{ display: "flex", justifyContent: "center" }}
              />
            </ListItemButton>
          </Link>
        </ListItem>
        {linksList.map((item) => (
          <ListItem key={item.href} disablePadding>
            <Link href={item.href}>
              <ListItemButton>
                <ListItemText
                  primary={item.text}
                  sx={{ display: "flex", justifyContent: "center" }}
                />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default DrawerComponent;

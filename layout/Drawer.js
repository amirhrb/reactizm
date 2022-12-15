import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext, useEffect } from "react";
import { drawerContext } from "../contexts/DrawerContextProvider";

function DrawerComponent() {
  const { isOpen, setOpen } = useContext(drawerContext);
  const route = useRouter().route;
  useEffect(() => {
    setOpen(false);
  }, [route]);

  return (
    <Drawer anchor="bottom" open={isOpen} onClose={() => setOpen(!isOpen)}>
      <List>
        {[
          { text: "محصول", href: "/products" },
          { text: "سرویس", href: "/services" },
          { text: "مقالات", href: "/articles" },
          { text: "درباره", href: "/about" },
        ].map((item) => (
          <ListItem key={item.text} disablePadding>
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

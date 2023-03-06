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
import { drawerContext } from "../../contexts/DrawerContextProvider";

function DrawerComponent() {
  const { isOpen, setOpen } = useContext(drawerContext);
  const { route } = useRouter();
  useEffect(() => {
    setOpen(false);
  }, [route]);

  return (
    <Drawer anchor="bottom" open={isOpen} onClose={() => setOpen(!isOpen)}>
      <List>
        {[
          { text: "نویسندگان", href: "/authors" },
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

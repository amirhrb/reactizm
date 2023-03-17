import { useContext } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

//contexts
import { drawerContext } from "../../contexts/DrawerContextProvider";

import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  useTheme,
  // useMediaQuery,
  IconButton,
} from "@mui/material";

//sstyles
import styles from "./styles/Header.module.scss";

//components
import DrawerComponent from "./Drawer";

//shapes
import Logo from "../../resources/Logo.png";
import ShapeLineIcon from "@mui/icons-material/ShapeLine";

export default function Navbar() {
  const {
    palette: { mode },
  } = useTheme();
  const theme = useTheme();
  const router = useRouter();
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
          boxShadow: "none",
        }}
      >
        <Container
          maxWidth="md"
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <Toolbar
            sx={{
              width: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
            disableGutters
          >
            <IconButton
              onClick={() => {
                setOpen(true);
              }}
              sx={(theme) => ({
                color: theme.palette.secondary.light,
                display: { sm: "none", xs: "flex" },
              })}
              aria-label="more options"
            >
              <ShapeLineIcon />
            </IconButton>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <Button variant="contained" className={styles.loginBtn}>
                <span>ورود</span>
              </Button>
            </Box>
            <Box
              sx={{
                marginLeft: "38px",
                display: { xs: "none", sm: "block" },
              }}
            >
              <span className={styles.link}>
                <Link href="/authors">نویسندگان</Link>
                <div
                  style={{
                    backgroundColor: mode === "dark" ? "#fff" : "#000",
                  }}
                ></div>
              </span>
              <span className={styles.link}>
                <Link href="/">سرویس</Link>
                <div
                  style={{
                    backgroundColor: mode === "dark" ? "#fff" : "#000",
                  }}
                ></div>
              </span>
              <span className={styles.link}>
                <Link href="/articles">مقالات</Link>
                <div
                  style={{
                    backgroundColor: mode === "dark" ? "#fff" : "#000",
                  }}
                ></div>
              </span>
              <span className={styles.link}>
                <Link href="/">درباره</Link>
                <div
                  style={{
                    backgroundColor: mode === "dark" ? "#fff" : "#000",
                  }}
                ></div>
              </span>
            </Box>
            <IconButton aria-label="home page">
              <Box
                width={40}
                height={40}
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                }}
              >
                <Image
                  className={styles.logo}
                  src={Logo}
                  width={45}
                  height={45}
                  onClick={() => router.push("/")}
                />
              </Box>
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <DrawerComponent />
    </>
  );
}

import Image from "next/image";
import Link from "next/link";

import {
  AppBar,
  Box,
  Button,
  Container,
  Toolbar,
  useTheme,
  IconButton,
} from "@mui/material";

//sstyles
import styles from "../components/layouts/styles/Header.module.css";

//shapes
import Logo from "../resources/Logo.png";
// import ShapeLineIcon from "@mui/icons-material/ShapeLine";

const linksList = [
  { text: "نویسندگان", href: "/authors" },
  { text: "سرویس", href: "/services" },
  { text: "مقالات", href: "/articles" },
  { text: "درباره", href: "/about" },
];

export default function HeaderMock() {
  const {
    palette: { mode },
  } = useTheme();
  const theme = useTheme();

  return (
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
          <Button
            sx={() => ({
              display: { sm: "none", xs: "flex" },
            })}
            variant="outlined"
            aria-label="more options"
          >
            {/* <ShapeLineIcon /> */}
            بیشتر
          </Button>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
              color: "#fff",
            }}
          >
            <Link href="auth">
              <Button variant="outlined" className={styles.loginBtn}>
                <span>ثبت نام/ورود</span>
              </Button>
            </Link>
          </Box>
          <Box
            sx={{
              marginLeft: "38px",
              display: { xs: "none", sm: "block" },
            }}
          >
            {linksList.map((link) => (
              <span className={styles.link} key={link.href}>
                <Link href={link.href}>{link.text}</Link>
                <div
                  style={{
                    backgroundColor: mode === "dark" ? "#fff" : "#000",
                  }}
                ></div>
              </span>
            ))}
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
              />
            </Box>
          </IconButton>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

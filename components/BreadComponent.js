import Link from "next/link";
// import { useRouter } from "next/router";

import HomeIcon from "@mui/icons-material/Home";
import {
  Breadcrumbs,
  Button,
  // createTheme,
  // CssBaseline,
  styled,
  // ThemeProvider,
  // Typography,
  // useMediaQuery,
} from "@mui/material";

import styles from "./styles/Breadcrumbs.module.scss";
// import { useMemo } from "react";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontFamily: "Segoe UI",
}));
const GreyButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontFamily: "Segoe UI",
}));

function BreadComponent({ pathParts }) {
  let fullPath = "";
  return (
    <Breadcrumbs
      maxItems={3}
      separator="/"
      aria-label="breadcrumb"
      className={styles.crumbs}
      sx={{ marginTop: 8 }}
    >
      {pathParts.length ? (
        <Link href="/">
          <ColorButton
            variant="text"
            color="secondary"
            sx={{ fontSize: "small" }}
          >
            Home
            <HomeIcon fontSize="small" />
          </ColorButton>
        </Link>
      ) : null}
      {pathParts.length
        ? pathParts.map((part) => {
            if (part) fullPath += `/${part}`;
            return (
              <Link href={fullPath ? fullPath : "/"} key={part}>
                <GreyButton variant="text" disableRipple>
                  {part}
                </GreyButton>
              </Link>
            );
          })
        : null}
    </Breadcrumbs>
  );
}

export default BreadComponent;

import Image from "next/image";

import { Box, IconButton } from "@mui/material";

//styles
import styles from "./styles/Header.module.scss";

//shapes
import Logo from "../../resources/Logo.png";
import Link from "next/link";

export default function Navbar() {
  return (
    <Link
      href="/"
      style={{
        position: "absolute",
        bottom: "30px",
        left: "30px",
        zIndex: 15,
      }}
    >
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
            alt="logo"
          />
        </Box>
      </IconButton>
    </Link>
  );
}

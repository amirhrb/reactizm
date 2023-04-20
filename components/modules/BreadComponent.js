import { useMemo } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

//mui
import HomeIcon from "@mui/icons-material/Home";
import { Breadcrumbs, Button, styled } from "@mui/material";

//styles
import styles from "./styles/Breadcrumbs.module.scss";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.secondary.light,
  fontFamily: "Segoe UI",
}));
const GreyButton = styled(Button)(({ theme }) => ({
  color: theme.palette.text.secondary,
  fontFamily: "Segoe UI",
}));

function BreadComponent() {
  const router = useRouter();

  const pathParts = useMemo(() => {
    return router.asPath.split("?")[0].split("/").slice(1);
  }, [router.asPath]);
  let fullPath = "";
  return (
    <Breadcrumbs
      maxItems={3}
      separator="/"
      aria-label="breadcrumb"
      className={styles.crumbs}
      sx={{
        marginTop: {
          xs: 1,
          sm: 3,
        },
      }}
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
                  {part.split("-").join(" ")}
                </GreyButton>
              </Link>
            );
          })
        : null}
    </Breadcrumbs>
  );
}

export default BreadComponent;

import Image from "next/image";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import { Box, Typography, useTheme } from "@mui/material";

import Head from "../SEO/Head";

//images
import error from "../resources/404.png";
import errorDark from "../resources/404-dark.png";

//svgs
import Satellite from "../resources/satellite.svg";
import Cloud from "../resources/cloud.svg";
import Earth from "../resources/earth.svg";

//styles
import styles from "../styles/404.module.scss";

function NotFound() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>پیدا نشد!</title>
        <meta name="description" content="صفحه 404 |صفحه مورد نظر پیدا نشد" />
      </Head>
      <Parallax
        style={{ top: "0", left: "0" }}
        pages={3}
        className={styles.wrapper}
      >
        <ParallaxLayer
          offset={0}
          speed={1.2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              top: "-15%",
              left: "-30%",
            }}
          >
            <Image
              src={theme.palette.mode === "dark" ? errorDark : error}
              alt="404 notfound"
              width={48}
              height={18}
            />
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              position: "relative",
              top: "20%",
              left: "30%",
            }}
          >
            <Image
              src={theme.palette.mode === "dark" ? errorDark : error}
              alt="404 notfound"
              width={96}
              height={36}
            />
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={2}
          style={{
            backgroundColor: theme.palette.mode === "dark" ? "#b85" : "#fca",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Typography variant="h6">چیزی که دنبالش بودی پیدا نشد ):</Typography>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.1}
          speed={0.5}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Cloud
            style={{
              fill: "#cecece",
              width: "60px",
              position: "relative",
              top: "-5%",
              left: "15%",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.6}
          speed={-0.2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Satellite
            style={{
              width: "60px",
              position: "relative",
              left: "-15%",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.6}
          speed={-0.2}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Earth
            style={{
              maxWidth: "480px",
            }}
          />
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-0.7}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src={theme.palette.mode === "dark" ? errorDark : error}
            alt="404 notfound"
            width={240}
            height={90}
            loading="lazy"
          />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default NotFound;

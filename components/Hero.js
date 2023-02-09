import Image from "next/image";
import { Box, Typography, useTheme } from "@mui/material";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";

//components
import Footer from "../layout/Footer";

//resources
import Reactizm from "../resources/reactizm.png";
import ReactizmDark from "../resources/reactizm-dark.PNG";
import ZigZag from "../resources/thick zigzag line.png";
import Line from "../resources/thick line.png";
import Cursor from "../resources/cursor.png";

//styles
import styles from "./styles/Hero.module.scss";

function Hero() {
  const theme = useTheme();
  return (
    <>
      <Parallax
        pages={2}
        style={{ top: "0", left: "0" }}
        className={styles.wrapper}
      >
        <ParallaxLayer
          offset={0.25}
          speed={0.6}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Box className={styles.reactizm}>
            <Image
              src={theme.palette.mode === "dark" ? ReactizmDark : Reactizm}
              alt="reactizm"
              onDragStart={(e) => e.preventDefault()}
            />
            <Typography
              variant="h4"
              sx={{
                color: theme.palette.mode === "dark" ? "#777" : "#000",
                textShadow: "0 5px #FFEB01",
                fontWeight: 900,
                cursor: "default",
                userSelect: "none",
              }}
            >
              یادگیری نکات برنامه نویسی!
            </Typography>
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0.2}
          speed={0.9}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Box className={styles.cursor}>
            <Image src={Cursor} alt="cursor pointer" width={35} height={35} />
          </Box>
          <Box className={styles.zigZag}>
            <Image src={ZigZag} alt="ZigZag" width={60} height={60} />
          </Box>
          <Box className={styles.line}>
            <Image src={Line} alt="arch" width={60} height={60} />
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.8}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "flex-start",
          }}
        >
          <Footer />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default Hero;

import { Typography } from "@mui/material";
import Head from "../SEO/Head";

const fallback = () => {
  return (
    <>
      <Head>
        <title>آفلاینی!</title>
      </Head>
      <Typography
        variant="h3"
        sx={{
          marginTop: "120px",
          textAlign: "center",
          textShadow: "0 5px #FFEB01",
          fontWeight: 900,
          cursor: "default",
          userSelect: "none",
        }}
      >
        آفلاینی متاسفانه!
      </Typography>
    </>
  );
};

export default fallback;

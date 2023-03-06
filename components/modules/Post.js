import { useEffect, useState } from "react";
//next stuff
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

//sharer part
import { RWebShare } from "react-web-share";

//mui
import {
  Button,
  Card,
  CardActions,
  IconButton,
  Typography,
  Box,
  useTheme,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

//css
import styles from "../styles/Post.module.scss";

function Post({ post }) {
  const router = useRouter();
  const theme = useTheme();
  const [ogUrl, setOgUrl] = useState("");

  useEffect(() => {
    const host = window.location.host;
    const baseUrl = `https://${host}`;

    setOgUrl(`${baseUrl}${router.pathname}`);
  }, [router.pathname]);
  return (
    <>
      <Card
        sx={{
          m: 1,
          paddingY: 0.8,
          minWidth: 160,
          maxWidth: 280,
          minHeight: 150,
          maxHeight: 320,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          // boxShadow: "2px 2px 8px ",
          boxShadow:
            theme.palette.mode === "dark"
              ? "2px 2px 8px #000"
              : "2px 2px 8px #cecece",
        }}
      >
        <Link href={`/articles/${post.slug}`}>
          <Image
            src={post.ogImage.url}
            alt={post.ogImage.fileName}
            width={150}
            height={150}
            className={styles.banner}
          />
        </Link>
        <Box
          sx={{
            height: "140px",
            width: "170px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* <CardContent> */}
          <Typography
            variant="h6"
            sx={{
              height: "60px",
              mt: 1,
              px: 1,
              fontSize: "large",
              overflow: "clip",
            }}
          >
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" px={1}>
            نویسنده: {post.author.name}
          </Typography>
          {/* </CardContent> */}
          <CardActions sx={{ alignSelf: "auto", mt: -1, p: 0 }}>
            <Link href={`/articles/${post.slug}`} key={post.slug}>
              <Button
                size="medium"
                sx={{ display: "flex", alignItems: "center" }}
              >
                مطالعه
              </Button>
            </Link>
            <RWebShare
              data={{
                text: post.title,
                url: `${ogUrl}/${post.slug}`,
                title: post.author.name,
              }}
              onClick={() => console.log("shared successfully!")}
            >
              <IconButton color="neutral" size="medium">
                <ShareIcon />
              </IconButton>
            </RWebShare>
          </CardActions>
        </Box>
      </Card>
    </>
  );
}

export default Post;

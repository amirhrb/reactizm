import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";
import { RWebShare } from "react-web-share";
import {
  Button,
  Card,
  CardActions,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";

//css
import styles from "./styles/Post.module.scss";

function Post({ post }) {
  const router = useRouter();
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
          paddingX: 0.5,
          maxWidth: 300,
          minWidth: 270,
          minHeight: 140,
          maxHeight: 160,
          display: "flex",
          alignItems: "center",
          boxShadow: "2px 2px 8px #cecece",
        }}
      >
        <Link href={`/articles/${post.slug}`} className={styles.bannerCont}>
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
            height: "150px",
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
          <CardActions sx={{ alignSelf: "end", mt: -1 }}>
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

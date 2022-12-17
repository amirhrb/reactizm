import Link from "next/link";
import React, { useEffect, useState } from "react";
import { RWebShare } from "react-web-share";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
  Box,
} from "@mui/material";
import ShareIcon from "@mui/icons-material/Share";
import { useRouter } from "next/router";

function Post({ post }) {
  // const [locationUrl, setLocationUrl] = useState(location.href);
  const router = useRouter();
  useEffect(() => {
    // const origin =
    //   typeof window !== "undefined" && window.location.origin
    //     ? window.location.origin
    //     : "";
    console.log(router.domainLocales);
  }, []);
  return (
    <>
      <Card
        sx={{
          m: 1,
          width: 360,
          minHeight: 160,
          maxHeight: 180,
          display: "flex",
          alignItems: "center",
          boxShadow: "2px 2px 8px #cecece",
        }}
      >
        <Link href={`/articles/${post.slug}`} key={post.slug}>
          <CardMedia
            component="img"
            image={post.ogImage.url}
            alt={post.ogImage.fileName}
            sx={{ m: 0.5, width: 151, objectFit: "cover", borderRadius: "5px" }}
          />
        </Link>
        <Box
          sx={{
            height: "160px",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          {/* <CardContent> */}
          <Typography variant="h6" component="div" sx={{ m: 1 }}>
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
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
                // url: `${origin}${asPath}/${post.slug}`,
                url: `${post.slug}`,
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

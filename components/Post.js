import Link from "next/link";
import React, { useEffect } from "react";
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

function Post({ post }) {
  let locationUrl;
  useEffect(() => {
    locationUrl = location.href;
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
                url: locationUrl,
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

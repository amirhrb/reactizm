import Link from "next/link";
import React from "react";
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
  // console.log(post);
  return (
    <>
      {/* <Link href={`/articles/${post.slug}`} key={post.slug}></Link> */}
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
            sx={{ m: 0, width: 151, objectFit: "cover", borderRadius: "5px" }}
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
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {post.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              نویسنده: {post.author.name}
            </Typography>
          </CardContent>
          <CardActions sx={{ alignSelf: "end", mt: -1 }}>
            <Button size="large">مطالعه</Button>
            <IconButton color="neutral" size="small">
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Box>
      </Card>
    </>
  );
}

export default Post;

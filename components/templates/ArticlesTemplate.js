//mui
import { Grid } from "@mui/material";

//module components
import AuthorSide from "../modules/AuthorSide";
import Post from "../modules/Post";

function ArticlesTemplate({ posts, authors }) {
  return (
    <Grid
      container
      flexDirection="row"
      justifyContent="space-evenly"
      alignItems="flex-start"
      sx={{
        marginTop: {
          xs: 1,
          sm: 2,
        },
      }}
      width="100%"
    >
      <Grid
        item
        sm={4}
        md={3}
        sx={{
          display: {
            xs: "none",
            sm: "flex",
          },
          position: "relative",
        }}
      >
        <AuthorSide authors={authors} />
      </Grid>
      <Grid item sm={8} md={9} sx={{ p: 0 }}>
        <Grid
          container
          flexDirection="row"
          sx={{
            justifyContent: {
              xs: "center",
              sm: "flex-start",
            },
          }}
        >
          {posts.map((post) => (
            <Post post={post} key={post.id} />
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
}

export default ArticlesTemplate;

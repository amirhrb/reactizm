import Head from "../../SEO/Head";

import { Grid } from "@mui/material";

import client from "../../graphql/apollo-client";
import { AUTHOR_QUERY, POST_QUERY } from "../../graphql/queries";

//componnts
import BreadComponent from "../../components/BreadComponent";
import Post from "../../components/Post";
import AuthorSide from "../../components/AuthorSide";

function Posts({ posts, authors }) {
  // console.log(authors, posts);

  return posts.length ? (
    <>
      <Head>
        <title>مقالات و نکات برنامه‌نویسی</title>
        <meta
          name="description"
          content="مقالات سایت برنامه نویسی ریکتیزم reactizm"
        />
      </Head>

      <BreadComponent />
      <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        // columnSpacing={1}
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
          alignItems="flex-start"
          direction="column"
          sm={4}
          md={3}
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            mt: 2,
          }}
        >
          <AuthorSide authors={authors} />
        </Grid>
        <Grid item sm={8} md={9} sx={{ p: 0 }}>
          <Grid
            container
            direction="row"
            sx={{ justifyContent: { xs: "center", md: "space-between" } }}
          >
            {posts.map((post) => (
              <Grid key={post.id}>
                <Post post={post} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  ) : (
    ""
  );
}
export const getStaticProps = async () => {
  const {
    data: { posts },
  } = await client.query({ query: POST_QUERY });
  const {
    data: { authors },
  } = await client.query({ query: AUTHOR_QUERY });
  return {
    props: { posts, authors },
  };
};

export default Posts;

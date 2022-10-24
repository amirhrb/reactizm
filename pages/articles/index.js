import { useRouter } from "next/router";
import { useMemo } from "react";

import Head from "../../SEO/Head";

import { Container, Grid } from "@mui/material";

import client from "../../graphql/apollo-client";
import { POST_QUERY } from "../../graphql/queries";

//componnts
import BreadComponent from "../../components/BreadComponent";
import Post from "../../components/Post";

function Posts({ posts }) {
  const router = useRouter();
  const pathParts = useMemo(() => {
    return router.asPath.split("?")[0].split("/").slice(1);
  }, [router.asPath]);
  return posts.length ? (
    <>
      <Head>
        <title>مقالات و نکات برنامه‌نویسی</title>
        <meta
          name="description"
          content="مقالات سایت برنامه نویسی ریکتیزم reactizm"
        />
      </Head>
      <Container
        maxWidth="md"
        sx={{
          marginTop: 2,
        }}
      >
        <BreadComponent pathParts={pathParts} />
        <Grid
          container
          sx={{ mt: 5, display: "flex", justifyContent: "center" }}
        >
          {posts.map((post) => (
            <Grid>
              <Post post={post} />
            </Grid>
          ))}
          {posts.map((post) => (
            <Grid>
              <Post post={post} />
            </Grid>
          ))}
          {posts.map((post) => (
            <Grid>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  ) : (
    ""
  );
}
export const getStaticProps = async () => {
  const {
    data: { posts },
  } = await client.query({ query: POST_QUERY });
  return {
    props: { posts },
  };
};

export default Posts;

import Head from "../../SEO/Head";

//components
import BreadComponent from "../../components/BreadComponent";

import { useRouter } from "next/router";
import Image from "next/image";
import { Avatar, Box, Container, Grid } from "@mui/material";

//client
import client from "../../graphql/apollo-client";

//gql
import { POST_QUERY } from "../../graphql/queries";
import { useMemo } from "react";

export default function Post({ posts }) {
  const { slug } = useRouter().query;
  const {
    title,
    author,
    ogImage,
    content: { html },
  } = posts.find((post) => post.slug === slug);
  const router = useRouter();
  const pathParts = useMemo(() => {
    return router.asPath.split("?")[0].split("/").slice(1);
  }, [router.asPath]);
  return posts.length ? (
    <>
      <Head>
        <title>
          {author.name}|{title}
        </title>
        <link rel="shortcut icon" href={author.avatar.url} />
      </Head>
      <Container maxWidth="md">
        <BreadComponent pathParts={pathParts} />
        <h1>{title}</h1>
        <Grid container sx={{ alignItems: "center", marginY: 4 }}>
          <Grid item>
            {/* <Link href={`/${author.slug}`}> */}
            <Avatar
              src={author.avatar.url}
              alt={author.avatar.filename}
              sx={{ width: 56, height: 56 }}
            />
            {/* </Link> */}
          </Grid>
          <Grid item sx={{ marginRight: 2 }}>
            {/* <Link href={`/${author.slug}`}> */}
            <h3 style={{ margin: "1px 0 0 0 " }}>{author.name}</h3>
            {/* </Link> */}
            <span>نویسنده مقاله</span>
          </Grid>
        </Grid>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "500px",
            marginBottom: 4,
            aspectRatio: "10/9",
            alignSelf: "center",
          }}
        >
          <Image
            src={ogImage.url}
            alt={ogImage.fileName}
            layout="fill"
            objectFit="cover"
            priority
            style={{ borderRadius: 5 }}
          />
        </Box>
        <div
          dangerouslySetInnerHTML={{ __html: html }}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "start",
          }}
        ></div>
      </Container>
    </>
  ) : (
    ""
  );
}
export const getStaticProps = async () => {
  const { data: posts } = await client.query({ query: POST_QUERY });
  return {
    props: { ...posts },
  };
};
export const getStaticPaths = async () => {
  const {
    data: { posts },
  } = await client.query({ query: POST_QUERY });
  const getAllPaths = async (posts) => {
    const slugs = await posts.map((post) => post.slug);
    return slugs.map((slug) => ({ params: { slug: slug } }));
  };
  const paths = await getAllPaths(posts);
  return {
    paths: paths,
    fallback: false,
  };
};

import { useMemo, useState, useEffect } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Head from "../../SEO/Head";

//mui
import { Box, Container, Grid } from "@mui/material";

//components
import BreadComponent from "../../components/modules/BreadComponent";

//client
import client from "../../graphql/apollo-client";

//gql
import { POST_QUERY } from "../../graphql/queries";

export default function Post({ posts }) {
  const router = useRouter();

  const {
    title,
    author,
    ogImage,
    content: { html, text },
  } = posts?.find((post) => post.slug === router.query.slug);
  const pathParts = useMemo(() => {
    return router.asPath.split("?")[0].split("/").slice(1);
  }, [router.asPath]);

  const [ogUrl, setOgUrl] = useState("");
  useEffect(() => {
    const host = window.location.host;
    const baseUrl = `https://${host}`;
    setOgUrl(`${baseUrl}${router.asPath}`);
  }, [router.pathname]);
  return posts.length ? (
    <>
      <Head
        socials={{
          ogTitle: title,
          ogType: "article",
          ogUrl: ogUrl,
          ogImage: ogImage.url,
        }}
      >
        <title>
          {author.name}|{title}
        </title>
        <meta name="description" content={text.toString().split("\n")[0]} />
        <link rel="shortcut icon" href={author.avatar.url} />
      </Head>
      <Container maxWidth="md">
        <BreadComponent pathParts={pathParts} />
        <h1>{title}</h1>
        <Grid container sx={{ alignItems: "center", marginY: 4 }}>
          <Grid item>
            {/* <Link href={`/${author.slug}`}> */}

            <Image
              src={author.avatar.url}
              alt={`تصویر ${author.name}`}
              width={56}
              height={56}
              style={{ borderRadius: "50%" }}
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

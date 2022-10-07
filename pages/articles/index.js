import { useRouter } from "next/router";
import { useMemo } from "react";
import Link from "next/link";

import Head from "../../SEO/Head";

import { Container } from "@mui/material";

import client from "../../graphql/apollo-client";
import { POST_QUERY } from "../../graphql/queries";

import BreadComponent from "../../components/BreadComponent";

import styles from "../../styles/Articles.module.scss";

function Posts({ posts }) {
  const router = useRouter();
  const pathParts = useMemo(() => {
    return router.asPath.split("?")[0].split("/").slice(1);
  }, [router.asPath]);
  // console.log(pathParts);
  return posts.length ? (
    <>
      <Head>
        <title>مقالات و نکات برنامه‌نویسی</title>
        <meta
          name="description"
          content="مقالات سایت برنامه نویسی ریکتیزم reactizm"
        />
      </Head>
      <Container maxWidth="lg" sx={{ marginTop: 2 }}>
        <BreadComponent pathParts={pathParts} />
        <div className={styles.linksBox}>
          {posts.map((post) => (
            <Link href={`/articles/${post.slug}`} key={post.slug}>
              <a>{post.title}</a>
            </Link>
          ))}
        </div>
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

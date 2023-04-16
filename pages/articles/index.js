import Head from 'next/head';

//gql
import client from '../../helper/graphql/apollo-client';
import { AUTHORS_QUERY, POSTS_QUERY } from '../../helper/graphql/queries';

//mui
import { Box } from '@mui/material';

//componnts
import BreadComponent from '../../components/modules/BreadComponent';
import ArticlesTemplate from '../../components/templates/ArticlesTemplate';

function Posts({ posts, authors }) {
  return posts.length ? (
    <>
      <Head>
        <title>مقالات و نکات برنامه‌نویسی</title>
        <meta
          name="description"
          content="مقالات سایت برنامه نویسی ریکتیزم reactizm"
        />
      </Head>
      <Box>
        <BreadComponent />
        <ArticlesTemplate authors={authors} posts={posts} />
      </Box>
    </>
  ) : (
    ''
  );
}
export const getStaticProps = async () => {
  try {
    const {
      data: { posts },
    } = await client.query({ query: POSTS_QUERY });
    const {
      data: { authors },
    } = await client.query({ query: AUTHORS_QUERY });
    return {
      props: { posts, authors },
    };
  } catch (error) {
    console.log(error);
    return {
      props: { authors: [], posts: [] },
    };
  }
};

export default Posts;

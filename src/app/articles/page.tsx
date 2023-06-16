'use client';

export const revalidate = 3600;

import Dynamic from 'next/dynamic';
import Head from 'next/head';

//mui
import { Box } from '@mui/material';

//skeleton loaders
import BreadComponentSkeleton from '@/components/modules/loaders/BreadComponent';

//components
const BreadComponent = Dynamic(
  () => import('@/components/modules/BreadComponent'),
  {
    loading: () => <BreadComponentSkeleton />,
    ssr: false,
  }
);
import ArticlesTemplate from '@/components/templates/ArticlesTemplate';
import { useAuthors, usePosts } from '@/helper/graphql/useQueries';

function Posts() {
  const { data: PostsData } = usePosts();
  const { data: AuthorsData } = useAuthors();
  console.log({ PostsData, AuthorsData });
  return PostsData.posts.length ? (
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
        <ArticlesTemplate
          authors={AuthorsData.authors}
          posts={PostsData.posts}
        />
      </Box>
    </>
  ) : (
    ''
  );
}
export default Posts;

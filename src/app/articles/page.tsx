import Dynamic from 'next/dynamic';
import Head from 'next/head';

//mui
import Box from '@/components/MUI_COMPONENTS/Box';

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
import { getAuthors, getPosts } from '@/helper/graphql/useQueries';

async function Posts() {
  const PostsData = await getPosts();
  const AuthorsData = await getAuthors();
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

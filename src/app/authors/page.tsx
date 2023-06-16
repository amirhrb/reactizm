'use client';

export const revalidate = 3600;

import Head from 'next/head';
import Dynamic from 'next/dynamic';
//MUI
import { Box, Grid } from '@mui/material';

//loading skelet
import AuthorSkeleton from '@/components/modules/loaders/Author';
import BreadComponentSkeleton from '@/components/modules/loaders/BreadComponent';
import { useAuthors } from '@/helper/graphql/useQueries';

//components
const Author = Dynamic(() => import('@/components/modules/Author'), {
  loading: () => <AuthorSkeleton />,
  ssr: false,
});
const BreadComponent = Dynamic(
  () => import('@/components/modules/BreadComponent'),
  {
    loading: () => <BreadComponentSkeleton />,
    ssr: false,
  }
);

function Authors() {
  const { data, error } = useAuthors();
  if (error) return new Error();
  if (data) {
    return (
      <>
        <Head>
          <title>نویسندگان مقالات و نکات</title>
          <meta
            name="description"
            content="نویسندگان سایت برنامه نویسی ریکتیزم reactizm"
          />
        </Head>
        <Box sx={{ minHeight: '85dvh' }}>
          <BreadComponent />
          <Grid
            container
            direction="column"
            sx={{
              overflow: 'auto',
              mt: 1,
              pb: 1,
              alignItems: { xs: 'center', md: 'space-between' },
              justifyContent: 'space-evenly',
            }}
            rowSpacing={2}
          >
            {data.authors.map((author: { id: any }) => (
              <Author author={author} key={author.id} />
            ))}
          </Grid>
        </Box>
      </>
    );
  }
}
export default Authors;

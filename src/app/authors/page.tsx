export const revalidate = 60;
export const fetchCache = 'default-cache';

import Head from 'next/head';
import Dynamic from 'next/dynamic';
//MUI
import Box from '@/components/MUI_COMPONENTS/Box';
import Grid from '@/components/MUI_COMPONENTS/Grid';

// loading skelet
import AuthorSkeleton from '@/components/modules/loaders/Author';
import BreadComponentSkeleton from '@/components/modules/loaders/BreadComponent';
import { getAllAuthors } from '@/helper/Contentful/queries';
import AuthorsTemplate from '@/components/templates/AuthorsTemplate';

//components
const BreadComponent = Dynamic(
  () => import('@/components/modules/BreadComponent'),
  {
    loading: () => <BreadComponentSkeleton />,
    ssr: false,
  }
);

async function Authors({ searchParams }: { searchParams?: any }) {
  const { page, limit } = searchParams || {};
  const res: any = await getAllAuthors(page, limit);
  if (res.items.length) {
    const totalPages = Math.ceil(res.total / res.limit);
    const lastPage = res.skip / res.limit;
    const currentPage = lastPage + 1;
    const nextPage = lastPage + 2;
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
          <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center">
            <AuthorsTemplate data={res} />

            {totalPages > 1 ? <span>total pages: {totalPages}</span> : ''}
            {lastPage > 0 ? <span>last page: {lastPage}</span> : ''}
            {totalPages > 1 ? <span>current page: {currentPage}</span> : ''}
            {totalPages > currentPage ? <span>next page: {nextPage}</span> : ''}
          </div>
        </Box>
      </>
    );
  } else {
    return new Error();
  }
}
export default Authors;

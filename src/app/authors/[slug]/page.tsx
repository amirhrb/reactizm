export const revalidate = 60;
export const fetchCache = 'default-cache';

import Dynamic from 'next/dynamic';
//MUI
import Box from '@/components/MUI_COMPONENTS/Box';
import Grid from '@/components/MUI_COMPONENTS/Grid';

// loading skelet
import AuthorSkeleton from '@/components/modules/loaders/Author';
import BreadComponentSkeleton from '@/components/modules/loaders/BreadComponent';
import { getAllAuthors, getAuthorBySlug } from '@/helper/Contentful/queries';
import AuthorsTemplate from '@/components/templates/AuthorsTemplate';
import { Metadata } from 'next';

//components
const BreadComponent = Dynamic(
  () => import('@/components/modules/BreadComponent'),
  {
    loading: () => <BreadComponentSkeleton />,
    ssr: false,
  }
);
export async function generateMetadata({ params: { slug } }: { params?: any }) {
  const res: any = await getAuthorBySlug(slug);
  if (res.items.length) {
    return {
      title: `نویسنده: ${res.items[0].fields.name}`,
      description: 'نویسندگان سایت برنامه نویسی ریکتیزم reactizm',
      twitter: {
        card: 'summary',
        title: `نویسنده: ${res.items[0].fields.name}`,
        description: 'نویسندگان سایت برنامه نویسی ریکتیزم reactizm',
        site: 'https://reactizm.ir/authors/' + res.items[0].fields.slug,
        creator: res.items[0].fields.name,
        images: res.items[0].fields.avatar.fields.file.url,
      },
      openGraph: {
        type: 'article',
        url: 'https://reactizm.ir/authors/' + res.items[0].fields.slug,
        title: `نویسنده: ${res.items[0].fields.name}`,
        description: 'نویسندگان سایت برنامه نویسی ریکتیزم reactizm',
        siteName: 'سایت برنامه نویسی ریکتیزم',
        images: [
          {
            url: res.items[0].fields.avatar.fields.file.url,
          },
        ],
      },
      icons: {
        icon: res.items[0].fields.avatar.fields.file.url,
        apple: res.items[0].fields.avatar.fields.file.url,
      },
    } as Metadata;
  }
}
async function Authors({ params: { slug } }: { params?: any }) {
  const res: any = await getAuthorBySlug(slug);
  if (res.items.length) {
    return (
      <Box sx={{ minHeight: '85dvh' }}>
        <BreadComponent />
        <div className="grid grid-cols-1 sm:grid-cols-2 justify-items-center">
          <span>{res.items[0].fields.name}</span>
          {/* <AuthorsTemplate data={res} /> */}
        </div>
      </Box>
    );
  } else {
    return new Error();
  }
}
export default Authors;

export async function generateStaticParams() {
  const res: any = await getAllAuthors();
  return res.items.map((author: any) => ({
    slug: author.fields.slug,
  }));
}

export const revalidate = 60;
export const fetchCache = 'default-cache';

import Dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import { Metadata } from 'next';

//mui
import Box from '@/components/MUI_COMPONENTS/Box';
import Container from '@/components/MUI_COMPONENTS/Container';
import Grid from '@/components/MUI_COMPONENTS/Grid';
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
import { getAllPosts, getPostBySlug } from '@/helper/Contentful/queries';
//renderer
import DocumentToComponents from '@/components/modules/DocumentToComponents';

async function Post({ params: { slug } }: { params?: any }) {
  const res: any = await getPostBySlug(slug);
  return res.items.length ? (
    <>
      <Container maxWidth="md">
        <BreadComponent />
        <h1 className="text-2xl font-bold mt-2 mb-8">
          {res.items[0].fields.title}
        </h1>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <div className="flex flex-col">
            {res.items[0].fields.authors.length > 1 ? (
              <h3 className="text-xl">نویسندگان:</h3>
            ) : (
              ''
            )}
            <div className="flex gap-x-5 my-8">
              {res.items[0].fields.authors.map((author: any) => (
                <Grid
                  container
                  sx={{ alignItems: 'center' }}
                  key={author.sys.id}
                >
                  <Link
                    href={`/authors/${author.fields.slug}`}
                    style={{ display: 'flex', alignItems: 'center' }}
                  >
                    <Image
                      src={'https:' + author.fields.avatar.fields.file.url}
                      alt={`تصویر `}
                      width={56}
                      height={56}
                      style={{ borderRadius: '50%' }}
                    />
                  </Link>
                  <Grid item sx={{ marginRight: 2 }}>
                    <Link href={`/authors/${author.fields.slug}`}>
                      <h3 style={{ margin: '1px 0 0 0 ' }}>
                        {author.fields.name}
                      </h3>
                    </Link>
                    <span>نویسنده مقاله</span>
                  </Grid>
                </Grid>
              ))}
            </div>
          </div>
          <Box
            sx={{
              position: 'relative',
              width: '100%',
              maxWidth: '500px',
              marginBottom: 4,
              alignSelf: 'center',
            }}
          >
            <Image
              src={'https:' + res.items[0].fields.ogImage.fields.file.url}
              alt={res.items[0].fields.ogImage.fields.title}
              width={512}
              height={512}
              priority
              style={{
                borderRadius: 28,
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
              loading="eager"
            />
          </Box>
        </Box>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          {/* markdowns come here */}
          <DocumentToComponents
            richTextDocument={res.items[0].fields.content}
          />
        </div>
      </Container>
    </>
  ) : (
    ''
  );
}
export default Post;

export async function generateMetadata({ params: { slug } }: { params?: any }) {
  const res: any = await getPostBySlug(slug);
  const authors = res.items[0].fields.authors
    .map((author: any) => author.fields.name)
    .join(', ');
  if (res.items.length) {
    return {
      title: `مقاله: ${res.items[0].fields.title}`,
      description: 'نویسندگان سایت برنامه نویسی ریکتیزم reactizm',
      twitter: {
        card: 'summary',
        title: `مقاله: ${res.items[0].fields.title}`,
        description: 'نویسندگان سایت برنامه نویسی ریکتیزم reactizm',
        site: 'https://reactizm.ir/articles/' + res.items[0].fields.slug,
        creator: authors,
      },
      openGraph: {
        type: 'article',
        url: 'https://reactizm.ir/articles/' + res.items[0].fields.slug,
        title: `مقاله: ${res.items[0].fields.title}`,
        description: 'نویسندگان سایت برنامه نویسی ریکتیزم reactizm',
        siteName: 'سایت برنامه نویسی ریکتیزم',
      },
    } as Metadata;
  }
}
export async function generateStaticParams() {
  const res: any = await getAllPosts();
  return res.items.map((post: any) => ({
    slug: post.fields.slug,
  }));
}

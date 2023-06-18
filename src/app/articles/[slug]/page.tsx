import Dynamic from 'next/dynamic';
import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

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
import Markdown from '@/components/modules/Markdown';

import { getPost } from '@/helper/graphql/useQueries';

async function Post({ slug }: any) {
  const { post } = await getPost(slug);
  const {
    title,
    author,
    ogImage,
    content: { text, markdown },
  } = post;
  return post.title ? (
    <>
      <Head>
        <meta property="og:type" content="article" />
        <meta property="og:image" content={ogImage.url} />
        <title>{`${author.name}|${title}`}</title>
        <meta name="description" content={text.toString().split('\n')[0]} />
        <link rel="shortcut icon" href={author.avatar.url} />
      </Head>
      <Container maxWidth="md">
        <BreadComponent />
        <h1>{title}</h1>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Grid container sx={{ alignItems: 'center', marginY: 4 }}>
            <Link
              href={`/authors/${author.slug}`}
              style={{ display: 'flex', alignItems: 'center' }}
            >
              <Image
                src={author.avatar.url}
                alt={`تصویر ${author.name}`}
                width={56}
                height={56}
                style={{ borderRadius: '50%' }}
              />
            </Link>
            <Grid item sx={{ marginRight: 2 }}>
              {/* <Link href={`/${author.slug}`}> */}
              <h3 style={{ margin: '1px 0 0 0 ' }}>{author.name}</h3>
              {/* </Link> */}
              <span>نویسنده مقاله</span>
            </Grid>
          </Grid>
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
              src={ogImage.url}
              alt={ogImage.fileName || 'article header'}
              width={160}
              height={160}
              priority
              style={{
                borderRadius: 28,
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
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
          <Markdown markdown={markdown} />
        </div>
      </Container>
    </>
  ) : (
    ''
  );
}
export default Post;

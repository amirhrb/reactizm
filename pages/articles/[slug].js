import dynamic from 'next/dynamic';
import { useMemo, useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';
import { useRouter } from 'next/router';

//mui
import { Box, Container, Grid } from '@mui/material';

//skeleton loaders
import BreadComponentSkeleton from '../../components/modules/loaders/BreadComponent';

//components
const BreadComponent = dynamic(
  () => import('../../components/modules/BreadComponent'),
  {
    loading: () => <BreadComponentSkeleton />,
    ssr: false,
  }
);
//client
import client from '../../helper/graphql/apollo-client';

//gql
import { POSTS_QUERY, POST_QUERY } from '../../helper/graphql/queries';
import Link from 'next/link';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

export default function Post({ post }) {
  const router = useRouter();

  const {
    title,
    author,
    ogImage,
    content: { text, markdown },
  } = post;
  const pathParts = useMemo(() => {
    return router.asPath.split('?')[0].split('/').slice(1);
  }, [router.asPath]);

  const [ogUrl, setOgUrl] = useState('');
  useEffect(() => {
    const host = window.location.host;
    const baseUrl = `https://${host}`;
    setOgUrl(`${baseUrl}${router.asPath}`);
  }, [router.pathname]);
  return post.title ? (
    <>
      <Head>
        {/* <meta property="og:title" content={`${author.name}|${title}`} />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={ogImage.url} /> */}
        <title>{`${author.name}|${title}`}</title>
        <meta name="description" content={text.toString().split('\n')[0]} />
        <link rel="shortcut icon" href={author.avatar.url} />
      </Head>
      <Container maxWidth="md">
        <BreadComponent pathParts={pathParts} />
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
                borderRadius: 5,
                objectFit: 'cover',
                width: '100%',
                height: '100%',
              }}
            />
          </Box>
        </Box>
        <div
          // dangerouslySetInnerHTML={{ __html: html }}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'start',
          }}
        >
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </Container>
    </>
  ) : (
    ''
  );
}
export const getStaticPaths = async () => {
  const {
    data: { posts },
  } = await client.query({ query: POSTS_QUERY });
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
export const getStaticProps = async (ctx) => {
  const { data: post } = await client.query({
    query: POST_QUERY,
    variables: {
      Slug: ctx.params.slug,
    },
  });
  return {
    props: { ...post },
  };
};

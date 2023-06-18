'use client';

import { useEffect, useState } from 'react';
//next stuff
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

//sharer part
import { RWebShare } from 'react-web-share';

//mui
import IconButton from '../MUI_COMPONENTS/IconButton';
import Box from '../MUI_COMPONENTS/Box';
import Typography from '../MUI_COMPONENTS/Typography';
import Button from '../MUI_COMPONENTS/Button';
import { Card, CardActions, useTheme } from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';
//3rd p p
import { toast } from 'react-hot-toast';
//css
import styles from './styles/Post.module.scss';
import Head from 'next/head';

function Post({ post }: any) {
  const router = useRouter();
  const theme = useTheme();
  const [ogUrl, setOgUrl] = useState('');

  useEffect(() => {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    setOgUrl(`${baseUrl}${router.pathname}`);
  }, [router.pathname]);
  return (
    <>
      <Head>
        <meta
          property="og:title"
          content={`${post.author.name}|${post.title}`}
        />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:image" content={post.ogImage.url} />
        <title>{`${post.author.name}|${post.title}`}</title>
        <meta
          name="description"
          content={post.content.text.toString().split('\n')[0]}
        />
        <link rel="shortcut icon" href={post.author.avatar.url} />
      </Head>
      <Card
        component="article"
        sx={{
          m: 1,
          pt: 1,
          width: 200,
          minHeight: 320,
          maxHeight: 380,
          borderRadius: 5,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-evenly',
          backgroundColor: theme.palette.background.default,
          boxShadow:
            theme.palette.mode === 'dark'
              ? '1px 1px 10px #333'
              : '1px 1px 10px #cecece',
        }}
      >
        <Box sx={{ width: '90%' }}>
          <Image
            src={post.ogImage.url}
            alt={post.ogImage.fileName || 'post heading'}
            width={120}
            height={120}
            className={styles.banner}
            onClick={() => router.push(`/articles/${post.slug}`)}
          />
        </Box>
        <Box
          sx={{
            height: '140px',
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}
        >
          {/* <CardContent> */}
          <Typography
            variant="h6"
            sx={{
              fontSize: 'medium',
              overflow: 'clip',
            }}
          >
            {post.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" px={1}>
            نویسنده: {post.author.name}
          </Typography>
          {/* </CardContent> */}
          <CardActions sx={{ alignSelf: 'auto', mt: 0, p: 0 }}>
            <Link href={`/articles/${post.slug}`} key={post.slug}>
              <Button
                size="medium"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                مطالعه
              </Button>
            </Link>
            <RWebShare
              data={{
                text: post.title,
                url: `${ogUrl}/${post.slug}`,
                title: post.author.name,
              }}
              onClick={() => toast.loading('در حال پردازش...')}
            >
              <IconButton size="medium">
                <ShareIcon />
              </IconButton>
            </RWebShare>
          </CardActions>
        </Box>
      </Card>
    </>
  );
}

export default Post;

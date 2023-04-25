import { useEffect, useState } from 'react';
//next stuff
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';

//sharer part
import { RWebShare } from 'react-web-share';

//mui
import {
  Button,
  Card,
  CardActions,
  IconButton,
  Typography,
  Box,
  useTheme,
} from '@mui/material';
import ShareIcon from '@mui/icons-material/Share';

//css
import styles from './styles/Post.module.scss';

function Post({ post }) {
  const router = useRouter();
  const theme = useTheme();
  const [ogUrl, setOgUrl] = useState('');

  useEffect(() => {
    const host = window.location.host;
    const baseUrl = `https://${host}`;

    setOgUrl(`${baseUrl}${router.pathname}`);
  }, [router.pathname]);
  return (
    <Card
      component="article"
      sx={{
        m: 1,
        width: 200,
        minHeight: 200,
        maxHeight: 350,
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
      <Box sx={{ width: '90%', mt: 1 }}>
        <Image
          src={post.ogImage.url}
          alt={post.ogImage.fileName}
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
            onClick={() => console.log('shared successfully!')}
          >
            <IconButton color="neutral" size="medium">
              <ShareIcon />
            </IconButton>
          </RWebShare>
        </CardActions>
      </Box>
    </Card>
  );
}

export default Post;

import Image from 'next/image';
import Link from 'next/link';

//mui
import { Box, Grid, Tooltip, Typography, Zoom, useTheme } from '@mui/material';

//func
import { timeFunc } from '../../helper/utils/functions';
import { useRouter } from 'next/router';

//styles
import styles from './styles/Author.module.scss';

function Author({ author }) {
  const theme = useTheme();
  const router = useRouter();
  return (
    <Grid
      container
      sx={{
        width: 300,
        minHeight: 175,
        mt: 2,
        boxShadow:
          theme.palette.mode === 'dark'
            ? '2px 2px 8px #121212'
            : '2px 2px 8px #cecece',
        borderRadius: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      {/* profile */}
      <Grid
        container
        sx={(theme) => ({
          backgroundColor: theme.palette.profile.main,
          // marginBottom: 1,
          py: '5px',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'nowrap',
          justifyContent: 'space-evenly',
          borderRadius: '24px 24px 24px 0',
        })}
      >
        <Grid
          item
          xs={6}
          sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
        >
          <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src={author.avatar.url}
              alt={author.avatar.filename || 'avatar'}
              width={45}
              height={45}
              style={{ borderRadius: '50%', cursor: 'pointer' }}
              onClick={() => router.push(`authors/${author.slug}`)}
            />
          </Grid>
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              marginRight: 0.2,
            }}
          >
            <Tooltip
              title={author.name}
              placement="top-end"
              TransitionComponent={Zoom}
              arrow
            >
              <Typography
                variant="h4"
                sx={{
                  fontSize: '15px',
                  fontWeight: 'bold',
                  marginY: 0,
                  padding: 0,
                  maxWidth: '75px',
                  overflow: 'hidden',
                  textOverflow: 'ellipsis',
                  display: 'inline-block',
                  whiteSpace: 'nowrap',
                  cursor: 'pointer',
                }}
              >
                <Link
                  href={`authors/${author.slug}`}
                  style={{
                    height: '100%',
                    position: 'relative',
                  }}
                >
                  {author.name}
                </Link>
              </Typography>
            </Tooltip>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 'light',
              }}
            >
              {author.field}
            </Typography>
          </Grid>
        </Grid>
        <Grid
          item
          xs={6}
          sx={{
            display: 'flex',
            flexDirection: 'column',
            maxWidth: '110px',
            overflow: 'hidden',
          }}
        >
          <Typography
            variant="caption"
            sx={{
              fontWeight: 'light',
            }}
          >
            تعداد مقالات: {author.posts.length}
          </Typography>
          <Typography
            variant="caption"
            sx={{
              fontWeight: 'light',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              display: 'inline-block',
              whiteSpace: 'nowrap',
            }}
          >
            آخرین فعالیت: {timeFunc(author.posts)} پیش
          </Typography>
        </Grid>
      </Grid>
      {/* profile */}
      {/* posts part */}
      <Box
        sx={{
          width: '94%',
          minHeight: '100px',
          height: '100%',
          my: 0.5,
          overflowX: 'auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid
          container
          width="100%"
          direction="row"
          alignItems="center"
          spacing={1}
          justifyContent={
            author.posts.length > 3 ? 'flex-start' : 'space-evenly'
          }
          wrap="nowrap"
        >
          {author.posts.map((post) => (
            <Grid
              item
              key={post.id}
              sx={{
                // minWidth: 80,
                // minHeight: 80,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Link href={`/articles/${post.slug}`}>
                <Image
                  src={post.ogImage.url}
                  width={85}
                  height={85}
                  alt="post image"
                  priority
                  style={{ borderRadius: '15px' }}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* posts part */}
    </Grid>
  );
}

export default Author;

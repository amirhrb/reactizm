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
    <Box
      sx={{
        width: 280,
        height: 170,
        boxShadow:
          theme.palette.mode === 'dark'
            ? '2px 2px 8px #000'
            : '2px 2px 8px #cecece',
        borderRadius: 6,
      }}
    >
      <Grid
        container
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* profile */}
        <Grid
          container
          sx={(theme) => ({
            backgroundColor: theme.palette.profile.main,
            marginBottom: 1,
            p: '5px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
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
                maxWidth: '90px',
                marginRight: 0.2,
              }}
            >
              <Link
                href={`authors/${author.slug}`}
                style={{ maxHeight: '20px', position: 'relative' }}
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
                      width: '95px',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                      display: 'inline-block',
                      whiteSpace: 'nowrap',
                      cursor: 'pointer',
                    }}
                  >
                    {author.name}
                  </Typography>
                </Tooltip>
              </Link>
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
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '110px',
              marginRight: 0.1,
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
              }}
            >
              آخرین فعالیت: {timeFunc(author.posts)} پیش
            </Typography>
          </Grid>
        </Grid>
        {/* profile */}
        {/* posts part */}
        <Grid
          container
          width={260}
          direction="row"
          alignItems="center"
          justifyContent={
            author.posts.length > 3 ? 'flex-start' : 'space-evenly'
          }
          wrap="nowrap"
          columnSpacing={1}
          mt={1}
          mx={1}
          className={styles.scrollContainer}
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
                  style={{ borderRadius: '10px' }}
                />
              </Link>
            </Grid>
          ))}
        </Grid>
        {/* posts part */}
      </Grid>
    </Box>
  );
}

export default Author;

// 'use client';

import Image from 'next/image';
import Link from 'next/link';
// import { useEffect, useState } from 'react';

//mui
// import { useTheme } from '@mui/material';
// import Zoom from '../MUI_COMPONENTS/Zoom';
// import { Tooltip } from '@mui/material';
import Typography from '../MUI_COMPONENTS/Typography';
import Box from '../MUI_COMPONENTS/Box';
import Grid from '../MUI_COMPONENTS/Grid';

//loadere
// import AuthorSkeleton from '@/components/modules/loaders/Author';

// import { getAuthorBySlug } from '@/helper/Contentful/queries';

//func
import { timeFunc } from '@/helper/utils/fns';

async function Author({ item }: any) {
  // const theme: any = useTheme();
  // const [loading, setLoading] = useState(true);
  // const [data, setData] = useState<any>({});
  // useEffect(() => {
  const {
    fields: { description, avatar, name, posts, slug, field },
    sys: { id, createdAt, updatedAt },
  } = item;
  const data = {
    description,
    avatar,
    name,
    posts,
    slug,
    field,
    id,
    createdAt,
    updatedAt,
  };
  // }, []);
  // if (loading) return <AuthorSkeleton />;
  if (data)
    return (
      <Grid
        container
        sx={{
          width: 300,
          minHeight: 175,
          mt: 2,
          borderRadius: 6,
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'nowrap',
          alignItems: 'center',
        }}
        className="col-span-1 shadow-md"
      >
        {/* profile */}
        <Grid
          container
          sx={{
            py: '5px',
            width: '100%',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'nowrap',
            justifyContent: 'space-evenly',
            borderRadius: '24px 24px 24px 0',
          }}
          className="bg-profile/[0.12]"
        >
          <Grid
            item
            xs={6}
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
              <Link href={`authors/${slug}`}>
                <Image
                  src={'https:' + data.avatar.fields.file.url}
                  alt={data.avatar.fields.title}
                  width={45}
                  height={45}
                  style={{ borderRadius: '50%', cursor: 'pointer' }}
                />
              </Link>
            </Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                flexDirection: 'column',
                marginRight: 0.2,
              }}
            >
              {/* <Tooltip
                title={data.name}
                placement="top-end"
                TransitionComponent={Zoom}
                arrow
              > */}
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
                  href={`authors/${data.slug}`}
                  style={{
                    height: '100%',
                    position: 'relative',
                  }}
                >
                  {data.name}
                </Link>
              </Typography>
              {/* </Tooltip> */}
              <Typography
                variant="caption"
                sx={{
                  fontWeight: 'light',
                }}
              >
                {data.field}
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
              تعداد مقالات: {data.posts.length}
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
              آخرین فعالیت: {timeFunc(data.posts)} پیش
            </Typography>
          </Grid>
        </Grid>
        {/* profile */}
        {/* posts part */}
        <Box
          sx={{
            width: '95%',
            my: 1,
            px: 1,
            minHeight: '100px',
            height: '100%',
            overflowX: 'auto',
            flexGrow: 1,
          }}
        >
          <div className="flex justify-center gap-x-2 my-[inherit] w-max min-w-full">
            {data.posts.map((post: any) => (
              <Link
                href={`/articles/${post.fields.slug}`}
                key={post.sys.id}
                className="w-[85px]"
              >
                <Image
                  src={'https:' + post.fields.ogImage.fields.file.url}
                  width={85}
                  height={85}
                  alt={post.fields.ogImage.fields.title}
                  priority
                  className="rounded-2xl w-[85px] h-[85px]"
                />
              </Link>
            ))}
          </div>
        </Box>

        {/* posts part */}
      </Grid>
    );
}

export default Author;

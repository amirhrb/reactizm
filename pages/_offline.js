import { Typography } from '@mui/material';
import Head from 'next/head';

const Offline = () => {
  return (
    <>
      <Head>
        <title>آفلاینی!</title>
        <meta
          name="description"
          content="سایت آموزش برنامه نویسی و طراحی سایت ری‌اکتیزم"
        />
      </Head>
      <Typography
        variant="h4"
        sx={{
          mt: 1,
          color: '#777',
          textShadow: '0 5px #FFEB01',
          fontWeight: 900,
          cursor: 'default',
          userSelect: 'none',
        }}
      >
        آفلاینی!
      </Typography>
    </>
  );
};

export default Offline;

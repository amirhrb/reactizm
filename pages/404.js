import Head from 'next/head';
import Image from 'next/image';

//mui
import { Box, Typography, useTheme } from '@mui/material';

//parallax lib
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

//images
import error from '../resources/404.png';
import errorDark from '../resources/404-dark.png';
import satellite from '../resources/satellite.png';
import cloud from '../resources/cloud.png';
import earth from '../resources/earth.png';

//styles
import styles from '../styles/404.module.scss';

function NotFound() {
  const theme = useTheme();
  return (
    <>
      <Head>
        <title>ام... پیدا نشد!</title>
        <meta name="description" content="صفحه 404 |صفحه مورد نظر پیدا نشد" />
        <link rel="shortcut icon" href="/404.ico" />
      </Head>
      <Parallax
        style={{ top: '0', left: '0' }}
        pages={3}
        className={styles.wrapper}
      >
        <ParallaxLayer
          offset={0}
          speed={1.2}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              top: '-15%',
              left: '-30%',
            }}
          >
            <Image
              src={theme.palette.mode === 'dark' ? errorDark : error}
              alt="404 notfound"
              width={48}
              height={18}
            />
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={0.8}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              position: 'relative',
              top: '20%',
              left: '30%',
            }}
          >
            <Image
              src={theme.palette.mode === 'dark' ? errorDark : error}
              alt="404 notfound"
              width={96}
              height={36}
            />
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1}
          speed={2}
          style={{
            backgroundColor: theme.palette.mode === 'dark' ? '#b85' : '#fca',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Typography variant="h6" sx={{ fontSize: '1rem' }}>
            چیزی که دنبالش بودی رو گشتم نبود، نگرد نیست ):
          </Typography>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.1}
          speed={0.5}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            style={{
              width: 60,
              position: 'relative',
              top: '-5%',
              left: '15%',
            }}
          >
            <Image src={cloud} width={80} height={50} alt="cloud png" />
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          offset={1.6}
          speed={-0.2}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            style={{
              width: '60px',
              position: 'relative',
              left: '-15%',
            }}
          >
            <Image src={satellite} width={80} height={80} alt="satellite" />
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          offset={2.55}
          speed={-0.2}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            style={{
              maxWidth: '550px',
            }}
          >
            <Image
              className={styles.earth}
              src={earth}
              width={400}
              height={400}
              alt="earth"
            />
          </Box>
        </ParallaxLayer>
        <ParallaxLayer
          offset={0}
          speed={-0.7}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Image
            src={theme.palette.mode === 'dark' ? errorDark : error}
            alt="404 notfound"
            width={240}
            height={90}
            loading="lazy"
          />
        </ParallaxLayer>
      </Parallax>
    </>
  );
}

export default NotFound;

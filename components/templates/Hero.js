import Image from 'next/image';

//mui
import {
  Box,
  // SvgIcon,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

//parallax library
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

//components
import Footer from '../layouts/Footer';

//resources
import Reactizm from '../../resources/reactizm.png';
import ReactizmDark from '../../resources/reactizm-dark.png';
import ZigZag from '../../resources/thick zigzag line.png';
import Line from '../../resources/thick line.png';
import Cursor from '../../resources/cursor.png';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LinkIcon from '@mui/icons-material/Link';
// import ChatGpt from '../../resources/Chatgpt';
import gptHeader from '../../resources/gpt-header.png';
import gptAsk from '../../resources/gpt-ask.png';
import gptRes from '../../resources/gpt-response.png';

//styles
import styles from './styles/Hero.module.scss';
import Link from 'next/link';

function Hero() {
  const theme = useTheme();
  const isLandscape = useMediaQuery('(orientation: landscape)');
  return (
    <Parallax
      pages={3}
      style={{ top: '0', left: '0' }}
      className={styles.wrapper}
    >
      <ParallaxLayer
        offset={0.25}
        speed={0.6}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Box className={styles.reactizm}>
          <Image
            src={theme.palette.mode === 'dark' ? ReactizmDark : Reactizm}
            alt="reactizm"
            width={250}
            height={40}
            priority
            onDragStart={(e) => e.preventDefault()}
          />
          <Typography
            variant="h4"
            sx={{
              mt: 1,
              color: theme.palette.mode === 'dark' ? '#777' : '#000',
              textShadow: '0 5px #FFEB01',
              fontWeight: 900,
              cursor: 'default',
              userSelect: 'none',
            }}
          >
            بلاگ نکات برنامه نویسی!
          </Typography>
        </Box>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.2}
        speed={0.9}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Box className={styles.cursor}>
          <Image src={Cursor} alt="cursor pointer" width={35} height={35} />
        </Box>
        <Box className={styles.zigZag}>
          <Image src={ZigZag} alt="ZigZag" width={60} height={60} />
        </Box>
        <Box className={styles.line}>
          <Image src={Line} alt="arch" width={60} height={60} />
        </Box>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0.8}
        speed={0.1}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            zIndex: 1,
          }}
        >
          <Typography variant="h5" sx={{ fontWeight: 900 }} dir="rtl">
            چت جی‌پی‌تی!
          </Typography>

          <ExpandMoreIcon fontSize="large" />
        </Box>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1.5}
        speed={0.01}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Image
            src={gptHeader}
            width={220}
            height={40}
            style={{
              zIndex: 2,
              width: 280,
              height: 'auto',
              position: 'relative',
              top: '-200px',
            }}
          />
        </Box>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1.5}
        speed={0}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Image
            src={gptAsk}
            width={220}
            height={80}
            style={{
              zIndex: 2,
              width: 240,
              position: 'relative',
              top: '-100px',
              left: '-20%',
            }}
          />
          {/* <Image src={gptAsk} width={220} height={80} />
          <Image src={gptRes} width={200} height={90} /> */}
        </Box>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1.5}
        speed={-0.01}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Image
            src={gptRes}
            width={220}
            height={100}
            style={{
              zIndex: 2,
              width: 240,
              position: 'relative',
              left: '20%',
            }}
          />
          {/* <Image src={gptAsk} width={220} height={80} />
          <Image src={gptRes} width={200} height={90} /> */}
        </Box>
      </ParallaxLayer>
      <ParallaxLayer
        offset={1.84}
        speed={-0.4}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Link
            href="/chat-gpt"
            style={{
              width: 140,
              display: 'flex',
              alignItems: 'flex-start',
            }}
          >
            <LinkIcon
              sx={{
                fontSize: '2.3rem',
                transform: 'rotateZ(-45deg)',
              }}
            />
            <Typography
              variant="h5"
              sx={{
                cursor: 'pointer',
                fontWeight: 900,
                textShadow: '0 5px #FFEB01',
              }}
              dir="rtl"
            >
              بزن بریم...
            </Typography>
          </Link>
        </Box>
      </ParallaxLayer>
      <ParallaxLayer
        offset={isLandscape ? 2.5 : 2.7}
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor:
            theme.palette.mode === 'dark' ? '#ffb300' : '#ffffa8',
        }}
      >
        <Footer />
      </ParallaxLayer>
    </Parallax>
  );
}

export default Hero;

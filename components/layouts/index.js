//react
import React from 'react';
//next
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
//components
import Footer from './Footer';
import FloatHeader from './FloatHeader';
import HeaderSkeleton from './loaders/Header';
const Header = dynamic(() => import('./Header'), {
  ssr: false,
  loading: () => <HeaderSkeleton />,
});
//hook
import useWindowDimensions from '../../helper/utils/useWindowDimentions';
//mui
import { Box, Container } from '@mui/material';
//font
import { yekan } from '../../helper/fonts/yekan';

export default function Layout({ children }) {
  const { height } = useWindowDimensions();
  const { route } = useRouter();
  return (
    <Box
      sx={{
        minHeight: `calc(${height}px - 64px)`,
        height:
          route === '/chat-gpt'
            ? '100dvh'
            : route === '/dall-e'
            ? '100dvh'
            : '100%',
        overflowX: 'hidden',
      }}
      className={yekan.className}
    >
      {route === '/chat-gpt' ? (
        <FloatHeader />
      ) : route === '/dall-e' ? (
        <FloatHeader />
      ) : (
        <Header />
      )}
      {route === '/chat-gpt' ? (
        children
      ) : route === '/dall-e' ? (
        children
      ) : (
        <Container
          maxWidth="md"
          sx={{
            py: 8,
            minHeight: height ? `${height}px` : '100dvh',
            height: '100%',
            overflowY: 'auto',
          }}
        >
          {children}
        </Container>
      )}

      {route === '/404' ? (
        ''
      ) : route === '/' ? (
        ''
      ) : route === '/chat-gpt' ? (
        ''
      ) : route === '/dall-e' ? (
        ''
      ) : (
        <Footer />
      )}
    </Box>
  );
}

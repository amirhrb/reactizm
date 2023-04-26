//react
import React from 'react';
//next
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
//components
import Footer from './Footer';
import HeaderSkeleton from './loaders/Header';
const Header = dynamic(() => import('./Header'), {
  ssr: false,
  loading: () => <HeaderSkeleton />,
});
//mui
import { Box, Container } from '@mui/material';
//font
import { yekan } from '../../helper/fonts/yekan';

export default function Layout({ children }) {
  const { route } = useRouter();
  return (
    <Box
      sx={{ minHeight: 'calc(100vh - 60px)', overflow: 'hidden' }}
      className={yekan.className}
    >
      <Header />
      <Container maxWidth="md" sx={{ py: 8, minHeight: '100svh' }}>
        {children}
      </Container>
      {route === '/404' ? '' : route === '/' ? '' : <Footer />}
    </Box>
  );
}

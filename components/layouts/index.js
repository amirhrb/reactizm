//react
import React from 'react';
//next
import { useRouter } from 'next/router';
//components
import Footer from './Footer';
import Header from './Header';
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
      <Container maxWidth="md" sx={{ py: 8 }}>
        {children}
      </Container>
      {route === '/404' ? '' : route === '/' ? '' : <Footer />}
    </Box>
  );
}

'use client';
//next
import dynamic from 'next/dynamic';
import { usePathname } from 'next/navigation';

//components
import Footer from './Footer';
import HeaderSkeleton from './loaders/Header';
const Header = dynamic(() => import('./Header'), {
  ssr: false,
  loading: () => <HeaderSkeleton />,
});
//hook
import useWindowDimensions from '@/helper/utils/useWindowDimentions';
//mui
import { Box, Container } from '@mui/material';

const footerIsAllowed = ['articles', 'authors', 'sign-in', 'sign-up'];

export default function Layout({ children }: any) {
  const { height } = useWindowDimensions();
  const pathname = usePathname();
  const mainPath = pathname.split('/')[1];
  return (
    <Box
      sx={{
        minHeight: `calc(${height}px - 64px)`,
        height:
          pathname === '/chat-gpt'
            ? '100dvh'
            : pathname === '/dall-e'
            ? '100dvh'
            : '100%',
        overflowX: 'hidden',
      }}
    >
      {pathname === '/chat-gpt' ? '' : pathname === '/dall-e' ? '' : <Header />}
      {pathname === '/chat-gpt' ? (
        children
      ) : pathname === '/dall-e' ? (
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

      {footerIsAllowed.includes(mainPath) ? <Footer /> : ''}
    </Box>
  );
}

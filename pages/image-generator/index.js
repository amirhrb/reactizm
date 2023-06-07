import { useRouter } from 'next/router';

import { useAuth } from '@clerk/nextjs';
import { Box } from '@mui/material';
import LoadingBall from '../../components/elements/loaders/LoadingBall';

export default function index() {
  const { isLoaded, userId } = useAuth();
  const router = useRouter();
  // In case the user signs out while on the page.
  if (!isLoaded) {
    return (
      <Box
        sx={{
          pt: 2,
          height: '80svh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <LoadingBall />
      </Box>
    );
  } else if (isLoaded && !userId) {
    router.push('/sign-in');
  } else {
    return (
      <Box sx={{ width: '100%', minHeight: 'calc(100svh - 64px)' }}>
        <iframe
          src="https://sleepy-einstein-dg9urq1wb.iran.liara.run/dall-e"
          style={{
            border: 'none',
            width: '100%',
            minHeight: '90svh',
          }}
          seamless="seamless"
        >
          chat gpt
        </iframe>
      </Box>
    );
  }
}

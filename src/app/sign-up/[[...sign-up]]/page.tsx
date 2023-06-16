'use client';

import { SignUp, useAuth } from '@clerk/nextjs';
import { dark } from '@clerk/themes';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';

import LoadingBall from '@/components/elements/loaders/LoadingBall';
import { Suspense } from 'react';
import { useRouter } from 'next/navigation';

const SignUpPage = () => {
  const theme = useTheme();
  const router = useRouter();
  const { isLoaded, userId } = useAuth();
  if (isLoaded && userId) router.back();
  return (
    <Box
      sx={{
        pt: 2,
        display: 'flex',
        height: 'calc(100vh - 64px)',
        minHeight: '75vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {isLoaded ? (
        <Suspense fallback={<LoadingBall />}>
          <SignUp
            appearance={{
              baseTheme: theme.palette.mode === 'dark' ? dark : undefined,
            }}
            path="/sign-up"
            routing="path"
            signInUrl="/sign-in"
          />
        </Suspense>
      ) : (
        <LoadingBall />
      )}
    </Box>
  );
};

export default SignUpPage;

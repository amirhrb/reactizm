import { useRouter } from 'next/router';

import { SignIn, useAuth } from '@clerk/nextjs';
import { Box, Typography } from '@mui/material';
import React from 'react';

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
        <Typography variant="h5">در حال پردازش...</Typography>
      </Box>
    );
  } else if (isLoaded && !userId) {
    return (
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <SignIn path="/chat-gpt" routing="path" signUpUrl="/sign-up" />
      </Box>
    );
  } else {
    return (
      <Box sx={{ width: '100%', minHeight: 'calc(100svh - 60px)' }}>
        <iframe
          src="https://sleepy-einstein-dg9urq1wb.iran.liara.run"
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

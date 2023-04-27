import { SignIn, useAuth } from '@clerk/nextjs';
import { Box, Typography } from '@mui/material';

const SignInPage = () => {
  const { isLoaded } = useAuth();
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
  }
  return (
    <Box
      sx={{
        pt: 2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
    </Box>
  );
};

export default SignInPage;

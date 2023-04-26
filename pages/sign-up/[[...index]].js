import { SignUp, useAuth } from '@clerk/nextjs';
import { Box } from '@mui/material';

const SignUpPage = () => {
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
      <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
    </Box>
  );
};

export default SignUpPage;

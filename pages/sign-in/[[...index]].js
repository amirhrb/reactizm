import { SignIn } from '@clerk/nextjs';
import { Box } from '@mui/material';

const SignInPage = () => (
  <Box
    sx={{
      minHeight: '80svh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <SignIn path="/sign-in" routing="path" signUpUrl="/sign-up" />
  </Box>
);

export default SignInPage;

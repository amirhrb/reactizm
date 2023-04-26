import { SignIn } from '@clerk/nextjs';
import { Box } from '@mui/material';

const SignInPage = () => (
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

export default SignInPage;

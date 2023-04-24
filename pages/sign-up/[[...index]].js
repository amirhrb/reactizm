import { SignUp } from '@clerk/nextjs';
import { Box } from '@mui/material';

const SignUpPage = () => (
  <Box
    sx={{
      minHeight: '85svh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <SignUp path="/sign-up" routing="path" signInUrl="/sign-in" />
  </Box>
);

export default SignUpPage;

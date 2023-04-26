import { SignUp } from '@clerk/nextjs';
import { Box } from '@mui/material';

const SignUpPage = () => (
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

export default SignUpPage;

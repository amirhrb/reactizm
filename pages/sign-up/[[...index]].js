import { SignUp, useAuth } from '@clerk/nextjs';
import Box from '@mui/material/Box';
import LoadingBall from '../../components/elements/loaders/LoadingBall';

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
        <LoadingBall />
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

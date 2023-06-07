import {
  SignedIn,
  SignedOut,
  UserButton as User,
  useAuth,
} from '@clerk/nextjs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { dark } from '@clerk/themes';
import { useTheme } from '@mui/material';
import Link from 'next/link';

const UserButton = () => {
  const theme = useTheme();
  const { isLoaded } = useAuth();
  if (!isLoaded) {
    return (
      <Box
        sx={{
          width: 45,
          height: 45,
          borderRadius: '50%',
          backgroundColor: 'var(--mui-background-paper)',
        }}
      ></Box>
    );
  }
  return (
    <>
      <SignedIn
        appearance={{
          baseTheme: theme.palette.mode === 'dark' ? dark : undefined,
        }}
      >
        {/* Mount the UserButton component */}
        <User
          appearance={{
            baseTheme: theme.palette.mode === 'dark' ? dark : undefined,
          }}
        />
      </SignedIn>
      <SignedOut
        appearance={{
          baseTheme: theme.palette.mode === 'dark' ? dark : undefined,
        }}
      >
        <Link href="/sign-in">
          <Button variant="contained" sx={{ borderRadius: 5 }}>
            ورود
          </Button>
        </Link>
      </SignedOut>
    </>
  );
};

export default UserButton;

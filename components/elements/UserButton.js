import { UserButton as User, useAuth } from '@clerk/nextjs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { dark } from '@clerk/themes';
import { useTheme } from '@mui/material';
import Link from 'next/link';

const UserButton = () => {
  const theme = useTheme();
  const { isLoaded, isSignedIn } = useAuth();
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
  if (isSignedIn) {
    return (
      <User
        appearance={{
          baseTheme: theme.palette.mode === 'dark' ? dark : undefined,
        }}
      />
    );
  }
  return (
    <Link href="/sign-in">
      <Button variant="contained" sx={{ borderRadius: 5 }}>
        ورود
      </Button>
    </Link>
  );
};

export default UserButton;

'use client';

import IconButton from '@mui/material/IconButton';
import ReplayIcon from '@mui/icons-material/Replay';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center gap-y-4 items-center min-h-screen">
      <h2>یه چیزی درست پیش نرفت!</h2>
      <IconButton onClick={() => reset()} color="error" size="large">
        <ReplayIcon />
      </IconButton>
    </div>
  );
}

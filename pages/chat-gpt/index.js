import { Box } from '@mui/material';
import React from 'react';

export default function index() {
  return (
    <Box sx={{ width: '100%', minHeight: 'calc(100svh - 60px)' }}>
      <iframe
        src="https://sleepy-einstein-dg9urq1wb.iran.liara.run"
        style={{
          border: 'none',
          width: '100%',
          minHeight: '90svh',
        }}
        seamless="seamless"
      >
        chat gpt
      </iframe>
    </Box>
  );
}

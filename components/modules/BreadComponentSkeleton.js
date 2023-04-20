//mui
import { Box, Breadcrumbs } from '@mui/material';

function BreadComponent() {
  return (
    <Breadcrumbs
      maxItems={3}
      separator="/"
      aria-label="breadcrumb"
      sx={{
        marginTop: {
          xs: 1,
          sm: 3,
        },
      }}
    >
      <Box
        sx={{
          width: 60,
          height: 25,
          mb: 1,
          borderRadius: 3,
          backgroundColor: 'var(--mui-background-paper)',
        }}
      ></Box>
      <Box
        sx={{
          width: 60,
          height: 25,
          mb: 1,
          borderRadius: 3,
          backgroundColor: 'var(--mui-background-paper)',
        }}
      ></Box>
      <Box
        sx={{
          width: 60,
          height: 25,
          mb: 1,
          borderRadius: 3,
          backgroundColor: 'var(--mui-background-paper)',
        }}
      ></Box>
    </Breadcrumbs>
  );
}

export default BreadComponent;

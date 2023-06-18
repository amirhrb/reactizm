import { Divider } from '@mui/material';
import Grid from '@/components/MUI_COMPONENTS/Grid';
import Box from '@/components/MUI_COMPONENTS/Box';

const AuthorsInCol = () => {
  return (
    <>
      {[1, 2, 3].map((_num, index) => (
        <Grid item key={index}>
          <Grid
            container
            sx={{
              marginBottom: 1,
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: 45,
                height: 45,
                borderRadius: '50%',

                backgroundColor: 'var(--mui-background-paper)',
              }}
            ></Box>
            <Grid
              item
              sx={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '100px',
                marginRight: 1,
              }}
            >
              <Box
                sx={{
                  width: 100,
                  height: 15,
                  mb: 1,
                  borderRadius: 5,
                  backgroundColor: 'var(--mui-background-paper)',
                }}
              ></Box>
              <Box
                sx={{
                  width: 80,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: 'var(--mui-background-paper)',
                }}
              ></Box>
            </Grid>
          </Grid>
          {index < 2 ? <Divider /> : ''}
        </Grid>
      ))}
    </>
  );
};
export default AuthorsInCol;

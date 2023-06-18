'use Client';

//mui
import { Card, CardActions, Box } from '@mui/material';

function Post() {
  return (
    <Card
      component="article"
      sx={{
        m: 1,
        py: 1,
        width: 200,
        height: 320,
        borderRadius: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: 'var(--mui-background)',
        boxShadow: '1px 1px 10px var(--mui-background-paper)',
      }}
    >
      <Box
        sx={{
          width: '180px',
          height: '180px',
          borderRadius: 5,
          backgroundColor: 'var(--mui-background-paper)',
        }}
      ></Box>
      <Box
        sx={{
          height: '140px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        {/* <CardContent> */}
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
        {/* </CardContent> */}
        <CardActions sx={{ alignSelf: 'auto', mt: 0, p: 0 }}>
          <Box
            sx={{
              width: 25,
              height: 25,
              borderRadius: 2,
              backgroundColor: 'var(--mui-background-paper)',
            }}
          ></Box>

          <Box
            sx={{
              width: 25,
              height: 25,
              borderRadius: 2,
              backgroundColor: 'var(--mui-background-paper)',
            }}
          ></Box>
        </CardActions>
      </Box>
    </Card>
  );
}

export default Post;

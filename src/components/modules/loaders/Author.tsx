//mui
import Box from '@/components/MUI_COMPONENTS/Box';
import Grid from '@/components/MUI_COMPONENTS/Grid';

function Author() {
  return (
    <Box
      sx={{
        width: 300,
        height: 175,
        mt: 2,
        boxShadow: '1px 1px 10px var(--mui-background-paper)',
        borderRadius: 6,
      }}
    >
      <Grid
        container
        sx={{
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {/* profile */}
        <Grid
          container
          sx={{
            backgroundColor: 'var(--mui-profile)',
            marginBottom: 1,
            p: '5px',
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            flexWrap: 'nowrap',
            justifyContent: 'space-between',
            borderRadius: '24px 24px 24px 0',
          }}
        >
          <Grid
            item
            xs={6}
            sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
          >
            <Grid item sx={{ display: 'flex', alignItems: 'center' }}>
              <Box
                sx={{
                  width: 45,
                  height: 45,
                  borderRadius: '50%',
                  backgroundColor: 'var(--mui-background-paper)',
                }}
              ></Box>
            </Grid>
            <Grid
              item
              sx={{
                display: 'flex',
                flexDirection: 'column',
                maxWidth: '90px',
                marginRight: 0.2,
              }}
            >
              <Box
                sx={{
                  width: 90,
                  height: 10,
                  mb: 1,
                  borderRadius: 5,
                  backgroundColor: 'var(--mui-background-paper)',
                }}
              ></Box>
              <Box
                sx={{
                  width: 60,
                  height: 10,
                  borderRadius: 5,
                  backgroundColor: 'var(--mui-background-paper)',
                }}
              ></Box>
            </Grid>
          </Grid>
          <Grid
            item
            sx={{
              display: 'flex',
              flexDirection: 'column',
              maxWidth: '110px',
              marginRight: 0.1,
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                width: 80,
                height: 10,
                mb: 1,
                borderRadius: 5,
                backgroundColor: 'var(--mui-background-paper)',
              }}
            ></Box>
            <Box
              sx={{
                width: 90,
                height: 10,
                borderRadius: 5,
                backgroundColor: 'var(--mui-background-paper)',
              }}
            ></Box>
          </Grid>
        </Grid>
        {/* profile */}
        {/* posts part */}
        <Grid
          container
          width={260}
          direction="row"
          alignItems="center"
          justifyContent="center"
          wrap="nowrap"
          mt={1}
          mx={1}
        >
          {[1, 2, 3].map((_post, index) => (
            <Grid
              item
              key={index}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
            >
              <Box
                sx={{
                  width: 85,
                  height: 85,
                  mx: 0.5,
                  borderRadius: 5,
                  backgroundColor: 'var(--mui-background-paper)',
                }}
              ></Box>
            </Grid>
          ))}
        </Grid>
        {/* posts part */}
      </Grid>
    </Box>
  );
}

export default Author;

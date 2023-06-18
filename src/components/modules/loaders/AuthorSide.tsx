//elements
import AuthorsInCol from '@/components/elements/loaders/AuthorsInCol';

//MUI
import Grid from '@/components/MUI_COMPONENTS/Grid';
import Box from '@/components/MUI_COMPONENTS/Box';

function AuthorSide() {
  return (
    <div
      style={{
        position: 'fixed',
        maxHeight: 'calc(100vh - 200px)',
      }}
    >
      <Grid item>
        <Box
          sx={{
            width: 120,
            height: 25,
            borderRadius: 5,
            mb: 2,
            backgroundColor: 'var(--mui-background-paper)',
          }}
        ></Box>
      </Grid>
      <Grid display="flex" flexDirection="column" alignItems="flex-start">
        <Grid
          container
          maxHeight={300}
          overflow="scroll"
          alignItems="flex-start"
          direction="column"
          flexWrap="nowrap"
          rowGap={1}
        >
          <AuthorsInCol />
        </Grid>
      </Grid>
    </div>
  );
}

export default AuthorSide;

import dynamic from 'next/dynamic.js';
import Link from 'next/link';

//elements
// import ScrollbarY from '../elements/ScrollbarY.tsx';

import AuthorsInColSkeleton from '../elements/loaders/AuthorsInCol.js';
const AuthorsInCol = dynamic(() => import('../elements/AuthorsInCol.js'), {
  loading: () => <AuthorsInColSkeleton />,
  ssr: false,
});

//MUI
import { Grid, Typography, useTheme } from '@mui/material';

function AuthorSide({ authors }) {
  const theme = useTheme();
  return (
    <div
      style={{
        position: 'fixed',
        maxHeight: 'calc(100vh - 200px)',
      }}
    >
      <Grid item>
        <Link href="authors">
          <Typography
            variant="h6"
            sx={{ cursor: 'pointer', marginRight: 2, marginY: 1, padding: 0 }}
          >
            نویسندگان:
          </Typography>
        </Link>
      </Grid>
      <Grid display="flex" flexDirection="column" alignItems="flex-start">
        {/* <ScrollbarY
          r={3}
          thumbColor={theme.palette.primary.dark}
          trackColor={theme.palette.primary.main}
          wraperStyle={{ display: 'flex', flexDirection: 'row-reverse' }}
          trackStyle={{ margin: '0 5px' }}
        > */}
        <Grid
          container
          maxHeight={300}
          overflow="scroll"
          alignItems="flex-start"
          direction="column"
          flexWrap="nowrap"
          rowGap={1}
        >
          <AuthorsInCol authors={authors} />
        </Grid>
        {/* </ScrollbarY> */}
      </Grid>
    </div>
  );
}

export default AuthorSide;

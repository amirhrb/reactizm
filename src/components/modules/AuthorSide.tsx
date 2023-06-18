'use client';

import dynamic from 'next/dynamic';
import Link from 'next/link';

import AuthorsInColSkeleton from '../elements/loaders/AuthorsInCol';

const AuthorsInCol = dynamic(() => import('../elements/AuthorsInCol'), {
  loading: () => <AuthorsInColSkeleton />,
  ssr: false,
});

//MUI
import Grid from '../MUI_COMPONENTS/Grid';
import Typography from '../MUI_COMPONENTS/Typography';

function AuthorSide({ authors }: any) {
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
      </Grid>
    </div>
  );
}

export default AuthorSide;

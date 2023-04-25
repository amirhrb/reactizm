import dynamic from 'next/dynamic';
//MUI
import { Box, Grid } from '@mui/material';

//Apollo
import client from '../../helper/graphql/apollo-client';
import { AUTHORS_QUERY } from '../../helper/graphql/queries';

//loading skelet
import AuthorSkeleton from '../../components/modules/loaders/Author';
import BreadComponentSkeleton from '../../components/modules/loaders/BreadComponent';

//components
const Author = dynamic(() => import('../../components/modules/Author'), {
  loading: () => <AuthorSkeleton />,
  ssr: false,
});
const BreadComponent = dynamic(
  () => import('../../components/modules/BreadComponent'),
  {
    loading: () => <BreadComponentSkeleton />,
    ssr: false,
  }
);

function Authors({ authors }) {
  return (
    <Box sx={{ minHeight: '85vh' }}>
      <BreadComponent />
      <Grid
        container
        direction="column"
        sx={{
          overflow: 'auto',
          mt: 1,
          pb: 1,
          alignItems: { xs: 'center', md: 'space-between' },
          justifyContent: 'space-evenly',
        }}
        rowSpacing={2}
      >
        {authors.map((author) => (
          <Grid item key={author.id}>
            <Author author={author} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
export const getStaticProps = async () => {
  const {
    data: { authors },
  } = await client.query({ query: AUTHORS_QUERY });
  const sortedauthors = [...authors].reverse();
  return {
    props: { authors: [...sortedauthors] },
    revalidate: 60 * 60,
  };
};
export default Authors;

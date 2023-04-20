//MUI
import { Box, Grid } from '@mui/material';

//Apollo
import client from '../../helper/graphql/apollo-client';
import { AUTHORS_QUERY } from '../../helper/graphql/queries';

//components
import Author from '../../components/modules/Author';
import BreadComponent from '../../components/modules/BreadComponent';

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
  return {
    props: { authors },
    // revalidate: 60 * 60 * 24,
  };
};
export default Authors;

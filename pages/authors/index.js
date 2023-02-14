import { Box, Grid } from "@mui/material";
//MUI

//Apollo
import client from "../../graphql/apollo-client";
import { AUTHOR_QUERY } from "../../graphql/queries";

//components
import Author from "../../components/modules/Author";
import BreadComponent from "../../components/modules/BreadComponent";

function Authors({ authors }) {
  return (
    <Box sx={{ minHeight: "85vh" }}>
      <BreadComponent />
      {/*  */}
      {/* <Grid
        container
        direction="row"
        justifyContent="space-between"
        alignItems="flex-start"
        // columnSpacing={1}
        sx={{
          marginTop: {
            xs: 1,
            sm: 2,
          },
        }}
        width="100%"
      > */}
      {/* <Grid
          item
          sm={4}
          md={3}
          sx={{
            display: {
              xs: "none",
              sm: "flex",
            },
            mt: 2,
          }}
        >
           <AuthorSide authors={authors} /> 
        </Grid> */}
      {/* <Grid item 
      sm={8} md={9} 
      sx={{ p: 0 }}> */}
      <Grid
        container
        direction="column"
        sx={{ mt: 1, alignItems: { xs: "center", md: "space-between" } }}
        rowSpacing={2}
      >
        {authors.map((author) => (
          <Grid item key={author.id}>
            <Author author={author} />
          </Grid>
        ))}
      </Grid>
      {/* </Grid> */}
      {/* </Grid> */}
      {/*  */}
    </Box>
  );
}
export const getStaticProps = async () => {
  const {
    data: { authors },
  } = await client.query({ query: AUTHOR_QUERY });
  return {
    props: { authors },
  };
};
export default Authors;

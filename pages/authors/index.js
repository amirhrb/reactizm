import client from "../../graphql/apollo-client";
import { AUTHOR_QUERY } from "../../graphql/queries";

function Authors({ authors }) {
  console.log(authors);
  return (
    <div>
      {/* {authors.map((author) => (
        <p>{author.name}</p>
      ))} */}
    </div>
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

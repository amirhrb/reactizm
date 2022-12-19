import client from "../../graphql/apollo-client";
import { AUTHOR_QUERY } from "../../graphql/queries";

function Author() {
  return <div>Author</div>;
}
export const getStaticProps = async () => {
  const { data: authors } = await client.query({ query: AUTHOR_QUERY });
  return {
    props: { authors },
  };
};
export const getStaticPaths = async () => {
  const {
    data: { authors },
  } = await client.query({ query: AUTHOR_QUERY });
  const getAllPaths = async (authors) => {
    const slugs = await authors.map((author) => author.slug);
    return slugs.map((slug) => ({ params: { slug: slug } }));
  };
  const paths = await getAllPaths(authors);
  return {
    paths: paths,
    fallback: false,
  };
};

export default Author;

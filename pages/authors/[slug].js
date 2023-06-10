import Head from 'next/head';
import Author from '../../components/modules/Author';

//gql
import client from '../../helper/graphql/apollo-client';
import { AUTHORS_QUERY, AUTHOR_QUERY } from '../../helper/graphql/queries';

function Index({ author }) {
  return (
    <div>
      <Head>
        <title>{author.name}</title>
      </Head>
      <h1>{author.name}</h1>
      <Author author={author} />
    </div>
  );
}
export const getStaticPaths = async () => {
  const {
    data: { authors },
  } = await client.query({ query: AUTHORS_QUERY });
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

export const getStaticProps = async (ctx) => {
  try {
    const {
      data: { author },
    } = await client.query({
      query: AUTHOR_QUERY,
      variables: {
        Slug: ctx.params.slug,
      },
    });
    return {
      props: { author },
      revalidate: 60,
    };
  } catch (error) {
    console.log(error);
    return {
      props: {},
      // revalidate: 60 * 60 * 24,
    };
  }
};
export default Index;

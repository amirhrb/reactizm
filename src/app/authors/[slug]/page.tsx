import Head from 'next/head';

import Author from '@/components/modules/Author';

//gql
import { getAuthor } from '@/helper/graphql/useQueries';

async function Index({ slug }: any) {
  const data = await getAuthor(slug);
  if (data) {
    return (
      <div>
        <Head>
          <title>{data.author.name}</title>
        </Head>
        <h1>{data.author.name}</h1>
        <Author author={data.author} />
      </div>
    );
  }
}
export default Index;

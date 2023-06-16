'use client';

export const revalidate = 3600;

import Head from 'next/head';
import { useParams } from 'next/navigation';

import Author from '@/components/modules/Author';
//gql
import { useAuthor } from '@/helper/graphql/useQueries';

function Index() {
  const { slug } = useParams();
  const { data, error } = useAuthor({ Slug: slug });
  console.log(data);
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
export default Index;

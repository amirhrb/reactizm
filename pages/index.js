import Head from "../SEO/Head";
import Hero from "../components/templates/Hero";
// import Link from "next/link";

//client
// import client from "../graphql/apollo-client";

// //gql
// import { POST_QUERY } from "../graphql/queries";

export default function Home() {
  return (
    <>
      <Head>
        <title>آموزش نکات برنامه نویسی|Reactizm</title>
        <meta
          name="description"
          content="سایت آموزش برنامه نویسی و طراحی سایت ری‌اکتیزم"
        />
      </Head>
      <Hero />
    </>
  );
}

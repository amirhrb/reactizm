//css
import '../styles/globals.css';
// import "../styles/fonts.css";

//layout
import Layout from '../components/layouts';

//apollo client
import { ApolloProvider } from '@apollo/client';
import client from '../helper/graphql/apollo-client';

//mui theme
import Theme from '../helper/MUI/Theme';

//context
import DrawerContextProvider from '../helper/contexts/DrawerContextProvider';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Theme>
        <DrawerContextProvider>
          <Layout>
            <Head>
              <meta
                name="viewport"
                content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
              />
              <meta name="theme-color" content="#ffb300" />
              {/* this sets logo in Apple smartphones.*/}
              <link rel="apple-touch-icon" href="/logo-192x192.png" />
              {/* <!-- this sets the color of url bar in Apple smatphones --> */}
              <meta name="apple-mobile-web-app-status-bar" content="#ffb300" />
              <link rel="manifest" href="/manifest.json" />
              <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
          </Layout>
        </DrawerContextProvider>
      </Theme>
    </ApolloProvider>
  );
}

export default MyApp;

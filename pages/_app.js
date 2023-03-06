import { useEffect } from "react";

//css
import "../styles/globals.css";
import "../styles/fonts.css";

//layout
import Layout from "../components/layouts";

//apollo client
import { ApolloProvider } from "@apollo/client";
import client from "../graphql/apollo-client";

import Theme from "../MUI/Theme";

//context
import DrawerContextProvider from "../contexts/DrawerContextProvider";

function MyApp({ Component, pageProps }) {
  return (
    <ApolloProvider client={client}>
      <Theme>
        <DrawerContextProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </DrawerContextProvider>
      </Theme>
    </ApolloProvider>
  );
}

export default MyApp;

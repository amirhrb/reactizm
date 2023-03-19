//css
import "../styles/globals.css";
import "../styles/fonts.css";

//layout
import Layout from "../components/layouts";

//apollo client
import { ApolloProvider } from "@apollo/client";
import client from "../helper/graphql/apollo-client";

//mui theme
import Theme from "../helper/MUI/Theme";

//context
import DrawerContextProvider from "../helper/contexts/DrawerContextProvider";

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

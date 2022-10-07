import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://api-us-east-1.hygraph.com/v2/cl75aelyr568z01t80jab1o4p/master",
  cache: new InMemoryCache(),
});

export default client;

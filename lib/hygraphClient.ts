import { ApolloClient, InMemoryCache } from '@apollo/client';

const hygraphClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_HYGRAPH_GRAPHQL_URI,
  cache: new InMemoryCache(),
});

export default hygraphClient;

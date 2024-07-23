import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://prioritytire-be.ddev.site/graphql',
  cache: new InMemoryCache(),
});

export default client;

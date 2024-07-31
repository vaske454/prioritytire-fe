import { ApolloClient, InMemoryCache } from '@apollo/client';

const hygraphClient = new ApolloClient({
  uri: 'https://us-east-1-shared-usea1-02.cdn.hygraph.com/content/clywthf6m04nb07w98xb1fwo7/master',
  cache: new InMemoryCache(),
});

export default hygraphClient;

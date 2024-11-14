

import { ApolloClient, InMemoryCache } from '@apollo/client';

const localURI = process.env.GRAPHQL_ENDPOINT;

const client = new ApolloClient({
  uri: localURI,
  cache: new InMemoryCache(),
});

export default client;
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://mcseguros.com.mx/portfolio/graphql', // Reemplaza con la URL de tu endpoint de WPGraphQL
  cache: new InMemoryCache(),
});

export default client;
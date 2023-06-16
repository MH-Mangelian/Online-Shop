'use client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://legacy.graphqlbin.com/)%D8%8C',
  cache: new InMemoryCache(),
});

export default client;

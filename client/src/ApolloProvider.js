import React from 'react';
import {
  InMemoryCache,
  createHttpLink,
  ApolloProvider,
  ApolloClient,
} from '@apollo/client';

import App from './Landing';

const httpLink = createHttpLink({
  uri: 'http://localhost:1111',
});

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache(),
});

export default (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

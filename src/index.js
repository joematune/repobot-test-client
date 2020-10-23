import React from 'react'
import { render } from 'react-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'
import App from './App'

// An instance of ApolloClient defining the base URI and cache policy
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});

// ApolloProvider giving access to the client via ApolloConsumer
// from within the app - (Similar to React Context)
render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('root')
);

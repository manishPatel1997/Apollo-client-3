import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import RouteMain from './mainRouter.jsx';
const client = new ApolloClient({
  uri: 'https://hasura.io/learn/graphql/graphiql',
  cache: new InMemoryCache(),
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <RouteMain/>
    </ApolloProvider>
  </React.StrictMode>,
)

// React
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Apollo Client
import { ApolloProvider } from '@apollo/client';
import client from './apolloClient';

import './index.css';

// Redux
import { Provider } from 'react-redux'; // Import Provider from Redux
import store from './redux/store'; // Import your Redux store

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}> {/* Wrap ApolloProvider with Provider */}
      <App />
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

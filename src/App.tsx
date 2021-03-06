import { ApolloProvider } from '@apollo/client';
import { BrowserRouter } from 'react-router-dom';

import { apolloClient } from './lib/apollo';
import { Router } from './Router';

function App() {
  return (
    <div>
      <ApolloProvider client={apolloClient}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;

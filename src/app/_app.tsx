'use client';
import React from 'react';
import { QueryClientProvider, QueryClient } from 'react-query';
import Layout from './layout';

const App: React.FC<{
  Component: React.ComponentType<any>;
  pageProps: any;
}> = ({ Component, pageProps }) => {
  const queryClient = new QueryClient({});

  return (
    <QueryClientProvider client={queryClient}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </QueryClientProvider>
  );
};

export default App;

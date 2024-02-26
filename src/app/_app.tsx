import { QueryClientProvider, QueryClient } from 'react-query';
import React from 'react';
import { AuthProvider } from '@/src/hooks/authContext'; // Adjust the path accordingly

const App: React.FC<{ Component: React.ComponentType<any>; pageProps: any }> = ({ Component, pageProps }) => {
  const queryClient = new QueryClient({});

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </AuthProvider>
  );
};

export default App;

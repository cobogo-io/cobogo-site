import '../../styles/globals.css';
import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import React, { useEffect } from 'react';
import { useRouter } from 'next/router'

const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: 'https://api.devprotocol.xyz/v1/graphql',
  cache,
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (process.env.NEXT_PUBLIC_BULLZ === 'true' && router.pathname !== '/review') {
      router.push(`https://cobogo.social/${router.locale}/${router.asPath}`)
    }
  }, [router]);

  return (
    <ApolloProvider client={client}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default appWithTranslation(MyApp);

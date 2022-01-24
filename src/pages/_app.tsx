import '../../styles/globals.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { appWithTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import Footer from '../components/IndexPage/Footer';
import Social from '../components/IndexPage/Social';
import NavBar from '../components/NavBar';

import type { AppProps } from 'next/app';
const cache = new InMemoryCache();
const client = new ApolloClient({
  uri: 'https://api.devprotocol.xyz/v1/graphql',
  cache,
});

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useEffect(() => {
    if (
      process.env.NEXT_PUBLIC_BULLZ === 'true' &&
      router.pathname !== '/review'
    ) {
      const locale: string = router.locale ?? 'en';
      router.push(`https://cobogo.social/${locale}/${router.asPath}`);
    }
  }, [router]);

  return (
    <ApolloProvider client={client}>
      <NavBar />
      <Component {...pageProps} />
      <Social />
      <Footer />
    </ApolloProvider>
  );
}

export default appWithTranslation(MyApp);

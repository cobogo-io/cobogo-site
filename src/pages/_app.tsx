import '../../styles/globals.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import SEO from '../../next-seo-config';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Social from '../components/Social';

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
    <>
      <DefaultSeo {...SEO} />

      <ApolloProvider client={client}>
        <NavBar />
        <Component {...pageProps} />
        <Social />
        <Footer />
      </ApolloProvider>
    </>
  );
}

export default appWithTranslation(MyApp);

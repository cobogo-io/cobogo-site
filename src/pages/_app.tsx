import '../../styles/globals.css';

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import { appWithTranslation } from 'next-i18next';
import { DefaultSeo } from 'next-seo';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import SEO from '../../next-seo-config';
import Footer from '../components/Footer';
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
    <>
      <DefaultSeo
        {...SEO}
        additionalMetaTags={[
          {
            property: 'twitter:card',
            content: 'summary_large_image',
          },
          {
            property: 'twitter:description',
            content:
              'cobogo is an aggregator of protocols that has the goal of funding Content Creators sustainably through their own community, using DeFi. It is a platform that leverages Web 3.0 to monetize Creators while maximizing their growth and community building abilities.',
          },
          {
            property: 'twitter:title',
            content: 'cobogo',
          },
          {
            property: 'twitter:image',
            content: '/images/open-graph.png',
          },
          {
            property: 'twitter:url',
            content: 'https://cobogo.social/',
          },
          {
            property: 'twitter:domain',
            content: 'cobogo.social',
          },
          {
            property: 'twitter:image:alt',
            content: 'cobogo logo',
          },
        ]}
      />

      <ApolloProvider client={client}>
        <NavBar />

        <Component {...pageProps} />

        <Footer />
      </ApolloProvider>
    </>
  );
}

export default appWithTranslation(MyApp);

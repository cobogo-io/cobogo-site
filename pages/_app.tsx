import '../styles/globals.css'

import { DefaultSeo } from 'next-seo'

import SEO from '../next-seo-config'

import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
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
              'Cobogo is a Business Infrastructure for Creators. We provide the tools you will need to become a business and start raising funds to quickstart it.',
          },
          {
            property: 'twitter:title',
            content: 'Cobogo',
          },
          {
            property: 'twitter:image',
            content: '/images/open-graph.png',
          },
          {
            property: 'twitter:url',
            content: 'https://cobogo.io/',
          },
          {
            property: 'twitter:domain',
            content: 'cobogo.io',
          },
          {
            property: 'twitter:image:alt',
            content: 'Cobogo logo',
          },
        ]}
      />

      <Component {...pageProps} />
    </>
  )
}

export default MyApp

import '../styles/globals.css'

import { Analytics } from '@vercel/analytics/react'
import { appWithTranslation } from 'next-i18next'
import { DefaultSeo } from 'next-seo'
import { AppProps } from 'next/app'

import SEO from '../next-seo-config'

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
              'Cobogo is a Creator Investment Ecosystem. We provide the tools Creators need to become a business and start raising funds to grow their brands.',
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

      <Analytics />
    </>
  )
}

export default appWithTranslation(MyApp)

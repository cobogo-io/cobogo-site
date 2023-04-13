import Header from '@/components/Header'
import '@/styles/globals.css'
import { appWithTranslation } from 'next-i18next'
import { DefaultSeo } from 'next-seo'
import type { AppProps } from 'next/app'
import SEO from '../../next-seo.config'

function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />

      <Header />

      <Component {...pageProps} />
    </>
  )
}

export default appWithTranslation(App)

import '../styles/globals.css'

import { Header } from '../src/components/Header'
import { HeaderMobile } from '../src/components/HeaderMobile'

import type { AppProps } from 'next/app'
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <HeaderMobile />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp

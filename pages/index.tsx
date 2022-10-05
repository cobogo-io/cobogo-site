import { GetStaticProps, NextPage } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useEffect, useState } from 'react'

import { Footer } from '../src/components/folds/Footer'
import { Fundraise } from '../src/components/folds/Fundraise'
import { Main } from '../src/components/folds/Main'
import { Social } from '../src/components/folds/Social'
import { Start } from '../src/components/folds/Start'
import { Telegram } from '../src/components/folds/Telegram'
import { Text } from '../src/components/folds/Text'
import { Header } from '../src/components/Header'
import { HeaderMobile } from '../src/components/HeaderMobile'
import { ArrowDownIcon } from '../src/components/icons/ArrowDownIcon'

const Home: NextPage = () => {
  const [isMainFold, setIsMainFold] = useState(true)

  const [haveScroll, setHaveScroll] = useState(true)

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(async entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setIsMainFold(false)
      }
    })

    intersectionObserver.observe(document.querySelector('#sentinel') as Element)

    return () => intersectionObserver.disconnect()
  }, [])

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(async entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setHaveScroll(false)
      }
    })

    intersectionObserver.observe(
      document.querySelector('#sentinel-2') as Element
    )

    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <>
      {haveScroll && (
        <div className="fixed border-2 border-blue-100 right-[50px] bottom-[50px] p-3 animate-bounce">
          <ArrowDownIcon />
        </div>
      )}
      <Header />
      <HeaderMobile isMainFold={isMainFold} />
      <Main />
      <Text />
      <div id="sentinel" />
      <Social />
      <Start />
      <Fundraise />
      {/* <Ventures /> */}
      <Telegram />
      <Footer />
      <div id="sentinel-2" />
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ? locale : '', ['common'])),
    },
  }
}

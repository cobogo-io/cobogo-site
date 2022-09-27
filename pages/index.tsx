import { useEffect, useState } from 'react'

import { Flywheel } from '../src/components/folds/Flywheel'
import { Footer } from '../src/components/folds/Footer'
import { Fundraise } from '../src/components/folds/Fundraise'
import { Main } from '../src/components/folds/Main'
import { Social } from '../src/components/folds/Social'
import { Start } from '../src/components/folds/Start'
import { Telegram } from '../src/components/folds/Telegram'
import { Text } from '../src/components/folds/Text'
import { Ventures } from '../src/components/folds/Ventures'
import { Header } from '../src/components/Header'
import { HeaderMobile } from '../src/components/HeaderMobile'

import type { NextPage } from 'next'
const Home: NextPage = () => {
  const [isMainFold, setIsMainFold] = useState(true)

  useEffect(() => {
    const intersectionObserver = new IntersectionObserver(async entries => {
      if (entries.some(entry => entry.isIntersecting)) {
        setIsMainFold(false)
      }
    })

    intersectionObserver.observe(document.querySelector('#sentinel'))

    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <>
      <Header />
      <HeaderMobile isMainFold={isMainFold} />
      <Main />
      <Text />
      <div id="sentinel" />
      <Flywheel />
      <Social />
      <Start />
      <Fundraise />
      <Ventures />
      <Telegram />
      {/* <RelatedContent /> */}
      <Footer />
    </>
  )
}

export default Home

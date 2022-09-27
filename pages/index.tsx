import Image from 'next/image'
import { useEffect, useState } from 'react'

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

    intersectionObserver.observe(document.querySelector('#sentinel') as Element)

    return () => intersectionObserver.disconnect()
  }, [])

  return (
    <>
      <Header />
      <HeaderMobile isMainFold={isMainFold} />
      <Main />
      <Text />
      <div id="sentinel" />
      {/* <Flywheel /> */}
      <Social />
      <Start />
      <Fundraise />
      <Ventures />
      <Telegram />
      {/* <RelatedContent /> */}
      <Footer />
      <>
        <div className="fixed w-full min-h-screen h-full z-50 flex md:hidden">
          <Image
            src="/images/background-1-mobile.svg"
            objectFit="cover"
            layout="fill"
            alt="Background"
          />
        </div>
        <div className="fixed w-full min-h-screen h-full z-50 hidden md:flex">
          <Image
            src="/images/background-1.svg"
            objectFit="cover"
            layout="fill"
            alt="Background"
          />
        </div>
      </>
    </>
  )
}

export default Home

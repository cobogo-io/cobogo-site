import { useEffect, useState } from 'react'

import { Main } from '../src/components/folds/Main'
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
    <div className="bg-[url('/images/background-1.svg')] bg-cover bg-fixed">
      <Header />
      <HeaderMobile isMainFold={isMainFold} />
      <Main />
      <div id="sentinel" />
      {/* <Flywheel /> */}
      {/* <Social />
      <Start />
      <Fundraise />
      <Ventures />
      <Telegram /> */}
      {/* <RelatedContent /> */}
      {/* <Footer /> */}
    </div>
  )
}

export default Home

import { Flywheel } from '../src/components/folds/Flywheel'
import { Footer } from '../src/components/folds/Footer'
import { Fundraise } from '../src/components/folds/Fundraise'
import { Main } from '../src/components/folds/Main'
import { Social } from '../src/components/folds/Social'
import { Start } from '../src/components/folds/Start'
import { Telegram } from '../src/components/folds/Telegram'
import { Text } from '../src/components/folds/Text'
import { Ventures } from '../src/components/folds/Ventures'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <Main />
      <Text />
      <Flywheel />
      <Social />
      <Start />
      <Fundraise />
      <Ventures />
      <Telegram />
      {/* <RelatedContent /> */}
      <Footer />
    </div>
  )
}

export default Home

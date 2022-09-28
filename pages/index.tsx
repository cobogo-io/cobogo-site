import { Main } from '../src/components/folds/Main'
import { Header } from '../src/components/Header'
import { HeaderMobile } from '../src/components/HeaderMobile'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      <Header />
      <HeaderMobile />
      <Main />
    </div>
  )
}

export default Home

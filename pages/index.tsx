import {
  Animator,
  batch,
  Fade,
  MoveOut,
  ScrollContainer,
  ScrollPage,
} from 'react-scroll-motion'

import { Fundraise } from '../src/components/folds/Fundraise'
import { Main } from '../src/components/folds/Main'
import { Social } from '../src/components/folds/Social'
import { Start } from '../src/components/folds/Start'
import { Text } from '../src/components/folds/Text'
import { Ventures } from '../src/components/folds/Ventures'

import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <ScrollContainer>
      <ScrollPage>
        <Animator animation={batch(Fade(), MoveOut(0, -200))}>
          <Main />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), MoveOut(0, -200))}>
          <Text />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), MoveOut(0, -200))}>
          <Social />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), MoveOut(0, -200))}>
          <Start />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), MoveOut(0, -200))}>
          <Fundraise />
        </Animator>
      </ScrollPage>
      <ScrollPage>
        <Animator animation={batch(Fade(), MoveOut(0, -200))}>
          <Ventures />
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  )
}

export default Home

import Image from 'next/image'

import { BackgroundMain } from '../backgrounds/BackgroundMain'
import { Button } from '../Button'
import { Bullets } from '../images/Bullets'
import { TweetProfile } from '../images/TweetProfile'

export const Main = (): JSX.Element => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen h-full px-7">
      <div className="flex flex-col justify-start md:justify-center items-center min-h-screen h-full py-24">
        <div className="flex flex-col items-start md:items-center gap-16 z-40">
          <div className="flex md:hidden">
            <Image
              src="/images/cobogo-logo.svg"
              width={133}
              height={30}
              alt="Cobogo logo"
            />
          </div>
          <h1 className="text-4xl md:text-7xl max-w-[1030px] text-left md:text-center relative">
            Get <strong>incorporated</strong>, <strong>funded</strong>,{' '}
            <strong>recognized</strong>, and <strong>skyrocket</strong> your{' '}
            <strong>Creator career</strong>
            <div className="w-[240px] md:w-[470px] h-3 md:h-[19px] bg-white-100/20 absolute bottom-1 left-0 md:left-1/2 md:-translate-x-1/2" />
          </h1>
          <Button text="Tell me more" />
        </div>
        <div className="hidden md:flex items-center gap-4 absolute bottom-14 left-16 z-40">
          <TweetProfile />
          <p className="max-w-[377px] text-lg">
            “I wish there was a way to invest in social media influencers! Idk
            anything about the stock market and I find it boring.”{' '}
            <strong>- @MrBeast</strong>
          </p>
        </div>
      </div>
      <Bullets />
      <BackgroundMain />
    </div>
  )
}

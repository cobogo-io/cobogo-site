import Image from 'next/image'

import { Button } from '../Button'
import { Bullets } from '../images/Bullets'

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
          <h1 className="text-4xl md:text-7xl max-w-[1060px] text-left md:text-center relative">
            Become a <strong>business</strong>, raise{' '}
            <strong>creative capital</strong> continuously, and skyrocket your{' '}
            <strong>Creator career</strong>
            <div className="w-[240px] md:w-[460px] h-3 md:h-[19px] bg-white-100/20 absolute bottom-1 right-0 md:-translate-x-16 hidden md:flex" />
            <div className="w-[240px] md:w-[460px] h-3 md:h-[19px] bg-white-100/20 absolute bottom-1 left-0 md:-translate-x-16 flex md:hidden" />
          </h1>
          <a href="#text">
            <Button text="Tell me more" />
          </a>
        </div>
      </div>
      <Bullets />
      {/* <BackgroundMain /> */}
    </div>
  )
}

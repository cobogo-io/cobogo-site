import Image from 'next/image'

import { BackgroundMain } from '../backgrounds/BackgroundMain'

export const Telegram = (): JSX.Element => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen h-full px-7">
      <div className="flex flex-col justify-start md:justify-center items-center min-h-screen h-full w-full">
        <div className="w-full flex items-center justify-between max-w-[1000px] py-24 md:py-0">
          <div className="flex flex-col gap-6 md:gap-10 z-40 max-w-[447px] items-center md:items-start">
            <div className="flex md:hidden">
              <Image
                src="/images/telegram-logo.svg"
                width={154}
                height={128}
                alt="Telegram logo"
              />
            </div>
            <h1 className="text-2xl md:text-5xl text-center md:text-left">
              Join our <strong>Telegram</strong>
            </h1>
            <p className="text-lg md:text-xl text-center md:text-left">
              To never miss any content and to be able to share your ideas, side
              with more like-minded people in our <strong>community</strong>.
            </p>
            <a
              target="_blank"
              href="https://l.cobogo.io/telegram/"
              className="px-5 py-2 text-xl bg-gradient-to-r from-blue-100 via-green-100 to-pink-200 relative z-0 w-max"
              rel="noreferrer"
            >
              <div className="bg-blue-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[162px] h-[40px] z-10"></div>
              <strong className="z-20 relative">Join Telegram</strong>
            </a>
          </div>
          <div className="hidden md:flex min-h-screen h-full w-[375px] relative z-40">
            <Image
              src="/images/telegram.svg"
              objectFit="cover"
              layout="fill"
              alt="Telegram"
            />
          </div>
        </div>
      </div>
      <BackgroundMain />
    </div>
  )
}

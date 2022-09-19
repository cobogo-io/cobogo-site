import Image from 'next/image'

import { BackgroundMain } from '../backgrounds/BackgroundMain'
import { Button } from '../Button'

export const Telegram = (): JSX.Element => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
      <div className="w-full flex flex-col items-start px-52">
        <div className="flex flex-col gap-10 z-50 max-w-[447px]">
          <h1 className="text-5xl">
            Join our <strong>Telegram</strong>
          </h1>
          <p className="text-xl">
            To never miss any content and to be able to share your ideas, side
            with more like-minded people in our <strong>community</strong>.
          </p>
          <Button text="Join Telegram" />
        </div>
      </div>
      <div className="h-screen w-[375px] absolute z-10 right-40">
        <Image
          src="/images/telegram-image.svg"
          objectFit="cover"
          layout="fill"
          alt="telegram image"
        />
      </div>
      <BackgroundMain />
    </div>
  )
}

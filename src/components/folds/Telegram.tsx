import Image from 'next/image'

import { BackgroundMain } from '../backgrounds/BackgroundMain'
import { Button } from '../Button'

export const Telegram = (): JSX.Element => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
      <div className="w-full flex items-center justify-between max-w-[917px]">
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
        <div className="h-screen w-[375px] relative z-50">
          <Image
            src="/images/telegram-image.svg"
            objectFit="cover"
            layout="fill"
            alt="telegram image"
          />
        </div>
      </div>
      <BackgroundMain />
    </div>
  )
}

import Image from 'next/image'

import { BackgroundMain } from '../backgrounds/BackgroundMain'
import { BulletsTwo } from '../images/BulletsTwo'

export const Text = (): JSX.Element => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen px-7">
      <div className="flex flex-col justify-start md:justify-center items-center h-screen py-24">
        <div className="flex flex-col items-center gap-24 z-50">
          <h1 className="hidden md:block text-4xl max-w-[1030px] text-center relative">
            <strong>Cobogo allows Creators</strong> to become{' '}
            <strong>real businesses</strong>. We provide{' '}
            <strong>all the best tools</strong> for incorporating a US business,
            raising funds with whom matters the most and maximizing growth.
          </h1>
          <div className="flex flex-col gap-8">
            <strong className="flex md:hidden text-3xl max-w-[1030px] relative">
              Cobogo allows Creators to become real businesses.
            </strong>
            <p className="text-lg">
              We provide all the best tools for incorporating a US business,
              raising funds with whom matters the most and maximizing growth.
            </p>
            <div className="flex md:hidden">
              <Image
                src="/images/flywheel-mobile.png"
                width={378}
                height={238}
                alt="Flywheel mobile"
              />
            </div>
          </div>
          <BulletsTwo />
        </div>
      </div>
      <BackgroundMain />
    </div>
  )
}

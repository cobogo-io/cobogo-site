import Image from 'next/image'

import { BackgroundFlywheel } from '../backgrounds/BackgroundFlywheel'
import { BackgroundMain } from '../backgrounds/BackgroundMain'
import { FlywheelElement } from '../FlywheelElement'

export const Flywheel = (): JSX.Element => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-24 z-50">
        <div className="relative">
          <Image
            src="/images/flywheel.png"
            width={600}
            height={600}
            alt="flywheel"
          />
          <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <Image
              src="/images/cobogo.svg"
              width={88}
              height={100}
              alt="cobogo"
            />
          </div>
          <div className="flex flex-col justify-between absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 h-[500px] z-20">
            <FlywheelElement text="Social" color="blue" />
            <FlywheelElement text="Fundraise" color="green" inverted />
          </div>
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[500px] z-20">
            <FlywheelElement text="Ventures" color="gray" inRow />
            <FlywheelElement text="Start" color="pink" inRow inverted />
          </div>
        </div>
      </div>
      <BackgroundFlywheel />
      <BackgroundMain dark />
    </div>
  )
}

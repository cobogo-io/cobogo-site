import { motion, MotionValue } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

import { BackgroundFundraise } from '../backgrounds/BackgroundFundraise'
import { BackgroundSocial } from '../backgrounds/BackgroundSocial'
import { BackgroundStart } from '../backgrounds/BackgroundStart'
import { BackgroundVentures } from '../backgrounds/BackgroundVentures'
import { FlywheelElement } from '../FlywheelElement'
import { FundraiseImage } from '../images/FundraiseImage'
import { SocialImage } from '../images/SocialImage'
import { StartImage } from '../images/StartImage'
import { VenturesImage } from '../images/VenturesImage'

type Element = null | 'Social' | 'Start' | 'Fundraise' | 'Ventures'

interface FlywheelProps {
  opacity: MotionValue<string>
}

export const Flywheel = (props: FlywheelProps): JSX.Element => {
  const [elementOpened, setElementOpened] = useState<Element>(null)

  return (
    <motion.div
      style={{ opacity: props.opacity }}
      className="hidden md:flex flex-col justify-center items-center min-h-screen h-full sticky top-0"
    >
      <div className="flex flex-col items-center gap-24 z-40">
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
            <FlywheelElement
              text="Social"
              color="bg-blue-100"
              elementOpened={elementOpened}
              setElementOpened={setElementOpened}
            />
            <FlywheelElement
              text="Fundraise"
              color="bg-green-100"
              inverted
              elementOpened={elementOpened}
              setElementOpened={setElementOpened}
            />
          </div>
          <div className="flex justify-between absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[500px] z-20">
            <FlywheelElement
              text="Ventures"
              color="bg-gray-200"
              inRow
              elementOpened={elementOpened}
              setElementOpened={setElementOpened}
            />
            <FlywheelElement
              text="Start"
              color="bg-pink-200"
              inRow
              inverted
              elementOpened={elementOpened}
              setElementOpened={setElementOpened}
            />
          </div>
        </div>
      </div>
      {elementOpened === null && (
        <>
          {/* <BackgroundFlywheel /> */}
          {/* <BackgroundMain dark /> */}
        </>
      )}
      {elementOpened === 'Social' && (
        <div>
          <p className="absolute top-24 left-12 max-w-[270px]">
            Cobogo <strong>Social</strong> lets Creators present their business,
            metrics and services to investors, brands, and their own audience.
          </p>
          <SocialImage />
          <BackgroundSocial />
        </div>
      )}
      {elementOpened === 'Start' && (
        <>
          <p className="absolute top-24 left-12 max-w-[270px]">
            Cobogo <strong>Start</strong> is the simplest way for Creators to
            launch and run a US business without paperwork or legal headaches.
          </p>
          <StartImage />
          <BackgroundStart />
        </>
      )}
      {elementOpened === 'Fundraise' && (
        <>
          <p className="absolute top-24 left-12 max-w-[270px]">
            Cobogo <strong>Fundraise</strong> allows Creators to tokenize equity
            of their company and raise funds continuously using Rolling Safe.
          </p>
          <FundraiseImage />
          <BackgroundFundraise />
        </>
      )}
      {elementOpened === 'Ventures' && (
        <>
          <p className="absolute top-24 left-12 max-w-[270px]">
            Cobogo <strong>Ventures</strong> is a seed/early-stage investor for
            prominent Creators with a proprietary algorithm to estimate
            Creators’ valuation.
          </p>
          <VenturesImage />
          <BackgroundVentures />
        </>
      )}
    </motion.div>
  )
}

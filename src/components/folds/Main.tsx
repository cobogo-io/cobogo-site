import { motion } from 'framer-motion'
import Image from 'next/image'
import { Dispatch, SetStateAction, useRef, useState } from 'react'

import { Bullets } from '../images/Bullets'
import { BulletsTwo } from '../images/BulletsTwo'

interface FirstSectionProps {
  setSection: Dispatch<SetStateAction<number>>
}

const FirstSection = (props: FirstSectionProps): JSX.Element => {
  return (
    <div className="flex flex-col items-start md:items-center gap-16 z-40">
      <div className="flex md:hidden">
        <Image
          src="/images/cobogo-logo.svg"
          width={133}
          height={30}
          alt="Cobogo logo"
        />
      </div>
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3 }}
        exit={{ opacity: 0 }}
        className="text-4xl md:text-7xl max-w-[1030px] text-left md:text-center relative"
      >
        Get <strong>incorporated</strong>, <strong>funded</strong>,{' '}
        <strong>recognized</strong>, and <strong>skyrocket</strong> your{' '}
        <strong>Creator career</strong>
        <div className="w-[240px] md:w-[470px] h-3 md:h-[19px] bg-white-100/20 absolute bottom-1 left-0 md:left-1/2 md:-translate-x-1/2" />
      </motion.h1>
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 3, delay: 1 }}
        exit={{ opacity: 0 }}
        onClick={() => props.setSection(2)}
        className="px-5 py-2 text-xl bg-gradient-to-r from-blue-100 via-green-100 to-pink-200 relative z-0 w-max"
      >
        <div className="bg-blue-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[151px] h-[40px] z-10"></div>
        <strong className="z-20 relative">Tell me more</strong>
      </motion.button>
    </div>
  )
}

const SecondSection = (): JSX.Element => {
  return (
    <div className="flex flex-col items-center gap-20 z-40">
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
        exit={{ opacity: 0 }}
        className="hidden md:block text-[40px] leading-[60px] max-w-[1030px] text-center relative"
      >
        <strong>Cobogo allows Creators</strong> to become{' '}
        <strong>real businesses</strong>. <br />
        We provide <strong>all the best tools</strong> for incorporating a US
        business, raising funds with whom matters the most and maximizing
        growth.
      </motion.h1>
      <div className="flex flex-col gap-8">
        <motion.strong
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          exit={{ opacity: 0 }}
          className="flex md:hidden text-3xl max-w-[1030px] relative"
        >
          Cobogo allows Creators to become real businesses.
        </motion.strong>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 1 }}
          exit={{ opacity: 0 }}
          className="text-lg flex md:hidden"
        >
          We provide all the best tools for incorporating a US business, raising
          funds with whom matters the most and maximizing growth.
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 3, delay: 2 }}
          exit={{ opacity: 0 }}
          className="flex md:hidden"
        >
          <Image
            src="/images/flywheel-mobile.png"
            width={378}
            height={238}
            alt="Flywheel mobile"
          />
        </motion.div>
      </div>
      <BulletsTwo />
    </div>
  )
}

export const Main = (): JSX.Element => {
  const [section, setSection] = useState(1)

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen h-full px-7">
      <div className="flex flex-col justify-start md:justify-center items-center min-h-screen h-full py-24">
        {section === 1 ? (
          <FirstSection setSection={setSection} />
        ) : (
          <SecondSection />
        )}
      </div>
      {section === 1 && <Bullets />}
      {/* <BackgroundMain /> */}
    </div>
  )
}

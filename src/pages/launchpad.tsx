import Button from '@/components/Button'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export default function Index() {
  const homeHeaderRef = useRef(null)
  const homeHeaderRefIsInView = useInView(homeHeaderRef, { once: true })

  return (
    <div className="flex flex-col items-center relative">
      <div className="absolute top-[120px] right-0 max-w-[250px] w-full h-full max-h-[250px] flex lg:hidden">
        <Image
          src="/images/cobogo-launchpad-cube.svg"
          layout="fill"
          objectFit="cover"
          alt="Cobogo Launchpad cube"
        />
      </div>

      <div className="flex items-start lg:items-center justify-center w-full py-20 lg:py-36 px-7 lg:px-36 relative z-10 min-h-screen">
        <div ref={homeHeaderRef} />

        {homeHeaderRefIsInView && (
          <div className="w-full max-w-[1400px] flex items-center justify-between">
            <div className="flex flex-col max-w-[550px] w-full gap-10 lg:gap-[70px]">
              <motion.h1
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-[36px] lg:text-[51px] font-extrabold lg:leading-[70px]"
              >
                Getting Creators <br />
                <span className="text-pink">ready to fly</span>
              </motion.h1>

              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="text-[24px] lg:text-[30px] lg:leading-[45px]"
              >
                A complete training and acceleration program for Creators who
                need to professionalize and grow their businesses.
              </motion.p>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="flex items-center gap-7"
              >
                <Link
                  href="https://desafio.cobogo.io/"
                  className="flex"
                  target="_blank"
                >
                  <Button
                    text="apply now"
                    borderColor="border-pink-launchpad"
                  />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ x: 100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="hidden lg:flex"
            >
              <Image
                src="/images/cobogo-launchpad-cube.svg"
                width={662}
                height={662}
                alt="Cobogo Launchpad cube"
              />
            </motion.div>
          </div>
        )}
      </div>
    </div>
  )
}

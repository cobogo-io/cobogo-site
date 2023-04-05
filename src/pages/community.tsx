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
          src="/images/cobogo-community-cube.svg"
          layout="fill"
          objectFit="cover"
          alt="Cobogo Community cube"
        />
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="w-full max-w-[1110px] flex items-start lg:items-center justify-center py-20 lg:py-36 px-7 lg:px-0 relative z-10 min-h-screen">
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
                  The creator <br /> economy game <br /> changer
                </motion.h1>

                <motion.p
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="text-[24px] lg:text-[30px] lg:leading-[45px]"
                >
                  A community formed by Creators, investors and enthusiasts of
                  the Creator Economy created to boost knowledge, research and
                  development of this market, discussing new movements, trends
                  and selecting the next early stage Creators to be invested.
                </motion.p>

                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.5, duration: 1 }}
                  className="flex items-center gap-7"
                >
                  <Link
                    href="https://chat.whatsapp.com/LPPlb8bWgw38p9uZjrvlt0"
                    className="flex"
                    target="_blank"
                  >
                    <Button
                      text="join community"
                      borderColor="border-yellow-community"
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
                  src="/images/cobogo-community-cube.svg"
                  width={450}
                  height={450}
                  alt="Cobogo Community cube"
                />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

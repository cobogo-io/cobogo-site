import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import Button from './Button'

export default function LaunchpadMain() {
  const { t } = useTranslation('common')

  const mainFoldRef = useRef(null)
  const mainFoldRefIsInView = useInView(mainFoldRef, { once: true })

  return (
    <div className="flex flex-col items-center relative">
      <div className="absolute top-0 right-0">
        <Image
          src="/images/launchpad-main-background.svg"
          width={1300}
          height={1269}
          alt="Launchpad main background"
        />
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="w-full max-w-[1110px] flex items-start lg:items-center justify-center py-20 lg:py-36 px-7 lg:px-0 relative z-10 min-h-screen">
          <div ref={mainFoldRef} />

          {mainFoldRefIsInView && (
            <div className="w-full flex items-center justify-between">
              <div className="flex flex-col max-w-[500px] w-full gap-10 lg:gap-[50px]">
                <div className="flex flex-col w-full gap-10 lg:gap-[30px]">
                  <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25, duration: 1 }}
                    className="text-[36px] lg:text-[48px] font-extrabold lg:leading-[68px]"
                  >
                    {t('Getting Creators')} <br />
                    <span className="text-pink">{t('ready to fly')}</span>
                  </motion.h1>

                  <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-[24px] lg:text-[20px] lg:leading-[32px]"
                  >
                    {t(
                      'A complete training and acceleration program for Creators who need to professionalize and grow their businesses.'
                    )}
                  </motion.p>
                </div>

                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.75, duration: 1 }}
                  className="flex items-center gap-7"
                >
                  <Link
                    href="https://desafio.cobogo.io/"
                    className="flex"
                    target="_blank"
                  >
                    <Button
                      text={t('apply now')}
                      borderColor="border-pink-launchpad"
                    />
                  </Link>
                </motion.div>

                <div className="flex lg:hidden w-full flex-col items-center mt-10">
                  <Image
                    src="/images/launchpad-hero.svg"
                    width={209}
                    height={444}
                    alt="Launchpad hero"
                  />
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                className="hidden lg:flex"
              >
                <Image
                  src="/images/cobogo-launchpad-cube.svg"
                  width={510}
                  height={510}
                  alt="Cobogo Launchpad cube"
                />
              </motion.div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

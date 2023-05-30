import Image from 'next/image'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { useTranslation } from 'next-i18next'

export default function ClipPaths() {
  const { t } = useTranslation('common')

  const section1Ref = useRef(null)
  const section1RefIsInView = useInView(section1Ref, { once: true })
  const section2Ref = useRef(null)
  const section2RefIsInView = useInView(section2Ref, { once: true })
  const section3Ref = useRef(null)
  const section3RefIsInView = useInView(section3Ref, { once: true })

  return (
    <div className="flex flex-col w-full gap-14">
      <div className="bg-yellow w-full flex items-center justify-center py-14 px-7 clip-path-polygon-[0_0,_100%_0%,_100%_100%,_0_90%]">
        <div ref={section1Ref} />

        <div className="w-full max-w-[1110px] flex items-center justify-center lg:justify-end min-h-[230px]">
          {section1RefIsInView && (
            <motion.div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                className="text-[24px] lg:text-[28px] text-black font-bold drop-shadow-[3px_3px_0px_#00000047] relative"
              >
                {t('Benefits')}{' '}
                <Image
                  src="/images/cobogo-asset-3-image.svg"
                  width={60}
                  height={60}
                  alt="Cobogo asset 03"
                  className="absolute top-[-30px] left-[170px] hidden lg:flex"
                />
              </motion.h2>

              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-[20px] leading-[32px] text-black"
              >
                {t(
                  'Members of the Cobogo community will have access to a range of perks offered by Cobogo`s partner companies, from discounted tools to access to events for Creators.'
                )}
              </motion.p>
            </motion.div>
          )}
        </div>
      </div>

      <div className="w-full flex items-center justify-center px-7">
        <div ref={section2Ref} />

        <div className="w-full max-w-[1110px] flex items-center justify-center lg:justify-end min-h-[326px]">
          {section2RefIsInView && (
            <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                className="text-[24px] lg:text-[28px] font-bold drop-shadow-[3px_3px_0px_#00000047] relative"
              >
                {t('Training')}{' '}
                <Image
                  src="/images/cobogo-asset-1-image.svg"
                  width={100}
                  height={100}
                  alt="Cobogo asset 01"
                  className="absolute top-[-60px] left-[190px] hidden lg:flex"
                />
              </motion.h2>

              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-[20px] leading-[32px]"
              >
                {t(
                  'Stay ahead of the market and participate in acceleration programs specially designed for creators who want to reinvent themselves and become industry leaders, Creators 3.0. Connect with other creators who are following the same path and establish a valuable network of contacts within the community.'
                )}
              </motion.p>
            </div>
          )}
        </div>
      </div>

      <div className="bg-yellow-2 w-full flex items-center justify-center py-14 px-7 clip-path-polygon-[0_10%,_100%_0,_100%_100%,_0_100%]">
        <div ref={section3Ref} />

        <div className="w-full max-w-[1110px] flex items-center justify-center lg:justify-end min-h-[294px]">
          {section3RefIsInView && (
            <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                className="text-[24px] lg:text-[28px] text-black font-bold drop-shadow-[3px_3px_0px_#00000047]"
              >
                {t('Early Access')}{' '}
                <Image
                  src="/images/cobogo-asset-2-image.svg"
                  width={100}
                  height={100}
                  alt="Cobogo asset 02"
                  className="absolute top-[-60px] left-[310px] hidden lg:flex"
                />
              </motion.h2>

              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-[20px] leading-[32px] text-black"
              >
                {t(
                  `Get the unique opportunity to invest in innovative ideas before they're even widely publicized, getting early access to Cobogo platform's crowdfunding campaigns, along with exclusive discounts on offers.`
                )}
              </motion.p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

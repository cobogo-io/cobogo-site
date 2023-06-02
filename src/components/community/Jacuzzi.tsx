import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export default function Jacuzzi() {
  const { t } = useTranslation('common')

  const jacuzziRef = useRef(null)
  const jacuzziRefIsInView = useInView(jacuzziRef, { once: true })

  return (
    <div className="bg-yellow-community w-full flex items-center justify-center px-7 relative">
      <div ref={jacuzziRef} />

      <div className="w-full max-w-[1110px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-7 lg:gap-0 min-h-[865px]">
        {jacuzziRefIsInView && (
          <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7 py-14">
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              className="text-[24px] lg:text-[28px] text-black font-bold drop-shadow-[3px_3px_0px_#00000047]"
            >
              {t('Jacuzzi')} <br />
              {t('dos Creators')}
            </motion.h2>

            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="text-[20px] leading-[32px] text-black"
            >
              {t(
                'A podcast held on Cobogo´s Twitter from Monday to Friday. We invite Creators and other professionals in the field to discuss the Creator Economy.'
              )}
            </motion.p>

            <div className="flex flex-col gap-5 relative z-10">
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                src="/images/pedro-cardoso-image.png"
                alt="Pedro Cardoso image"
                className="rounded-[15px] w-[320px] h-[320px]"
              />

              <motion.strong
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.75, duration: 1 }}
                className="text-black text-xl leading-8 max-w-[320px]"
              >
                {t('Inovation, Creator Economy and web3 with CMO of Reserva')}
              </motion.strong>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                className="bg-blue-social w-max rounded-md px-3 relative ml-[35px]"
              >
                <img
                  src="/images/cobogo-social-cube-2.svg"
                  className="absolute z-10 left-[-35px] top-1/2 -translate-y-1/2 w-[41px] h-[41px]"
                  alt="Cobogo Social cube 2"
                />

                <strong className="drop-shadow-[1px_1px_0px_#00000047] text-lg">
                  Pedro Cardoso
                </strong>
              </motion.div>
            </div>
          </div>
        )}

        {jacuzziRefIsInView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 1 }}
            className="relative"
          >
            <img
              src="/images/jacuzzi-image.svg"
              alt="Jacuzzi image"
              className="h-[865px] hidden lg:flex"
            />

            <Link
              href="https://twitter.com/CobogoBR/status/1651556763852759042"
              target="_blank"
              className="bg-pink-launchpad absolute z-10 bottom-[85px] left-[20px] hidden lg:flex items-center rounded-md overflow-hidden h-[60px]"
            >
              <strong className="flex p-5 items-center justify-center text-sm text-[#79407F]">
                {t('Favorite the')}
                <br /> {t('Space link')}
              </strong>

              <div className="p-5 bg-black flex items-center justify-center">
                <Image
                  src="/images/twitter-icon.svg"
                  width={30}
                  height={30}
                  alt="Twitter icon"
                />
              </div>
            </Link>

            <Link
              href="https://open.spotify.com/show/4H9UPxaefQshxE8ehqhwvX"
              target="_blank"
              className="bg-pink-launchpad absolute z-10 bottom-[85px] right-[20px] hidden lg:flex items-center rounded-md overflow-hidden h-[60px]"
            >
              <strong className="flex p-5 items-center justify-center text-sm text-[#79407F]">
                {t('Listen to all')}
                <br /> {t('episodes')}
              </strong>

              <div className="p-5 bg-black flex items-center justify-center">
                <Image
                  src="/images/spotify-icon.svg"
                  width={30}
                  height={30}
                  alt="Spotify icon"
                />
              </div>
            </Link>
          </motion.div>
        )}
      </div>
      <div className="h-1/2 w-full bg-gradient-to-t from-white to-white/0 absolute bottom-0" />
    </div>
  )
}

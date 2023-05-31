import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useRef } from 'react'

export default function Launchpad() {
  const { t } = useTranslation('common')

  const launchpad1Ref = useRef(null)
  const launchpad1RefIsInView = useInView(launchpad1Ref, { once: true })
  const launchpad2Ref = useRef(null)
  const launchpad2RefIsInView = useInView(launchpad2Ref, { once: true })
  const launchpad3Ref = useRef(null)
  const launchpad3RefIsInView = useInView(launchpad3Ref, { once: true })
  const launchpad4Ref = useRef(null)
  const launchpad4RefIsInView = useInView(launchpad4Ref, { once: true })

  return (
    <>
      <div className="w-full flex items-center justify-center py-14 px-7">
        <div ref={launchpad1Ref} />

        <div className="w-full max-w-[1110px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-7 lg:gap-0 min-h-[334px]">
          {launchpad1RefIsInView && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
            >
              <Image
                src="/images/cobogo-launchpad-cube.svg"
                width={333}
                height={368}
                alt="Community peoples"
              />
            </motion.div>
          )}

          {launchpad1RefIsInView && (
            <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                className="text-[24px] lg:text-[28px] font-bold drop-shadow-[3px_3px_0px_#00000047] text-pink-launchpad"
              >
                <p className="text-[20px] lg:text-[24px] font-proxima-nova font-normal text-white">
                  {t('See how the')}
                </p>
                {t('Cobogo Challenge')}
              </motion.h2>

              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="text-[20px] leading-[32px]"
              >
                {t(
                  'The first acceleration program in the creators of the Cobogo Community.'
                )}
              </motion.p>
            </div>
          )}
        </div>
      </div>

      <div className="relative w-full">
        <img
          src="/images/cobogo-launchpad-cube-2.svg"
          className="h-full absolute right-0 hidden lg:flex"
        />

        <div className="bg-pink-launchpad w-full flex items-center justify-center py-14 px-7">
          <div ref={launchpad2Ref} />
          <div className="w-full max-w-[1110px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-7 lg:gap-0 min-h-[272px]">
            {launchpad2RefIsInView && (
              <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
                <motion.h2
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25, duration: 1 }}
                  className="text-[24px] lg:text-[28px] font-bold drop-shadow-[3px_3px_0px_#00000047] text-black"
                >
                  {t('+350 Creators registered')}
                </motion.h2>

                <motion.p
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-[20px] leading-[32px] text-black"
                >
                  {t(
                    'We had the participation of great Creators of the community in the Cobogo Challenge learning about entrepreneurship, startup techniques and attracting investments.'
                  )}
                </motion.p>
              </div>
            )}
          </div>
        </div>

        <div className="w-full flex items-center justify-center py-14 px-7 relative z-10 bg-background">
          <div ref={launchpad3Ref} />

          <div className="w-full max-w-[1110px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-7 lg:gap-0 relative z-10 min-h-[368px]">
            {launchpad3RefIsInView && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
              >
                <Image
                  src="/images/discord-image.svg"
                  width={393}
                  height={428}
                  alt="Discord image"
                />
              </motion.div>
            )}

            {launchpad3RefIsInView && (
              <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
                <motion.h2
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25, duration: 1 }}
                  className="text-[24px] lg:text-[28px] font-bold drop-shadow-[3px_3px_0px_#00000047]"
                >
                  {t('A journey of transformation')}
                </motion.h2>

                <motion.p
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-[20px] leading-[32px]"
                >
                  {t(
                    'There were 8 meetings on the Discord of the Cobogo Community over 4 weeks, where Creators met to learn and discuss important topics in this new stage of the Creator Economy: The role of the Creator as a disruptive business entrepreneur and how to attract investments to leverage their most ambitious projects.'
                  )}
                </motion.p>
              </div>
            )}
          </div>
        </div>

        <div className="bg-pink-launchpad w-full flex items-center justify-center py-14 px-7">
          <div ref={launchpad4Ref} />

          <div className="w-full max-w-[1110px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-7 lg:gap-0 min-h-[368px]">
            {launchpad4RefIsInView && (
              <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
                <motion.h2
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25, duration: 1 }}
                  className="text-[24px] lg:text-[28px] font-bold drop-shadow-[3px_3px_0px_#00000047] text-black"
                >
                  {t('Community that supports itself')}
                </motion.h2>

                <motion.p
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="text-[20px] leading-[32px] text-black"
                >
                  {t(
                    'After the Cobogo Challenge, all Creators who have gone through this transformative program continue together, exchanging experiences, tips and supporting each other`s success. We believe that being in contact with people of the same level of consciousness is important for the growth of all Creators.'
                  )}
                </motion.p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

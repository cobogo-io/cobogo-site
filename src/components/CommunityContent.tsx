import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Button from './Button'

export default function CommunityContent() {
  const { t } = useTranslation('common')

  const { locale } = useRouter()

  const section1Ref = useRef(null)
  const section1RefIsInView = useInView(section1Ref, { once: true })

  const section2Ref = useRef(null)
  const section2RefIsInView = useInView(section2Ref, { once: true })

  const section3Ref = useRef(null)
  const section3RefIsInView = useInView(section3Ref, { once: true })

  const section4Ref = useRef(null)
  const section4RefIsInView = useInView(section4Ref, { once: true })

  const membersRef = useRef(null)
  const membersRefIsInView = useInView(membersRef, { once: true })

  const footerRef = useRef(null)
  const footerRefIsInView = useInView(footerRef, { once: true })

  return (
    <section className="flex flex-col w-full relative">
      <img
        src="/images/community-footer-background-mobile.svg"
        alt="Community footer background mobile"
        className="absolute bottom-0 flex lg:hidden w-full"
      />

      <div className="absolute bottom-0 left-0 z-10 hidden lg:flex">
        <Image
          src="/images/community-footer-cubes.svg"
          width={510}
          height={1527}
          alt="Community footer cubes"
        />
      </div>

      <div className="absolute bottom-0 right-0 z-10 hidden lg:flex">
        <Image
          src="/images/community-footer-cubes-2.svg"
          width={459}
          height={871}
          alt="Community footer cubes 2"
        />
      </div>

      {section1RefIsInView && (
        <div className="absolute left-0 w-full bottom-[2500px] z-10 hidden lg:flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 1 }}
            className="w-full max-w-[1110px]"
          >
            <Image
              src="/images/community-hero.svg"
              width={725}
              height={1312}
              alt="Community hero"
            />
          </motion.div>
        </div>
      )}

      <div className="flex items-center justify-center w-full py-16 lg:py-32 lg:px-0 relative">
        <div className="w-full flex flex-col items-end relative">
          <div className="flex flex-col w-full gap-14 lg:gap-20">
            <div className="bg-yellow w-full flex items-center justify-center py-32 px-7 clip-path-polygon-[0_0,_100%_10%,_100%_100%,_0_90%]">
              <div ref={section1Ref} />

              <div className="w-full max-w-[1110px] flex items-center justify-center lg:justify-end min-h-[230px]">
                {section1RefIsInView && (
                  <motion.div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
                    <motion.h2
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.25, duration: 1 }}
                      className="text-[24px] lg:text-[28px] text-black font-bold drop-shadow-[3px_3px_0px_#00000047]"
                    >
                      {t('Research')}
                    </motion.h2>

                    <motion.p
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="text-[20px] leading-[32px] text-black"
                    >
                      {t(
                        'The community counts with an investment analysis specialized team capable of generating reports on Creators Economy trends and the future of Creators as investment assets.'
                      )}
                    </motion.p>
                  </motion.div>
                )}
              </div>
            </div>

            <div className="w-full flex items-center justify-center px-7">
              <div ref={section2Ref} />

              <div className="w-full max-w-[1110px] flex items-center justify-center lg:justify-end min-h-[294px]">
                {section2RefIsInView && (
                  <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
                    <motion.h2
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.25, duration: 1 }}
                      className="text-[24px] lg:text-[28px] font-bold drop-shadow-[3px_3px_0px_#00000047]"
                    >
                      {t('Creators Valuation')}
                    </motion.h2>

                    <motion.p
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="text-[20px] leading-[32px]"
                    >
                      {t(
                        'One of the greatest values ​​created by the community will be the ability to assess and valuate Creators for the first time in the world. This will be the most important point for defining Creators valorization potential and will create a new universal relevance metric for Creators.'
                      )}
                    </motion.p>
                  </div>
                )}
              </div>
            </div>

            <div className="bg-yellow-2 w-full flex items-center justify-center py-32 px-7 clip-path-polygon-[0_10%,_100%_0,_100%_100%,_0_100%]">
              <div ref={section3Ref} />

              <div className="w-full max-w-[1110px] flex items-center justify-center lg:justify-end min-h-[230px]">
                {section3RefIsInView && (
                  <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
                    <motion.h2
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.25, duration: 1 }}
                      className="text-[24px] lg:text-[28px] text-black font-bold drop-shadow-[3px_3px_0px_#00000047]"
                    >
                      {t('Creators Selection')}
                    </motion.h2>

                    <motion.p
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="text-[20px] leading-[32px] text-black"
                    >
                      {t(
                        `Community members will be responsible for discovering, discussing and proposing the next Creators to be invested by our Pioneer Fund, Cobogo's Creator focused investment fund.`
                      )}
                    </motion.p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="bg-white w-full flex items-center justify-center py-32 px-7">
            <div ref={section4Ref} />

            <div className="w-full max-w-[1110px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-7 lg:gap-0 min-h-[566px]">
              {section4RefIsInView && (
                <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
                  <motion.h2
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25, duration: 1 }}
                    className="text-[24px] lg:text-[28px] text-black font-bold drop-shadow-[3px_3px_0px_#00000047]"
                  >
                    {t('The power of community to boost invested creators')}
                  </motion.h2>

                  <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-[20px] leading-[32px] text-black"
                  >
                    {t(
                      'Since the Creators from our community are the ones selecting and proposing early stage Creators to our fund, their rule afterall is to boost invested Creators digital reach and valuation after they receive the invesment. This is how our community can create value and push the creator economy foward.'
                    )}
                  </motion.p>
                </div>
              )}

              {section4RefIsInView && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.25, duration: 1 }}
                >
                  <Image
                    src="/images/community-peoples.svg"
                    width={533}
                    height={568}
                    alt="Community peoples"
                  />
                </motion.div>
              )}
            </div>
          </div>

          <div className="w-full flex items-center justify-center py-32 px-7">
            <div ref={membersRef} />

            <div className="w-full max-w-[1110px] flex flex-col items-center justify-center min-h-[566px]">
              {membersRefIsInView && (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25, duration: 1 }}
                  className="bg-white/5 flex flex-col lg:flex-row items-stretch rounded-[15px] overflow-hidden w-full max-w-[860px]"
                >
                  <div className="bg-white/5 p-5 lg:p-10 flex items-center justify-center">
                    <Image
                      src="/images/cobogo-community-cube.svg"
                      width={150}
                      height={150}
                      alt="Cobogo Community cube"
                    />
                  </div>

                  <div className="p-8 lg:p-16 flex flex-col justify-center gap-3 w-full h-full">
                    <strong className="text-2xl lg:text-3xl leading-8">
                      Over 650
                    </strong>

                    <p className="text-lg lg:text-[22px] leading-8">
                      Creators, Investors and Creator Economy professionals{' '}
                      getting together.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full pb-[650px] lg:pb-[530px] pt-12 lg:pt-[115px] px-7 lg:px-0 z-20">
        <div ref={footerRef} />

        <div className="w-full max-w-[1110px] flex flex-col lg:items-center gap-12 relative min-h-[198px]">
          {footerRefIsInView && (
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.25, duration: 1 }}
              className="font-bold leading-[50px] text-[30px] lg:text-[34px] lg:text-center w-full max-w-[810px]"
            >
              {t('Join the')} <br className="flex lg:hidden" />{' '}
              {t('community that is')} <br className="flex lg:hidden" />
              {t('reshaping the')} <br className="flex lg:hidden" />{' '}
              {t('future of the')} <br className="flex lg:hidden" />
              Creator Economy
            </motion.h2>
          )}

          {footerRefIsInView && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
            >
              <Link
                href={
                  locale === 'pt'
                    ? 'https://docs.google.com/forms/d/e/1FAIpQLSdFwCXoiGKWTrgY1FgKYnPMB3ft0Aox7pZ_30tUU4qBJWoctQ/viewform?usp=share_link/'
                    : 'https://discord.gg/93kBxA5mbT/'
                }
                className="flex"
                target="_blank"
              >
                <Button
                  text={t('join community')}
                  borderColor="border-yellow-community"
                />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

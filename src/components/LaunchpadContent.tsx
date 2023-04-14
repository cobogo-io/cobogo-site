import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'
import Button from './Button'

export default function LaunchpadContent() {
  const section1Ref = useRef(null)
  const section1RefIsInView = useInView(section1Ref, { once: true })

  const section2Ref = useRef(null)
  const section2RefIsInView = useInView(section2Ref, { once: true })

  const section3Ref = useRef(null)
  const section3RefIsInView = useInView(section3Ref, { once: true })

  const footerRef = useRef(null)
  const footerRefIsInView = useInView(footerRef, { once: true })

  return (
    <section className="flex flex-col w-full relative">
      <div className="absolute bottom-0 w-full h-[775px] z-10 hidden lg:flex">
        <Image
          src="/images/launchpad-footer-background.svg"
          fill
          alt="Launchpad footer background"
        />
      </div>

      <div className="absolute bottom-[-250px] right-0 z-20 flex lg:hidden">
        <Image
          src="/images/launchpad-footer-background-mobile.svg"
          width={341}
          height={842}
          alt="Launchpad footer background mobile"
        />
      </div>

      <div className="absolute bottom-0 left-0 z-10 hidden lg:flex">
        <Image
          src="/images/launchpad-footer-cubes.svg"
          width={510}
          height={1527}
          alt="Launchpad footer cubes"
        />
      </div>

      <div className="absolute bottom-0 right-0 z-10 hidden lg:flex">
        <Image
          src="/images/launchpad-footer-cubes-2.svg"
          width={459}
          height={871}
          alt="Launchpad footer cubes 2"
        />
      </div>

      {section1RefIsInView && (
        <div className="absolute left-0 w-full bottom-[950px] z-10 hidden lg:flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
            className="w-full max-w-[1110px]"
          >
            <Image
              src="/images/launchpad-hero.svg"
              width={494}
              height={1056}
              alt="Launchpad hero"
            />
          </motion.div>
        </div>
      )}

      <div className="flex items-center justify-center w-full py-16 lg:py-32 lg:px-0 relative">
        <div className="w-full flex flex-col items-end relative gap-14 lg:gap-20">
          <div className="min-h-[30px] w-full text-center">
            {section1RefIsInView && (
              <motion.p
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="leading-[30px] text-[20px] lg:text-[26px] w-full text-center px-7"
              >
                The program is divided into <strong>3 main phases</strong> for
                Creators in different stages.
              </motion.p>
            )}
          </div>

          <div className="bg-pink-2 w-full flex items-center justify-center py-32 px-7 clip-path-polygon-[0_0,_100%_10%,_100%_100%,_0_90%]">
            <div ref={section1Ref} />

            <div className="w-full max-w-[1110px] flex items-center justify-center lg:justify-end min-h-[294px]">
              {section1RefIsInView && (
                <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
                  <motion.h2
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-[24px] lg:text-[28px] text-black font-bold drop-shadow-[3px_3px_0px_#00000047]"
                  >
                    Product development
                  </motion.h2>

                  <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-[20px] leading-[32px] text-black"
                  >
                    First of all Creators need to understand how to create value
                    based on their knowledge, experience and influence power. In
                    this phase they can understand everything needed to develop
                    from scratch a good a profitable solution for their niche.
                  </motion.p>
                </div>
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
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-[24px] lg:text-[28px] font-bold drop-shadow-[3px_3px_0px_#00000047]"
                  >
                    Business management
                  </motion.h2>

                  <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-[20px] leading-[32px]"
                  >
                    As important as having a great product is to understand how
                    real businesses are managed and how the market works.
                    Learning from experts in different entrepreneurship and
                    innovation fields Creators start to see themselves as
                    startups and put their skin in the game to prove their
                    value.
                  </motion.p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-pink-3 w-full flex items-center justify-center py-32 px-7 clip-path-polygon-[0_10%,_100%_0,_100%_90%,_0_100%]">
            <div ref={section3Ref} />

            <div className="w-full max-w-[1110px] flex items-center justify-center lg:justify-end min-h-[262px]">
              {section3RefIsInView && (
                <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
                  <motion.h2
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-[24px] lg:text-[28px] text-black font-bold drop-shadow-[3px_3px_0px_#00000047]"
                  >
                    Fundraising strategies
                  </motion.h2>

                  <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 1, duration: 1 }}
                    className="text-[20px] leading-[32px] text-black"
                  >
                    The end-game for visionary Creators is to fund raise and
                    scale their busineses. In the last phase of our accelaration
                    program they learn how venture capital works, how to reach,
                    approach and conquer
                    {`investor's`} attention and interest to their projects.
                  </motion.p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full pb-96 lg:pb-[340px] pt-12 lg:pt-[115px] px-7 lg:px-0 z-20">
        <div ref={footerRef} />

        <div className="w-full max-w-[1110px] flex flex-col lg:items-center gap-12 relative min-h-[148px]">
          {footerRefIsInView && (
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="font-bold leading-[50px] text-[30px] lg:text-[34px]"
            >
              Become a <br className="flex lg:hidden" />
              Creator 3.0
            </motion.h2>
          )}

          {footerRefIsInView && (
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <Link
                href="https://desafio.cobogo.io/"
                className="flex"
                target="_blank"
              >
                <Button text="apply now" borderColor="border-pink-launchpad" />
              </Link>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  )
}

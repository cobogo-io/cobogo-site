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
  const launchpad1Ref = useRef(null)
  const launchpad1RefIsInView = useInView(launchpad1Ref, { once: true })
  const launchpad2Ref = useRef(null)
  const launchpad2RefIsInView = useInView(launchpad2Ref, { once: true })
  const launchpad3Ref = useRef(null)
  const launchpad3RefIsInView = useInView(launchpad3Ref, { once: true })
  const launchpad4Ref = useRef(null)
  const launchpad4RefIsInView = useInView(launchpad4Ref, { once: true })
  const membersRef = useRef(null)
  const membersRefIsInView = useInView(membersRef, { once: true })
  const jacuzziRef = useRef(null)
  const jacuzziRefIsInView = useInView(jacuzziRef, { once: true })
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
        <div className="absolute left-0 w-full bottom-[4720px] z-10 hidden lg:flex items-center justify-center">
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

      <div className="flex items-center justify-center w-full pt-16 lg:pt-32 lg:px-0 relative">
        <div className="w-full flex flex-col items-end relative">
          <div className="flex flex-col w-full gap-14">
            <div className="bg-yellow w-full flex items-center justify-center py-14 px-7 clip-path-polygon-[0_0,_100%_10%,_100%_100%,_0_90%]">
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
                      {t('Benefits')}
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

              <div className="w-full max-w-[1110px] flex items-center justify-center lg:justify-end min-h-[294px]">
                {section2RefIsInView && (
                  <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
                    <motion.h2
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.25, duration: 1 }}
                      className="text-[24px] lg:text-[28px] font-bold drop-shadow-[3px_3px_0px_#00000047]"
                    >
                      {t('Training')}
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

              <div className="w-full max-w-[1110px] flex items-center justify-center lg:justify-end min-h-[230px]">
                {section3RefIsInView && (
                  <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
                    <motion.h2
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.25, duration: 1 }}
                      className="text-[24px] lg:text-[28px] text-black font-bold drop-shadow-[3px_3px_0px_#00000047]"
                    >
                      {t('Early Access')}
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

          <div className="bg-yellow-community w-full flex items-center justify-center px-7 relative">
            <div ref={jacuzziRef} />

            <div className="w-full max-w-[1110px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-7 lg:gap-0 min-h-[1020px]">
              {jacuzziRefIsInView && (
                <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7 py-32">
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
                      {t(
                        'Inovation, Creator Economy and web3 with CMO of Reserva'
                      )}
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
                    className="h-full hidden lg:flex"
                  />

                  <Link
                    href="https://twitter.com/CobogoBR/status/1651556763852759042"
                    target="_blank"
                    className="bg-pink-launchpad absolute z-10 bottom-[85px] left-[65px] hidden lg:flex items-center rounded-md overflow-hidden h-[60px]"
                  >
                    <strong className="flex h-[60px] w-[130px] items-center justify-center text-sm text-[#79407F]">
                      {t('Favorite the')}
                      <br /> {t('Space link')}
                    </strong>

                    <div className="h-[60px] w-[130px] bg-black flex items-center justify-center">
                      <Image
                        src="/images/twitter-icon-2.svg"
                        width={38}
                        height={31}
                        alt="Twitter icon 2"
                      />
                    </div>
                  </Link>

                  <Link
                    href="https://open.spotify.com/show/4H9UPxaefQshxE8ehqhwvX"
                    target="_blank"
                    className="bg-pink-launchpad absolute z-10 bottom-[85px] right-[65px] hidden lg:flex items-center rounded-md overflow-hidden h-[60px]"
                  >
                    <strong className="flex h-[60px] w-[130px] items-center justify-center text-sm text-[#79407F]">
                      {t('Listen to all')}
                      <br /> {t('episodes')}
                    </strong>

                    <div className="h-[60px] w-[130px] bg-black flex items-center justify-center">
                      <Image
                        src="/images/spotify-icon.svg"
                        width={84}
                        height={40}
                        alt="Spotify icon"
                      />
                    </div>
                  </Link>
                </motion.div>
              )}
            </div>

            <div className="h-1/2 w-full bg-gradient-to-t from-white to-white/0 absolute bottom-0" />
          </div>

          <div className="w-full flex items-center justify-center py-14 px-7">
            <div ref={launchpad1Ref} />

            <div className="w-full max-w-[1110px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-7 lg:gap-0">
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
                    className="text-[24px] lg:text-[28px] font-bold drop-shadow-[3px_3px_0px_#00000047]"
                  >
                    {t('See how the Cobogo Challenge went')}
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

          <div className="w-full relative">
            <div className="bg-pink-launchpad w-full flex items-center justify-center py-14 px-7">
              <div ref={launchpad2Ref} />

              <div className="w-full max-w-[1110px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-7 lg:gap-0">
                {launchpad2RefIsInView && (
                  <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
                    <motion.h2
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.25, duration: 1 }}
                      className="text-[24px] lg:text-[28px] font-bold drop-shadow-[3px_3px_0px_#00000047] text-black"
                    >
                      {t('+350 Creators inscritos')}
                    </motion.h2>

                    <motion.p
                      initial={{ y: 100, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.5, duration: 1 }}
                      className="text-[20px] leading-[32px] text-black"
                    >
                      {t(
                        'Tivemos a participação de grandes Creators da comunidade no Desafio Cobogo aprendendo sobre empreendedorismos, técnicas de startups e captação de investimentos.'
                      )}
                    </motion.p>
                  </div>
                )}
              </div>
            </div>

            <div className="w-full flex items-center justify-center py-14 px-7 relative">
              <div ref={launchpad3Ref} />

              <div className="w-full max-w-[1110px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-7 lg:gap-0 relative z-10">
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
                        'Tivemos a participação de grandes Creators da comunidade no Desafio Cobogo aprendendo sobre empreendedorismos, técnicas de startups e captação de investimentos.'
                      )}
                    </motion.p>
                  </div>
                )}

                {launchpad3RefIsInView && (
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
              </div>
            </div>

            <div className="bg-pink-launchpad w-full flex items-center justify-center py-14 px-7">
              <div ref={launchpad4Ref} />

              <div className="w-full max-w-[1110px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-7 lg:gap-0">
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
                        'Tivemos a participação de grandes Creators da comunidade no Desafio Cobogo aprendendo sobre empreendedorismos, técnicas de startups e captação de investimentos.'
                      )}
                    </motion.p>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center py-32 px-7">
            <div ref={membersRef} />
            <div className="w-full max-w-[1110px] flex flex-col items-center justify-center min-h-[108px] lg:min-h-[240px]">
              {membersRefIsInView && (
                <motion.div
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25, duration: 1 }}
                  className="lg:bg-white/5 flex flex-col lg:flex-row items-stretch rounded-[15px] overflow-hidden w-full max-w-[860px]"
                >
                  <div className="bg-white/5 p-5 lg:p-10 hidden lg:flex items-center justify-center">
                    <Image
                      src="/images/cobogo-community-cube.svg"
                      width={150}
                      height={150}
                      alt="Cobogo Community cube"
                    />
                  </div>

                  <div className="p-0 lg:p-16 flex flex-col justify-center gap-3 w-full h-full">
                    <strong className="text-2xl lg:text-3xl leading-8">
                      {t('We are more than')}{' '}
                      <span className="text-yellow-community">950</span>
                    </strong>

                    <p className="text-lg lg:text-[22px] leading-8">
                      {t(
                        'Visionary creators, investors, enthusiasts and professionals passionate about the Creator Economy.'
                      )}
                    </p>

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

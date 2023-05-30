import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Button from '../Button'

export default function CommunityMain() {
  const { t } = useTranslation('common')

  const { locale } = useRouter()

  const mainRef = useRef(null)
  const mainRefIsInView = useInView(mainRef, { once: true })

  return (
    <div className="flex flex-col items-center relative">
      <div className="absolute top-0 right-0">
        <Image
          src="/images/community-main-background.svg"
          width={1300}
          height={1269}
          alt="Community main background"
        />
      </div>

      <div className="flex justify-center items-center w-full">
        <div className="w-full max-w-[1110px] flex items-start lg:items-center justify-center py-16 lg:py-32 px-7 lg:px-0 relative z-10 min-h-[545px]">
          <div ref={mainRef} />

          {mainRefIsInView && (
            <div className="w-full flex items-center justify-between">
              <div className="flex flex-col max-w-[500px] w-full gap-10 lg:gap-[50px]">
                <div className="flex flex-col w-full gap-10 lg:gap-[30px]">
                  <motion.h1
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.25, duration: 1 }}
                    className="text-[36px] lg:text-[48px] font-extrabold lg:leading-[68px]"
                  >
                    Hey Creator, <br />
                    <span className="text-yellow">
                      {t('your journey begins here!')}
                    </span>
                  </motion.h1>

                  <motion.p
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 1 }}
                    className="text-[24px] lg:text-[20px] lg:leading-[32px]"
                  >
                    {t(
                      'Join the largest community of Creators who are creating their own businesses from their audiences, learn how to produce their knowledge, manage your company and attract investment to carry out your biggest projects. In addition to having access to exclusive benefits!'
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
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                className="hidden lg:flex"
              >
                <Image
                  src="/images/cobogo-community-cube.svg"
                  width={510}
                  height={510}
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

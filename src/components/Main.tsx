import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Button from './Button'

export default function Main() {
  const { t } = useTranslation('common')

  const { locale } = useRouter()

  const mainRef = useRef(null)
  const mainRefIsInView = useInView(mainRef, { once: true })

  return (
    <section className="flex items-center justify-center w-full py-32 relative px-7 min-h-[892px]">
      <div className="absolute top-0 right-0 hidden lg:flex">
        <Image
          src="/images/home-main-background.svg"
          width={1763}
          height={1083}
          alt="Home main background"
        />
      </div>

      <div className="absolute top-0 right-0 flex w-full h-[951px] lg:hidden">
        <Image
          src="/images/home-main-background-mobile.svg"
          fill
          alt="Home main background"
        />
      </div>

      <div ref={mainRef} />

      {mainRefIsInView && (
        <div className="w-full max-w-[1110px] flex flex-col gap-24 lg:gap-52 relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-0 justify-between lg:items-center">
            <div className="flex flex-col gap-6 lg:gap-12">
              <div className="flex flex-col gap-3 lg:gap-6">
                <motion.h1
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25, duration: 1 }}
                  className="leading-[30px] lg:leading-[60px] text-[22px] lg:text-[45px] font-bold"
                >
                  {t('Have a share')} <br /> {t('in the sucess of')} <br />{' '}
                  {t('your favorite Creator')}
                </motion.h1>

                <motion.p
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="max-w-[300px] lg:max-w-[350px] text-sm lg:text-base"
                >
                  {t(
                    'Get access to benefits, part of the future revenue or even equity from the people you trust the most on the internet.'
                  )}
                </motion.p>
              </div>

              <motion.div
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.75, duration: 1 }}
              >
                <Link
                  href="https://forms.gle/XTB2e3VDUZVDsvRn7/"
                  target="_blank"
                >
                  <Button
                    text={t('fill out form')}
                    borderColor="border-blue-social"
                  />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="hidden lg:flex"
            >
              <Image
                src="/images/home-main-cubes.svg"
                width={460}
                height={474}
                alt="Home main cube"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex lg:hidden w-full justify-center"
            >
              <Image
                src="/images/home-main-cubes.svg"
                width={247}
                height={255}
                alt="Home main cube"
              />
            </motion.div>
          </div>

          <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 lg:items-center justify-between">
            <motion.h2
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.75, duration: 1 }}
              className={`leading-[45px] lg:leading-[70px] text-[30px] lg:text-[40px] ${
                locale === 'pt'
                  ? 'bg-related-content-text-gradient-pt'
                  : 'bg-related-content-text-gradient-en'
              } bg-clip-text text-transparent`}
            >
              {t('What if you')} <br />
              {t('could partner with the')} <br />
              {t('Creators brands?')}
            </motion.h2>

            <motion.p
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="leading-[32px] lg:leading-[40px] text-[20px] lg:text-[24px] max-w-[450px]"
            >
              {t(
                'At Cobogo it is possible to become a partner of the brands and projects of Creators and receive collective funding through its audience. Actively participate in the growth and success of promising Creators and access an enabling environment and tools to boost your business.'
              )}
            </motion.p>
          </div>
        </div>
      )}
    </section>
  )
}

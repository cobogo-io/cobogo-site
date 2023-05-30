import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router'
import { useRef } from 'react'

export default function Brands() {
  const { t } = useTranslation('common')

  const { locale } = useRouter()

  const brandsRef = useRef(null)
  const brandsRefIsInView = useInView(brandsRef, { once: true })

  return (
    <section className="flex items-center justify-center w-full py-16 lg:py-32 relative px-7 min-h-[320px]">
      <div ref={brandsRef} />

      {brandsRefIsInView && (
        <div className="w-full max-w-[1110px] flex flex-col relative z-10">
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
              {t('Creators are becoming')} <br />
              {t('brands and now everyone')} <br />
              {t('can participate in it!')}
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

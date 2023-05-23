import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export default function RelatedContent() {
  const { t } = useTranslation('common')

  const relatedContentRef = useRef(null)
  const relatedContentRefIsInView = useInView(relatedContentRef, { once: true })

  return (
    <section className="flex items-center justify-center w-full pt-16 pb-16 lg:pt-32 relative min-h-[607px]">
      {relatedContentRefIsInView && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.25 }}
          transition={{ delay: 0.25, duration: 1 }}
          className="absolute hidden lg:flex"
        >
          <Image
            src="/images/home-related-content-background.svg"
            width={1052}
            height={1044}
            alt="Home related content background"
          />
        </motion.div>
      )}

      <div className="w-full max-w-[1110px] flex flex-col lg:flex-row items-center justify-between z-10 relative">
        <div ref={relatedContentRef} />

        {relatedContentRefIsInView && (
          <div className="flex flex-col w-full gap-8 lg:gap-16">
            <div className="flex w-full justify-between items-start px-7 lg:px-0">
              <div className="flex flex-col gap-5 lg:gap-10">
                <motion.h2
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.25, duration: 1 }}
                  className="text-[30px] lg:text-[40px] text-transparent bg-clip-text bg-related-content-text-gradient"
                >
                  {t('Stay tuned')}
                </motion.h2>

                <motion.p
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="lg:text-[22px] leading-[26px] lg:leading-[32px] w-full max-w-[660px]"
                >
                  {t(
                    'Learn more about the future of the Creator Economy being built by Cobogo, with articles exposing our ideas.'
                  )}
                </motion.p>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
              className="flex justify-between overflow-auto gap-10 bg-gray lg:bg-transparent py-8 lg:py-0"
            >
              <Link
                className="flex flex-col gap-8 mx-7 lg:mx-0"
                href="https://www.linkedin.com/pulse/marcas-est%2525C3%2525A3o-tornando-se-creators-cobogopt%3FtrackingId=fom%252BG%252BqnQ2noXOBgFnOTlw%253D%253D/?trackingId=fom%2BG%2BqnQ2noXOBgFnOTlw%3D%3D"
                target="_blank"
              >
                <div className="w-[340px] h-[215px] rounded-[15px] bg-related-content-text-gradient flex items-center justify-center">
                  <img
                    src="/images/article-1.png"
                    className="w-full h-full rounded-[15px] p-[2px] object-cover"
                    alt="Article thumbnail"
                  />
                </div>

                <strong className="text-[22px] w-[340px]">
                  {t('Brands are becoming Creators')}
                </strong>
              </Link>

              <Link
                className="flex flex-col gap-8 mx-7 lg:mx-0"
                href="https://www.linkedin.com/pulse/creators-est%25C3%25A3o-tornando-se-founders-cobogopt/?trackingId=cjR68ytgQWqc9dU9QZfNdw%3D%3D"
                target="_blank"
              >
                <div className="w-[340px] h-[215px] rounded-[15px] bg-related-content-text-gradient flex items-center justify-center">
                  <img
                    src="/images/article-2.png"
                    className="w-full h-full rounded-[15px] p-[2px] object-cover"
                    alt="Article thumbnail"
                  />
                </div>

                <strong className="text-[22px] w-[340px]">
                  {t('Creators are becoming Founders')}
                </strong>
              </Link>

              <Link
                className="flex flex-col gap-8 mx-7 lg:mx-0"
                href="https://www.linkedin.com/pulse/onde-mundo-est%25C3%25A3o-os-investidores-da-creator-economy-cobogopt/?trackingId=dWzmonGiRTqsTdngJ%2F%2FO4A%3D%3D"
                target="_blank"
              >
                <div className="w-[340px] h-[215px] rounded-[15px] bg-related-content-text-gradient flex items-center justify-center">
                  <img
                    src="/images/article-3.png"
                    className="w-full h-full rounded-[15px] p-[2px] object-cover"
                    alt="Article thumbnail"
                  />
                </div>

                <strong className="text-[22px] w-[340px]">
                  {t(
                    'Where in the world are the investors of the Creator Economy?'
                  )}
                </strong>
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

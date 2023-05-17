import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export default function Newsletter() {
  const { t } = useTranslation('common')

  const mentionsRef = useRef(null)
  const mentionsRefIsInView = useInView(mentionsRef, { once: true })

  return (
    <section className="flex items-center justify-center w-full px-7 py-16 lg:py-32 relative">
      {mentionsRefIsInView && (
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

      <div className="w-full max-w-[1110px] flex flex-col lg:flex-row items-center justify-center z-10 relative">
        <div ref={mentionsRef} />

        {mentionsRefIsInView && (
          <div className="flex items-center rounded-md overflow-hidden">
            <Image
              src="/images/newsletter-image.svg"
              width={230}
              height={230}
              alt="Newsletter image"
              className="hidden lg:flex"
            />

            <div className="flex flex-col lg:p-10 lg:bg-white/5 gap-8 h-[230px]">
              <div className="flex flex-col gap-1">
                <h2 className="text-2xl font-semibold">
                  Creator Economy Research
                </h2>

                <p className="text-lg text-gray-4">
                  {t('Stay infomed about Cobogo and the Creator Economy!')}
                </p>
              </div>

              <Link
                href="https://www.linkedin.com/build-relation/newsletter-follow?entityUrn=7057715136496562176"
                target="_blank"
                className="bg-black h-[50px] w-max px-[20px] flex items-center justify-center"
              >
                <strong className="text-transparent bg-clip-text bg-newsletter-text-gradient text-lg lg:text-xl">
                  {t('subscribe to LinkedIn')}
                </strong>
              </Link>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

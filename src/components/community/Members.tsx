import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Button from '../Button'

export default function Members() {
  const { t } = useTranslation('common')

  const { locale } = useRouter()

  const membersRef = useRef(null)
  const membersRefIsInView = useInView(membersRef, { once: true })

  return (
    <div className="w-full flex items-center justify-center py-16 lg:py-32 px-7">
      <div ref={membersRef} />

      <div className="w-full max-w-[1110px] flex flex-col items-center justify-center min-h-[202px] lg:min-h-[320px]">
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

              <p className="text-lg lg:text-[20px] leading-8">
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
  )
}

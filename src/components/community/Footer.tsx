import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Button from '../Button'

export default function Footer() {
  const { t } = useTranslation('common')

  const { locale } = useRouter()

  const footerRef = useRef(null)
  const footerRefIsInView = useInView(footerRef, { once: true })

  return (
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
  )
}

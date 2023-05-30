import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useRef } from 'react'
import Button from '../Button'

export default function CreatorExplorer() {
  const { t } = useTranslation('common')

  const creatorExplorerRef = useRef(null)
  const creatorExplorerRefIsInView = useInView(creatorExplorerRef, {
    once: true,
  })

  return (
    <section className="flex items-center justify-center w-full py-16 lg:py-32 relative px-7 min-h-[404px]">
      <div ref={creatorExplorerRef} />

      {creatorExplorerRefIsInView && (
        <div className="w-full max-w-[1110px] flex flex-col relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 lg:gap-0 lg:items-center justify-between">
            <div className="flex flex-col gap-12">
              <div className="flex flex-col gap-6">
                <motion.h2
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="leading-[45px] lg:leading-[70px] text-[30px] lg:text-[40px] max-w-[450px]w"
                >
                  {t('Find the best Creator project to invest in')}
                </motion.h2>

                <motion.p
                  initial={{ y: 100, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1.25, duration: 1 }}
                  className="text-sm lg:text-base max-w-[450px]"
                >
                  {t(
                    'The crowdfunding platform where creators are seen as entrepreneurs and their brands and projects, as a new class of assets to invest in.'
                  )}
                </motion.p>
              </div>

              <Link href="https://forms.gle/XTB2e3VDUZVDsvRn7/" target="_blank">
                <Button
                  text={t('subscribe now')}
                  borderColor="border-blue-social"
                />
              </Link>
            </div>

            <Image
              src="/images/profile-cards-image.svg"
              width={550}
              height={550}
              alt="Profile cards image"
              className="hidden lg:flex"
            />
          </div>
        </div>
      )}
    </section>
  )
}

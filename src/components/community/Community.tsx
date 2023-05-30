import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useRef } from 'react'

export default function Community() {
  const { t } = useTranslation('common')

  const section4Ref = useRef(null)
  const section4RefIsInView = useInView(section4Ref, { once: true })

  return (
    <div className="bg-white w-full flex items-center justify-center py-14 px-7">
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
              {t('How the community organizes itself')}
            </motion.h2>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex items-start gap-4"
            >
              <Image
                src="/images/whatsapp-icon.svg"
                width={80}
                height={80}
                alt="Whatsapp icon"
              />

              <p className="text-[20px] leading-[32px] text-black">
                <h2 className="text-[20px] lg:text-[24px] text-black font-bold drop-shadow-[3px_3px_0px_#00000047]">
                  +950
                </h2>

                {t(
                  'members on Whatsapp in daily discussions about Creator Economy.'
                )}
              </p>
            </motion.div>

            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.75, duration: 1 }}
              className="flex items-start gap-4"
            >
              <Image
                src="/images/discord-icon-2.svg"
                width={41}
                height={41}
                alt="Discord icon"
              />

              <p className="text-[20px] leading-[32px] text-black">
                <h2 className="text-[20px] lg:text-[24px] text-black font-bold drop-shadow-[3px_3px_0px_#00000047]">
                  +300
                </h2>

                {t(
                  'members on Discord where events and collabs between Creators are held.'
                )}
              </p>
            </motion.div>
          </div>
        )}

        {section4RefIsInView && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.25, duration: 1 }}
          >
            <Image
              src="/images/community-peoples-image.svg"
              width={533}
              height={568}
              alt="Community peoples"
            />
          </motion.div>
        )}
      </div>
    </div>
  )
}

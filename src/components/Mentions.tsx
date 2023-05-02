import { motion, useInView } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { useRef } from 'react'

export default function Mentions() {
  const { t } = useTranslation('common')

  const mentionsRef = useRef(null)
  const mentionsRefIsInView = useInView(mentionsRef, { once: true })

  return (
    <section className="flex items-center justify-center w-full pt-16 pb-16 lg:pb-32 relative min-h-[548px]">
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

      <div className="w-full max-w-[1110px] flex flex-col lg:flex-row items-center justify-between z-10 relative">
        <div ref={mentionsRef} />

        {mentionsRefIsInView && (
          <div className="flex flex-col w-full gap-8 lg:gap-16">
            <div className="flex flex-col gap-5 lg:gap-10 px-7 lg:px-0">
              <motion.h2
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.25, duration: 1 }}
                className="text-[30px] lg:text-[40px] text-transparent bg-clip-text bg-mentions-text-gradient font-bold"
              >
                {t('Cobogo on the news')}
              </motion.h2>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className="flex justify-between overflow-auto gap-10 bg-gray lg:bg-transparent py-8 lg:py-0"
            >
              <Link
                className="flex flex-col gap-8 ml-7 lg:ml-0"
                href="https://cointelegraph.com.br/news/brazilian-startups-focused-on-web3-get-chosen-for-acceleration-program/"
                target="_blank"
              >
                <div className="w-[340px] h-[215px] rounded-[15px] bg-mentions-text-gradient flex items-center justify-center relative">
                  <Image
                    src="/images/mention-1.png"
                    fill
                    alt="Mention 1"
                    className="rounded-[15px] overflow-hidden p-[2px] object-cover"
                  />
                </div>

                <strong className="text-[22px] w-[340px]">
                  Startups brasileiras voltadas à Web3 são escolhidas para
                  programa de aceleração
                </strong>

                <Image
                  src="/images/coin-telegraph-logo.svg"
                  width={113}
                  height={37}
                  alt="Coin Telegraph logo"
                />
              </Link>

              <Link
                className="flex flex-col gap-8"
                href="https://www.moneytimes.com.br/investir-no-proximo-casimiro-ou-felipe-neto-pode-ser-possivel-entenda-sobre-os-influenciadores-digitais-na-web-3-0/"
                target="_blank"
              >
                <div className="w-[340px] h-[215px] rounded-[15px] bg-mentions-text-gradient flex items-center justify-center relative">
                  <Image
                    src="/images/mention-2.png"
                    fill
                    alt="Mention 2"
                    className="rounded-[15px] overflow-hidden p-[2px] object-cover"
                  />
                </div>

                <strong className="text-[22px] w-[340px]">
                  Investir no próximo Casimiro ou Felipe Neto pode ser possível;
                  entenda sobre os influenciadores digitais na Web 3.0
                </strong>

                <Image
                  src="/images/money-times-logo.png"
                  width={113}
                  height={37}
                  alt="Money Times logo"
                />
              </Link>

              <Link
                className="flex flex-col gap-8 mr-7 lg:mr-0"
                href="https://www.abcdacomunicacao.com.br/creators-3-0-raul-aragao-e-o-primeiro-creator-a-se-tornar-escalavel-pela-cobogo/"
                target="_blank"
              >
                <div className="w-[340px] h-[215px] rounded-[15px] bg-mentions-text-gradient flex items-center justify-center relative">
                  <Image
                    src="/images/mention-3.jpg"
                    fill
                    alt="Mention 3"
                    className="rounded-[15px] overflow-hidden p-[2px] object-cover"
                  />
                </div>

                <strong className="text-[22px] w-[340px]">
                  Creators 3.0: Raul Aragão é o primeiro creator a se tornar
                  escalável pela Cobogo
                </strong>

                <Image
                  src="/images/abc-da-comunicacao-logo.png"
                  width={113}
                  height={37}
                  alt="ABC da comunicação logo"
                />
              </Link>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  )
}

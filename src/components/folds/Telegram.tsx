import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import { Button } from '../Button'

export const Telegram = (): JSX.Element => {
  const { t } = useTranslation('common')

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen h-full px-7">
      <div className="flex flex-col justify-start md:justify-center items-center min-h-screen h-full w-full">
        <div className="w-full flex items-center justify-between max-w-[1000px] py-24 md:py-0">
          <div className="flex flex-col gap-6 md:gap-10 z-40 max-w-[447px] items-center md:items-start">
            <div className="flex md:hidden">
              <Image
                src="/images/telegram-logo.svg"
                width={154}
                height={128}
                alt="Telegram logo"
              />
            </div>
            <h1 className="text-2xl md:text-5xl text-center md:text-left">
              {t('Join our')} <strong>Telegram</strong>
            </h1>
            <p className="text-lg md:text-xl text-center md:text-left">
              {t(
                'To never miss any content and to be able to share your ideas, side with more like-minded people in our'
              )}{' '}
              <strong>{t('community')}</strong>.
            </p>
            <a
              target="_blank"
              href="https://l.cobogo.io/telegram/"
              rel="noreferrer"
            >
              <Button text={t('Join Telegram')} />
            </a>
          </div>
          <div className="hidden md:flex min-h-screen h-full w-[375px] relative z-40">
            <Image
              src="/images/telegram.svg"
              objectFit="cover"
              layout="fill"
              alt="Telegram"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

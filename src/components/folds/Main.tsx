import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import { Button } from '../Button'

export const Main = () => {
  const { t } = useTranslation('common')

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen h-full px-7">
      <div className="flex flex-col justify-start md:justify-center items-center min-h-screen h-full py-24">
        <div className="flex flex-col items-start md:items-center gap-16 z-40">
          <div className="flex md:hidden">
            <Image
              src="/images/cobogo-logo.svg"
              width={133}
              height={30}
              alt="Cobogo logo"
            />
          </div>

          <h1 className="text-4xl md:text-6xl max-w-[1130px] text-left md:text-center relative">
            <strong>{t('Investment ecosystem')}</strong>
            <br /> {t('designed to')} {t('support the')}{' '}
            <strong>{t('next generation')}</strong> {t('of')}{' '}
            <strong className="underline decoration-[9px] md:decoration-[19px] underline-offset-[-4.5px] md:underline-offset-[-8px] decoration-white-100/30">
              Creators
            </strong>
          </h1>

          <a href="#text">
            <Button text={t('Learn more')} />
          </a>
        </div>
      </div>
    </div>
  )
}

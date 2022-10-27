import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import { BulletsTwo } from '../images/BulletsTwo'

export const Text = () => {
  const { t } = useTranslation('common')

  return (
    <div
      id="text"
      className="relative flex flex-col justify-center items-center min-h-screen h-full px-7"
    >
      <div className="flex flex-col justify-start md:justify-center items-center min-h-screen h-full py-24">
        <div className="flex flex-col items-center gap-20 z-40">
          <h1 className="hidden md:block text-[40px] leading-[60px] max-w-[1090px] text-center relative">
            <strong>{t('Cobogo allows Creators')}</strong> {t('to become')}{' '}
            <strong>{t('real businesses')}</strong>. <br />
            {t('We provide')} <strong>{t('all the best tools')}</strong>{' '}
            {t(
              'for incorporating a US business, raising funds with whom matters the most and maximizing growth.'
            )}
          </h1>
          <div className="flex flex-col gap-8">
            <strong className="flex md:hidden text-3xl max-w-[1030px] relative">
              {t('Cobogo allows Creators to become real businesses.')}
            </strong>
            <p className="text-lg flex md:hidden">
              {t(
                'We provide all the best tools for incorporating a US business, raising funds with whom matters the most and maximizing growth.'
              )}
            </p>
            <div className="flex md:hidden">
              <Image
                src="/images/flywheel-mobile.png"
                width={378}
                height={238}
                alt="Flywheel mobile"
              />
            </div>
          </div>
          <BulletsTwo />
        </div>
      </div>
    </div>
  )
}

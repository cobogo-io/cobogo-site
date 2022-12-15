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
            {t('This is where')}{' '}
            <strong>{t('Creators become companies')}</strong>,{' '}
            <strong>{t('professionalize their businesses')}</strong> {t('and')}{' '}
            <strong>{t('access tools to fundraise')}</strong>{' '}
            {t('and reach their')} <strong>{t('maximum potential')}</strong>.
          </h1>

          <div className="flex flex-col gap-8">
            <h1 className="block md:hidden text-3xl max-w-[1030px] relative">
              {t('This is where')},{' '}
              <strong>{t('Creators become companies')}</strong>,{' '}
              <strong>{t('professionalize their businesses')}</strong>{' '}
              {t('and')} <strong>{t('access tools to fundraise')}</strong>{' '}
              {t('and reach their')} <strong>{t('maximum potential')}</strong>.
            </h1>

            <div className="flex md:hidden">
              <Image
                src="/images/flywheel-mobile.png"
                width={1020}
                height={839}
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

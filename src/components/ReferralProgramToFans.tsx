import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Button from './Button';

export default function Header(): JSX.Element {
  const { t } = useTranslation('referral-program-to-fans');

  return (
    <section className="bg-secondary flex flex-col justify-center items-center px-[20px] py-[50px] sm:py-[100px] text-white relative">
      <div className="flex justify-between w-full max-w-[1300px] z-10">
        <div className="flex flex-col">
          <p className="text-[36px] font-bold">
            {t('do you know any YouTuber?')}
          </p>

          <p className="text-[22px] mb-[60px] max-w-[453px]">
            {t('earn')} <span className="font-bold">{t('CBG tokens')}</span>{' '}
            {t('by inviting')}{' '}
            <span className="font-bold">{t('Content Creators')}</span>{' '}
            {t('to join cobogo! Just connect your wallet and get your')}{' '}
            <span className="font-bold">{t('referral link')}</span>.
          </p>

          <a
            href="https://app.cobogo.social/referral-dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              text="get started"
              color="bg-blue"
              hoverColor="brightness-90"
              width="w-[124px]"
              height="h-[38px]"
            />
          </a>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 flex h-full w-[528px]">
        <Image
          src="/images/referral-program-to-fans.svg"
          objectFit="cover"
          layout="fill"
          alt="referral program to fans"
        />
      </div>
    </section>
  );
}

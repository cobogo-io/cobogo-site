import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Button from './Button';

export default function ReferralProgramToFans() {
  const { t } = useTranslation('referral-program-to-fans');

  return (
    <section className="flex items-center justify-center w-full h-full px-5 py-24 md:px-20 bg-secondary">
      <div className="flex flex-col items-center justify-center h-full w-[900px] md:justify-between md:flex-row">
        <div className="flex md:hidden mb-[65px]">
          <Image
            src="/images/referral-program-to-fans.svg"
            width={226}
            height={223}
            alt="referral program to fans image"
          />
        </div>

        <div className="flex flex-col">
          <p className="text-4xl font-bold text-white mb-[34px]">
            {t('do you know any YouTuber?')}
          </p>

          <p className="text-2xl text-white max-w-[453px] mb-[34px]">
            {t(
              'earn CBG tokens by inviting YouTube Content Creators to join cobogo! Just connect your wallet and get your referral link.'
            )}
          </p>

          <a
            href="https://app.cobogo.social/referral-dashboard"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              text="referral program"
              color="bg-blue"
              hoverColor="brightness-90"
              width="w-[152px]"
              height="h-[38px]"
            />
          </a>
        </div>

        <div className="hidden md:block">
          <Image
            src="/images/referral-program-to-fans.svg"
            width={328}
            height={323}
            alt="referral program to fans image"
          />
        </div>
      </div>
    </section>
  );
}

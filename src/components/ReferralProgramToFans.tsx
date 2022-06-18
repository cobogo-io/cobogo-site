import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import Button from './Button';

export default function Header(): JSX.Element {
  const { t } = useTranslation('header');

  return (
    <section className="bg-secondary flex flex-col justify-center items-center px-[20px] py-[100px] text-white relative">
      <div className="flex justify-between w-full max-w-[1300px] z-10">
        <div className="flex flex-col">
          <p className="text-[36px] font-bold">do you know any YouTuber?</p>

          <p className="text-[22px] mb-[60px] max-w-[453px]">
            earn <span className="font-bold">CBG tokens</span> by inviting
            YouTube
            <span className="font-bold"></span>Content Creators to join cobogo!
            Just connect your wallet and get your{' '}
            <span className="font-bold">referral link</span>.
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
        />
      </div>
    </section>
  );
}

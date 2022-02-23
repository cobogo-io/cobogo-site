import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from 'next/link';

import CallToActionButton from './CallToActionButton';

interface HowWorkPatronProps {
  setShowModal: (bool: boolean) => void;
}

export default function HowWorkPatron({ setShowModal }: HowWorkPatronProps) {
  const { t } = useTranslation('how-work-patron');

  return (
    <section
      id="how-work-patron"
      className="flex flex-col px-5 md:px-0 items-center h-full w-full py-24 bg-primary"
    >
      <div>
        <a
          href="https://t.me/cobogosocial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mb-24 relative invisible hidden md:visible md:flex cursor-pointer hover:opacity-90">
            <div>
              <Image
                src="/images/airdrop-bg.svg"
                width={1159}
                height={200}
                alt="airdrop background"
              />
            </div>
            <div className="absolute z-10 top-0 flex flex-col justify-center items-start w-full h-full pl-12">
              <div className="flex flex-row">
                <p className="text-blue font-bold text-2xl mr-2">
                  {t('join our Telegram')}
                </p>
                <p className="text-white font-normal text-2xl">
                  {t('before the waitlist is up to be')}
                </p>
              </div>
              <p className="text-white font-normal text-2xl">
                {t('informed of future bounties and airdrops')}
              </p>
            </div>
          </div>
        </a>
        <a
          href="https://t.me/cobogosocial"
          target="_blank"
          rel="noopener noreferrer"
        >
          <div className="mb-24 relative visible md:invisible md:hidden w-full flex justify-center items-center cursor-pointer hover:opacity-90">
            <div className="absolute z-10 top-0 flex flex-col justify-start items-start h-full text-left pt-12">
              <div className="flex">
                <p className="text-blue font-bold text-xl sm:text-3xl mr-2">
                  {t('join our Telegram')}
                </p>
                <p className="text-white font-normal text-xl sm:text-3xl">
                  {t('before')}
                </p>
              </div>
              <p className="text-white font-normal text-xl sm:text-3xl">
                {t('the waitlist is up to be')}
              </p>
              <p className="text-white font-normal text-xl sm:text-3xl">
                {t('informed of future')}
              </p>
              <p className="text-white font-normal text-xl sm:text-3xl">
                {t('bounties and')}
              </p>
              <p className="text-white font-normal text-xl sm:text-3xl">
                {t('airdrops')}
              </p>
            </div>
            <div className="w-full flex justify-center items-center">
              <Image
                src="/images/airdrop-mobile-bg.png"
                width={456}
                height={788}
                alt="airdrop mobile background"
              />
            </div>
          </div>
        </a>
        <h1 className="bold-36 text-center pb-7">
          {t('how it works for the Patron')}
        </h1>
        <h2 className="light-24 text-center pb-16">
          {t('support your favorite Content Creator while also earning money.')}
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center pb-5">
        <div className="flex flex-col items-center px-5 md:px-20 w-full lg:w-1/3 min-w-full lg:min-w-0 pb-10">
          <div className="w-16 h-11 relative ">
            <Image
              layout="fill"
              objectFit="contain"
              src="/icons/youtube-icon.svg"
              alt="YouTube icon"
            />
          </div>
          <div className="bold-24 text-center py-4">
            1. {t('choose a channel')}
          </div>
          <div className="regular-18 text-center sm:px-20 md:px-0">
            <span className="regular-18">
              {t('choose your favorite channel')}
            </span>{' '}
            {t(
              'to support and to stake on. Part of the rewards will go to the channel you chose, the other part for you. You can stake on multiple channels if you want to.'
            )}
          </div>
        </div>
        <div className="flex flex-col items-center px-5 md:px-20 w-full lg:w-1/3 min-w-full lg:min-w-0 pb-10">
          <div className="w-16 h-11 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/icons/cbg-icon.svg"
              alt="cobogo icon"
            />
          </div>
          <div className="bold-24 text-center py-4">
            2. {t('stake CBG tokens')}
          </div>
          <div className="regular-18 text-center sm:px-20 md:px-0">
            {t(
              'first, you need to buy CBG tokens, which is the token used to stake and earn rewards.'
            )}
          </div>
        </div>
        <div className="flex flex-col items-center px-5 md:px-20 w-full lg:w-1/3 min-w-full lg:min-w-0 pb-10">
          <div className="w-16 h-11 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/icons/coin-icon.svg"
              alt="Coins icon"
            />
          </div>
          <div className="bold-24 text-center py-4">
            3. {t('receive rewards')}
          </div>
          <div className="regular-18 text-center sm:px-20 md:px-0">
            {t(
              'that’s it, you don’t need to do anything else, wait for your rewards and at any time you can withdraw them to your wallet.'
            )}
          </div>
        </div>
      </div>
      <CallToActionButton
        color="purple-light"
        placeholder={t('become a patron')}
        onClick={() => setShowModal(true)}
      />
    </section>
  );
}

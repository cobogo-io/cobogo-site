import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const HowWorkPatron: NextPage = () => {
  const { t } = useTranslation('how-work-patron');

  return (
    <section
      id="how-work-patron"
      className="flex flex-col items-center h-full w-full py-24 bg-bgprimary"
    >
      <div>
        <h1 className="title text-center pb-7 font-bold">
          {t('How it works for a Patron')}
        </h1>
        <h2 className="subtitle text-center pb-20 font-light">
          {t('Support your favorite Youtuber while you also earn money.')}
        </h2>
      </div>
      <div className="flex flex-wrap justify-center pb-16">
        <div className="flex flex-col items-center px-20 w-96 min-w-full md:min-w-0 pb-10">
          <div className="w-16 h-11 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/icons/youtube-icon.svg"
              alt="Youtube icon"
            />
          </div>
          <div className="subtitle text-center py-4 font-bold">
            1. {t('Choose a channel')}
          </div>
          <div className="body text-center font-light sm:px-20 md:px-0">
            {t(
              'Choose your favorite channel to support and to stake for. Part of the rewards will go to the channel you chose, the other part for you. You can stake to multiple channels if you want.'
            )}
          </div>
        </div>
        <div className="flex flex-col items-center w-96 min-w-full md:min-w-0 px-20 pb-10">
          <div className="w-16 h-11 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/icons/dev-icon.svg"
              alt="DEV icon"
            />
          </div>
          <div className="subtitle text-center py-4 font-bold">
            2. {t('Stake DEV tokens')}
          </div>
          <div className="body text-center font-light sm:px-20 md:px-0">
            {t(
              'First of all you need to buy DEV tokens, which is the token used to stake and earn rewards. You can buy it on Uniswap.'
            )}
          </div>
        </div>
        <div className="flex flex-col items-center px-20 w-96 min-w-full md:min-w-0 pb-10">
          <div className="w-16 h-11 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/icons/coin-icon.svg"
              alt="Coins icon"
            />
          </div>
          <div className="subtitle text-center py-4 font-bold">
            3. {t('Receive rewards')}
          </div>
          <div className="body text-center font-light sm:px-20 md:px-0">
            {t(
              'Do nothing more, wait for your rewards and at any time you can withdraw to your wallet.'
            )}
          </div>
        </div>
      </div>
      <button className="subtitle bg-patron px-4 py-4 font-bold">
        {t('Become a Patron')}
      </button>
    </section>
  );
};

export default HowWorkPatron;

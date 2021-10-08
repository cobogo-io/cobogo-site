import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

interface Props {
  setShowModal: (bool: boolean) => void;
}

const HowWorkYoutuber: NextPage<Props> = ({ setShowModal }) => {
  const { t } = useTranslation('how-work-youtuber');

  return (
    <section
      id="how-work-youtuber"
      className="flex flex-col px-5 md:px-0 items-center h-full w-full py-24 bg-bgsecundary"
    >
      <div>
        <h1 className="bold-36 text-center pb-7">
          {t('How it works for a YouTuber')}
        </h1>
        <h2 className="light-24 text-center pb-16 font-light">
          {t('Monetize and empower your YouTube community with cobogo.')}
        </h2>
      </div>
      <div className="flex flex-wrap justify-center pb-5">
        <div className="flex flex-col items-center px-5 md:px-20 w-full md:w-1/3 min-w-full md:min-w-0 pb-10">
          <div className="w-16 h-11 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/icons/youtube-icon.svg"
              alt="YouTube icon"
            />
          </div>
          <div className="bold-24 text-center py-4">
            1. {t('Submit your channel')}
          </div>
          <div className="regular-18 text-center sm:px-20 md:px-0">
            {t('To be able to receive rewards from your followers, you must')}{' '}
            <span className="regular-18">{t('apply your channel')}</span>.{' '}
            {t(
              'The cobogo team will review and approve if it is a real channel with real followers.'
            )}
          </div>
        </div>
        <div className="flex flex-col items-center px-5 md:px-20 w-full md:w-1/3 min-w-full md:min-w-0 pb-10">
          <div className="w-16 h-11 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/icons/mic-icon.svg"
              alt="Microphone icon"
            />
          </div>
          <div className="bold-24 text-center py-4">
            2. {t('Spread the news')}
          </div>
          <div className="regular-18 text-center  sm:px-20 md:px-0">
            {t(
              'You have to publish at least one video explaining to your audience what cobogo is and how they can support you. It is important to spin the wheel.'
            )}
          </div>
        </div>
        <div className="flex flex-col items-center px-5 md:px-20 w-full md:w-1/3 min-w-full md:min-w-0 pb-10">
          <div className="w-16 h-11 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/icons/coin-icon.svg"
              alt="Coins icon"
            />
          </div>
          <div className="bold-24 text-center py-4">
            3. {t('Receive rewards')}
          </div>
          <div className="regular-18 text-center  sm:px-20 md:px-0">
            {t(
              'Continue your good work and wait for your followers to stake for you. You will receive the rewards on a daily basis and will be able to stake for other YouTubers as well.'
            )}
          </div>
        </div>
      </div>
      <button
        className="bold-24 bg-youtuber hover:bg-youtuberhover px-8 py-4"
        onClick={() => setShowModal(true)}
      >
        {t('Monetize your channel')}
      </button>
    </section>
  );
};

export default HowWorkYoutuber;

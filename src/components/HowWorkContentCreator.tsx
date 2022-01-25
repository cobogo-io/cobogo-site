import { useTranslation } from 'next-i18next';
import Image from 'next/image';

import CallToActionButton from './CallToActionButton';

interface HowWorkContentCreatorProps {
  setShowModal: (bool: boolean) => void;
}

export default function HowWorkContentCreator({
  setShowModal,
}: HowWorkContentCreatorProps) {
  const { t } = useTranslation('how-work-content-creator');

  return (
    <section
      id="how-work-content-creator"
      className="flex flex-col px-5 md:px-0 items-center h-full w-full py-24 bg-secondary"
    >
      <div>
        <h1 className="bold-36 text-center pb-7">
          {t('how it works for a Content Creator')}
        </h1>
        <h2 className="light-24 text-center pb-16 font-light">
          {t('monetize and empower your fans and community with cobogo.')}
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
          <div className="h-5" />
          <div className="bold-24 text-center py-4">
            1. {t('submit your channel')}
          </div>
          <div className="regular-18 text-center sm:px-20 md:px-0">
            {t('to be able to receive rewards from your followers, you must')}{' '}
            <span className="regular-18">{t('apply your channel')}</span>.{' '}
            {t(
              'the cobogo team will verify if it is a real channel with real followers, and approve it.'
            )}
          </div>
        </div>
        <div className="flex flex-col items-center px-5 md:px-20 w-full md:w-1/3 min-w-full md:min-w-0 pb-10">
          <div className="w-10 h-16 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/icons/mic-icon.svg"
              alt="Microphone icon"
            />
          </div>
          <div className="bold-24 text-center py-4">
            2. {t('spread the news')}
          </div>
          <div className="regular-18 text-center  sm:px-20 md:px-0">
            {t(
              'you have to publish at least one video explaining to your audience what cobogo is and how they can support you. It is important to keep the wheels turning.'
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
          <div className="h-5" />
          <div className="bold-24 text-center py-4">
            3. {t('receive rewards')}
          </div>
          <div className="regular-18 text-center  sm:px-20 md:px-0">
            {t(
              'continue your good work and wait for your followers to stake on your channel. You will receive the rewards on a block (minutes) basis and will be able to stake for other YouTubers as well.'
            )}
          </div>
        </div>
      </div>
      <CallToActionButton
        color="purple"
        placeholder={t('monetize your channel')}
        onClick={() => setShowModal(true)}
      />
    </section>
  );
}

import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const TechnicalViewpoint: NextPage = () => {
  const { t } = useTranslation('technical-viewpoint');

  return (
    <section className="flex flex-col items-center h-full w-full py-24 bg-bgsecundary">
      <div className="flex flex-col items-center">
        <h1 className="bold-36 text-center pb-7">{t('Technical viewpoint')}</h1>
        <h2 className="light-24 text-center pb-0 md:pb-20 w-screen md:w-1/2 md:px-0 px-5">
          {t(
            'cobogo is a dApp that leverages the Dev Protocol funding system to sustainably fund YouTube Creators. Fans can stake DEV Tokens on their favorite YouTuber pool and automatically start to get paid with Dev Rewards.'
          )}
        </h2>
      </div>
      <div className="image">
        <div className="w-full h-full relative">
          <Image
            layout="fill"
            objectFit="contain"
            sizes="100%"
            src="/technical-viewpoint.svg"
            alt="Technical viewpoint flow"
          />
        </div>
      </div>
      <div className="flex flex-col lg:flex-row w-full sm:justify-center lg:justify-between px-5 md:px-20">
        <div className="regular-18 text-left lg:w-1/3 pr-24 lg:pr-0 pb-20 lg:pb-0">
          {t(
            'With sTokens Creators can design all the Perks developed on Dev Protocol for their fans, this way everyone that uses this method of funding can receive benefits not found anywhere else.'
          )}
        </div>
        <div className="regular-18 text-right lg:w-1/3 pl-24 lg:pl-0">
          {t(
            'Even small and niche YouTubers will be able to be properly monetized by their own Community. Through Cobogo community building and monetization is taken to a new level not found in web2.'
          )}
        </div>
      </div>
    </section>
  );
};

export default TechnicalViewpoint;

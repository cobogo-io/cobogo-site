import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import {
  DevMarketCap,
  DevPrice,
  DevStakingRatio,
  DevStakingValue,
  CreatorAPY,
  StakerAPY,
  SupplyGrowth,
  CreatorsRewardsUsd,
} from './DevStats';

const DevProtocol: NextPage = () => {
  const { t } = useTranslation('dev-protocol');

  return (
    <section className="flex px-5 md:px-0 flex-col items-center h-full w-screen py-24 bg-bgprimary">
      <div className="flex flex-col items-center">
        <h1 className="bold-36 text-center pb-7">
          {t('The DEV Protocol Ecosystem')}
        </h1>

        <h2 className="light-24 text-center px-5 md:px-48 pb-20">
          {t(
            'Dev Protocol’s mission is to provide Open Assets a sustainable value capture model. Open Assets are free to consume and share like Youtube videos, Spotify music, and Academic research. Stakes Social will eventually support the tokenization of these markets to unleash their untapped economic value.'
          )}
        </h2>
      </div>
      <div className="flex justify-around item flex-wrap">
        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="bold-24 text-center">
            $ <DevMarketCap />
          </div>
          <div className="regular-18 text-center">{t('DEV Market Cap')}</div>
          <div className="regular-18 text-center">
            {t('The total value of all DEV circulating.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="bold-24 text-center">
            $ <DevPrice />
          </div>
          <div className="regular-18 text-center">{t('DEV Price')}</div>
          <div className="regular-18 text-center">
            {t('The current price of DEV token.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="bold-24 text-center">
            <DevStakingRatio />%
          </div>
          <div className="regular-18 text-center">{t('DEV Staked Ratio')}</div>
          <div className="regular-18 text-center">
            {t(
              'The percentage of DEV tokens that are staked from circulating supply.'
            )}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="bold-24 text-center">
            $ <DevStakingValue />
          </div>
          <div className="regular-18 text-center">{t('DEV Staked Value')}</div>
          <div className="regular-18 text-center">
            {t('The total value of DEV staked.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="bold-24 text-center">
            <CreatorAPY />%
          </div>
          <div className="regular-18 text-center">{t('Creator APY')}</div>
          <div className="regular-18 text-center">
            {t('The current yield for creators.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="bold-24 text-center">
            <StakerAPY />%
          </div>
          <div className="regular-18 text-center">{t('Staker APY')}</div>
          <div className="regular-18 text-center">
            {t('The current yield for stakers.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="bold-24 text-center">
            <SupplyGrowth />%
          </div>
          <div className="regular-18 text-center">{t('Supply Growth')}</div>
          <div className="regular-18 text-center">
            {t('The current supply growth of DEV.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="bold-24 text-center">1,642</div>
          <div className="regular-18 text-center">
            {t('OSS Projects Onboarded')}
          </div>
          <div className="regular-18 text-center">
            {t('The total number of creator assets onboarded.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="bold-24 text-center">
            $ <CreatorsRewardsUsd />
          </div>
          <div className="regular-18 text-center">
            {t("Creator's Rewards USD")}
          </div>
          <div className="regular-18 text-center">
            {t("The value of current creator's rewards in USD.")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevProtocol;

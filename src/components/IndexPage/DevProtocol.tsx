import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import {
  DevPrice,
  DevMarketCap,
  DevStakingRatio,
  DevStakingValue,
  CreatorAPY,
  StakerAPY,
  SupplyGrowth,
  AssetOnboarded,
  CreatorsRewardsUsd,
} from '../DevStats';
const DevProtocol: NextPage = () => {
  const { t } = useTranslation('dev-protocol');

  return (
    <section className="flex px-5 md:px-0 flex-col items-center h-full w-full py-24 bg-bgprimary">
      <div className="flex flex-col items-center">
        <h1 className="bold-36 text-center pb-7">
          {t('the DEV Protocol ecosystem')}
        </h1>

        <h2 className="light-24 text-center px-5 md:px-48 pb-20">
          {t(
            'Dev Protocol’s mission is to provide Open Assets a sustainable value capture model. Open Assets are free to consume and share like YouTube videos, Spotify music, and Academic research. cobogo will eventually support the tokenization of these markets to unleash their untapped economic value.'
          )}
        </h2>
      </div>
      <div className="flex justify-around item flex-wrap">
        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="bold-24 text-center">
            $ <DevMarketCap />
          </div>
          <div className="regular-18 text-center">{t('DEV market cap')}</div>
          <div className="regular-18 text-center">
            {t('the total value of all DEV circulating.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="bold-24 text-center">
            $ <DevPrice />
          </div>
          <div className="regular-18 text-center">{t('DEV price')}</div>
          <div className="regular-18 text-center">
            {t('the current price of DEV token.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="bold-24 text-center">
            <DevStakingRatio />%
          </div>
          <div className="regular-18 text-center">{t('DEV Staked Ratio')}</div>
          <div className="regular-18 text-center">
            {t(
              'the percentage of DEV tokens that are staked from circulating supply.'
            )}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="bold-24 text-center">
            $ <DevStakingValue />
          </div>
          <div className="regular-18 text-center">{t('DEV staked value')}</div>
          <div className="regular-18 text-center">
            {t('the total value of DEV staked.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="bold-24 text-center">
            <CreatorAPY />%
          </div>
          <div className="regular-18 text-center">{t('creator APY')}</div>
          <div className="regular-18 text-center">
            {t('the current yield for creators.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="bold-24 text-center">
            <StakerAPY />%
          </div>
          <div className="regular-18 text-center">{t('staker APY')}</div>
          <div className="regular-18 text-center">
            {t('the current yield for stakers.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="bold-24 text-center">
            <SupplyGrowth />%
          </div>
          <div className="regular-18 text-center">{t('supply growth')}</div>
          <div className="regular-18 text-center">
            {t('the current supply growth of DEV.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="bold-24 text-center">
            <AssetOnboarded />
          </div>
          <div className="regular-18 text-center">
            {t('OSS projects onboarded')}
          </div>
          <div className="regular-18 text-center">
            {t('the total number of creator assets onboarded.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="bold-24 text-center">
            $ <CreatorsRewardsUsd />
          </div>
          <div className="regular-18 text-center">
            {t("creator's rewards USD")}
          </div>
          <div className="regular-18 text-center">
            {t("the value of current creator's rewards in USD.")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevProtocol;

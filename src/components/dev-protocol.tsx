import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';

const DevProtocol: NextPage = () => {
  const { t } = useTranslation('dev-protocol');

  return (
    <section className="flex flex-col items-center h-full w-screen py-24 bg-bgprimary">
      <div className="flex flex-col items-center">
        <h1 className="title text-center pb-7 font-bold">
          {t('The DEV Protocol Ecosystem')}
        </h1>
        <h2 className="subtitle text-center px-5 md:px-20 pb-20 font-light">
          {t(
            'Dev Protocol’s mission is to provide Open Assets a sustainable value capture model. Open Assets are free to consume and share like Youtube videos, Spotify music, and Academic research. Stakes Social will eventually support the tokenization of these markets to unleash their untapped economic value.'
          )}
        </h2>
      </div>
      <div className="flex justify-around item flex-wrap">
        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="subtitle text-center font-bold">$ 6,331,241</div>
          <div className="body text-center font-light">
            {t('DEV Market Cap')}
          </div>
          <div className="body text-center font-light">
            {t('The total value of all DEV circulating.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="subtitle text-center font-bold">$ 4.30</div>
          <div className="body text-center font-light">{t('DEV Price')}</div>
          <div className="body text-center font-light">
            {t('The current price of DEV token.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="subtitle text-center font-bold">32.57%</div>
          <div className="body text-center font-light">
            {t('DEV Staked Ratio')}
          </div>
          <div className="body text-center font-light">
            {t(
              'The percentage of DEV tokens that are staked from circulating supply.'
            )}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="subtitle text-center font-bold">$ 2,062,327</div>
          <div className="body text-center font-light">
            {t('DEV Staked Value')}
          </div>
          <div className="body text-center font-light">
            {t('The total value of DEV staked.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="subtitle text-center font-bold">32.37%</div>
          <div className="body text-center font-light">{t('Creator APY')}</div>
          <div className="body text-center font-light">
            {t('The current yield for creators.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="subtitle text-center font-bold">31.10%</div>
          <div className="body text-center font-light">{t('Staker APY')}</div>
          <div className="body text-center font-light">
            {t('The current yield for stakers.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="subtitle text-center font-bold">3.24%</div>
          <div className="body text-center font-light">
            {t('Supply Growth')}
          </div>
          <div className="body text-center font-light">
            {t('The current supply growth of DEV.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="subtitle text-center font-bold">1,642</div>
          <div className="body text-center font-light">
            {t('OSS Projects Onboarded')}
          </div>
          <div className="body text-center font-light">
            {t('The total number of creator assets onboarded.')}
          </div>
        </div>

        <div className="flex min-w-full md:min-w-0 lg:w-1/4 md:w-1/3 flex-col m-5 px-5 md:px-0">
          <div className="subtitle text-center font-bold">$ 667,579</div>
          <div className="body text-center font-light">
            {t("Creator's Rewards USD")}
          </div>
          <div className="body text-center font-light">
            {t("The value of current creator's rewards in USD.")}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DevProtocol;

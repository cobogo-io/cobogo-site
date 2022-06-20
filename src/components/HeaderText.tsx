import { useTranslation } from 'next-i18next';

export default function HeaderText(): JSX.Element {
  const { t } = useTranslation('header-text');

  return (
    <section className="bg-secondary flex justify-center items-center px-[20px] py-[100px] text-white text-[22px]">
      <div className="w-full max-w-[1300px] flex flex-col sm:flex-row justify-between">
        <div className="flex flex-col max-w-[530px]">
          <p className="mb-[40px]">
            {t('any')} <span className="font-bold">{t('Content Creator')}</span>{' '}
            {t(
              'can submit their channel to receive funding and any fan can invest their'
            )}{' '}
            <span className="font-bold">Tokens</span>, {t('so both')}{' '}
            <span className="font-bold">{t('Fan')}</span> {t('and')}{' '}
            <span className="font-bold">{t('Creator')}</span>{' '}
            {t(
              'receive rewards in the form of a yield. An intelligent mechanism only made possible by the cryptocurrency smart contracts system.'
            )}
          </p>

          <p className="mb-[40px] sm:mb-0">
            <span className="font-bold">cobogo</span>{' '}
            {t(
              'leverages its unique split funding system to sustainably monetize'
            )}{' '}
            <span className="font-bold">{t('YouTube Creators')}</span>.{' '}
            <span className="font-bold">{t('Fans')}</span> {t('can stake')}{' '}
            <span className="font-bold">{t('CBG tokens')}</span>{' '}
            {t('on the pool of their favorite')}{' '}
            <span className="font-bold">{t('YouTube Creator')}</span>{' '}
            {t('and automatically start getting CBG rewards.')}
          </p>
        </div>

        <div className="flex flex-col max-w-[530px]">
          <p className="mb-[40px]">
            {t('with')} <span className="font-bold">CBG (NFT)</span>,{' '}
            {t(
              'creators can design all the perks for their fans. In this way, everyone that uses this method of funding can receive benefits not found anywhere else.'
            )}
          </p>

          <p>
            {t(
              'even small and niche YouTubers will be able to be properly monetized by their own community. Through cobogo, community building and monetization is taken to a new level not found in web2.'
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from 'next-i18next';

import CallToActionButton from './CallToActionButton';

export default function Header() {
  const { t } = useTranslation('header');

  return (
    <section className="flex w-full h-full pb-24 bg-primary lg:pb-0">
      <div className="flex-1 mb-0 text-white md:px-20">
        <h2 className="flex flex-col items-center justify-center mb-16 text-2xl font-normal sm:text-4xl lg:text-5xl">
          {t('the next generation of')}
          <p className="flex flex-col items-center justify-center text-2xl font-bold sm:text-4xl md:text-5xl lg:text-7xl">
            {t('YouTube monetization')}
          </p>
        </h2>

        <div className="grid grid-cols-1 gap-40 px-5 lg:grid-cols-2 lg:px-0">
          <div className="flex flex-col items-start lg:w-full lg:h-full">
            <div className="mb-8">
              <h2 className="text-xl font-normal md:text-2xl lg:text-3xl">
                {t(
                  'cobogo allows fans to support their favorite Content Creators channels by splitting the rewards of their investment in an easy way.'
                )}
              </h2>
            </div>

            <div className="mb-8">
              <p className="font-normal leading-6 sm:text-md md:text-lg lg:text-xl">
                {t(
                  'any Content Creator can submit their channel to receive funding and any fan can invest their Tokens, so both Patron and Creator receive rewards in the form of a yield. An intelligent mechanism only made possible by the cryptocurrency smart contracts system.'
                )}
              </p>
            </div>

            <a
              href="https://app.cobogo.social/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CallToActionButton
                color="purple"
                placeholder={t('monetize your channel')}
              />
            </a>
          </div>

          <div className="hidden w-full h-full lg:w-full lg:flex lg:justify-center">
            <div className="flex items-center justify-center w-full h-full">
              <img
                className="object-fill w-full h-full"
                src="/images/guy.svg"
                alt="Guy"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

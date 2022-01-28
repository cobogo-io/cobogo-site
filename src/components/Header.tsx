import { useTranslation } from 'next-i18next';

import CallToActionButton from './CallToActionButton';

export default function Header() {
  const { t } = useTranslation('header');

  return (
    <section className="flex h-full w-full bg-primary pb-24 lg:pb-0">
      <div className="flex-1 md:px-20 mb-0 text-white">
        <h2 className="font-normal text-2xl sm:text-4xl lg:text-5xl flex flex-col justify-center items-center mb-16">
          {t('the next generation of')}
          <p className="font-bold text-2xl sm:text-4xl md:text-5xl lg:text-7xl flex flex-col justify-center items-center">
            {t('YouTube monetization')}
          </p>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-40 px-5 lg:px-0">
          <div className="lg:w-full lg:h-full flex flex-col items-start">
            <div className="mb-8">
              <h2 className="font-normal text-xl md:text-2xl lg:text-3xl">
                {t(
                  'cobogo allows fans to support their favorite Content Creators channels by splitting the rewards of their investment in an easy way.'
                )}
              </h2>
            </div>
            <div className="mb-8">
              <p className="font-normal sm:text-md md:text-lg lg:text-xl leading-6">
                {t(
                  'any Content Creator can submit their channel to receive funding and any fan can invest their Tokens, so both Patron and Creator receive rewards in the form of a yield. An intelligent mechanism only made possible by the cryptocurrency smart contracts system.'
                )}
              </p>
            </div>
            <a
              href="https://t.me/cobogosocial"
              target="_blank"
              rel="noopener noreferrer"
            >
              <CallToActionButton
                color="purple-light"
                placeholder={t('join our Telegram')}
              />
            </a>
          </div>
          <div className="hidden h-full lg:w-full lg:flex lg:justify-center w-full">
            <div className="flex justify-center items-center h-full w-full">
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

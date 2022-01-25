import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import CallToActionButton from '../CallToActionButton';
import Link from 'next/link';

export default function Header() {
  const { t } = useTranslation('header');

  return (
    <section className="flex h-full w-full bg-primary pb-24 lg:pb-0">
      <div className="flex-1 md:px-20 mb-0 text-white">
        <h2 className="font-normal text-2xl sm:text-4xl lg:text-5xl flex flex-col justify-center items-center mb-16">
          {t('the next generation of')}
          <h1 className="font-bold  text-2xl sm:text-4xl md:text-5xl lg:text-7xl flex flex-col justify-center items-center">
            {t('YouTube monetization')}
          </h1>
        </h2>
        <div className="flex flex-row justify-around items-start px-5">
          <div className="lg:w-1/2 lg:h-1/2 flex flex-col items-start">
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
            <Link href="https://t.me/cobogosocial">
              <a target="_blank" rel="noopener noreferrer">
                <CallToActionButton
                  color="purple-light"
                  placeholder={t('join our Telegram')}
                />
              </a>
            </Link>
          </div>
          <div className="hidden lg:block h-[492px]">
            <Image
              width="486px"
              height="492px"
              objectFit="contain"
              src="/images/main.svg"
              alt="Guy playing youtube site"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

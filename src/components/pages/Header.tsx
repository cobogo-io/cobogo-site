import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from '../NextLink';

const Header: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation('header');

  return (
    <section className="flex h-full w-full py-24 bg-bgprimary">
      <div className="flex-1 px-5 md:px-20 text-white">
        <div className="w-60 h-14 relative">
          <Image
            layout="fill"
            objectFit="contain"
            src="/logos/cobogo-logo.svg"
            alt="Guy playing youtube site"
          />
        </div>
        <h1 className="bold-36 py-7">
          {t('The next generation of Youtube monetization')}
        </h1>
        <h2 className=".light-24 pb-7 font-light">
          {t(
            'cobogo allows fans to support their favorite Youtube channels by sharing the rewards of their investments in a fashion way.'
          )}
        </h2>
        <h4 className=".regular-18 pb-9 font-light">
          {t(
            'Any Youtuber can submit your channel to receive rewards and any fan can invest money and share the rewards. A super intelligent mechanism made possible by the cryptocurrency smart contracts system.'
          )}
        </h4>
        <div className="flex">
          <Link
            href="#how-work-youtuber"
            passHref
            className="bg-youtuber px-6 py-2 mr-5"
          >
            <button className="bold-24">{t("I'm a Youtuber")}</button>
          </Link>
          <Link
            className="bg-patron px-6 py-2"
            href="#how-work-patron"
            passHref
          >
            <button className="bold-24">{t("I'm a Patron")}</button>
          </Link>
        </div>
      </div>
      <div className="flex-1 mr-20 hidden md:block">
        <div className="w-full h-full relative">
          <Image
            layout="fill"
            objectFit="contain"
            src="/hero.svg"
            alt="Guy playing youtube site"
          />
        </div>
        <div className="absolute right-10 top-5">
          <Link
            href="/"
            locale={router.locale === 'en-US' ? 'pt-BR' : 'en-US'}
            className="flex flex-row text-white body-small justify-center item-center"
          >
            <div>
              <span className={router.locale === 'en-US' ? 'text-cobogo' : ''}>
                EN
              </span>
            </div>
            <span className="px-4"></span>
            <div>
              <span
                className={
                  router.locale === 'pt-BR' ? 'text-cobogo font-bold ' : ''
                }
              >
                PT
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;

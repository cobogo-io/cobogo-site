import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from '../components/next-link';

const Header: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation('header');

  return (
    <section className="flex h-full w-full py-24 bg-bgprimary">
      <div className="flex-1 mx-20 text-white">
        <div className=" w-60 h-14 relative">
          <Image
            layout="fill"
            objectFit="contain"
            src="/logos/cobogo-logo.svg"
            alt="Guy playing youtube site"
          />
        </div>
        <h1 className="title py-7 font-bold">
          {t('The next generation of Youtube monetization')}
        </h1>
        <h2 className="subtitle pb-7 font-light">
          {t(
            'cobogo allows fans to support their favorite Youtube channels by sharing the rewards of their investments in a fashion way.'
          )}
        </h2>
        <h4 className="body pb-9 font-light">
          {t(
            'Any Youtuber can submit your channel to receive rewards and any fan can invest money and share the rewards. A super intelligent mechanism made possible by the cryptocurrency smart contracts system.'
          )}
        </h4>
        <div className="flex">
          <Link
            href="#how-work-youtuber"
            passHref
            className="bg-youtuber px-2 py-4 mr-5 text-2xl font-bold"
          >
            <button>{t("I'm a Youtuber")}</button>
          </Link>
          <Link
            className="bg-patron px-2 py-4 text-2xl font-bold"
            href="#how-work-patron"
            passHref
          >
            <button>{t("I'm a Patron")}</button>
          </Link>
        </div>
      </div>
      <div className="flex-1 mr-20 hidden md:block">
        <div className="w-4/5 h-4/5 relative">
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
            locale={router.locale === 'en' ? 'pt' : 'en'}
            className="flex flex-row text-white justify-center item-center"
          >
            <div
              className={
                router.locale === 'en'
                  ? 'border-cobogo border-double border-2 flex p-1'
                  : 'flex p-1'
              }
            >
              <Image
                width="30"
                height="20"
                alt="United States"
                src="/icons/US.svg"
              />
            </div>
            <span className="px-2"></span>
            <div
              className={
                router.locale === 'pt'
                  ? 'border-cobogo border-double border-2 flex p-1'
                  : 'flex p-1'
              }
            >
              <Image width="30" height="20" alt="Brazil" src="/icons/BR.svg" />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Header;

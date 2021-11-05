import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';
import Link from '../NextLink';
import ChooseLanguage from '../ChooseLanguage';

const Header: NextPage = () => {
  const { t } = useTranslation('header');

  return (
    <section className="flex h-full w-full py-24  bg-bgprimary">
      <div className="flex-1 px-5 md:px-20 mb-0 md:mb-20 text-white">
        <div className="w-60 h-14 relative">
          <Image
            layout="fill"
            objectFit="contain"
            src="/logos/cobogo-logo.svg"
            alt="Guy playing youtube site"
          />
        </div>
        <h1 className="bold-36 py-7">
          {t('the next generation of YouTube monetization')}
        </h1>
        <h2 className="light-24 pb-7 font-light">
          {t(
            'cobogo allows fans to support their favorite YouTube channels by sharing the rewards of their investments in a easy way.'
          )}
        </h2>
        <h4 className="regular-18 pb-9 font-light">
          {t(
            'any YouTuber can submit your channel to receive rewards and any fan can invest money and share the rewards. A super intelligent mechanism made possible by the cryptocurrency smart contracts system.'
          )}
        </h4>
        <div className="flex">
          {/* <Link
            href="#how-work-youtuber"
            passHref
            className="bg-youtuber px-6 py-2 mr-5 hover:bg-youtuberhover"
          >
            <button className="bold-24">{t("i'm a YouTuber")}</button>
          </Link>
          <Link
            className="bg-patron px-6 py-2 hover:bg-patronhover"
            href="#how-work-patron"
            passHref
          >
            <button className="bold-24">{t("i'm a patron")}</button>
          </Link> */}
          <Link
            className="bg-patron px-6 py-2 hover:bg-patronhover"
            href="https://t.me/cobogosocial"
            passHref
          >
            <button className="bold-24">{t("join our Telegram")}</button>
          </Link>
        </div>
      </div>
      <div className="flex-1 md:pr-20 hidden md:block">
        <div className="w-full h-full relative">
          <Image
            layout="fill"
            objectFit="contain"
            src="/hero.svg"
            alt="Guy playing youtube site"
          />
        </div>
        <ChooseLanguage />
      </div>
    </section>
  );
};

export default Header;

import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const Partners: NextPage = () => {
  // const router = useRouter();
  const { t } = useTranslation('partners');

  return (
    <section className="flex flex-col px-5 md:px-0 items-center h-full w-full py-24 bg-bgprimary">
      <div className="flex flex-col items-center">
        <h1 className="bold-36 text-center pb-7">{t('partners')}</h1>
        <h2 className="light-24 text-center pb-20 w-full md:w-1/2">
          {t(
            'our main partnership is with DEV Protocol, the token behind the dapp. If you want to partner with us, feel free to keep in touch.'
          )}
        </h2>
      </div>
      <a
        className="pb-20 md:pb-0 flex flex-col items-center"
        target="_blank"
        href="https://devprotocol.xyz/"
        rel="noopener noreferrer"
      >
        <div className="w-56 h-20 relative">
          <Image
            layout="fill"
            objectFit="contain"
            src="/logos/dev-logo.svg"
            alt="DEV logo"
          />
        </div>
      </a>
    </section>
  );
};

export default Partners;

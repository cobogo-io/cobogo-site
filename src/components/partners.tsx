import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';
import Image from 'next/image';

const Partners: NextPage = () => {
  // const router = useRouter();
  const { t } = useTranslation('partners');

  return (
    <section className="flex flex-col px-5 md:px-0 items-center h-full w-full py-24 bg-bgprimary">
      <div className="flex flex-col items-center">
        <h1 className="title text-center pb-7 font-bold">{t('Partners')}</h1>
        <h2 className="subtitle text-center pb-20 w-full md:w-1/2 font-light">
          {t(
            'Our main partnership is with DEV Protocol, the token behind the dApp. If you want to partner with us, feel free to keep in touch.'
          )}
        </h2>
      </div>
      <div className="pb-20 md:pb-0 flex flex-col items-center">
        <div className="w-56 h-20 relative">
          <Image
            layout="fill"
            objectFit="contain"
            src="/logos/dev-logo.svg"
            alt="DEV logo"
          />
        </div>
      </div>
    </section>
  );
};

export default Partners;

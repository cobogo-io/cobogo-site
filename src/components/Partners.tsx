import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function Partners() {
  const { t } = useTranslation('partners');

  return (
    <section className="flex flex-col px-5 md:px-0 items-center h-full w-full py-24 bg-primary">
      <div className="flex flex-col items-center">
        <h1 className="bold-36 text-center pb-7">{t('partners')}</h1>
        <h2 className="light-24 text-center pb-20 w-full md:w-1/2">
          {t(
            'our main partnership is with DEV Protocol, the token behind the dapp. If you want to partner with us, feel free to contact us.'
          )}
        </h2>
      </div>
      <div className="flex">
        <a
          target="_blank"
          href="https://devprotocol.xyz/"
          rel="noopener noreferrer"
        >
          <Image
            width={136}
            height={68}
            src="/logos/dev-logo.svg"
            alt="DEV logo"
          />
        </a>
      </div>
    </section>
  );
}

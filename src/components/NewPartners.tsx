import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function Partners() {
  const { t } = useTranslation('partners');

  return (
    <section className="flex flex-col px-5 md:px-0 items-center h-full w-full py-24 bg-primary">
      <div className="flex flex-col items-center">
        <h1 className="bold-36 text-center pb-7">
          {t('planned integrations')}
        </h1>
        <h2 className="light-24 text-center pb-20 w-full md:w-1/2">
          {t(
            'our main partnership is with Dev Protocol, the protocol behind the staking mechanism in the dApp. We are also deliberating on how to with Coinvise, Drips Network and Unlock Protocol. If you want to partner with us, or think your protocol would fit our ecosystem, feel free to get in touch.'
          )}
        </h2>
      </div>
      <div className="flex justify-center items-center">
        <a
          target="_blank"
          href="https://devprotocol.xyz/"
          rel="noopener noreferrer"
        >
          <Image
            width={186}
            height={27}
            src="/logos/coinvise-logo.svg"
            alt="DEV logo"
          />
        </a>
        <a
          className="ml-16"
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
        <a
          className="ml-16"
          target="_blank"
          href="https://devprotocol.xyz/"
          rel="noopener noreferrer"
        >
          <Image
            width={289}
            height={44}
            src="/logos/drips-logo.svg"
            alt="DEV logo"
          />
        </a>
      </div>
    </section>
  );
}

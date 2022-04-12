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
            'if you want to partner with us, or think your protocol would fit our ecosystem, get in touch.'
          )}
        </h2>
      </div>

      <div className="flex">
        <a
          target="_blank"
          className="mr-8"
          href="https://docs.cobogo.social/platform/protocols/drips-network"
          rel="noopener noreferrer"
        >
          <Image
            width={231}
            height={45}
            src="/logos/radicle-drips-logo.svg"
            alt="radicle drips logo"
          />
        </a>

        <a
          target="_blank"
          href="https://docs.cobogo.social/platform/protocols/unlock-protocol-+-mintgate"
          rel="noopener noreferrer"
        >
          <Image
            width={190}
            height={40}
            src="/logos/unlock-logo.svg"
            alt="radicle drips logo"
          />
        </a>
      </div>
    </section>
  );
}

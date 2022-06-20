import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function PlannedIntegrations() {
  const { t } = useTranslation('planned-integrations');

  return (
    <section className="flex flex-col items-center h-full w-full py-[100px] px-[20px] bg-primary">
      <div className="flex flex-col items-center">
        <h1 className="bold-36 text-center pb-7">
          {t('planned integrations')}
        </h1>

        <h2 className="light-24 text-center pb-20 max-w-[600px]">
          {t(
            'if you want to partner with us, or think your protocol would fit our ecosystem, get in touch.'
          )}
        </h2>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center">
        <a
          target="_blank"
          className="flex sm:mr-8 mb-8 sm:mb-0"
          href="https://docs.cobogo.social/overview/planned-features/manage-social-tokens"
          rel="noopener noreferrer"
        >
          <Image
            width={170}
            height={24}
            src="/logos/coinvise-logo.svg"
            alt="coinvise logo"
          />
        </a>

        <a
          target="_blank"
          className="flex sm:mr-8 mb-8 sm:mb-0"
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
          className="flex"
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

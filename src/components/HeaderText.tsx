import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function HeaderText(): JSX.Element {
  const { t } = useTranslation('header-text');

  return (
    <section className="bg-gray flex justify-center items-center px-[20px] py-[50px] sm:py-[100px] text-white text-[22px]">
      <div className="w-full max-w-[1300px] flex flex-col sm:flex-row justify-between items-center">
        <div className="flex flex-col max-w-[530px] h-full">
          <p className="mb-[40px]">
            {t(
              'Cobogo Ventures is a seed/early-stage investor for prominent Creators with a proprietary algorithm to estimate Creators’ valuation.'
            )}
          </p>

          <p className="mb-[40px] sm:mb-0">
            {t(
              'Cobogo Fundraise allows Creators to tokenize equity of their company and raise funds continuously using Rolling Safe.'
            )}
          </p>
        </div>

        <Image
          src="/images/flywheel.svg"
          width={773}
          height={900}
          alt="flywheel"
        />

        <div className="flex flex-col max-w-[530px]">
          <p className="mb-[40px]">
            {t(
              'Cobogo Social lets Creators present their business, metrics and services to investors, brands, and their own audience.'
            )}
          </p>

          <p>
            {t(
              'Cobogo Start is the simplest way for Creators to launch and run a US business without paperwork or legal headaches.'
            )}
          </p>
        </div>
      </div>
    </section>
  );
}

import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function Header(): JSX.Element {
  const { t } = useTranslation('how-work-content-creator');

  return (
    <section className="bg-primary flex flex-col justify-center items-center px-[20px] py-[50px] sm:py-[100px] text-white">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full max-w-[1300px]">
        <div className="flex flex-col">
          <p className="text-[36px] font-bold text-center sm:text-left">
            {t('How it works for a Content Creator')}
          </p>

          <p className="text-[22px] mb-8 sm:mb-[100px] text-center sm:text-left">
            {t('Transform yourself into a business and maximize your growth.')}
          </p>
        </div>

        <a
          target="_blank"
          href="https://app.cobogo.social/submit/"
          className="px-[20px] py-[10px] font-bold border-[2px] border-violet hover:cursor-pointer text-[22px] hidden sm:flex justify-center items-center mb-8 sm:mb-0"
          rel="noreferrer"
        >
          create your profile
        </a>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start sm:justify-between w-full max-w-[1300px]">
        <div className="flex flex-col w-[290px]">
          <div className="mb-[40px]">
            <Image
              src="/images/youtuber-1.png"
              width={290}
              height={290}
              alt="youtuber"
            />
          </div>

          <p className="font-bold text-[22px]">{t('Create Your Profile')}</p>

          <p className="text-[18px] mb-[80px] sm:mb-0">
            {t(
              'Your Cobogo Social profile is the place to advertise your businesses to investors, brands and your own audience.'
            )}
          </p>
        </div>

        <div className="flex flex-col w-[290px]">
          <div className="mb-[40px]">
            <Image
              src="/images/youtuber-2.png"
              width={290}
              height={290}
              alt="youtuber"
            />
          </div>

          <p className="font-bold text-[22px]">{t('Become a Business')}</p>

          <p className="text-[18px] mb-[80px] sm:mb-0">
            {t(
              'Cobogo Start is the first step to bootstrap your work by providing the easiest way to incorporate Creators-as-a-business in Delaware.'
            )}
          </p>
        </div>

        <div className="flex flex-col w-[290px]">
          <div className="mb-[40px]">
            <Image
              src="/images/fan-youtuber-3.png"
              width={290}
              height={290}
              alt="youtuber"
            />
          </div>

          <p className="font-bold text-[22px]">{t('Raise Funds')}</p>

          <p className="text-[18px] mb-[80px] sm:mb-0">
            {t(
              'Cobogo Fundraise allows Creators to tokenize equity as a SEC-compliant token and apply Rolling SAFE, for a Continuous Securities Offering, instead of doing static fundraising rounds.'
            )}
          </p>
        </div>
      </div>

      <a
        target="_blank"
        href="https://app.cobogo.social/submit/"
        className="px-[20px] py-[10px] font-bold border-[2px] border-violet hover:cursor-pointer text-[22px] flex sm:hidden justify-center items-center"
        rel="noreferrer"
      >
        create your profile
      </a>
    </section>
  );
}

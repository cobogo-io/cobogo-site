import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function HowWorkFan(): JSX.Element {
  const { t } = useTranslation('how-work-fan');

  return (
    <section className="bg-gray flex flex-col justify-center items-center px-[20px] py-[50px] sm:py-[100px] text-white">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full max-w-[1300px]">
        <div className="flex flex-col">
          <p className="text-[36px] font-bold text-center sm:text-left">
            {t('How it works for Investors or the Audience')}
          </p>

          <p className="text-[22px] mb-8 sm:mb-[100px] text-center sm:text-left">
            {t(
              'Invest in your favorite Creator, maximize their growth and receive part of their revenue.'
            )}
          </p>
        </div>

        {/* <a
          target="_blank"
          href="https://app.cobogo.social/"
          className="px-[20px] py-[10px] font-bold border-[2px] border-violet2 hover:cursor-pointer h-[50px] text-[22px] hidden sm:flex justify-center items-center w-[205px] mb-8 sm:mb-0"
          rel="noreferrer"
        >
          find creators
        </a> */}
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start sm:justify-between w-full max-w-[1300px]">
        <div className="flex flex-col w-[290px]">
          <div className="mb-[40px]">
            <Image
              src="/images/fan-1.png"
              width={290}
              height={290}
              alt="youtuber"
            />
          </div>

          <p className="font-bold text-[22px]">{t('Find a Creator')}</p>

          <p className="text-[18px] mb-[80px] sm:mb-0">
            {t(
              'Browse Cobogo Social to find your favorite Creator to invest in. In their profile you will be able to check their analytics, business presentation and assess their potential.'
            )}
          </p>
        </div>

        <div className="flex flex-col w-[290px]">
          <div className="mb-[40px]">
            <Image
              src="/images/fan-2.png"
              width={290}
              height={290}
              alt="youtuber"
            />
          </div>

          <p className="font-bold text-[22px]">{t('Invest in Creators')}</p>

          <p className="text-[18px] mb-[80px] sm:mb-0">
            {t(
              'Invest in Creators with a Rolling SAFE, which allows you to own a share of that Creator Business. First-movers are the most rewarded, this is the benefit of the Continuous Security Offering.'
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

          <p className="font-bold text-[22px]">{t('Share their Success')}</p>

          <p className="text-[18px] mb-[80px] sm:mb-0">
            {t(
              'You will own a part of a Creator Business and share their success! All in an SEC-compliant Token.'
            )}
          </p>
        </div>
      </div>

      {/* <a
        target="_blank"
        href="https://app.cobogo.social/"
        className="px-[20px] py-[10px] font-bold border-[2px] border-violet2 hover:cursor-pointer h-[50px] text-[22px] flex sm:hidden justify-center items-center w-[205px]"
        rel="noreferrer"
      >
        find creators
      </a> */}
    </section>
  );
}

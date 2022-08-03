import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function Header(): JSX.Element {
  const { t } = useTranslation('how-work-content-creator');

  return (
    <section className="bg-primary flex flex-col justify-center items-center px-[20px] py-[50px] sm:py-[100px] text-white">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full max-w-[1300px]">
        <div className="flex flex-col">
          <p className="text-[36px] font-bold text-center sm:text-left">
            {t('how it works for a Content Creator')}
          </p>

          <p className="text-[22px] mb-8 sm:mb-[100px] text-center sm:text-left">
            {t('monetize and empower your fans and community with cobogo.')}
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

          <p className="font-bold text-[22px]">
            {t('1 - submit your channel')}
          </p>

          <p className="text-[18px] mb-[80px] sm:mb-0">
            {t(
              'to be able to receive rewards from your followers, you must apply your channel. The cobogo team will verify if it is a real channel with real followers, and approve it.'
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

          <p className="font-bold text-[22px]">{t('2 - spread the news')}</p>

          <p className="text-[18px] mb-[80px] sm:mb-0">
            {t(
              'let your fans know about cobogo so they can support and stake for you! It is important to keep the wheels turning.'
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

          <p className="font-bold text-[22px]">{t('3 - receive rewards')}</p>

          <p className="text-[18px] mb-[80px] sm:mb-0">
            {t(
              'continue your good work and wait for your followers to stake on your channel. You will receive the rewards on a block (minutes) basis and will be able to stake for other YouTubers as well.'
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

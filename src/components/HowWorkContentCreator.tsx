import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function Header(): JSX.Element {
  const { t } = useTranslation('header');

  return (
    <section className="bg-primary flex flex-col justify-center items-center px-[20px] py-[100px] text-white">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full max-w-[1300px]">
        <div className="flex flex-col">
          <p className="text-[36px] font-bold text-center sm:text-left">
            how it works for a Content Creator
          </p>

          <p className="text-[22px] mb-8 sm:mb-[100px] text-center sm:text-left">
            monetize and empower your fans and community with cobogo.
          </p>
        </div>

        <a
          target="_blank"
          href="https://app.cobogo.social/submit/"
          className="px-[20px] py-[10px] font-bold border-[2px] border-violet hover:cursor-pointer h-[50px] text-[22px] hidden sm:flex justify-center items-center w-[275px] mb-8 sm:mb-0"
          rel="noreferrer"
        >
          monetize your channel
        </a>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start sm:justify-between w-full max-w-[1300px]">
        <div className="flex flex-col w-[290px]">
          <div className="mb-[40px]">
            <Image src="/images/youtuber-1.png" width={290} height={290} />
          </div>

          <p className="font-bold text-[22px]">1 - submit your channel</p>

          <p className="text-[18px] mb-[80px] sm:mb-0">
            to be able to receive rewards from your followers, you must apply
            your channel. the cobogo team will verify if it is a real channel
            with real followers, and approve it.
          </p>
        </div>

        <div className="flex flex-col w-[290px]">
          <div className="mb-[40px]">
            <Image src="/images/youtuber-2.png" width={290} height={290} />
          </div>

          <p className="font-bold text-[22px]">2 - spread the news</p>

          <p className="text-[18px] mb-[80px] sm:mb-0">
            let your fans know about cobogo so they can support and stake for
            you! It is important to keep the wheels turning.
          </p>
        </div>

        <div className="flex flex-col w-[290px]">
          <div className="mb-[40px]">
            <Image src="/images/fan-youtuber-3.png" width={290} height={290} />
          </div>

          <p className="font-bold text-[22px]">3 - receive rewards</p>

          <p className="text-[18px] mb-[80px] sm:mb-0">
            continue your good work and wait for your followers to stake on your
            channel. You will receive the rewards on a block (minutes) basis and
            will be able to stake for other YouTubers as well.
          </p>
        </div>
      </div>

      <a
        target="_blank"
        href="https://app.cobogo.social/submit/"
        className="px-[20px] py-[10px] font-bold border-[2px] border-violet hover:cursor-pointer h-[50px] text-[22px] flex sm:hidden justify-center items-center w-[275px]"
        rel="noreferrer"
      >
        monetize your channel
      </a>
    </section>
  );
}

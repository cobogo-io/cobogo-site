import { useTranslation } from 'next-i18next';
import Image from 'next/image';

export default function Header(): JSX.Element {
  const { t } = useTranslation('header');

  return (
    <section className="bg-secondary flex flex-col justify-center items-center px-[20px] py-[100px] text-white">
      <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between w-full max-w-[1300px]">
        <div className="flex flex-col">
          <p className="text-[36px] font-bold text-center sm:text-left">
            how it works for the Fan
          </p>

          <p className="text-[22px] mb-8 sm:mb-[100px] text-center sm:text-left">
            support your favorite Content Creator while also earning money.
          </p>
        </div>

        <a
          target="_blank"
          href="https://app.cobogo.social/"
          className="px-[20px] py-[10px] font-bold border-[2px] border-violet2 hover:cursor-pointer h-[50px] text-[22px] hidden sm:flex justify-center items-center w-[205px] mb-8 sm:mb-0"
          rel="noreferrer"
        >
          start supporting
        </a>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start sm:justify-between w-full max-w-[1300px]">
        <div className="flex flex-col w-[290px]">
          <div className="mb-[40px]">
            <Image src="/images/fan-1.png" width={290} height={290} />
          </div>

          <p className="font-bold text-[22px]">1 - choose a channel</p>

          <p className="text-[18px] mb-[80px] sm:mb-0">
            choose your favorite channel to support and to stake on. Part of the
            rewards will go to the channel you chose, the other part for you.
            You can stake on multiple channels if you want to.
          </p>
        </div>

        <div className="flex flex-col w-[290px]">
          <div className="mb-[40px]">
            <Image src="/images/fan-2.png" width={290} height={290} />
          </div>

          <p className="font-bold text-[22px]">2 - stake CBG tokens</p>

          <p className="text-[18px] mb-[80px] sm:mb-0">
            first, you need to buy CBG tokens, which is the token used to stake
            and earn rewards.
          </p>
        </div>

        <div className="flex flex-col w-[290px]">
          <div className="mb-[40px]">
            <Image src="/images/fan-youtuber-3.png" width={290} height={290} />
          </div>

          <p className="font-bold text-[22px]">3 - receive rewards</p>

          <p className="text-[18px] mb-[80px] sm:mb-0">
            that’s it, you don’t need to do anything else, wait for your rewards
            and at any time you can withdraw them to your wallet.
          </p>
        </div>
      </div>

      <a
        target="_blank"
        href="https://app.cobogo.social/"
        className="px-[20px] py-[10px] font-bold border-[2px] border-violet2 hover:cursor-pointer h-[50px] text-[22px] flex sm:hidden justify-center items-center w-[205px]"
        rel="noreferrer"
      >
        start supporting
      </a>
    </section>
  );
}

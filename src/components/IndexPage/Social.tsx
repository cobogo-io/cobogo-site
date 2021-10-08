import type { NextPage } from 'next';
import Image from 'next/image';

const Social: NextPage = () => {
  return (
    <section className="flex flex-wrap items-center md:justify-between w-full py-5 md:py-10 px-5 md:px-32 bg-bgsecundary">
      <div className="min-w-full md:min-w-0">
        <a
          className="flex items-center pb-5 md:pb-0 cursor-pointer justify-center group"
          target="_blank"
          href="mailto:hi@cobogo.social"
          rel="noopener noreferrer"
        >
          <div className="w-16 h-11 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/icons/mail-icon.svg"
              alt="Email icon"
            />
          </div>
          <div className="bold-18 group-hover:text-cobogo">
            hi@cobogo.social
          </div>
        </a>
      </div>
      <div className="min-w-full md:min-w-0">
        <a
          className="flex items-center pb-5 md:pb-0 cursor-pointer justify-center group"
          target="_blank"
          href="https://t.me/cobogosocial"
          rel="noopener noreferrer"
        >
          <div className="w-16 h-11 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/icons/telegram-icon.svg"
              alt="Telegram icon"
            />
          </div>
          <div className="bold-18 group-hover:text-cobogo">/cobogosocial</div>
        </a>
      </div>
      <div className="min-w-full md:min-w-0">
        <a
          className="flex items-center pb-5 md:pb-0 cursor-pointer justify-center group"
          target="_blank"
          href="https://twitter.com/cobogosocial"
          rel="noopener noreferrer"
        >
          <div className="w-16 h-11 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/icons/twitter-icon.svg"
              alt="Twitter icon"
            />
          </div>
          <div className="bold-18 group-hover:text-cobogo">@cobogosocial</div>
        </a>
      </div>
      <div className="min-w-full md:min-w-0">
        <a
          className="flex items-center cursor-pointer justify-center group"
          target="_blank"
          href="https://github.com/cobogo-social"
          rel="noopener noreferrer"
        >
          <div className="w-16 h-11 relative">
            <Image
              layout="fill"
              objectFit="contain"
              src="/icons/github-icon.svg"
              alt="Github icon"
            />
          </div>
          <div className="bold-18 group-hover:text-cobogo">/cobogo-social</div>
        </a>
      </div>
    </section>
  );
};

export default Social;

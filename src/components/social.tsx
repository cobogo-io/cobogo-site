import type { NextPage } from 'next';
import Image from 'next/image';

const Social: NextPage = () => {
  return (
    <section className="flex flex-wrap items-center md:justify-between h-full w-full py-10 px-5 md:px-32 bg-bgsecundary">
      <div className="min-w-full md:min-w-0">
        <a
          className="flex items-center pb-5 cursor-pointer justify-center"
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
          <div className="body">hi@cobogo.social</div>
        </a>
      </div>
      <div className="min-w-full md:min-w-0">
        <a
          className="flex items-center pb-5 cursor-pointer justify-center"
          target="_blank"
          href="https://telegram.com/cobogosocial"
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
          <div className="body">/cobogosocial</div>
        </a>
      </div>
      <div className="min-w-full md:min-w-0">
        <a
          className="flex items-center pb-5 cursor-pointer justify-center"
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
          <div className="body">@cobogosocial</div>
        </a>
      </div>
      <div className="min-w-full md:min-w-0">
        <a
          className="flex items-center pb-5 cursor-pointer justify-center"
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
          <div className="body">/cobogo-social</div>
        </a>
      </div>
    </section>
  );
};

export default Social;

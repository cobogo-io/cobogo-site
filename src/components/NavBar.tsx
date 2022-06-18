import Image from 'next/image';

import Link from './NextLink';
import SelectLanguage from './SelectLanguage';

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center flex-col sm:flex-row bg-primary text-white px-8 pt-8">
      <div className="mb-8 sm:mb-0">
        <Link href="/">
          <div className="relative z-10">
            <Image
              width={175}
              height={40}
              src="/logos/cobogo-logo.svg"
              alt="cobogo logo"
            />
          </div>
        </Link>
      </div>

      <div className="w-full sm:w-auto flex flex-col sm:flex-row justify-around sm:justify-center items-center z-10">
        <a
          target="_blank"
          href="https://app.cobogo.social/submit/"
          className="px-[20px] py-[10px] font-bold border-[2px] border-violet hover:cursor-pointer flex justify-center items-center"
          rel="noreferrer"
        >
          monetize your channel
        </a>

        <a
          target="_blank"
          href="https://app.cobogo.social/"
          className="px-[20px] py-[10px] font-bold border-[2px] border-violet2 hover:cursor-pointer mt-[15px] sm:mt-[0px] sm:ml-[30px] flex justify-center items-center"
          rel="noreferrer"
        >
          start supporting
        </a>

        <SelectLanguage />
      </div>
    </nav>
  );
}

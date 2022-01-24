import Image from 'next/image';
import Link from './NextLink';
import SelectLanguage from './SelectLanguage';

export default function NavBar() {
  return (
    <nav className="flex justify-between items-center flex-col sm:flex-row bg-primary text-white p-8">
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
      <div className="w-full sm:w-auto flex flex-row justify-around sm:justify-center items-center">
        <a href="https://docs.cobogo.social" className="sm:mr-8 font-bold">
          whitepaper
        </a>
        <SelectLanguage />
      </div>
    </nav>
  );
}

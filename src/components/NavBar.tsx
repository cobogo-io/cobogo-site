import Image from 'next/image';
import ChooseLanguage from './ChooseLanguage';

export default function NavBar() {
  return (
    <nav className="flex justify-around items-center flex-col sm:flex-row bg-primary text-white p-8">
      <div className="mb-8 sm:mb-0">
        <Image
          width={175}
          height={40}
          src="/logos/cobogo-logo.svg"
          alt="cobogo logo"
        />
      </div>
      <div className="w-full sm:w-auto flex flex-row justify-around sm:justify-center items-center">
        <a className="sm:mr-8 font-bold">whitepaper</a>
        <ChooseLanguage />
      </div>
    </nav>
  );
}

import { useRouter } from 'next/router';
import Link from './NextLink';

const ChooseLanguage = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="absolute right-10 top-5">
      <Link
        href="/"
        locale={router.locale === 'en-US' ? 'pt-BR' : 'en-US'}
        className="flex flex-row text-white body-small justify-center item-center"
      >
        <div>
          <span className={router.locale === 'en-US' ? 'text-cobogo' : ''}>
            EN
          </span>
        </div>
        <span className="px-4"></span>
        <div>
          <span
            className={
              router.locale === 'pt-BR' ? 'text-cobogo font-bold ' : ''
            }
          >
            PT
          </span>
        </div>
      </Link>
    </div>
  );
};

export default ChooseLanguage;

import { useRouter } from 'next/router';
import LanguageItem from './LanguageItem';

const ChooseLanguage = (): JSX.Element => {
  const router = useRouter();
  return (
    <div className="absolute right-10 top-5">
      {router.locales.map((locale) => <LanguageItem key={locale} locale={locale} />)}
    </div>
  );
};

export default ChooseLanguage;

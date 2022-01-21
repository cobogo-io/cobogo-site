import { useRouter } from 'next/router';
import Link from './NextLink';

interface ILanguageProps {
  locale: string;
}

const LanguageItem = (props: ILanguageProps): JSX.Element => {
  const router = useRouter();

  if (props.locale === router.locale) {
    return <a className="pr-4 text-blue font-bold">{props.locale}</a>;
  } else {
    return (
      <Link
        href={router.pathname}
        locale={props.locale}
        className="pr-4 text-white body-small justify-center item-center"
      >
        {props.locale}
      </Link>
    );
  }
};

export default LanguageItem;

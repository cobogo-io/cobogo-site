import { useRouter } from 'next/router';
import Link from './NextLink';

const LanguageItem = (props): JSX.Element => {
  const router = useRouter();

  if(props.locale === router.locale) {
    return(
      <span className='pr-4 text-cobogo font-bold'>
        {props.locale}
      </span>
    )
  } else {
    return(
      <Link
        href={router.pathname}
        locale={props.locale}
        className="pr-4 text-white body-small justify-center item-center"
      >
        <span>{props.locale}</span>
      </Link>
    )
  }
};

export default LanguageItem;

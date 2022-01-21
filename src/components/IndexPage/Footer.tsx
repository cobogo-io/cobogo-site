import { useTranslation } from 'react-i18next';
import Link from '../NextLink';

export default function Footer() {
  const { t } = useTranslation('footer');

  return (
    <section className="flex flex-wrap md:flex-nowrap justify-center py-5 bg-blue">
      <div className="flex items-center pb-5 md:pb-0 min-w-full md:min-w-0 justify-center px-0 md:px-5 ">
        <Link href="/faq" className="bold-18">
          faq
        </Link>
      </div>
      <div className="flex items-center pb-5 md:pb-0 min-w-full md:min-w-0 justify-center px-0 md:px-5">
        <Link href="/code" className="bold-18">
          {t('code of conduct')}
        </Link>
      </div>
      <div className="flex items-center pb-5 md:pb-0 min-w-full md:min-w-0 justify-center px-0 md:px-5">
        <Link href="/privacy" className="bold-18">
          {t('privacy policy')}
        </Link>
      </div>
      <div className="flex items-center min-w-full md:min-w-0 justify-center px-0 md:px-5">
        <Link href="/terms" className="bold-18">
          {t('terms of use')}
        </Link>
      </div>
      <div className="flex items-center min-w-full md:min-w-0 justify-center px-0 md:px-5">
        <Link href="http://docs.cobogo.social" className="bold-18">
          {t('docs')}
        </Link>
      </div>
    </section>
  );
}

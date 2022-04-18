import { useTranslation } from 'react-i18next';

import Link from './NextLink';

export default function Footer() {
  const { t } = useTranslation('footer');

  return (
    <section className="flex flex-wrap justify-center py-5 md:flex-nowrap bg-blue">
      <div className="flex items-center justify-center min-w-full px-0 pb-5 md:pb-0 md:min-w-0 md:px-5 ">
        <Link href="/faq" className="bold-18">
          faq
        </Link>
      </div>

      <div className="flex items-center justify-center min-w-full px-0 pb-5 md:pb-0 md:min-w-0 md:px-5">
        <Link href="/code" className="bold-18">
          {t('code of conduct')}
        </Link>
      </div>

      <div className="flex items-center justify-center min-w-full px-0 pb-5 md:pb-0 md:min-w-0 md:px-5">
        <Link href="/privacy" className="bold-18">
          {t('privacy policy')}
        </Link>
      </div>

      <div className="flex items-center justify-center min-w-full px-0 md:pb-0 md:min-w-0 md:px-5">
        <Link href="/terms" className="bold-18">
          {t('terms of use')}
        </Link>
      </div>

      <div className="flex items-center justify-center min-w-full px-0 md:pb-0 md:min-w-0 md:px-5">
        <Link href="mailto:hi@cobogo.social" className="bold-18">
          {t('email')}
        </Link>
      </div>
    </section>
  );
}

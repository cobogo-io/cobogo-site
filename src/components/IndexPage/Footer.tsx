import type { NextPage } from 'next';
import { useTranslation } from 'react-i18next';
import Link from '../NextLink';

const Footer: NextPage = () => {
  const { t } = useTranslation('footer');

  return (
    <section className="flex flex-wrap md:flex-nowrap justify-center  py-5 bg-cobogo">
      <div className="flex items-center pb-5 md:pb-0 min-w-full md:min-w-0 justify-center px-0 md:px-5 ">
        <Link href="/faq" className="bold-18">
          FAQ
        </Link>
      </div>
      <div className="flex items-center pb-5 md:pb-0 min-w-full md:min-w-0 justify-center px-0 md:px-5">
        <Link href="/code" className="bold-18">
          {t('Code of conduct')}
        </Link>
      </div>
      <div className="flex items-center pb-5 md:pb-0 min-w-full md:min-w-0 justify-center px-0 md:px-5">
        <Link href="/privacy" className="bold-18">
          {t('Privacy policy')}
        </Link>
      </div>
      <div className="flex items-center min-w-full md:min-w-0 justify-center px-0 md:px-5">
        <Link href="/terms" className="bold-18">
          {t('Terms of use')}
        </Link>
      </div>
    </section>
  );
};

export default Footer;

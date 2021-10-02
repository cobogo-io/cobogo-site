import type { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

const Footer: NextPage = () => {
  const { t } = useTranslation('footer');

  return (
    <section className="flex flex-wrap md:flex-nowrap justify-center md:justify-around px-0 md:px-44 py-5 bg-cobogo">
      <div className="flex items-center pb-5 md:pb-0 min-w-full md:min-w-0 justify-center ">
        <button className="bold-18">FAQ</button>
      </div>
      <div className="flex items-center pb-5 md:pb-0 min-w-full md:min-w-0 justify-center">
        <button className="bold-18">{t('Code of conduct')}</button>
      </div>
      <div className="flex items-center pb-5 md:pb-0 min-w-full md:min-w-0 justify-center">
        <button className="bold-18">{t('Privacy policy')}</button>
      </div>
      <div className="flex items-center min-w-full md:min-w-0 justify-center">
        <button className="bold-18">{t('Terms of use')}</button>
      </div>
    </section>
  );
};

export default Footer;

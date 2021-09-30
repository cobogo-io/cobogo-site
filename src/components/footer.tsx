import type { NextPage } from 'next';
import { useTranslation } from 'react-i18next';

const Footer: NextPage = () => {
  const { t } = useTranslation('footer');

  return (
    <section className="flex flex-wrap md:flex-nowrap justify-center h-full w-full pb-10 md:pb-0 py-7 px-5 md:px-20 bg-cobogo">
      <div className="flex items-center px-10 py-5 min-w-full md:min-w-0 justify-center ">
        <button className="body">FAQ</button>
      </div>
      <div className="flex items-center px-10 py-5 min-w-full md:min-w-0 justify-center">
        <button className="body">{t('Code of conduct')}</button>
      </div>
      <div className="flex items-center px-10 py-5 min-w-full md:min-w-0 justify-center">
        <button className="body">{t('Privacy policy')}</button>
      </div>
      <div className="flex items-center px-10 py-5 min-w-full md:min-w-0 justify-center">
        <button className="body">{t('Terms of use')}</button>
      </div>
    </section>
  );
};

export default Footer;

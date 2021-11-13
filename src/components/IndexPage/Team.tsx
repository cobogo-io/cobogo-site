import { useState } from 'react';
import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';

const Team: NextPage = () => {
  const { t } = useTranslation('team');
  const [selected, setSelected] = useState<Number>(0);

  return (
    <section className="flex flex-col items-center h-full w-full py-24 bg-bgsecundary">
      <div className="flex flex-col items-center">
        <h1 className="bold-36 text-center pb-7">{t('meet the team')}</h1>
        <h2 className="light-24 text-center pb-20 w-full md:w-1/2 px-5 md:px-0">
          {t(
            'our team works specifically on the dapp to make the best experience for patrons and creators. We have extensive experience in software development, blockchain and tokenomics.'
          )}
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row px-5 md:px-20 w-full ">
        <div className="md:mr-32 mb-10 md:mb-0">
          <div className="mb-5  cursor-pointer" onClick={() => setSelected(0)}>
            <div className={selected === 0 ? 'bold-cobogo-24' : 'bold-24'}>
              Rafael Lima
            </div>
            <div className="light-16">{t('product strategist')}</div>
          </div>
          <div className="mb-5  cursor-pointer" onClick={() => setSelected(1)}>
            <div className={selected === 1 ? 'bold-cobogo-24' : 'bold-24'}>
              Jonatas Martins
            </div>
            <div className="light-16">{t('developer')}</div>
          </div>
          <div
            className="sm:mb-20 lg:mb-5 cursor-pointer"
            onClick={() => setSelected(2)}
          >
            <div className={selected === 2 ? 'bold-cobogo-24' : 'bold-24'}>
              Mikael Carrara
            </div>
            <div className="light-16">{t('designer')}</div>
          </div>
        </div>
        <div className="pb-5 pr-20 flex flex-1">
          <div className={selected === 0 ? 'regular-18' : 'hidden'}>
            <div className="bold-24 pb-10">{t('product strategist')}</div>
            <div className="regular-18 pb-5">
              {t(
                "Rafael is a 'hacker of life', yogi, digital entrepreneur, software developer, and investor in the cryptocurrency ecosystem. He has founded tech companies in Brazil in the financial, software, and metaverse fields."
              )}
            </div>
            <a
              href="https://rafael.adm.br"
              className="bold-cobogo-16 cursor-pointer"
            >
              Website
            </a>
          </div>

          <div className={selected === 1 ? 'regular-18' : 'hidden'}>
            <div className="bold-24 pb-10">{t('developer')}</div>
            <div className="regular-18 pb-5">
              {t(
                'Jonatas is a full stack developer specialized in mobile development, and is constantly updating his knowledge as a programmer. Currently focusing on web 3, blockchain and dapp technologies. His responsibility is to develop the cobogo dapp.'
              )}
            </div>
            <a
              href="https://www.linkedin.com/in/jonatas-cmartins/"
              className="bold-cobogo-16 cursor-pointer mr-5"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/jonatascm"
              className="bold-cobogo-16 cursor-pointer"
            >
              Github
            </a>
          </div>

          <div className={selected === 2 ? 'regular-18' : 'hidden'}>
            <div className="bold-24 pb-10">{t('designer')}</div>
            <div className="regular-18 pb-5">
              {t(
                'Mikael is an UI/UX designer with skills in front-end and mobile development.'
              )}
            </div>
            <a
              href="https://www.linkedin.com/in/mikaelcarrara/"
              className="bold-cobogo-16 cursor-pointer"
            >
              Linkedin
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;

import { useState } from 'react';
import type { NextPage } from 'next';
import { useTranslation } from 'next-i18next';

const Team: NextPage = () => {
  const { t } = useTranslation('team');
  const [selected, setSelected] = useState<Number>(0);

  return (
    <section className="flex flex-col items-center h-full w-full py-24 bg-bgsecundary">
      <div className="flex flex-col items-center">
        <h1 className="title text-center pb-7 font-bold">
          {t('Meet the team')}
        </h1>
        <h2 className="subtitle text-center pb-20 w-full md:w-1/2 px-5 md:px-0 font-light">
          {t(
            'Our team works specifically on the dAPP to make the best experience for patrons and creators. We have a huge experience in software development, blockchain and tokenomics.'
          )}
        </h2>
      </div>
      <div className="flex flex-col lg:flex-row px-5 md:px-20 w-full ">
        <div className="md:mr-32 mb-10 md:mb-0">
          <div className="mb-5  cursor-pointer" onClick={() => setSelected(0)}>
            <div className={selected === 0 ? 'subtitle-cobogo' : 'subtitle'}>
              Pedro Alves
            </div>
            <div className="body-small">Business Developer</div>
          </div>
          <div className="mb-5  cursor-pointer" onClick={() => setSelected(1)}>
            <div className={selected === 1 ? 'subtitle-cobogo' : 'subtitle'}>
              Rafael Lima
            </div>
            <div className="body-small">Product Strategist</div>
          </div>
          <div className="mb-5  cursor-pointer" onClick={() => setSelected(2)}>
            <div className={selected === 2 ? 'subtitle-cobogo' : 'subtitle'}>
              Jonatas Martins
            </div>
            <div className="body-small">Developer</div>
          </div>
          <div
            className="sm:mb-20 lg:mb-5 cursor-pointer"
            onClick={() => setSelected(3)}
          >
            <div className={selected === 3 ? 'subtitle-cobogo' : 'subtitle'}>
              Mikael Carrara
            </div>
            <div className="body-small">Designer </div>
          </div>
        </div>
        <div className="pb-5 pr-20 flex flex-1">
          <div className={selected === 0 ? 'body' : 'hidden'}>
            <div className="subtitle pb-10">Business Developer</div>
            <div className="body pb-5">
              {t(
                "Pedro is an economist involved with blockchain since 2013. He will help to develop Cobogo's business and maximize growth"
              )}
            </div>
            <a
              href="https://www.linkedin.com/in/pedro-a-2313a51b2"
              className="text-cobogo cursor-pointer"
            >
              Linkedin
            </a>
          </div>
          <div className={selected === 1 ? 'body' : 'hidden'}>
            <div className="subtitle pb-10">Product Strategist</div>
            <div className="body pb-5">
              {t(
                "Right now, I'm a 'hacker of life', yogi, digital entrepreneur, software developer, and investor in the cryptocurrency ecosystem. I've founded some tech companies in Brazil in financial, software, and metaverse fields."
              )}
            </div>
            <a
              href="https://rafael.adm.br"
              className="text-cobogo cursor-pointer"
            >
              Site
            </a>
          </div>

          <div className={selected === 2 ? 'body' : 'hidden'}>
            <div className="subtitle pb-10">Developer</div>
            <div className="body pb-5">
              {t(
                'Jonatas is a full stack developer specialized in mobile development, constantly updating his knowledge as a programmer. Currently focusing on Web 3, Blockchain and Dapp technologies. His responsibility is to develop the Cobogo dApp.'
              )}
            </div>
            <a
              href="https://www.linkedin.com/in/jonatas-cmartins/"
              className="text-cobogo cursor-pointer mr-5"
            >
              Linkedin
            </a>
            <a
              href="https://github.com/jonatascm"
              className="text-cobogo cursor-pointer"
            >
              Github
            </a>
          </div>

          <div className={selected === 3 ? 'body' : 'hidden'}>
            <div className="subtitle pb-10">Designer</div>
            <div className="body pb-5"></div>
            <a
              href="https://www.linkedin.com/in/mikaelcarrara/"
              className="text-cobogo cursor-pointer"
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

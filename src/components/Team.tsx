import { useTranslation } from 'next-i18next';
import { useState } from 'react';

export default function Team() {
  const { t } = useTranslation('team');
  const [selected, setSelected] = useState(0);

  return (
    <section className="flex flex-col items-center w-full h-full py-24 bg-secondary">
      <div className="flex flex-col items-center">
        <h1 className="text-center bold-36 pb-7">{t('meet the team')}</h1>

        <h2 className="w-full px-5 pb-20 text-center light-24 md:w-1/2 md:px-0">
          {t(
            'our team works specifically on the dapp to make the best experience for patrons and creators. We have extensive experience in software development, blockchain and tokenomics.'
          )}
        </h2>
      </div>

      <div className="flex flex-col w-full px-5 lg:flex-row md:px-20 ">
        <div className="mb-10 md:mr-32 md:mb-0">
          <div className="mb-5 cursor-pointer" onClick={() => setSelected(4)}>
            <div className={selected === 4 ? 'bold-cobogo-24' : 'bold-24'}>
              Pedro Alves (P.)
            </div>
            <div className="light-16">{t('co-founder')}</div>
          </div>

          <div className="mb-5 cursor-pointer" onClick={() => setSelected(0)}>
            <div className={selected === 0 ? 'bold-cobogo-24' : 'bold-24'}>
              Rafael Lima
            </div>
            <div className="light-16">{t('co-founder')}</div>
          </div>

          <div className="mb-5 cursor-pointer" onClick={() => setSelected(1)}>
            <div className={selected === 1 ? 'bold-cobogo-24' : 'bold-24'}>
              Thiago Machado
            </div>
            <div className="light-16">{t('developer')}</div>
          </div>

          <div className="mb-5 cursor-pointer" onClick={() => setSelected(2)}>
            <div className={selected === 2 ? 'bold-cobogo-24' : 'bold-24'}>
              Mikael Carrara
            </div>
            <div className="light-16">{t('designer')}</div>
          </div>

          <div className="mb-5 cursor-pointer" onClick={() => setSelected(3)}>
            <div className={selected === 3 ? 'bold-cobogo-24' : 'bold-24'}>
              Isabela Reis
            </div>
            <div className="light-16">{t('technical writer')}</div>
          </div>
        </div>

        <div className="flex flex-1 pb-5 pr-20">
          <div className={selected === 0 ? 'regular-18' : 'hidden'}>
            <div className="pb-10 bold-24">{t('co-founder')}</div>

            <div className="pb-5 regular-18">
              {t(
                "Rafael is a 'hacker of life', yogi, digital entrepreneur, software developer, and investor in the cryptocurrency ecosystem. He has founded tech companies in Brazil in the financial, software, and metaverse fields."
              )}
            </div>

            <a
              href="https://rafael.adm.br"
              className="cursor-pointer bold-cobogo-16"
            >
              Website
            </a>
          </div>

          <div className={selected === 1 ? 'regular-18' : 'hidden'}>
            <div className="pb-10 bold-24">{t('developer')}</div>

            <div className="pb-5 regular-18">
              {t(
                'Thiago is a full stack developer focused on the JavaScript ecosystem and web applications development, seeking to be constantly evolving his knowledge within the subject, focusing on modern technologies for web2, and studying web3 technologies.'
              )}
            </div>

            <a
              href="https://www.linkedin.com/in/thiago0x01/"
              className="mr-5 cursor-pointer bold-cobogo-16"
            >
              Linkedin
            </a>

            <a
              href="https://github.com/thiago0x01"
              className="cursor-pointer bold-cobogo-16"
            >
              Github
            </a>
          </div>

          <div className={selected === 2 ? 'regular-18' : 'hidden'}>
            <div className="pb-10 bold-24">{t('designer')}</div>

            <div className="pb-5 regular-18">
              {t(
                'Mikael is an UI/UX designer with skills in front-end and mobile development.'
              )}
            </div>

            <a
              href="https://www.linkedin.com/in/mikaelcarrara/"
              className="cursor-pointer bold-cobogo-16"
            >
              Linkedin
            </a>
          </div>

          <div className={selected === 3 ? 'regular-18' : 'hidden'}>
            <div className="pb-10 bold-24">{t('technical writer')}</div>

            <div className="pb-5 regular-18">
              {t(
                'Isabela is a PhD student in Social Psychology, responsible for creating content, as well as the cobogo’s team relationship with the community.'
              )}
            </div>
          </div>

          <div className={selected === 4 ? 'regular-18' : 'hidden'}>
            <div className="pb-10 bold-24">{t('co-founder')}</div>

            <div className="pb-5 regular-18">
              {t(
                `Pedro is a multilingual economist, finishing a master's degree related to DeFi. He has been involved with crypto since 2017, and has experience with integrations. He has worked as a blockchain researcher in the Social Tokens field for over a year.`
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

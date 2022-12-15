import { useTranslation } from 'next-i18next'

export const Launchpad = () => {
  const { t } = useTranslation('common')

  return (
    <div
      id="launchpad"
      className="relative flex flex-col justify-center items-center min-h-screen h-full w-full"
    >
      <div className="flex flex-col justify-start md:justify-center items-center min-h-screen h-full py-24 w-full">
        <div className="flex flex-col md:flex-row md:max-w-[1000px] w-full justify-between items-center z-40 gap-20 relative">
          <div className="md:w-[570px] gap-10 flex flex-col px-7">
            <div className="flex flex-col gap-5 md:gap-9">
              <h1 className="text-2xl md:text-5xl relative">
                <strong className="underline decoration-[9px] md:decoration-[19px] underline-offset-[-4.5px] md:underline-offset-[-8px] decoration-pink-100/30">
                  Cobogo Launchpad
                </strong>
                <br />
                {t('Getting Creators')} <br /> {t('ready to fly')}
              </h1>
              <h2 className="text-lg md:text-xl max-w-[367px]">
                {t(
                  'A complete training and acceleration program for Creators who need to professionalize and grow their business, open a company in a legal framework and use tools to fundraise, in a global and scalable way. The program is divided into 3 phases for Creators in different stages.'
                )}
              </h2>
            </div>
          </div>
          <div className="bg-gradient-to-r from-black-900 to-black-900/0 absolute left-0 bottom-0 h-[212px] w-[10px] z-40 flex md:hidden" />
          <div className="bg-gradient-to-l from-black-900 to-black-900/0 absolute right-0 bottom-0 h-[212px] w-[10px] z-40 flex md:hidden" />
          <div className="flex flex-row md:flex-col gap-12 overflow-x-auto w-full md:w-auto">
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px] ml-7 md:ml-0">
              <strong className="text-lg md:text-2xl">Basic</strong>
              <p className="text-lg md:text-xl">
                {t(
                  `For early stage Creators, searching for their place in the market, find their ideal niche, grow their audience, formalize their business and start making money with their work on the internet.`
                )}
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px]">
              <strong className="text-lg md:text-2xl">Essencial</strong>
              <p className="text-lg md:text-xl">
                {t(
                  `Focused on Creators who already have some revenue streams, lacking knowledge about how the advertising market works, how to negotiate with partners, team structuring and how the investments world works for startups and scalable businesses.`
                )}
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px] mr-7 md:mr-0">
              <strong className="text-lg md:text-2xl">Pro</strong>
              <p className="text-lg md:text-xl">
                {t(
                  'The final phase of Cobogo Launchpad seeks to prepare Creators for their first investment round, with tools for opening a company in a legal framework, launching a public offering in order to sell their equity, in addition to monitoring fundraising and allocation of resources.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

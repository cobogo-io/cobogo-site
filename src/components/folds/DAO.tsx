import { useTranslation } from 'next-i18next'

export const DAO = () => {
  const { t } = useTranslation('common')

  return (
    <div
      id="dao"
      className="relative flex flex-col justify-center items-center min-h-screen h-full w-full"
    >
      <div className="flex flex-col justify-start md:justify-center items-center min-h-screen h-full py-24 w-full">
        <div className="flex flex-col md:flex-row md:max-w-[1000px] w-full justify-between items-center z-40 gap-20 relative">
          <div className="md:w-[570px] gap-10 flex flex-col px-7">
            <div className="flex flex-col gap-5 md:gap-9">
              <h1 className="text-2xl md:text-5xl relative">
                <strong className="underline decoration-[9px] md:decoration-[19px] underline-offset-[-4.5px] md:underline-offset-[-8px] decoration-gray-100/30">
                  Cobogo DAO
                </strong>
                <br />
                {t('The Creator')} <br /> {t('Economy game')} <br />{' '}
                {t('changer')}
              </h1>
              <h2 className="text-lg md:text-xl max-w-[447px]">
                {t(
                  'A community formed by Creators, investors and enthusiasts of the Creator Economy created to boost knowledge, research and development of this market, discussing new movements, trends and selecting the next early stage Creators to be invested.'
                )}
              </h2>
            </div>

            <div className="flex flex-col gap-2">
              <strong className="text-lg md:text-2xl">
                {t('Join the community:')}
              </strong>

              <div className="flex items-center gap-4">
                <a
                  target="_blank"
                  href="https://chat.whatsapp.com/LPPlb8bWgw38p9uZjrvlt0"
                  className="px-5 py-1 md:py-2 border-2 border-gray-100 font-bold text-base md:text-xl w-max text-gray-100 md:text-white-100 rounded-sm"
                  rel="noreferrer"
                >
                  {t('Portuguese')}
                </a>

                <a
                  target="_blank"
                  href="https://discord.gg/4UsDWrfrpW"
                  className="px-5 py-1 md:py-2 border-2 border-gray-100 font-bold text-base md:text-xl w-max text-gray-100 md:text-white-100 rounded-sm"
                  rel="noreferrer"
                >
                  {t('English')}
                </a>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-r from-black-900 to-black-900/0 absolute left-0 bottom-0 h-[212px] w-[10px] z-40 flex md:hidden" />
          <div className="bg-gradient-to-l from-black-900 to-black-900/0 absolute right-0 bottom-0 h-[212px] w-[10px] z-40 flex md:hidden" />
          <div className="flex flex-row md:flex-col gap-12 overflow-x-auto w-full md:w-auto">
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px] ml-7 md:ml-0">
              <strong className="text-lg md:text-2xl">Research</strong>
              <p className="text-lg md:text-xl">
                {t(
                  'Cobogo DAO counts with an investment analysis specialized team capable of generating reports on Creators Economy trends and the future of Creators as investment assets.'
                )}
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px]">
              <strong className="text-lg md:text-2xl">
                {t('Creators Valuation')}
              </strong>
              <p className="text-lg md:text-xl">
                {t(
                  'One of the greatest values ​​created by the DAO will be the ability to assess and valuate Creators for the first time in the world. This will be the most important point for defining Creators valorization potential and will create a new universal relevance metric for Creators.'
                )}
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px] mr-7 md:mr-0">
              <strong className="text-lg md:text-2xl">
                {t('Creators Selection')}
              </strong>
              <p className="text-lg md:text-xl">
                {t(
                  `DAO members will be responsible for proposing, discussing and selecting the next Creators to be investors by Pioneer Fund, Cobogo's Creator focused investment fund.`
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

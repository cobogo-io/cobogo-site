import { useTranslation } from 'next-i18next'

export const Social = () => {
  const { t } = useTranslation('common')

  return (
    <div
      id="social"
      className="relative flex flex-col justify-center items-center min-h-screen h-full w-full"
    >
      <div className="flex flex-col justify-start md:justify-center items-center min-h-screen h-full py-24 w-full">
        <div className="flex flex-col md:flex-row md:max-w-[1000px] w-full justify-between items-center z-40 gap-20 relative">
          <div className="md:w-[570px] gap-10 flex flex-col px-7">
            <div className="flex flex-col gap-5 md:gap-9">
              <h1 className="text-2xl md:text-5xl relative">
                <strong className="underline decoration-[9px] md:decoration-[19px] underline-offset-[-4.5px] md:underline-offset-[-8px] decoration-blue-100/30">
                  Cobogo Social
                </strong>
                <br />
                {t('Creator as a')} <br /> {t('business platform')}
              </h1>

              <h2 className="text-lg md:text-xl max-w-[447px]">
                {t(
                  'A all in one tool to showcase a Creators work and engagement metrics to investors and partners in a professional and automated way. All data is verified and authenticated by the Creators social media.'
                )}
              </h2>
            </div>
            <a
              target="_blank"
              href="https://cobogo.social/"
              className="px-5 py-1 md:py-2 border-2 border-blue-100 font-bold text-base md:text-xl w-max text-blue-100 md:text-white-100 rounded-sm"
              rel="noreferrer"
            >
              {t('Create your profile')}
            </a>
          </div>
          <div className="bg-gradient-to-r from-black-900 to-black-900/0 absolute left-0 bottom-0 h-[212px] w-[10px] z-40 flex md:hidden" />
          <div className="bg-gradient-to-l from-black-900 to-black-900/0 absolute right-0 bottom-0 h-[212px] w-[10px] z-40 flex md:hidden" />
          <div className="flex flex-row md:flex-col gap-12 overflow-x-auto w-full md:w-auto">
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px] ml-7 md:ml-0">
              <strong className="text-lg md:text-2xl">
                {t('For Creators')}
              </strong>
              <p className="text-lg md:text-xl">
                {t(
                  'Connect your social media and create a successful profile showing the world who you are and all your potential to receive investments and scale your business. Your profile can also be used as an online and automated Media Kit for partners such as companies and advertising agencies.'
                )}
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px]">
              <strong className="text-lg md:text-2xl">
                {t('For investors')}
              </strong>
              <p className="text-lg md:text-xl">
                {t(
                  'Browse, search and select Creators to be invested. With Cobogo Social it is possible to analyze metrics, meet new Creators and understand their potential for appreciation as an asset.'
                )}
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px] mr-7 md:mr-0">
              <strong className="text-lg md:text-2xl">
                {t('For partners')}
              </strong>
              <p className="text-lg md:text-xl">
                {t(
                  'A new tool to unify and facilitate the analysis and selection of Creators for advertising campaigns, where all relevant metrics and information will be found to define the best Creators based on data.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

import { useTranslation } from 'next-i18next'

export const Fundraise = (): JSX.Element => {
  const { t } = useTranslation('common')

  return (
    <div
      id="fundraise"
      className="relative flex flex-col justify-center items-center min-h-screen h-full w-full"
    >
      <div className="flex flex-col justify-start md:justify-center items-center min-h-screen h-full py-24 w-full">
        <div className="flex flex-col md:flex-row md:max-w-[1000px] w-full justify-between items-center z-40 gap-20 relative">
          <div className="md:w-[570px] gap-10 flex flex-col px-7">
            <div className="flex flex-col gap-5 md:gap-9">
              <h1 className="text-2xl md:text-5xl relative">
                {t('Fund your passion and')} <br />{' '}
                {t('share your success with')} <br />
                <strong>Cobogo Fundraise</strong>
                <div className="w-[200px] md:w-[400px] h-3 md:h-[14px] bg-green-100/30 absolute bottom-1" />
              </h1>
              <h2 className="text-lg md:text-xl max-w-[447px]">
                {t(
                  'Cobogo Fundraise allows Creators to tokenize equity and use a Rolling SAFE for Continuous Securities Offering instead of doing static fundraising rounds.'
                )}
              </h2>
            </div>
          </div>
          <div className="bg-gradient-to-r from-black-900 to-black-900/0 absolute left-0 bottom-0 h-[212px] w-[10px] z-40 flex md:hidden" />
          <div className="bg-gradient-to-l from-black-900 to-black-900/0 absolute right-0 bottom-0 h-[212px] w-[10px] z-40 flex md:hidden" />
          <div className="flex flex-row md:flex-col gap-12 overflow-x-auto w-full md:w-auto">
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px] ml-7 md:ml-0">
              <strong className="text-lg md:text-2xl">
                {t('Apply with your business')}
              </strong>
              <p className="text-lg md:text-xl">
                {t(
                  'Apply to fundraise with your C-Corp, create your own custom investment portal, prepare all the legal documentation and design your equity offering the way you want to.'
                )}
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px]">
              <strong className="text-lg md:text-2xl">
                {t('Raise funds continuously')}
              </strong>
              <p className="text-lg md:text-xl">
                {t(
                  'With an SEC-compliant technology, Creators can raise funds in rounds that are always open for investors, and their audience, without the need to do static rounds.'
                )}
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px] mr-7 md:mr-0">
              <strong className="text-lg md:text-2xl">
                {t('Share your growth')}
              </strong>
              <p className="text-lg md:text-xl">
                {t(
                  'Share your growth with your investors, partners, contractors and anyone that helps you grow your business.'
                )}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

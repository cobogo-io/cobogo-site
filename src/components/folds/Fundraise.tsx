export const Fundraise = (): JSX.Element => {
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
                Fund your passion and <br /> share your success with <br />
                <strong>Cobogo Fundraise</strong>
                <div className="w-[200px] md:w-[400px] h-3 md:h-[14px] bg-green-100/30 absolute bottom-1" />
              </h1>
              <h2 className="text-lg md:text-xl max-w-[447px]">
                Cobogo Fundraise allows Creators to tokenize equity and use a
                Rolling SAFE for Continuous Securities Offering, instead of
                doing static fundraising rounds.
              </h2>
            </div>
            {/* <button className="px-5 py-1 md:py-2 border-2 border-green-100 font-bold text-base md:text-xl w-max text-green-100 md:text-white-100">
              Raise funds now
            </button> */}
          </div>
          <div className="bg-gradient-to-r from-black-900 to-black-900/0 absolute left-0 bottom-0 h-[212px] w-[10px] z-40 flex md:hidden" />
          <div className="bg-gradient-to-l from-black-900 to-black-900/0 absolute right-0 bottom-0 h-[212px] w-[10px] z-40 flex md:hidden" />
          <div className="flex flex-row md:flex-col gap-12 overflow-x-auto w-full md:w-auto">
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px]">
              <strong className="text-lg md:text-2xl">
                Apply with your business
              </strong>
              <p className="text-lg md:text-xl">
                Apply to fundraise with your C-Corp, create your own custom
                investment portal, prepare all the legal documentation and
                design your equity offering the way you want to.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px]">
              <strong className="text-lg md:text-2xl">
                Raise funds continuously
              </strong>
              <p className="text-lg md:text-xl">
                With an SEC-compliant technology Creators are able to run a
                fundraise that is always open for investors, your own audience,
                without the need of doing static rounds.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px]">
              <strong className="text-lg md:text-2xl">Share your growth</strong>
              <p className="text-lg md:text-xl">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur. Ut enim
                ad minim veniam, quis nostrud exer.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <FundraiseImage /> */}
      {/* <BackgroundFundraise /> */}
    </div>
  )
}

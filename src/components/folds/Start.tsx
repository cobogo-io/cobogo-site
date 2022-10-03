export const Start = (): JSX.Element => {
  return (
    <div
      id="start"
      className="relative flex flex-col justify-center items-center min-h-screen h-full w-full"
    >
      <div className="flex flex-col justify-start md:justify-center items-center min-h-screen h-full py-24 w-full">
        <div className="flex flex-col md:flex-row md:max-w-[1000px] w-full justify-between items-center z-40 gap-20 relative">
          <div className="md:w-[570px] gap-10 flex flex-col px-7">
            <div className="flex flex-col gap-5 md:gap-9">
              <h1 className="text-2xl md:text-5xl relative">
                Incorporate a <br />
                Business with <br />
                <strong>Cobogo Start</strong>
                <div className="w-[145px] md:w-[290px] h-3 md:h-[14px] bg-pink-200/30 absolute bottom-1" />
              </h1>
              <h2 className="text-lg md:text-xl max-w-[367px]">
                We provide Creators with the easiest way to incorporate a
                Business in Delaware.
              </h2>
            </div>
            {/* <button className="px-5 py-1 md:py-2 border-2 border-pink-200 font-bold text-base md:text-xl w-max text-pink-200 md:text-white-100">
              Start your business
            </button> */}
          </div>
          <div className="bg-gradient-to-r from-black-900 to-black-900/0 absolute left-0 bottom-0 h-[212px] w-[10px] z-40 flex md:hidden" />
          <div className="bg-gradient-to-l from-black-900 to-black-900/0 absolute right-0 bottom-0 h-[212px] w-[10px] z-40 flex md:hidden" />
          <div className="flex flex-row md:flex-col gap-12 overflow-x-auto w-full md:w-auto">
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px]">
              <strong className="text-lg md:text-2xl">Company Formation</strong>
              <p className="text-lg md:text-xl">
                {`We'll`} prepare your legal documents, file your paperwork, and
                create all the essential post-incorporation documents. Manage
                all your documentation in one easily accessible dashboard.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px]">
              <strong className="text-lg md:text-2xl">Tax-ID (EIN)</strong>
              <p className="text-lg md:text-xl">
                As a third-party provider, {`we're`} authorized by the Internal
                Revenue Service (IRS) to offer expedited EIN services.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px]">
              <strong className="text-lg md:text-2xl">Bank Account</strong>
              <p className="text-lg md:text-xl">
                Apply with one click to as many of our banking partners as you
                would like. No fees, no credit checks, and all C-Corps are
                supported.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <StartImage /> */}
      {/* <BackgroundStart /> */}
    </div>
  )
}

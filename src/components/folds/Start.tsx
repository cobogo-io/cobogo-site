import { BackgroundSocial } from '../BackgroundSocial'
import { StartImage } from '../images/StartImage'

export const Start = (): JSX.Element => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
      <div className="flex max-w-[917px] w-full justify-between items-center z-50">
        <div className="w-[447px] gap-10 flex flex-col">
          <div className="flex flex-col gap-9">
            <h1 className="text-5xl relative">
              Incorporate a Business with <strong>Cobogo Start</strong>
              <div className="w-[294px] h-[14px] bg-pink-100/30 absolute bottom-1" />
            </h1>
            <h2 className="text-xl">
              We provide Creators with the easiest way to incorporate a Business
              in Delaware.
            </h2>
          </div>
          <button className="px-5 py-2 border-2 border-pink-100 font-bold text-xl w-max">
            Start your business
          </button>
        </div>
        <div className="flex flex-col w-[375px] gap-12">
          <div className="flex flex-col gap-4">
            <strong className="text-2xl">Company Formation</strong>
            <p className="text-xl">
              We’ll prepare your legal documents, file your paperwork, and
              create all the essential post-incorporation documents. Manage all
              your documentation in one easily accessible dashboard.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <strong className="text-2xl">Tax-ID (EIN)</strong>
            <p className="text-xl">
              As a third-party provider, {`we're`} authorized by the Internal
              Revenue Service (IRS) to offer expedited EIN services.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <strong className="text-2xl">Bank Account</strong>
            <p className="text-xl">
              Apply with one click to as many of our banking partners as you
              would like. No fees, no credit checks, and all C-Corps are
              supported.
            </p>
          </div>
        </div>
      </div>
      <StartImage />
      <BackgroundSocial />
    </div>
  )
}

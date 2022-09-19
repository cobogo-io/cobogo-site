import { BackgroundFundraise } from '../backgrounds/BackgroundFundraise'
import { StartImage } from '../images/StartImage'

export const Fundraise = (): JSX.Element => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
      <div className="flex max-w-[917px] w-full justify-between items-center z-50">
        <div className="w-[447px] gap-10 flex flex-col">
          <div className="flex flex-col gap-9">
            <h1 className="text-5xl relative">
              Fund your passion and share your success with{' '}
              <strong>Cobogo Fundraise</strong>
              <div className="w-[294px] h-[14px] bg-green-100/30 absolute bottom-1" />
            </h1>
            <h2 className="text-xl">
              Cobogo Fundraise allows Creators to tokenize equity and use a
              Rolling SAFE for Continuous Securities Offering, instead of doing
              static fundraising rounds.
            </h2>
          </div>
          <button className="px-5 py-2 border-2 border-green-100 font-bold text-xl w-max">
            Raise funds now
          </button>
        </div>
        <div className="flex flex-col w-[375px] gap-12">
          <div className="flex flex-col gap-4">
            <strong className="text-2xl">Apply with your business</strong>
            <p className="text-xl">
              Apply to fundraise with your C-Corp, create your own custom
              investment portal, prepare all the legal documentation and design
              your equity offering the way you want to.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <strong className="text-2xl">Raise funds continuously</strong>
            <p className="text-xl">
              With an SEC-compliant technology Creators are able to run a
              fundraise that is always open for investors, your own audience,
              without the need of doing static rounds.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <strong className="text-2xl">Share your growth</strong>
            <p className="text-xl">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur. Ut enim
              ad minim veniam, quis nostrud exer.
            </p>
          </div>
        </div>
      </div>
      <StartImage />
      <BackgroundFundraise />
    </div>
  )
}

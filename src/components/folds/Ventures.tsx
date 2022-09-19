import { BackgroundVentures } from '../backgrounds/BackgroundVentures'
import { VenturesImage } from '../images/VenturesImage'

export const Ventures = (): JSX.Element => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
      <div className="flex max-w-[917px] w-full justify-between items-center z-50">
        <div className="w-[447px] gap-10 flex flex-col">
          <div className="flex flex-col gap-9">
            <h1 className="text-5xl relative">
              We invest in the future of Creators with
              <br />
              <strong>Cobogo Ventures</strong>
              <div className="w-[382px] h-[14px] bg-gray-100/30 absolute bottom-1" />
            </h1>
            <h2 className="text-xl">
              We are a seed/early-stage investor in talented Creators worldwide.
              We focus on Creators wtih the biggest estimated potential with
              profiles on Cobogo Social.
            </h2>
          </div>
          <button className="px-5 py-2 border-2 border-gray-100 font-bold text-xl w-max">
            Apply for funding
          </button>
        </div>
        <div className="flex flex-col w-[375px] gap-12">
          <div className="flex flex-col gap-4">
            <strong className="text-2xl">If you are a Creator</strong>
            <p className="text-xl">
              Apply for funding, and please be detailed in the form. We will
              evaluate you based on all the information you provide. If
              approved, we will get in touch in a few days.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <strong className="text-2xl">If you are an investor</strong>
            <p className="text-xl">
              Gain exposure to the Creators who are leading the expansion of the
              Creator Economy, one of the fastest-growing markets in the world.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <strong className="text-2xl">Pioneer Fund</strong>
            <p className="text-xl">
              Our first fund is open. Email us at:{' '}
              <a
                href="mailto:hi@cobogo.ventures"
                className="font-bold text-blue-100"
              >
                hi@cobogo.ventures
              </a>{' '}
              for more information.
            </p>
          </div>
        </div>
      </div>
      <VenturesImage />
      <BackgroundVentures />
    </div>
  )
}

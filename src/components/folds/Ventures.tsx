import { BackgroundVentures } from '../backgrounds/BackgroundVentures'
import { VenturesImage } from '../images/VenturesImage'

export const Ventures = (): JSX.Element => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen h-full w-full">
      <div className="flex flex-col justify-start md:justify-center items-center min-h-screen h-full py-24 w-full">
        <div className="flex flex-col md:flex-row md:max-w-[917px] w-full justify-between items-center z-40 gap-20">
          <div className="md:w-[447px] gap-10 flex flex-col px-7">
            <div className="flex flex-col gap-5 md:gap-9">
              <h1 className="text-2xl md:text-5xl relative">
                We invest in the future of Creators with
                <br />
                <strong>Cobogo Ventures</strong>
                <div className="w-[190px] md:w-[382px] h-3 md:h-[14px] bg-gray-100/30 absolute bottom-1" />
              </h1>
              <h2 className="text-lg md:text-xl">
                We are a seed/early-stage investor in talented Creators
                worldwide. We focus on Creators wtih the biggest estimated
                potential with profiles on Cobogo Social.
              </h2>
            </div>
            <button className="px-5 py-1 md:py-2 border-2 border-gray-100 font-bold text-base md:text-xl w-max text-gray-100 md:text-white-100">
              Apply for funding
            </button>
          </div>
          <div className="flex flex-row md:flex-col gap-12 overflow-x-auto w-full md:w-auto">
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px]">
              <strong className="text-lg md:text-2xl">
                If you are a Creator
              </strong>
              <p className="text-lg md:text-xl">
                Apply for funding, and please be detailed in the form. We will
                evaluate you based on all the information you provide. If
                approved, we will get in touch in a few days.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px]">
              <strong className="text-lg md:text-2xl">
                If you are an investor
              </strong>
              <p className="text-lg md:text-xl">
                Gain exposure to the Creators who are leading the expansion of
                the Creator Economy, one of the fastest-growing markets in the
                world.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px]">
              <strong className="text-lg md:text-2xl">Pioneer Fund</strong>
              <p className="text-lg md:text-xl">
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
      </div>
      <VenturesImage />
      <BackgroundVentures />
    </div>
  )
}

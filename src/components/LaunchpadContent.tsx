import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

export default function LaunchpadContent() {
  return (
    <section className="flex flex-col w-full relative">
      <div className="absolute bottom-0 w-full h-[775px] z-10 hidden lg:flex">
        <Image
          src="/images/launchpad-footer-background.svg"
          fill
          alt="Launchpad footer background"
        />
      </div>

      <div className="absolute bottom-[-250px] right-0 z-20 flex lg:hidden">
        <Image
          src="/images/launchpad-footer-background-mobile.svg"
          width={341}
          height={842}
          alt="Launchpad footer background mobile"
        />
      </div>

      <div className="absolute bottom-0 left-0 z-10 hidden lg:flex">
        <Image
          src="/images/launchpad-footer-cubes.svg"
          width={510}
          height={1527}
          alt="Launchpad footer cubes"
        />
      </div>

      <div className="absolute bottom-0 right-0 z-10 hidden lg:flex">
        <Image
          src="/images/launchpad-footer-cubes-2.svg"
          width={459}
          height={871}
          alt="Launchpad footer cubes 2"
        />
      </div>

      <div className="absolute left-0 w-full bottom-[950px] z-10 hidden lg:flex items-center justify-center">
        <div className="w-full max-w-[1110px]">
          <Image
            src="/images/launchpad-hero.svg"
            width={494}
            height={1056}
            alt="Launchpad hero"
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-full py-16 lg:py-32 lg:px-0 relative">
        <div className="w-full flex flex-col items-end relative gap-14 lg:gap-20">
          <p className="leading-[30px] text-[20px] lg:text-[26px] w-full text-center px-7">
            The program is divided into <strong>3 main phases</strong> for
            Creators in different stages.
          </p>

          <div className="bg-pink-2 w-full flex items-center justify-center py-32 px-7 clip-path-polygon-[0_0,_100%_10%,_100%_100%,_0_90%]">
            <div className="w-full max-w-[1110px] flex items-center justify-center lg:justify-end">
              <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
                <h2 className="text-[24px] lg:text-[28px] text-black font-bold drop-shadow-[3px_3px_0px_#00000047]">
                  Product development
                </h2>

                <p className="text-[20px] leading-[32px] text-black">
                  First of all Creators need to understand how to create value
                  based on their knowledge, experience and influence power. In
                  this phase they can understand everything needed to develop
                  from scratch a good a profitable solution for their niche.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full flex items-center justify-center px-7">
            <div className="w-full max-w-[1110px] flex items-center justify-center lg:justify-end">
              <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
                <h2 className="text-[24px] lg:text-[28px] font-bold drop-shadow-[3px_3px_0px_#00000047]">
                  Business management
                </h2>

                <p className="text-[20px] leading-[32px]">
                  As important as having a great product is to understand how
                  real businesses are managed and how the market works. Learning
                  from experts in different entrepreneurship and innovation
                  fields Creators start to see themselves as startups and put
                  their skin in the game to prove their value.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-pink-2 w-full flex items-center justify-center py-32 px-7 clip-path-polygon-[0_10%,_100%_0,_100%_90%,_0_100%]">
            <div className="w-full max-w-[1110px] flex items-center justify-center lg:justify-end">
              <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
                <h2 className="text-[24px] lg:text-[28px] text-black font-bold drop-shadow-[3px_3px_0px_#00000047]">
                  Fundraising strategies
                </h2>

                <p className="text-[20px] leading-[32px] text-black">
                  The end-game for visionary Creators is to fund raise and scale
                  their busineses. In the last phase of our accelaration program
                  they learn how venture capital works, how to reach, approach
                  and conquer
                  {`investor's`} attention and interest to their projects.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full pb-96 lg:pb-[340px] pt-12 lg:pt-[115px] px-7 lg:px-0 z-20">
        <div className="w-full max-w-[1110px] flex flex-col lg:items-center gap-12 relative">
          <h2 className="font-bold leading-[50px] text-[30px] lg:text-[34px]">
            Become a <br className="flex lg:hidden" />
            Creator 3.0
          </h2>

          <Link
            href="https://desafio.cobogo.io/"
            className="flex"
            target="_blank"
          >
            <Button text="apply now" borderColor="border-pink-launchpad" />
          </Link>
        </div>
      </div>
    </section>
  )
}

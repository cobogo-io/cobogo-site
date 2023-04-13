import Image from 'next/image'
import Link from 'next/link'
import Button from './Button'

export default function CommunityContent() {
  return (
    <section className="flex flex-col w-full relative">
      <div className="absolute bottom-[-250px] right-0 z-20 flex lg:hidden">
        <Image
          src="/images/community-footer-background-mobile.svg"
          width="380"
          height="565"
          alt="Community footer background mobile"
        />
      </div>

      <div className="absolute bottom-0 left-0 z-10 hidden lg:flex">
        <Image
          src="/images/community-footer-cubes.svg"
          width={510}
          height={1527}
          alt="Community footer cubes"
        />
      </div>

      <div className="absolute bottom-0 right-0 z-10 hidden lg:flex">
        <Image
          src="/images/community-footer-cubes-2.svg"
          width={459}
          height={871}
          alt="Community footer cubes 2"
        />
      </div>

      <div className="absolute left-0 w-full bottom-[1450px] z-10 hidden lg:flex items-center justify-center">
        <div className="w-full max-w-[1110px]">
          <Image
            src="/images/community-hero.svg"
            width={904}
            height={1554}
            alt="Community hero"
          />
        </div>
      </div>

      <div className="flex items-center justify-center w-full py-16 lg:py-32 lg:px-0 relative">
        <div className="w-full flex flex-col items-end relative">
          <div className="flex flex-col w-full gap-14 lg:gap-20">
            <div className="bg-yellow w-full flex items-center justify-center py-32 px-7 clip-path-polygon-[0_0,_100%_10%,_100%_100%,_0_90%]">
              <div className="w-full max-w-[1110px] flex items-center justify-center lg:justify-end">
                <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
                  <h2 className="text-[24px] lg:text-[28px] text-black font-bold drop-shadow-[3px_3px_0px_#00000047]">
                    Research
                  </h2>

                  <p className="text-[20px] leading-[32px] text-black">
                    The community counts with an investment analysis specialized
                    team capable of generating reports on Creators Economy
                    trends and the future of Creators as investment assets.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full flex items-center justify-center px-7">
              <div className="w-full max-w-[1110px] flex items-center justify-center lg:justify-end">
                <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
                  <h2 className="text-[24px] lg:text-[28px] font-bold drop-shadow-[3px_3px_0px_#00000047]">
                    Creators Valuation
                  </h2>

                  <p className="text-[20px] leading-[32px]">
                    One of the greatest values ​​created by the community will
                    be the ability to assess and valuate Creators for the first
                    time in the world. This will be the most important point for
                    defining Creators valorization potential and will create a
                    new universal relevance metric for Creators.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-yellow-2 w-full flex items-center justify-center py-32 px-7 clip-path-polygon-[0_10%,_100%_0,_100%_100%,_0_100%]">
              <div className="w-full max-w-[1110px] flex items-center justify-center lg:justify-end">
                <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
                  <h2 className="text-[24px] lg:text-[28px] text-black font-bold drop-shadow-[3px_3px_0px_#00000047]">
                    Creators Selection
                  </h2>

                  <p className="text-[20px] leading-[32px] text-black">
                    Community members will be responsible for discovering,
                    discussing and proposing the next Creators to be invested by
                    our Pioneer Fund, {`Cobogo's`} Creator focused investment
                    fund.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white w-full flex items-center justify-center py-32 px-7">
            <div className="w-full max-w-[1110px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-7 lg:gap-0">
              <div className="flex flex-col max-w-[320px] lg:max-w-[375px] w-full gap-7">
                <h2 className="text-[24px] lg:text-[28px] text-black font-bold drop-shadow-[3px_3px_0px_#00000047]">
                  The power of community to boost invested creators
                </h2>

                <p className="text-[20px] leading-[32px] text-black">
                  Since the Creators from our community are the ones selecting
                  and proposing early stage Creators to our fund, their rule
                  afterall is to boost invested Creators digital reach and
                  valuation after they receive the invesment. This is how our
                  community can create value and push the creator economy
                  foward.
                </p>
              </div>

              <Image
                src="/images/community-peoples.svg"
                width={533}
                height={568}
                alt="Community peoples"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full pb-96 lg:pb-[340px] pt-12 lg:pt-[115px] px-7 lg:px-0 z-20">
        <div className="w-full max-w-[1110px] flex flex-col lg:items-center gap-12 relative">
          <h2 className="font-bold leading-[50px] text-[30px] lg:text-[34px] lg:text-center w-full max-w-[810px]">
            Join the <br className="flex lg:hidden" /> community that is{' '}
            <br className="flex lg:hidden" />
            reshaping the <br className="flex lg:hidden" /> future of the{' '}
            <br className="flex lg:hidden" />
            Creator Economy
          </h2>

          <Link
            href="https://chat.whatsapp.com/LPPlb8bWgw38p9uZjrvlt0"
            className="flex"
            target="_blank"
          >
            <Button
              text="join community"
              borderColor="border-yellow-community"
            />
          </Link>
        </div>
      </div>
    </section>
  )
}

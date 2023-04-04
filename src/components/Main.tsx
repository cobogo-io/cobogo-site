import Image from 'next/image'

export default function Main() {
  return (
    <section className="flex items-center justify-center w-full py-16 xl:py-32 relative px-7">
      <div className="absolute top-0 right-0">
        <Image
          src="/images/home-main-background.svg"
          width={1763}
          height={1083}
          alt="Home main background"
        />
      </div>

      <div className="w-full max-w-[1108px] flex flex-col gap-24 xl:gap-52 relative z-10">
        <div className="flex flex-col xl:flex-row gap-12 xl:gap-0 justify-between">
          <h1 className="leading-[55px] xl:leading-[85px] text-[22px] xl:text-[32px] text-blue-2">
            We see <br />
            <strong className="text-[42px] xl:text-[65px] font-extrabold text-white">
              Creators
            </strong>{' '}
            <br />{' '}
            <span className="text-[42px] xl:text-[65px] text-white">as</span>{' '}
            <strong className="text-[42px] xl:text-[65px] font-extrabold text-white">
              founders
            </strong>
          </h1>

          <h1 className="leading-[55px] xl:leading-[85px] text-[22px] xl:text-[32px] text-blue-2">
            and their <br />
            <strong className="text-[42px] xl:text-[65px] font-extrabold text-white">
              brands
            </strong>{' '}
            <br />{' '}
            <span className="text-[42px] xl:text-[65px] text-white">as</span>{' '}
            <strong className="text-[42px] xl:text-[65px] font-extrabold text-white">
              startups
            </strong>
          </h1>
        </div>

        <div className="flex items-center justify-between">
          <div className="relative w-[75px] xl:w-[270px] h-[75px] xl:h-[270px]">
            <Image
              src="/images/cobogo-community-cube.svg"
              alt="Cobogo Community cube"
              fill
            />
          </div>

          <div className="relative w-[75px] xl:w-[270px] h-[75px] xl:h-[270px]">
            <Image
              src="/images/cobogo-social-cube.svg"
              alt="Cobogo Social cube"
              fill
            />
          </div>

          <div className="relative w-[75px] xl:w-[270px] h-[75px] xl:h-[270px]">
            <Image
              src="/images/cobogo-launchpad-cube.svg"
              alt="Cobogo Launchpad cube"
              fill
            />
          </div>
        </div>

        <div className="flex flex-col xl:flex-row gap-12 xl:gap-0 justify-between">
          <h2 className="leading-[45px] xl:leading-[70px] text-[30px] xl:text-[44px] bg-related-content-text-gradient bg-clip-text text-transparent">
            Scaling up <br /> equity financing <br /> for{' '}
            <strong>Creators</strong>
          </h2>

          <p className="leading-[32px] xl:leading-[40px] text-[20px] xl:text-[26px] max-w-[450px]">
            A fund manager with a technological and productized deal-flow that
            counts with a community of Creators acting as the Creator Economy
            market intelligence.
          </p>
        </div>
      </div>
    </section>
  )
}

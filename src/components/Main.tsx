import Image from 'next/image'

export default function Main() {
  return (
    <section className="flex items-center justify-center w-full py-16 lg:py-32">
      <div className="w-full max-w-[1108px] flex flex-col gap-52">
        <div className="flex justify-between">
          <h1 className="leading-[85px] text-[32px] text-blue-2">
            We see <br />
            <strong className="text-[65px] font-extrabold text-white">
              Creators
            </strong>{' '}
            <br /> <span className="text-[65px] text-white">as</span>{' '}
            <strong className="text-[65px] font-extrabold text-white">
              founders
            </strong>
          </h1>

          <h1 className="leading-[85px] text-[32px] text-blue-2">
            and their <br />
            <strong className="text-[65px] font-extrabold text-white">
              brands
            </strong>{' '}
            <br /> <span className="text-[65px] text-white">as</span>{' '}
            <strong className="text-[65px] font-extrabold text-white">
              startups
            </strong>
          </h1>
        </div>

        <div className="flex items-center justify-between">
          <Image
            src="/images/cobogo-community-cube.svg"
            alt="Cobogo Community cube"
            width={270}
            height={270}
          />

          <Image
            src="/images/cobogo-social-cube.svg"
            alt="Cobogo Social cube"
            width={270}
            height={270}
          />

          <Image
            src="/images/cobogo-launchpad-cube.svg"
            alt="Cobogo Launchpad cube"
            width={270}
            height={270}
          />
        </div>

        <div className="flex justify-between">
          <h2 className="leading-[70px] text-[44px] bg-related-content-text-gradient bg-clip-text text-transparent">
            Scaling up <br /> equity financing <br /> for{' '}
            <strong>Creators</strong>
          </h2>

          <p className="leading-[40px] text-[26px] max-w-[450px]">
            A fund manager with a technological and productized deal-flow that
            counts with a community of Creators acting as the Creator Economy
            market intelligence.
          </p>
        </div>
      </div>
    </section>
  )
}

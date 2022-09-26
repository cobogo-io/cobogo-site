import Image from 'next/image'

interface BackgroundMainProps {
  dark?: boolean
}

export const BackgroundMain = (props: BackgroundMainProps): JSX.Element => {
  return !props.dark ? (
    <>
      <div className="absolute w-screen min-h-screen h-full z-0 flex md:hidden">
        <Image
          src="/images/background-1-mobile.svg"
          objectFit="cover"
          layout="fill"
          alt="Background"
        />
      </div>
      <div className="absolute w-screen min-h-screen h-full z-0 hidden md:flex">
        <Image
          src="/images/background-1.svg"
          objectFit="cover"
          layout="fill"
          alt="Background"
        />
      </div>
    </>
  ) : (
    <>
      <div className="absolute w-screen min-h-screen h-full z-0 flex md:hidden">
        <Image
          src="/images/background-2-mobile.svg"
          objectFit="cover"
          layout="fill"
          alt="Background"
        />
      </div>
      <div className="absolute w-screen min-h-screen h-full z-0 hidden md:flex">
        <Image
          src="/images/background-2.svg"
          objectFit="cover"
          layout="fill"
          alt="Background"
        />
      </div>
    </>
  )
}

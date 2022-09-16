import Image from 'next/image'

export const BackgroundMain = (): JSX.Element => {
  return (
    <div className="absolute w-screen h-screen z-0">
      <Image
        src="/images/background-1.svg"
        objectFit="cover"
        layout="fill"
        alt="background one"
      />
    </div>
  )
}

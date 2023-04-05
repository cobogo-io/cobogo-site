import Image from 'next/image'

import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const { asPath } = useRouter()

  return (
    <div className="flex justify-center items-center w-full bg-gradient-to-b from-black to-black/0 z-30 fixed">
      <div
        className={`w-full max-w-[1110px] flex items-center justify-between h-[76px] gap-2 lg:gap-0 px-7 lg:px-0`}
      >
        <div className="flex items-center gap-5 font-orbitron">
          <Link href="/" className="flex">
            <Image src="/images/logo.png" width={120} height={27} alt="Logo" />
          </Link>

          <div className="hidden lg:flex items-center gap-10 h-[50px] px-8">
            <Link
              href="/community"
              className={`flex items-center gap-3 font-bold relative ${
                asPath === '/launchpad' && 'brightness-75 saturate-0'
              }`}
            >
              {asPath === '/community' && (
                <div className="w-full h-[5px] bg-yellow-community absolute top-[-20px] shadow-[0_10px_40px_0px_rgba(239,231,80,1)]" />
              )}
              <Image
                src="/images/cobogo-community-cube.svg"
                width={35}
                height={35}
                alt="Cobogo Community cube"
              />
              Community
            </Link>

            <Link
              href="https://cobogo.social/"
              className={`flex items-center gap-3 font-bold ${
                (asPath === '/launchpad' || asPath === '/community') &&
                'brightness-75 saturate-0'
              }`}
            >
              <Image
                src="/images/cobogo-social-cube.svg"
                width={35}
                height={35}
                alt="Cobogo Social cube"
              />
              Social
            </Link>

            <Link
              href="/launchpad"
              className={`flex items-center gap-3 font-bold relative ${
                asPath === '/community' && 'brightness-75 saturate-0'
              }`}
            >
              {asPath === '/launchpad' && (
                <div className="w-full h-[5px] bg-pink-launchpad absolute top-[-20px] shadow-[0_10px_40px_0px_rgba(245,174,255,1)]" />
              )}
              <Image
                src="/images/cobogo-launchpad-cube.svg"
                width={35}
                height={35}
                alt="Cobogo Launchpad cube"
              />
              Launchpad
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

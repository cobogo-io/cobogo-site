import Image from 'next/image'

import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const { asPath } = useRouter()

  return (
    <div
      className={`w-full flex items-center justify-between h-[76px] gap-2 lg:gap-0 px-7 lg:px-36 z-30 fixed bg-gradient-to-b from-black to-black/0`}
    >
      <div className="flex items-center gap-5 font-orbitron">
        <Link href="/" className="flex">
          <Image src="/images/logo.png" width={120} height={27} alt="Logo" />
        </Link>

        <div className="hidden lg:flex items-center gap-10 h-[50px] px-8">
          {asPath === '/community' && (
            <div className="w-[150px] h-[5px] bg-yellow-community fixed top-0 left-[315px] shadow-[0_10px_40px_0px_rgba(239,231,80,1)]" />
          )}
          {asPath === '/launchpad' && (
            <div className="w-[155px] h-[5px] bg-pink-launchpad fixed top-0 left-[640px] shadow-[0_10px_40px_0px_rgba(245,174,255,1)]" />
          )}

          <Link
            href="/community"
            className={`flex items-center gap-3 font-bold ${
              asPath === '/launchpad' && 'brightness-75 saturate-0'
            }`}
          >
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
            className={`flex items-center gap-3 font-bold ${
              asPath === '/community' && 'brightness-75 saturate-0'
            }`}
          >
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
  )
}

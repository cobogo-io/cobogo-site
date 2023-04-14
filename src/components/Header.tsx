import { useMotionValueEvent, useScroll } from 'framer-motion'
import Image from 'next/image'

import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Header() {
  const { asPath } = useRouter()

  const [hasGradient, setHasGradient] = useState(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', latest => {
    if (latest > 800) {
      setHasGradient(true)
    } else {
      setHasGradient(false)
    }
  })

  return (
    <div
      className={`flex justify-center items-center w-full ${
        hasGradient && 'bg-gradient-to-b from-black to-black/0'
      } z-30 fixed`}
    >
      <div
        className={`w-full max-w-[1110px] flex items-center justify-between h-[76px] gap-2 lg:gap-0 px-7 lg:px-0`}
      >
        <div className="flex items-center gap-[52px] font-orbitron">
          <Link href="/" className="hidden lg:flex">
            <Image src="/images/logo.png" width={120} height={27} alt="Logo" />
          </Link>

          <Link href="/" className="flex lg:hidden">
            <Image src="/images/logo.png" width={70} height={16} alt="Logo" />
          </Link>

          <div className="hidden lg:flex items-center gap-[52px] h-[50px]">
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
                width={32}
                height={32}
                alt="Cobogo Community cube"
              />
              Community
            </Link>

            <Link
              href="https://cobogo.social/"
              target="_blank"
              className={`flex items-center gap-3 font-bold ${
                (asPath === '/launchpad' || asPath === '/community') &&
                'brightness-75 saturate-0'
              }`}
            >
              <Image
                src="/images/cobogo-social-cube.svg"
                width={32}
                height={32}
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

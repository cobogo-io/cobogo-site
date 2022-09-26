import Image from 'next/image'
import { useState } from 'react'

import { CloseIcon } from './icons/CloseIcon'
import { MenuIcon } from './icons/MenuIcon'

export const HeaderMobile = (): JSX.Element => {
  const [menuOpened, setMenuOpened] = useState(false)

  return !menuOpened ? (
    <div className="fixed w-full flex md:hidden items-center gap-4 p-7 z-50">
      <div onClick={() => setMenuOpened(true)}>
        <MenuIcon />
      </div>
      <Image
        src="/images/cobogo-logo.svg"
        width={88}
        height={20}
        alt="Cobogo logo"
      />
    </div>
  ) : (
    <div className="min-h-screen h-full w-screen fixed flex flex-col md:hidden gap-4 z-50 bg-black-900 overflow-y-auto">
      <div onClick={() => setMenuOpened(false)}>
        <CloseIcon />
      </div>
      <div className="flex flex-col gap-4 px-7 pt-20 pb-24">
        <a className="text-4xl font-bold relative">
          <div className="rounded-full w-8 h-8 absolute bg-blue-100 left-[-55px]" />
          Social
        </a>
        <a className="text-4xl font-bold relative">
          <div className="rounded-full w-8 h-8 absolute bg-pink-100 left-[-55px]" />
          Start
        </a>
        <a className="text-4xl font-bold relative">
          <div className="rounded-full w-8 h-8 absolute bg-green-100 left-[-55px]" />
          Fundraise
        </a>
        <a className="text-4xl font-bold relative">
          <div className="rounded-full w-8 h-8 absolute bg-gray-100 left-[-55px]" />
          Ventures
        </a>
      </div>
      <div className="bg-white-100/5 w-full px-7 py-16 flex flex-col gap-4">
        <a className="text-4xl font-bold">Resources</a>
        <a className="text-4xl font-bold">Telegram</a>
        <a className="text-4xl font-bold">Medium</a>
        <a className="text-4xl font-bold">Github</a>
        <a className="text-4xl font-bold">Docs</a>
      </div>
    </div>
  )
}

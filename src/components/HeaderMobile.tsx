import Image from 'next/image'
import { useState } from 'react'

import { CloseIcon } from './icons/CloseIcon'
import { MenuIcon } from './icons/MenuIcon'

export const HeaderMobile = (): JSX.Element => {
  const [menuOpened, setMenuOpened] = useState(false)

  return !menuOpened ? (
    <div className="fixed w-full flex md:hidden items-center gap-4 p-7 z-50 transition-all bg-gradient-to-b from-black-900 to-black-900/0">
      <div onClick={() => setMenuOpened(true)}>
        <MenuIcon />
      </div>
      {false ? (
        <Image
          src="/images/cobogo-logo.svg"
          width={88}
          height={20}
          alt="Cobogo logo"
        />
      ) : (
        <>
          <div className="w-[8px] h-[8px] bg-blue-100 rounded-full" />
          <div className="w-[8px] h-[8px] bg-pink-200 rounded-full" />
          <div className="w-[8px] h-[8px] bg-green-100 rounded-full" />
          <div className="w-[8px] h-[8px] bg-gray-200 rounded-full" />
        </>
      )}
    </div>
  ) : (
    <div className="min-h-screen h-full w-screen fixed flex flex-col md:hidden gap-4 z-50 bg-black-900 overflow-y-auto transition-all">
      <div onClick={() => setMenuOpened(false)}>
        <CloseIcon />
      </div>
      <div className="flex flex-col gap-4 px-7 pt-20 pb-24">
        <a className="text-4xl font-bold relative">
          <div className="rounded-full w-8 h-8 absolute bg-blue-100 left-[-55px]" />
          Social
        </a>
        <a className="text-4xl font-bold relative">
          <div className="rounded-full w-8 h-8 absolute bg-pink-200 left-[-55px]" />
          Start
        </a>
        <a className="text-4xl font-bold relative">
          <div className="rounded-full w-8 h-8 absolute bg-green-100 left-[-55px]" />
          Fundraise
        </a>
        <a className="text-4xl font-bold relative">
          <div className="rounded-full w-8 h-8 absolute bg-gray-200 left-[-55px]" />
          Ventures
        </a>
      </div>
      <div className="bg-white-100/5 w-full px-7 py-16 flex flex-col gap-4">
        <a
          target="_blank"
          href="https://l.cobogo.io/telegram/"
          className="text-4xl font-bold"
          rel="noreferrer"
        >
          Telegram
        </a>
        <a
          target="_blank"
          href="https://l.cobogo.io/medium/"
          className="text-4xl font-bold"
          rel="noreferrer"
        >
          Medium
        </a>
        <a
          target="_blank"
          href="https://l.cobogo.io/github/"
          className="text-4xl font-bold"
          rel="noreferrer"
        >
          Github
        </a>
        <a
          target="_blank"
          href="https://l.cobogo.io/docs/"
          className="text-4xl font-bold"
          rel="noreferrer"
        >
          Docs
        </a>
      </div>
    </div>
  )
}

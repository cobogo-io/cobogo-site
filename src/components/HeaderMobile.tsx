import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { CloseIcon } from './icons/CloseIcon'
import { DropdownIcon } from './icons/DropdownIcon'
import { MenuIcon } from './icons/MenuIcon'

interface HeaderMobileProps {
  isMainFold: boolean
}

export const HeaderMobile = (props: HeaderMobileProps): JSX.Element => {
  const [menuOpened, setMenuOpened] = useState(false)

  const [languagesDropdownOpened, setLanguagesDropdownOpened] = useState(false)

  const { locale } = useRouter()

  return !menuOpened ? (
    <div className="fixed w-full flex md:hidden items-center justify-between p-7 z-50 bg-header-gradient">
      <div className="flex items-center gap-4">
        <div onClick={() => setMenuOpened(true)}>
          <MenuIcon />
        </div>
        {props.isMainFold ? (
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
      <button
        onClick={() => {
          setLanguagesDropdownOpened(true)
        }}
        className="font-bold flex items-center gap-2"
      >
        {`${locale === 'pt' ? 'Portuguese' : 'English'}`} <DropdownIcon />
      </button>
      {languagesDropdownOpened ? (
        <div className="bg-gradient-to-r from-blue-100 via-green-100 to-pink-200 flex absolute p-1 top-[6px] right-[4px] font-bold">
          <div className="flex flex-col items-start bg-blue-200 p-5 gap-1">
            <button
              onClick={() => setLanguagesDropdownOpened(false)}
              className="flex items-center gap-2 mb-2"
            >
              {`${locale === 'pt' ? 'Portuguese' : 'English'}`} <DropdownIcon />
            </button>
            {locale !== 'en' && <a href="/en">English</a>}
            {locale !== 'pt' && <a href="/pt">Portuguese</a>}
          </div>
        </div>
      ) : null}
    </div>
  ) : (
    <div className="min-h-screen h-full w-screen fixed flex flex-col md:hidden gap-4 z-50 bg-black-900 overflow-y-auto">
      <div onClick={() => setMenuOpened(false)}>
        <CloseIcon />
      </div>
      <div className="flex flex-col gap-4 px-7 pt-20 pb-24">
        <a
          href="#social"
          onClick={() => setMenuOpened(false)}
          className="text-4xl font-bold relative"
        >
          <div className="rounded-full w-8 h-8 absolute bg-blue-100 left-[-55px]" />
          Social
        </a>
        <a
          href="#start"
          onClick={() => setMenuOpened(false)}
          className="text-4xl font-bold relative"
        >
          <div className="rounded-full w-8 h-8 absolute bg-pink-200 left-[-55px]" />
          Start
        </a>
        <a
          href="#fundraise"
          onClick={() => setMenuOpened(false)}
          className="text-4xl font-bold relative"
        >
          <div className="rounded-full w-8 h-8 absolute bg-green-100 left-[-55px]" />
          Fundraise
        </a>
        <a
          href="#ventures"
          onClick={() => setMenuOpened(false)}
          className="text-4xl font-bold relative"
        >
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

import Image from 'next/image'
import { useState } from 'react'

import { DropdownIcon } from './icons/DropdownIcon'

export const Header = (): JSX.Element => {
  const [productsDropdownOpened, setProductsDropdownOpened] = useState(false)
  const [communityDropdownOpened, setCommunityDropdownOpened] = useState(false)

  return (
    <div className="fixed px-12 py-9 hidden md:flex w-full gap-14 z-50 bg-gradient-to-b from-black-900 to-black-900/0">
      <Image
        src="/images/cobogo-logo.svg"
        width={120}
        height={27}
        alt="cobogo logo"
      />
      <div className="flex gap-7 relative">
        <button
          onClick={() => setProductsDropdownOpened(true)}
          className="font-bold flex items-center gap-2"
        >
          Products <DropdownIcon />
        </button>
        {productsDropdownOpened ? (
          <div className="bg-gradient-to-r from-blue-100 via-green-100 to-pink-200 flex absolute p-1 top-[-22px] left-[-24px] font-bold">
            <div className="flex flex-col items-start bg-blue-200 p-5 gap-1">
              <button
                onClick={() => setProductsDropdownOpened(false)}
                className="flex items-center gap-2 mb-2"
              >
                Products <DropdownIcon />
              </button>
              <a href="#social">Social</a>
              <a href="#start">Start</a>
              <a href="#fundraise">Fundraise</a>
              <a href="#ventures">Ventures</a>
            </div>
          </div>
        ) : null}
        <button
          onClick={() => setCommunityDropdownOpened(true)}
          className="font-bold flex items-center gap-2"
        >
          Community <DropdownIcon />
        </button>
        {communityDropdownOpened ? (
          <div className="bg-gradient-to-r from-blue-100 via-green-100 to-pink-200 flex absolute p-1 top-[-22px] left-[187.5px] font-bold">
            <div className="flex flex-col items-start bg-blue-200 p-5 gap-1">
              <button
                onClick={() => setCommunityDropdownOpened(false)}
                className="flex items-center gap-2 mb-2"
              >
                Community <DropdownIcon />
              </button>
              <a
                target="_blank"
                href="https://l.cobogo.io/telegram/"
                rel="noreferrer"
              >
                Telegram
              </a>
              <a
                target="_blank"
                href="https://l.cobogo.io/medium/"
                rel="noreferrer"
              >
                Medium
              </a>
              <a
                target="_blank"
                href="https://l.cobogo.io/github/"
                rel="noreferrer"
              >
                GitHub
              </a>
            </div>
          </div>
        ) : null}
        <a
          target="_blank"
          href="https://l.cobogo.io/docs/"
          className="font-bold"
          rel="noreferrer"
        >
          Docs
        </a>
      </div>
    </div>
  )
}

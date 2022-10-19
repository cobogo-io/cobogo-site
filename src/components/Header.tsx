import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import { useState } from 'react'

import { DropdownIcon } from './icons/DropdownIcon'

export const Header = (): JSX.Element => {
  const [productsDropdownOpened, setProductsDropdownOpened] = useState(false)
  const [communityDropdownOpened, setCommunityDropdownOpened] = useState(false)
  const [languagesDropdownOpened, setLanguagesDropdownOpened] = useState(false)

  const { t } = useTranslation('common')

  const { locale } = useRouter()

  return (
    <div className="fixed px-12 py-9 hidden md:flex w-full gap-14 z-50 bg-header-gradient">
      <Image
        src="/images/cobogo-logo.svg"
        width={120}
        height={27}
        alt="cobogo logo"
      />
      <div className="flex items-center justify-between w-full">
        <div className="flex gap-7 relative items-center">
          <button
            onClick={() => {
              setCommunityDropdownOpened(false)
              setProductsDropdownOpened(true)
            }}
            className="font-bold flex items-center gap-2"
          >
            {t('Products')} <DropdownIcon />
          </button>
          {productsDropdownOpened ? (
            <div className="bg-gradient-to-r from-blue-100 via-green-100 to-pink-200 flex absolute p-1 top-[-24px] left-[-24px] font-bold">
              <div className="flex flex-col items-start bg-blue-200 p-5 gap-1">
                <button
                  onClick={() => setProductsDropdownOpened(false)}
                  className="flex items-center gap-2 mb-2"
                >
                  {t('Products')} <DropdownIcon />
                </button>
                <a href="#social">Social</a>
                <a href="#start">Start</a>
                <a href="#fundraise">Fundraise</a>
                <a href="#ventures">Ventures</a>
              </div>
            </div>
          ) : null}
          <button
            onClick={() => {
              setProductsDropdownOpened(false)
              setCommunityDropdownOpened(true)
            }}
            className="font-bold flex items-center gap-2"
          >
            {t('Community')} <DropdownIcon />
          </button>
          {communityDropdownOpened ? (
            <div
              className={`bg-gradient-to-r from-blue-100 via-green-100 to-pink-200 flex absolute p-1 ${
                locale === 'pt'
                  ? 'top-[-24px] left-[86px]'
                  : 'top-[-24px] left-[84.5px]'
              } font-bold`}
            >
              <div className="flex flex-col items-start bg-blue-200 p-5 gap-1">
                <button
                  onClick={() => setCommunityDropdownOpened(false)}
                  className="flex items-center gap-2 mb-2"
                >
                  {t('Community')} <DropdownIcon />
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
            className="flex font-bold"
            rel="noreferrer"
          >
            Docs
          </a>
        </div>
        <button
          onClick={() => {
            setCommunityDropdownOpened(false)
            setProductsDropdownOpened(false)
            setLanguagesDropdownOpened(true)
          }}
          className="font-bold flex items-center gap-2"
        >
          {`${locale === 'pt' ? 'Portuguese' : 'English'}`} <DropdownIcon />
        </button>
        {languagesDropdownOpened ? (
          <div
            className={`bg-gradient-to-r from-blue-100 via-green-100 to-pink-200 flex absolute p-1 ${
              locale === 'pt'
                ? 'top-[12px] right-[24px]'
                : 'top-[12px] right-[10px]'
            } font-bold`}
          >
            <div className="flex flex-col items-start bg-blue-200 p-5 gap-1">
              <button
                onClick={() => setLanguagesDropdownOpened(false)}
                className="flex items-center gap-2 mb-2"
              >
                {`${locale === 'pt' ? 'Portuguese' : 'English'}`}{' '}
                <DropdownIcon />
              </button>
              {locale !== 'en' && <a href="/en">English</a>}
              {locale !== 'pt' && <a href="/pt">Portuguese</a>}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  )
}

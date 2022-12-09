import { Menu } from '@headlessui/react'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { DropdownIcon } from './icons/DropdownIcon'

export const Header = () => {
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
          <Menu>
            <Menu.Button className="font-bold">
              <p className="flex items-center gap-2">
                {t('Products')} <DropdownIcon />
              </p>
            </Menu.Button>
            <Menu.Items className="bg-gradient-to-r from-blue-100 via-green-100 to-pink-100 flex absolute p-1 top-[-24px] left-[-24px] font-bold">
              <div className="flex flex-col items-start bg-blue-200 p-5 gap-1">
                <Menu.Button className="mb-2">
                  <p className="flex items-center gap-2 ">
                    {t('Products')} <DropdownIcon />
                  </p>
                </Menu.Button>
                <Menu.Item>
                  <a href="#social">Social</a>
                </Menu.Item>
                <Menu.Item>
                  <a href="#start">Start</a>
                </Menu.Item>
                <Menu.Item>
                  <a href="#fundraise">Fundraise</a>
                </Menu.Item>
                <Menu.Item>
                  <a href="#ventures">Ventures</a>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>

          <Menu>
            <Menu.Button className="font-bold">
              <p className="flex items-center gap-2">
                {t('Community')} <DropdownIcon />
              </p>
            </Menu.Button>
            <Menu.Items
              className={`bg-gradient-to-r from-blue-100 via-green-100 to-pink-100 flex absolute p-1 ${
                locale === 'pt'
                  ? 'top-[-24px] left-[86px]'
                  : 'top-[-24px] left-[84.5px]'
              } font-bold`}
            >
              <div className="flex flex-col items-start bg-blue-200 p-5 gap-1">
                <Menu.Button className="mb-2">
                  <p className="flex items-center gap-2">
                    {t('Community')} <DropdownIcon />
                  </p>
                </Menu.Button>
                <Menu.Item>
                  <a
                    target="_blank"
                    href="https://l.cobogo.io/telegram/"
                    rel="noreferrer"
                  >
                    Telegram
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    href="https://l.cobogo.io/medium/"
                    rel="noreferrer"
                  >
                    Medium
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    href="https://l.cobogo.io/twitter/"
                    rel="noreferrer"
                  >
                    Twitter
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    href="https://l.cobogo.io/github/"
                    rel="noreferrer"
                  >
                    GitHub
                  </a>
                </Menu.Item>
                <Menu.Item>
                  <a
                    target="_blank"
                    href="https://discord.gg/rKVJzyNADx"
                    rel="noreferrer"
                  >
                    Discord
                  </a>
                </Menu.Item>
              </div>
            </Menu.Items>
          </Menu>

          <a
            target="_blank"
            href="https://l.cobogo.io/docs/"
            className="flex font-bold"
            rel="noreferrer"
          >
            Docs
          </a>
        </div>

        <Menu>
          <Menu.Button className="font-bold">
            <p className="flex items-center gap-2">
              {`${locale === 'pt' ? 'Portuguese' : 'English'}`} <DropdownIcon />
            </p>
          </Menu.Button>
          <Menu.Items
            className={`bg-gradient-to-r from-blue-100 via-green-100 to-pink-100 flex absolute p-1 ${
              locale === 'pt'
                ? 'top-[12px] right-[24px]'
                : 'top-[12px] right-[10px]'
            } font-bold`}
          >
            <div className="flex flex-col items-start bg-blue-200 p-5 gap-1">
              <Menu.Button className="mb-2">
                <p className="flex items-center gap-2">
                  {`${locale === 'pt' ? 'Portuguese' : 'English'}`}{' '}
                  <DropdownIcon />
                </p>
              </Menu.Button>
              <Menu.Item>
                {locale !== 'en' ? (
                  <a href="/en">English</a>
                ) : (
                  <a href="/pt">Portuguese</a>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    </div>
  )
}

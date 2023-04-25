import { useMotionValueEvent, useScroll } from 'framer-motion'
import { useTranslation } from 'next-i18next'
import Image from 'next/image'

import { Listbox } from '@headlessui/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Header() {
  const { asPath, locale } = useRouter()

  const languages = [
    {
      id:
        asPath === '/'
          ? '/en'
          : asPath.includes('community')
          ? '/en/community'
          : '/en/launchpad',
      name: 'English',
    },
    {
      id:
        asPath === '/'
          ? '/pt'
          : asPath.includes('community')
          ? '/pt/community'
          : '/pt/launchpad',
      name: 'Português',
    },
  ]

  const [selectedLanguage, setSelectedLanguage] = useState(
    languages.find(language => language.id.includes(locale as string)) ??
      languages[0]
  )
  const [hasGradient, setHasGradient] = useState(false)
  const [menuOpened, setMenuOpened] = useState(false)

  const { t } = useTranslation('common')

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
      className={`flex flex-col justify-center items-center w-full ${
        menuOpened ? 'bg-black/95' : hasGradient ? 'bg-black/50' : ''
      } z-30 fixed`}
    >
      {/* <Image
        src="/images/menu-background.svg"
        width={1300}
        height={1021}
        alt="Menu background"
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
      /> */}

      <div
        className={`w-full max-w-[1110px] flex items-center justify-between h-[76px] gap-2 lg:gap-0 px-7 lg:px-0`}
      >
        <div className="flex items-center gap-4 lg:gap-8 font-orbitron">
          <button
            onClick={() => setMenuOpened(previousState => !previousState)}
          >
            <Image
              src="/images/menu-icon.svg"
              width={28}
              height={28}
              alt="Menu icon"
            />
          </button>

          <Link href="/" className="hidden lg:flex">
            <Image src="/images/logo.png" width={120} height={27} alt="Logo" />
          </Link>

          <Link href="/" className="flex lg:hidden">
            <Image src="/images/logo.png" width={70} height={16} alt="Logo" />
          </Link>
        </div>

        <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
          <div className="flex flex-col relative">
            <Listbox.Button className="font-proxima-nova font-bold text-xs flex gap-2 items-center">
              {selectedLanguage.name}

              <Image
                src="/images/listbox-icon.svg"
                width={8}
                height={4}
                alt="Listbox icon"
              />
            </Listbox.Button>

            <Listbox.Options className="absolute top-[20px] right-0 bg-related-content-text-gradient rounded-md p-[2px] font-bold text-xs drop-shadow-md">
              <div className="bg-background rounded-md px-5 py-3 flex flex-col gap-2">
                {languages.map(language => (
                  <a key={language.id} href={language.id}>
                    <Listbox.Option value={language}>
                      {language.name}
                    </Listbox.Option>
                  </a>
                ))}
              </div>
            </Listbox.Options>
          </div>
        </Listbox>
      </div>

      {menuOpened && (
        <div className="w-full h-screen flex flex-col items-center">
          <div className="max-w-[620px] w-full flex flex-col gap-3 overflow-y-auto pt-12 pb-24 scrollbar">
            <Link
              href="/community"
              className={`px-12 py-7 flex items-center justify-between bg-white/10 rounded-xl ${
                asPath !== '/community' &&
                asPath !== '/' &&
                'brightness-50 saturate-0'
              }`}
              onClick={() => setMenuOpened(false)}
            >
              <div className="flex flex-col gap-4 text-start">
                <h1 className="text-2xl font-bold text-yellow-community">
                  {t('Community')}
                </h1>

                <p>{t('A game changer community.')}</p>
              </div>

              <Image
                src="/images/cobogo-community-cube.svg"
                width={120}
                height={120}
                alt="Cobogo Community cube"
              />
            </Link>

            <Link
              href="https://cobogo.social/"
              target="_blank"
              className={`px-12 py-7 flex items-center justify-between bg-white/10 rounded-xl ${
                asPath !== '/' && 'brightness-50 saturate-0'
              }`}
              onClick={() => setMenuOpened(false)}
            >
              <div className="flex flex-col gap-4 text-start">
                <h1 className="text-2xl font-bold text-blue-social">Social</h1>

                <p>{t('Creator as a business platform.')}</p>
              </div>

              <Image
                src="/images/cobogo-social-cube.svg"
                width={125}
                height={125}
                alt="Cobogo Social cube"
              />
            </Link>

            <Link
              href="/launchpad"
              className={`px-12 py-7 flex items-center justify-between bg-white/10 rounded-xl ${
                asPath !== '/launchpad' &&
                asPath !== '/' &&
                'brightness-50 saturate-0'
              }`}
              onClick={() => setMenuOpened(false)}
            >
              <div className="flex flex-col gap-4 text-start">
                <h1 className="text-2xl font-bold text-pink-launchpad">
                  Launchpad
                </h1>

                <p>{t('Getting Creators ready to fly.')}</p>
              </div>

              <Image
                src="/images/cobogo-launchpad-cube.svg"
                width={125}
                height={125}
                alt="Cobogo Launchpad cube"
              />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

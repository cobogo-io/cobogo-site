import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Footer() {
  const { t } = useTranslation('common')

  const { asPath, locale } = useRouter()

  return asPath === '/' ? (
    <section className="flex items-center justify-center w-full pt-20 lg:pt-40 pb-[550px] lg:pb-[870px] relative">
      <img
        src="/images/footer-background.svg"
        alt="Footer background"
        className="absolute bottom-0 hidden lg:flex w-full"
      />

      <img
        src="/images/footer-background-mobile.svg"
        alt="Footer background mobile"
        className="absolute bottom-0 flex lg:hidden w-full"
      />

      <div className="w-full max-w-[1110px] flex flex-col lg:flex-row items-center justify-between relative z-10">
        <div className="flex flex-col items-center gap-16 w-full">
          <div className="font-bold flex items-center gap-4 lg:gap-8">
            <Link
              href={
                locale === 'pt'
                  ? 'https://cobogobr.medium.com/'
                  : 'https://medium.com/@cobogo_io'
              }
              target="_blank"
            >
              <div className="relative w-[30px] lg:w-[65px] h-[30px] lg:h-[65px]">
                <Image src="/images/medium-2-icon.svg" fill alt="Medium icon" />
              </div>
            </Link>

            <Link href="https://www.instagram.com/cobogobr/" target="_blank">
              <div className="relative w-[30px] lg:w-[65px] h-[30px] lg:h-[65px]">
                <Image
                  src="/images/instagram-icon.svg"
                  fill
                  alt="Instagram icon"
                />
              </div>
            </Link>

            <Link
              href={
                locale === 'pt'
                  ? 'https://twitter.com/cobogobr/'
                  : 'https://twitter.com/cobogo_io/'
              }
              target="_blank"
            >
              <div className="relative w-[30px] lg:w-[65px] h-[30px] lg:h-[65px]">
                <Image src="/images/twitter-icon.svg" fill alt="Twitter icon" />
              </div>
            </Link>

            <Link
              href="https://www.linkedin.com/company/cobogopt/"
              target="_blank"
            >
              <div className="relative w-[30px] lg:w-[65px] h-[30px] lg:h-[65px]">
                <Image
                  src="/images/linkedin-icon.svg"
                  fill
                  alt="LinkedIn icon"
                />
              </div>
            </Link>

            <Link href="https://discord.com/invite/4UsDWrfrpW/" target="_blank">
              <div className="relative w-[30px] lg:w-[65px] h-[30px] lg:h-[65px]">
                <Image src="/images/discord-icon.svg" fill alt="Discord icon" />
              </div>
            </Link>
          </div>

          <div className="font-bold flex flex-col lg:flex-row text-sm lg:text-base items-center gap-4 lg:gap-8">
            <Link href="https://l.cobogo.io/code-of-conduct/" target="_blank">
              {t('Code of conduct')}
            </Link>

            <Link href="https://l.cobogo.io/privacy-policy/" target="_blank">
              {t('Privacy policy')}
            </Link>

            <Link href="https://l.cobogo.io/term-of-use/" target="_blank">
              {t('Terms of use')}
            </Link>

            <Link
              href="https://l.cobogo.io/personal-data-deletion"
              target="_blank"
            >
              {t('Data deletion')}
            </Link>
          </div>

          <div className="mt-16">
            <Image src="/images/logo.png" width={110} height={25} alt="Logo" />
          </div>
        </div>
      </div>
    </section>
  ) : (
    <div
      className={`items-center justify-between flex flex-col lg:flex-row w-full lg:h-[70px] col-span-2 px-7 bg-gray-2 py-8 lg:py-0 gap-14 lg:gap-0 relative z-30`}
    >
      <div className="flex items-center justify-center h-full gap-5">
        <Link
          href={
            locale === 'pt'
              ? 'https://cobogobr.medium.com/'
              : 'https://medium.com/@cobogo_io'
          }
          target="_blank"
        >
          <div className="relative w-[30px] lg:w-[32px] h-[30px] lg:h-[32px]">
            <Image src="/images/medium-2-icon.svg" fill alt="Medium icon" />
          </div>
        </Link>

        <Link href="https://www.instagram.com/cobogobr/" target="_blank">
          <div className="relative w-[30px] lg:w-[32px] h-[30px] lg:h-[32px]">
            <Image src="/images/instagram-icon.svg" fill alt="Instagram icon" />
          </div>
        </Link>

        <Link href="https://twitter.com/cobogobr/" target="_blank">
          <div className="relative w-[30px] lg:w-[32px] h-[30px] lg:h-[32px]">
            <Image src="/images/twitter-icon.svg" fill alt="Twitter icon" />
          </div>
        </Link>

        <Link href="https://www.linkedin.com/company/cobogopt/" target="_blank">
          <div className="relative w-[30px] lg:w-[32px] h-[30px] lg:h-[32px]">
            <Image src="/images/linkedin-icon.svg" fill alt="LinkedIn icon" />
          </div>
        </Link>

        <Link href="https://discord.com/invite/4UsDWrfrpW/" target="_blank">
          <div className="relative w-[30px] lg:w-[32px] h-[30px] lg:h-[32px]">
            <Image src="/images/discord-icon.svg" fill alt="Discord icon" />
          </div>
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row items-center justify-center h-full w-full lg:w-auto gap-4 lg:gap-6">
        <a
          href="https://l.cobogo.io/code-of-conduct"
          className="font-bold text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('Code of conduct')}
        </a>

        <a
          href="https://l.cobogo.io/privacy-policy"
          className="font-bold text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('Privacy policy')}
        </a>

        <a
          href="https://l.cobogo.io/term-of-use"
          className="font-bold text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('Terms of use')}
        </a>

        <a
          href="https://l.cobogo.io/personal-data-deletion"
          className="font-bold mb-6 lg:mb-0 text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('Data deletion')}
        </a>

        <a
          href="https://l.cobogo.io/docs"
          className="font-bold mb-6 lg:mb-0 text-sm"
          target="_blank"
          rel="noopener noreferrer"
        >
          Docs
        </a>

        <div className="mt-4 flex lg:hidden">
          <Image src="/images/logo.png" width={90} height={21} alt="Logo" />
        </div>
      </div>
    </div>
  )
}

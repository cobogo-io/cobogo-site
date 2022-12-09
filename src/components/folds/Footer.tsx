import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import { useRouter } from 'next/router'

import { DiscordIcon } from '../icons/DiscordIcon'
import { EmailIcon } from '../icons/EmailIcon'
import { GitHubIcon } from '../icons/GitHubIcon'
import { MediumIcon } from '../icons/MediumIcon'
import { TelegramIcon } from '../icons/TelegramIcon'
import { TwitterIcon } from '../icons/TwitterIcon'
import { CobogosOnLeft } from '../images/CobogosOnLeft'
import { CobogosOnRight } from '../images/CobogosOnRight'

export const Footer = () => {
  const { t } = useTranslation('common')
  const router = useRouter()

  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen h-full">
      <div className="flex flex-col z-40 mb-52 pt-52">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col items-center w-[348px] gap-4">
            <h2 className="text-2xl md:text-3xl text-center">
              {t('Showcase your business with')} <strong>Cobogo Social</strong>
            </h2>

            <a
              target="_blank"
              href="https://app.cobogo.social/"
              className="px-5 py-1 md:py-2 border-2 border-blue-100 font-bold text-base md:text-xl w-max"
              rel="noreferrer"
            >
              {t('Create your profile')}
            </a>
          </div>

          <div className="flex flex-col items-center w-[348px] gap-4">
            <h2 className="text-2xl md:text-3xl text-center">
              {t('Incorporate a business with')} <strong>Cobogo Start</strong>
            </h2>
          </div>

          <div className="flex flex-col items-center w-[348px] gap-4">
            <h2 className="text-2xl md:text-3xl text-center">
              {t('Fund your passion with')} <strong>Cobogo Fundraise</strong>
            </h2>
          </div>
        </div>
      </div>
      <div className="flex justify-between z-40 w-full px-12 pb-12">
        <CobogosOnLeft />

        <div className="flex flex-col items-center gap-11">
          <div className="flex flex-col items-center gap-10 mb-auto">
            <div className="flex gap-11 flex-wrap justify-center mb-auto">
              <a target="_blank" href="mailto:hi@cobogo.io" rel="noreferrer">
                <EmailIcon size={42} />
              </a>

              <a
                target="_blank"
                href="https://l.cobogo.io/telegram"
                rel="noreferrer"
              >
                <TelegramIcon size={42} />
              </a>

              <a
                target="_blank"
                href="https://l.cobogo.io/medium"
                rel="noreferrer"
              >
                <MediumIcon size={42} />
              </a>

              <a
                target="_blank"
                href="https://l.cobogo.io/twitter"
                rel="noreferrer"
              >
                <TwitterIcon size={42} />
              </a>

              <a
                target="_blank"
                href="https://l.cobogo.io/github"
                rel="noreferrer"
              >
                <GitHubIcon size={42} />
              </a>

              <a
                target="_blank"
                href="https://discord.gg/rKVJzyNADx"
                rel="noreferrer"
              >
                <DiscordIcon size={42} />
              </a>
            </div>

            <div className="flex flex-col md:flex-row items-center gap-8 font-bold mb-auto">
              <a target="_blank" href={`${router.locale}/faq`} rel="noreferrer">
                FAQ
              </a>
              <a
                target="_blank"
                href={`${router.locale}/code`}
                rel="noreferrer"
              >
                {t('Code of conduct')}
              </a>
              <a
                target="_blank"
                href={`${router.locale}/privacy`}
                rel="noreferrer"
              >
                {t('Privacy policy')}
              </a>
              <a
                target="_blank"
                href={`${router.locale}/terms`}
                rel="noreferrer"
              >
                {t('Terms of use')}
              </a>
              <a
                target="_blank"
                href="https://l.cobogo.io/personal-data-deletion"
                rel="noreferrer"
              >
                {t('Data deletion')}
              </a>
            </div>
          </div>

          <Image
            src="/images/cobogo-logo.svg"
            width={81}
            height={19}
            alt="Cobogo logo"
          />
        </div>
        <CobogosOnRight />
      </div>
    </div>
  )
}

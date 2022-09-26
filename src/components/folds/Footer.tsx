import Image from 'next/image'

import { BackgroundMain } from '../backgrounds/BackgroundMain'
import { EmailIcon } from '../icons/EmailIcon'
import { GitHubIcon } from '../icons/GitHubIcon'
import { MediumIcon } from '../icons/MediumIcon'
import { TelegramIcon } from '../icons/TelegramIcon'
import { TwitterIcon } from '../icons/TwitterIcon'
import { CobogosOnLeft } from '../images/CobogosOnLeft'
import { CobogosOnRight } from '../images/CobogosOnRight'

export const Footer = (): JSX.Element => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen h-full">
      <div className="flex flex-col z-40 mb-52 pt-52">
        <div className="flex flex-col md:flex-row gap-10">
          <div className="flex flex-col items-center w-[348px] gap-4">
            <h2 className="text-2xl md:text-3xl text-center">
              Showcase your business with <strong>Cobogo Social</strong>
            </h2>
            <button className="px-5 py-1 md:py-2 border-2 border-blue-100 font-bold text-base md:text-xl w-max">
              Create your profile
            </button>
          </div>
          <div className="flex flex-col items-center w-[348px] gap-4">
            <h2 className="text-2xl md:text-3xl text-center">
              Incorporate a business with <strong>Cobogo Start</strong>
            </h2>
            <button className="px-5 py-1 md:py-2 border-2 border-pink-100 font-bold text-base md:text-xl w-max">
              Start your business
            </button>
          </div>
          <div className="flex flex-col items-center w-[348px] gap-4">
            <h2 className="text-2xl md:text-3xl text-center">
              Fund your passion with <strong>Cobogo Fundraise</strong>
            </h2>
            <button className="px-5 py-1 md:py-2 border-2 border-green-100 font-bold text-base md:text-xl w-max">
              Raise funds now
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between z-40 w-full px-12 pb-12">
        <CobogosOnLeft />
        <div className="flex flex-col items-center gap-11">
          <div className="flex gap-11 flex-wrap justify-center">
            <EmailIcon />
            <TelegramIcon />
            <MediumIcon />
            <TwitterIcon />
            <GitHubIcon />
          </div>
          <div className="flex flex-col md:flex-row items-center gap-8 font-bold mb-auto">
            <a>FAQ</a>
            <a>Code of conduct</a>
            <a>Privacy policy</a>
            <a>Terms of use</a>
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
      <BackgroundMain />
    </div>
  )
}

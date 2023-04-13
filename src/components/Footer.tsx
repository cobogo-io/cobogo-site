import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <section className="flex items-center justify-center w-full pt-20 lg:pt-40 pb-[870px] bg-footer-background-mobile lg:bg-footer-background bg-cover">
      <div className="w-full max-w-[1110px] flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col items-center gap-16 w-full">
          <div className="font-bold flex items-center gap-4 lg:gap-8">
            <Link href="https://www.instagram.com/cobogobr/" target="_blank">
              <div className="relative w-[30px] lg:w-[65px] h-[30px] lg:h-[65px]">
                <Image
                  src="/images/instagram-icon.svg"
                  fill
                  alt="Instagram icon"
                />
              </div>
            </Link>

            <Link href="https://twitter.com/cobogobr/" target="_blank">
              <div className="relative w-[30px] lg:w-[65px] h-[30px] lg:h-[65px]">
                <Image src="/images/twitter-icon.svg" fill alt="Twitter icon" />
              </div>
            </Link>

            <Link href="https://github.com/cobogo-io/" target="_blank">
              <div className="relative w-[30px] lg:w-[65px] h-[30px] lg:h-[65px]">
                <Image src="/images/github-icon.svg" fill alt="GitHub icon" />
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

          <div className="font-bold flex flex-col lg:flex-row text-sm lg:text-base items-center gap-4 lg:gap-8 font-orbitron">
            <Link href="https://l.cobogo.io/code-of-conduct/" target="_blank">
              Code of conduct
            </Link>

            <Link href="https://l.cobogo.io/privacy-policy/" target="_blank">
              Privacy policy
            </Link>

            <Link href="https://l.cobogo.io/term-of-use/" target="_blank">
              Terms of use
            </Link>

            <Link
              href="https://l.cobogo.io/personal-data-deletion"
              target="_blank"
            >
              Data deletion
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

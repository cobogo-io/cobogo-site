import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
  return (
    <section className="flex items-center justify-center w-full pt-12 lg:pt-20 pb-96 lg:pb-[870px] min-h-screen bg-footer-background bg-cover">
      <div className="w-full max-w-[1300px] flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col items-center gap-16 w-full">
          <div className="font-bold flex items-center gap-8">
            <Link href="https://www.instagram.com/cobogobr/" target="_blank">
              <Image
                src="/images/instagram-icon.svg"
                width={65}
                height={65}
                alt="Instagram icon"
              />
            </Link>

            <Link href="https://twitter.com/cobogobr/" target="_blank">
              <Image
                src="/images/twitter-icon.svg"
                width={65}
                height={65}
                alt="Twitter icon"
              />
            </Link>

            <Link href="https://github.com/cobogo-io/" target="_blank">
              <Image
                src="/images/github-icon.svg"
                width={65}
                height={65}
                alt="GitHub icon"
              />
            </Link>

            <Link
              href="https://www.linkedin.com/company/cobogopt/"
              target="_blank"
            >
              <Image
                src="/images/linkedin-icon.svg"
                width={65}
                height={65}
                alt="LinkedIn icon"
              />
            </Link>

            <Link href="https://discord.com/invite/4UsDWrfrpW/" target="_blank">
              <Image
                src="/images/discord-icon.svg"
                width={65}
                height={65}
                alt="Discord icon"
              />
            </Link>
          </div>

          <div className="font-bold flex items-center gap-8 font-orbitron">
            <Link href="/code" target="_blank">
              Code of conduct
            </Link>

            <Link href="/privacy" target="_blank">
              Privacy policy
            </Link>

            <Link href="/terms" target="_blank">
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

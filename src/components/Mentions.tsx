import Image from 'next/image'
import Link from 'next/link'

export default function Mentions() {
  return (
    <section className="flex items-center justify-center w-full py-16 lg:py-32 relative">
      <div className="absolute">
        <Image
          src="/images/home-related-content-background.svg"
          width={1052}
          height={1044}
          alt="Home related content background"
        />
      </div>

      <div className="w-full max-w-[1108px] flex flex-col lg:flex-row items-center justify-between z-10 relative">
        <div className="flex flex-col w-full gap-16">
          <div className="flex flex-col gap-10">
            <h2 className="text-[40px] text-transparent bg-clip-text bg-mentions-text-gradient font-bold">
              Mentions
            </h2>

            {/* <p className="text-[22px] leading-[32px] w-full max-w-[660px]">-</p> */}
          </div>

          <div className="flex justify-between">
            <Link
              className="flex flex-col gap-8"
              href="https://cointelegraph.com.br/news/brazilian-startups-focused-on-web3-get-chosen-for-acceleration-program/"
              target="_blank"
            >
              <div className="w-[340px] h-[215px] rounded-[15px] bg-mentions-text-gradient p-[2px] flex items-center justify-center">
                <img
                  src="/images/mention-1-image.avif"
                  className="bg-blue-social w-full h-full rounded-[15px]"
                  alt="Mention 1 image"
                />
              </div>

              <strong className="text-[22px] w-[340px]">
                Startups brasileiras voltadas à Web3 são escolhidas para
                programa de aceleração
              </strong>

              <Image
                src="/images/coin-telegraph-logo.svg"
                width={113}
                height={37}
                alt="Coin Telegraph logo"
              />
            </Link>

            <Link
              className="flex flex-col gap-8"
              href="https://www.moneytimes.com.br/investir-no-proximo-casimiro-ou-felipe-neto-pode-ser-possivel-entenda-sobre-os-influenciadores-digitais-na-web-3-0/"
              target="_blank"
            >
              <div className="w-[340px] h-[215px] rounded-[15px] bg-mentions-text-gradient p-[2px] flex items-center justify-center">
                <img
                  src="/images/mention-2-image.webp"
                  className="bg-blue-social w-full h-full rounded-[15px]"
                  alt="Mention 2 image"
                />
              </div>

              <strong className="text-[22px] w-[340px]">
                Investir no próximo Casimiro ou Felipe Neto pode ser possível;
                entenda sobre os influenciadores digitais na Web 3.0
              </strong>

              <Image
                src="/images/money-times-logo.png"
                width={113}
                height={37}
                alt="Money Times logo"
              />
            </Link>

            <Link
              className="flex flex-col gap-8"
              href="https://www.abcdacomunicacao.com.br/cobogo-lanca-plataforma-de-investimentos-para-creators/"
              target="_blank"
            >
              <div className="w-[340px] h-[215px] rounded-[15px] bg-mentions-text-gradient p-[2px] flex items-center justify-center">
                <img
                  src="/images/mention-3-image.jpeg"
                  className="bg-blue-social w-full h-full rounded-[15px]"
                  alt="Mention 3 image"
                />
              </div>

              <strong className="text-[22px] w-[340px]">
                Cobogo lança plataforma de investimentos para creators
              </strong>

              <Image
                src="/images/abc-da-comunicacao-logo.png"
                width={113}
                height={37}
                alt="ABC da comunicação logo"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

import Link from 'next/link'

export default function Mentions() {
  return (
    <section className="flex items-center justify-center w-full py-16 lg:py-32">
      <div className="w-full max-w-[1108px] flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col w-full gap-16">
          <div className="flex flex-col gap-10">
            <h2 className="text-[40px] text-transparent bg-clip-text bg-mentions-text-gradient font-bold">
              Mentions
            </h2>

            <p className="text-[22px] leading-[32px] w-full max-w-[660px]">-</p>
          </div>

          <div className="flex justify-between">
            <Link
              className="flex flex-col gap-8"
              href="https://www.abcdacomunicacao.com.br/cobogo-lanca-plataforma-de-investimentos-para-creators/"
              target="_blank"
            >
              <div className="w-[340px] h-[215px] rounded-[15px] bg-mentions-text-gradient p-[2px] flex items-center justify-center">
                <img
                  src="/images/mention-example-image.jpeg"
                  className="bg-blue-social w-full h-full rounded-[15px]"
                  alt="Mention example image"
                />
              </div>

              <strong className="text-[22px] w-[340px]">
                Cobogo lança plataforma de investimentos para creators
              </strong>
            </Link>

            <Link
              className="flex flex-col gap-8"
              href="https://www.abcdacomunicacao.com.br/cobogo-lanca-plataforma-de-investimentos-para-creators/"
              target="_blank"
            >
              <div className="w-[340px] h-[215px] rounded-[15px] bg-mentions-text-gradient p-[2px] flex items-center justify-center">
                <img
                  src="/images/mention-example-image.jpeg"
                  className="bg-blue-social w-full h-full rounded-[15px]"
                  alt="Mention example image"
                />
              </div>

              <strong className="text-[22px] w-[340px]">
                Cobogo lança plataforma de investimentos para creators
              </strong>
            </Link>

            <Link
              className="flex flex-col gap-8"
              href="https://www.abcdacomunicacao.com.br/cobogo-lanca-plataforma-de-investimentos-para-creators/"
              target="_blank"
            >
              <div className="w-[340px] h-[215px] rounded-[15px] bg-mentions-text-gradient p-[2px] flex items-center justify-center">
                <img
                  src="/images/mention-example-image.jpeg"
                  className="bg-blue-social w-full h-full rounded-[15px]"
                  alt="Mention example image"
                />
              </div>

              <strong className="text-[22px] w-[340px]">
                Cobogo lança plataforma de investimentos para creators
              </strong>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

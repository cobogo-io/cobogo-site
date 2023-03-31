import Image from 'next/image'
import Link from 'next/link'

interface RelatedContentProps {
  mostRecentArticles: any[]
}

export default function RelatedContent(props: RelatedContentProps) {
  return (
    <section className="flex items-center justify-center w-full py-16 lg:py-32">
      <div className="w-full max-w-[1108px] flex flex-col lg:flex-row items-center justify-between">
        <div className="flex flex-col w-full gap-16">
          <div className="flex w-full justify-between items-start">
            <div className="flex flex-col gap-10">
              <h2 className="text-[40px] text-transparent bg-clip-text bg-related-content-text-gradient">
                Related <strong>content</strong>
              </h2>

              <p className="text-[22px] leading-[32px] w-full max-w-[660px]">
                Learn more about the future of the Creator Economy being built
                by Cobogo, with articles exposing our ideas.
              </p>
            </div>

            <Link
              href="https://cobogobr.medium.com/"
              target="_blank"
              className="flex items-center gap-5 font-bold font-orbitron mt-3"
            >
              <Image
                src="/images/medium-icon.svg"
                width={34}
                height={34}
                alt="Medium icon"
              />
              Go to our Medium
            </Link>
          </div>

          <div className="flex justify-between">
            {props.mostRecentArticles.map(article => (
              <Link
                key={article.title}
                className="flex flex-col gap-8"
                href={article.link}
                target="_blank"
              >
                <div className="w-[340px] h-[215px] rounded-[15px] bg-related-content-text-gradient p-[2px] flex items-center justify-center">
                  <img
                    src={article.thumbnail}
                    className="bg-blue-social w-full h-full rounded-[15px]"
                    alt="Article thumbnail"
                  />
                </div>

                <strong className="text-[22px] w-[340px]">
                  {article.title}
                </strong>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

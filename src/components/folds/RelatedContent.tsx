import Image from 'next/image'

import { BackgroundMain } from '../backgrounds/BackgroundMain'
import { Button } from '../Button'

export const RelatedContent = (): JSX.Element => {
  return (
    <div className="relative flex flex-col justify-center items-center min-h-screen h-full">
      <div className="w-full flex items-center justify-between max-w-[917px] z-40">
        <div className="flex flex-col gap-10 max-w-[447px]">
          <h1 className="text-5xl">
            Related <strong>content</strong>
          </h1>
          <p className="text-xl">
            Learn more about Web3 with some quick and simple articles,
            especially tailored for crypto beginners.
          </p>
          <Button text="Go to our Medium" />
        </div>
        <div className="flex flex-col gap-12">
          <div className="flex flex-col items-center justify-center gap-5">
            <Image
              src="/images/medium-example.svg"
              width={361}
              height={202}
              alt="medium example"
            />
            <strong className="w-[350px] text-xl">
              How to use Blockchain to support your favorite Content Creators
            </strong>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <Image
              src="/images/medium-example.svg"
              width={361}
              height={202}
              alt="medium example"
            />
            <strong className="w-[350px] text-xl">
              How to use Blockchain to support your favorite Content Creators
            </strong>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <Image
              src="/images/medium-example.svg"
              width={361}
              height={202}
              alt="medium example"
            />
            <strong className="w-[350px] text-xl">
              How to use Blockchain to support your favorite Content Creators
            </strong>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <Image
              src="/images/medium-example.svg"
              width={361}
              height={202}
              alt="medium example"
            />
            <strong className="w-[350px] text-xl">
              How to use Blockchain to support your favorite Content Creators
            </strong>
          </div>
          <div className="flex flex-col items-center justify-center gap-5">
            <Image
              src="/images/medium-example.svg"
              width={361}
              height={202}
              alt="medium example"
            />
            <strong className="w-[350px] text-xl">
              How to use Blockchain to support your favorite Content Creators
            </strong>
          </div>
        </div>
      </div>
      <BackgroundMain />
    </div>
  )
}

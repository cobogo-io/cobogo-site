import { BackgroundMain } from '../BackgroundMain'
import { Button } from '../Button'
import { Bullets } from '../images/Bullets'
import { TweetProfile } from '../images/TweetProfile'

export const Main = (): JSX.Element => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-16 z-50">
        <h1 className="text-7xl max-w-[1030px] text-center relative">
          Get <strong>incorporated</strong>, <strong>funded</strong>,{' '}
          <strong>recognized</strong>, and <strong>skyrocket</strong> your{' '}
          <strong>Creator career</strong>
          <div className="w-[470px] h-[19px] bg-white-100/20 absolute bottom-1 left-1/2 -translate-x-1/2" />
        </h1>
        <Button />
      </div>
      <div className="flex items-center gap-4 absolute bottom-14 left-16 z-50">
        <TweetProfile />
        <p className="max-w-[377px] text-lg">
          “I wish there was a way to invest in social media influencers! Idk
          anything about the stock market and I find it boring.”{' '}
          <strong>- @MrBeast</strong>
        </p>
      </div>
      <Bullets />
      <BackgroundMain />
    </div>
  )
}

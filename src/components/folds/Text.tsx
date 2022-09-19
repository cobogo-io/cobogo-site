import { BackgroundMain } from '../backgrounds/BackgroundMain'
import { BulletsTwo } from '../images/BulletsTwo'

export const Text = (): JSX.Element => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
      <div className="flex flex-col items-center gap-24 z-50">
        <h1 className="text-4xl max-w-[1030px] text-center relative">
          <strong>Cobogo allows Creators</strong> to become{' '}
          <strong>real businesses</strong>. We provide{' '}
          <strong>all the best tools</strong> for incorporating a US business,
          raising funds with whom matters the most and maximizing growth.
        </h1>
        <BulletsTwo />
      </div>
      <BackgroundMain />
    </div>
  )
}

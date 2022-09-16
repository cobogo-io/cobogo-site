import { BackgroundSocial } from '../BackgroundSocial'
import { SocialImage } from '../images/SocialImage'

export const Social = (): JSX.Element => {
  return (
    <div className="relative flex flex-col justify-center items-center h-screen">
      <div className="flex max-w-[917px] w-full justify-between items-center z-50">
        <div className="w-[447px] gap-10 flex flex-col">
          <div className="flex flex-col gap-9">
            <h1 className="text-5xl">
              Showcase your business with <strong>Cobogo Social</strong>
            </h1>
            <h2 className="text-xl">
              To investors, brands and your audience by adding your metrics and
              services to your own profile. Get your valuation estimated.
            </h2>
          </div>
          <button className="px-5 py-2 border-2 border-blue-100 font-bold text-xl w-max">
            Create your profile
          </button>
        </div>
        <div className="flex flex-col w-[375px] gap-12">
          <div className="flex flex-col gap-4">
            <strong className="text-2xl">Create your profile</strong>
            <p className="text-xl">
              To be able to your create your profile and prove that you are
              yourself, connect your social media and Cobogo Social will
              automatically generate a profile for you.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <strong className="text-2xl">Enrich your profile</strong>
            <p className="text-xl">
              We recommend connecting as many of your social media and adding as
              much information as you can. It will make it more trustworthy to
              investors and allow our algorithm to assess your valuation.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            <strong className="text-2xl">Share your Profile</strong>
            <p className="text-xl">
              We have optimized the Creator Profile so it can be used as an
              interactive media kit, a business presentation and an excellent
              way to share all of your verified links!
            </p>
          </div>
        </div>
      </div>
      <SocialImage />
      <BackgroundSocial />
    </div>
  )
}

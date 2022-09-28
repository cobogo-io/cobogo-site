import { motion, MotionValue } from 'framer-motion'

interface SocialProps {
  opacity: MotionValue<string>
}

export const Social = (props: SocialProps): JSX.Element => {
  return (
    <motion.div
      style={{ opacity: props.opacity }}
      className="flex flex-col justify-center items-center min-h-screen h-full w-full sticky top-0"
    >
      <div className="flex flex-col justify-start md:justify-center items-center min-h-screen h-full py-24 w-full">
        <div className="flex flex-col md:flex-row md:max-w-[1000px] w-full justify-between items-center z-40 gap-20 relative">
          <div className="md:w-[570px] gap-10 flex flex-col px-7">
            <div className="flex flex-col gap-5 md:gap-9">
              <h1 className="text-2xl md:text-5xl relative">
                Showcase your <br />
                business with <br />
                <strong>Cobogo Social</strong>
                <div className="w-[160px] md:w-[315px] h-3 md:h-[14px] bg-blue-100/30 absolute bottom-1" />
              </h1>
              <h2 className="text-lg md:text-xl max-w-[447px]">
                To investors, brands and your audience by adding your metrics
                and services to your own profile. Get your valuation estimated.
              </h2>
            </div>
            <a
              target="_blank"
              href="https://app.cobogo.social/"
              className="px-5 py-1 md:py-2 border-2 border-blue-100 font-bold text-base md:text-xl w-max text-blue-100 md:text-white-100"
              rel="noreferrer"
            >
              Create your profile
            </a>
          </div>
          <div className="bg-gradient-to-r from-black-900 to-black-900/0 absolute left-0 bottom-0 h-[212px] w-[10px] z-40 flex md:hidden" />
          <div className="bg-gradient-to-l from-black-900 to-black-900/0 absolute right-0 bottom-0 h-[212px] w-[10px] z-40 flex md:hidden" />
          <div className="flex flex-row md:flex-col gap-12 overflow-x-auto w-full md:w-auto">
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px]">
              <strong className="text-lg md:text-2xl">
                Create your profile
              </strong>
              <p className="text-lg md:text-xl">
                To be able to your create your profile and prove that you are
                yourself, connect your social media and Cobogo Social will
                automatically generate a profile for you.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px]">
              <strong className="text-lg md:text-2xl">
                Enrich your profile
              </strong>
              <p className="text-lg md:text-xl">
                We recommend connecting as many of your social media and adding
                as much information as you can. It will make it more trustworthy
                to investors and allow our algorithm to assess your valuation.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-w-[310px] max-w-[375px]">
              <strong className="text-lg md:text-2xl">
                Share your Profile
              </strong>
              <p className="text-lg md:text-xl">
                We have optimized the Creator Profile so it can be used as an
                interactive media kit, a business presentation and an excellent
                way to share all of your verified links!
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* <SocialImage /> */}
      {/* <BackgroundSocial /> */}
    </motion.div>
  )
}

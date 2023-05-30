import Image from 'next/image'
import Footer from './Footer'
import ClipPaths from './ClipPaths'
import Community from './Community'
import Jacuzzi from './Jacuzzi'
import Launchpad from './Launchpad'
import Members from './Members'
import { motion } from 'framer-motion'

export default function CommunityContent() {
  return (
    <section className="flex flex-col w-full relative">
      <img
        src="/images/community-footer-background-mobile.svg"
        alt="Community footer background mobile"
        className="absolute bottom-0 flex lg:hidden w-full"
      />

      <div className="absolute bottom-0 left-0 z-10 hidden lg:flex">
        <Image
          src="/images/community-footer-cubes.svg"
          width={510}
          height={1527}
          alt="Community footer cubes"
        />
      </div>

      <div className="absolute bottom-0 right-0 z-10 hidden lg:flex">
        <Image
          src="/images/community-footer-cubes-2.svg"
          width={459}
          height={871}
          alt="Community footer cubes 2"
        />
      </div>

      <div className="absolute left-0 w-full top-[50px] z-10 hidden lg:flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 1 }}
          className="w-full max-w-[1110px]"
        >
          <Image
            src="/images/community-hero-image.svg"
            width={725}
            height={1312}
            alt="Community hero"
          />
        </motion.div>
      </div>

      <div className="flex items-center justify-center w-full lg:px-0 relative">
        <div className="w-full flex flex-col items-end relative">
          <ClipPaths />

          <Community />

          <Jacuzzi />

          <Launchpad />

          <Members />
        </div>
      </div>

      <Footer />
    </section>
  )
}

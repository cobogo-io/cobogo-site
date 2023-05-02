import { Variants, motion } from 'framer-motion'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

interface ProductiveDealFlowProps {
  selectedProduct: string
  setSelectedProduct: Dispatch<SetStateAction<string>>
}

export default function ProductiveDealFlow(props: ProductiveDealFlowProps) {
  const communityVariants: Variants = {
    initial: {
      backgroundColor: '#FFFFFF1A',
    },
    selected: {
      backgroundColor: '#EFE750',
    },
    exit: {
      backgroundColor: '#FFFFFF1A',
    },
  }

  const socialVariants: Variants = {
    initial: {
      backgroundColor: '#FFFFFF1A',
    },
    selected: {
      backgroundColor: '#00B9E9',
    },
    exit: {
      backgroundColor: '#FFFFFF1A',
    },
  }

  const launchpadVariants: Variants = {
    initial: {
      backgroundColor: '#FFFFFF1A',
    },
    selected: {
      backgroundColor: '#F5AEFF',
    },
    exit: {
      backgroundColor: '#FFFFFF1A',
    },
  }

  return (
    <div className="scale-50 lg:scale-100 absolute top-8 lg:top-16 left-1/2 -translate-x-1/2 z-10">
      <div className="absolute top-0 right-0">
        <Image
          src="/images/home-productive-deal-flow.svg"
          width={186}
          height={193}
          alt="Home productive deal flow"
        />
      </div>

      <div className="h-[220px] w-[260px] flex items-center justify-between clip-path-polygon-[0_0,_100%_45%,_100%_55%,_0_100%] relative">
        <motion.button
          animate={
            props.selectedProduct === 'community' ? 'selected' : 'initial'
          }
          variants={communityVariants}
          exit="exit"
          className="w-[130px] h-full rounded-none"
          onClick={() => props.setSelectedProduct('community')}
        />

        <motion.button
          animate={props.selectedProduct === 'social' ? 'selected' : 'initial'}
          variants={socialVariants}
          exit="exit"
          className="w-[60px] h-full rounded-none"
          onClick={() => props.setSelectedProduct('social')}
        />

        <motion.button
          animate={
            props.selectedProduct === 'launchpad' ? 'selected' : 'initial'
          }
          variants={launchpadVariants}
          exit="exit"
          className="w-[70px] h-full rounded-none"
          onClick={() => props.setSelectedProduct('launchpad')}
        />
      </div>
    </div>
  )
}

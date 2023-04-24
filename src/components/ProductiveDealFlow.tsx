import { AnimatePresence, Variants, motion } from 'framer-motion'
import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

interface ProductiveDealFlowProps {
  selectedProduct: string
  setSelectedProduct: Dispatch<SetStateAction<string>>
}

export default function ProductiveDealFlow(props: ProductiveDealFlowProps) {
  const variants: Variants = {
    initial: (selectedProduct: string) => ({
      backgroundColor:
        selectedProduct === 'community'
          ? '#EFE750'
          : selectedProduct === 'social'
          ? '#00B9E9'
          : '#F5AEFF',
      x:
        selectedProduct === 'community'
          ? 0
          : selectedProduct === 'social'
          ? 0
          : 130,
      width:
        selectedProduct === 'community'
          ? 130
          : selectedProduct === 'social'
          ? 130
          : 60,
    }),
    community: {
      backgroundColor: '#EFE750',
      x: 0,
      width: 130,
    },
    social: {
      backgroundColor: '#00B9E9',
      x: 130,
      width: 60,
    },
    launchpad: {
      backgroundColor: '#F5AEFF',
      x: 190,
      width: 70,
    },
  }

  return (
    <div className="scale-50 lg:scale-100 relative">
      <div className="absolute top-0 right-0">
        <Image
          src="/images/home-productive-deal-flow.svg"
          width={186}
          height={193}
          alt="Home productive deal flow"
        />
      </div>

      <div className="h-[220px] w-[260px] flex items-center justify-between clip-path-polygon-[0_0,_100%_45%,_100%_55%,_0_100%] relative">
        <AnimatePresence mode="wait">
          <motion.button
            key={props.selectedProduct}
            initial="initial"
            variants={variants}
            animate={
              props.selectedProduct === 'community'
                ? 'community'
                : props.selectedProduct === 'social'
                ? 'social'
                : 'launchpad'
            }
            transition={{ duration: 0.1 }}
            custom={props.selectedProduct}
            className="h-full rounded-none absolute flex"
            onMouseEnter={() => props.setSelectedProduct(props.selectedProduct)}
          />
        </AnimatePresence>

        <button
          className="bg-white/10 w-[130px] h-full rounded-none"
          onMouseEnter={() =>
            props.selectedProduct === 'launchpad' &&
            props.setSelectedProduct('community')
          }
        />

        <button
          className="bg-white/10 w-[60px] h-full rounded-none"
          onMouseEnter={() =>
            props.selectedProduct === 'community' &&
            props.setSelectedProduct('social')
          }
        />

        <button
          className="bg-white/10 w-[70px] h-full rounded-none"
          onMouseEnter={() =>
            props.selectedProduct === 'social' &&
            props.setSelectedProduct('launchpad')
          }
        />
      </div>
    </div>
  )
}

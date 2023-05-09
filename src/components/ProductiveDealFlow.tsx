import Image from 'next/image'
import { Dispatch, SetStateAction } from 'react'

interface ProductiveDealFlowProps {
  selectedProduct: string
  setSelectedProduct: Dispatch<SetStateAction<string>>
}

export default function ProductiveDealFlow(props: ProductiveDealFlowProps) {
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
        <button
          className={`w-[130px] h-full rounded-none ${
            props.selectedProduct === 'community'
              ? 'bg-yellow-community'
              : 'bg-white/10'
          } transition-colors`}
          onClick={() => props.setSelectedProduct('community')}
        />

        <button
          className={`w-[60px] h-full rounded-none ${
            props.selectedProduct === 'social'
              ? 'bg-blue-social'
              : 'bg-white/10'
          } transition-colors`}
          onClick={() => props.setSelectedProduct('social')}
        />

        <button
          className={`w-[70px] h-full rounded-none ${
            props.selectedProduct === 'launchpad'
              ? 'bg-pink-launchpad'
              : 'bg-white/10'
          } transition-colors`}
          onClick={() => props.setSelectedProduct('launchpad')}
        />
      </div>
    </div>
  )
}

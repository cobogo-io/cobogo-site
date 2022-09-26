import Image from 'next/image'

import { DropdownIcon } from './icons/DropdownIcon'

export const Header = (): JSX.Element => {
  return (
    <div className="fixed px-12 py-9 hidden md:flex w-full gap-14 z-50">
      <Image
        src="/images/cobogo-logo.svg"
        width={120}
        height={27}
        alt="cobogo logo"
      />
      <div className="flex gap-7">
        <button className="font-bold flex items-center gap-2">
          Products <DropdownIcon />
        </button>
        <button className="font-bold">Resources</button>
        <button className="font-bold">Community</button>
        <button className="font-bold">Docs</button>
      </div>
    </div>
  )
}

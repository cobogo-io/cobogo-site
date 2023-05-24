import { useTranslation } from 'next-i18next'
import Image from 'next/image'
import Link from 'next/link'

interface ProfileProps {
  imageSrc: string
  name: string
  position: string
  socials?: {
    href: string
    icon: JSX.Element
  }[]
  titleForDescription: string
  description: string
}

export default function Profile(props: ProfileProps) {
  const { t } = useTranslation('common')

  return (
    <div className="flex flex-col gap-6">
      <div className="w-[230px] h-[198px] rounded-[15px] bg-mentions-text-gradient flex items-center justify-center relative">
        <div className="absolute top-4 right-3 z-20 flex flex-col items-center gap-2">
          {props.socials?.map(social => (
            <Link
              key={social.href}
              href={social.href}
              target="_blank"
              className="w-[25px] h-[25px]"
            >
              {social.icon}
            </Link>
          ))}
        </div>

        <Image
          src={props.imageSrc}
          fill
          alt="Profile image"
          className="rounded-[15px] overflow-hidden p-[2px] object-cover"
        />
      </div>

      <div className="flex flex-col gap-2">
        <strong className="text-[22px] w-[230px]">{props.name}</strong>

        <p className="text-[22px] w-[230px] text-gray-4">{props.position}</p>

        <p className="w-[230px] text-gray-4">{t(props.titleForDescription)}</p>

        <p className="w-[230px] text-gray-4">{t(props.description)}</p>
      </div>
    </div>
  )
}

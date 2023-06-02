import { useTranslation } from 'next-i18next'
import Image from 'next/image'

interface TestimonialProps {
  text: string
  imgSrc: string
  name: string
}

export default function Testimonial(props: TestimonialProps) {
  const { t } = useTranslation()

  return (
    <div className="flex flex-col w-full max-w-[370px] gap-4">
      <p className="text-lg lg:text-xl">{t(props.text)}</p>

      <div className="flex items-center gap-4">
        <Image
          src={props.imgSrc}
          width={35}
          height={35}
          alt="Profile image"
          className="rounded-md"
        />

        <h2 className="font-bold">{props.name}</h2>
      </div>
    </div>
  )
}
